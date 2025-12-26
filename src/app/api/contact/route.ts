import { NextRequest, NextResponse } from 'next/server';

// Mock contact messages storage
let contactMessages: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Create new contact message
    const newMessage = {
      id: contactMessages.length + 1,
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      company: body.company || '',
      subject: body.subject || '',
      message: body.message,
      timestamp: new Date().toISOString(),
      status: 'unread',
      priority: body.priority || 'normal'
    };
    
    contactMessages.push(newMessage);
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to customer
    
    // Simulate sending email notification
    console.log(`New contact message from ${body.name} (${body.email}): ${body.message}`);
    
    return NextResponse.json({
      success: true,
      data: {
        id: newMessage.id,
        message: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.',
        timestamp: newMessage.timestamp
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    let filteredMessages = [...contactMessages];
    
    // Filter by status
    if (status) {
      filteredMessages = filteredMessages.filter(message => 
        message.status === status
      );
    }
    
    // Sort by timestamp (newest first)
    filteredMessages.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedMessages = filteredMessages.slice(startIndex, endIndex);
    
    return NextResponse.json({
      success: true,
      data: {
        messages: paginatedMessages,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredMessages.length / limit),
          totalMessages: filteredMessages.length,
          hasNextPage: endIndex < filteredMessages.length,
          hasPreviousPage: page > 1
        }
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
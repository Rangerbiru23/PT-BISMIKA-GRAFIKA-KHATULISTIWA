import { NextRequest, NextResponse } from 'next/server';

// Mock product data
const products = [
  {
    id: 1,
    name: "Pulpen Pilot V5",
    category: "Alat Tulis",
    price: 15000,
    stock: 100,
    description: "Pulpen berkualitas tinggi dengan tinta yang halus dan awet",
    image: "/api/placeholder/200/200",
    brand: "Pilot",
    color: "Hitam",
    unit: "pcs"
  },
  {
    id: 2,
    name: "Notebook B5 100 Lembar",
    category: "Kertas & File",
    price: 25000,
    stock: 50,
    description: "Notebook berkualitas dengan kertas tebal dan tidak mudah sobek",
    image: "/api/placeholder/200/200",
    brand: "Paperline",
    color: "Putih",
    unit: "pcs"
  },
  {
    id: 3,
    name: "Stapler Joyko HD-10N",
    category: "Alat Tulis Kantor",
    price: 35000,
    stock: 30,
    description: "Stapler heavy duty untuk kebutuhan kantor",
    image: "/api/placeholder/200/200",
    brand: "Joyko",
    color: "Hitam",
    unit: "pcs"
  },
  {
    id: 4,
    name: "Kertas HVS A4 80gsm",
    category: "Kertas & File",
    price: 45000,
    stock: 200,
    description: "Kertas HVS berkualitas tinggi untuk printer dan fotokopi",
    image: "/api/placeholder/200/200",
    brand: "Paperline",
    color: "Putih",
    unit: "rim"
  },
  {
    id: 5,
    name: "Spidol Whiteboard",
    category: "Alat Tulis Kantor",
    price: 12000,
    stock: 75,
    description: "Spidol whiteboard dengan tinta yang mudah dihapus",
    image: "/api/placeholder/200/200",
    brand: "Standard",
    color: "Hitam",
    unit: "pcs"
  },
  {
    id: 6,
    name: "Penggaris 30cm",
    category: "Alat Tulis",
    price: 8000,
    stock: 150,
    description: "Penggaris plastik yang jelas dan tahan lama",
    image: "/api/placeholder/200/200",
    brand: "Faber-Castell",
    color: "Bening",
    unit: "pcs"
  },
  {
    id: 7,
    name: "Klip Kertas No. 10",
    category: "Kertas & File",
    price: 15000,
    stock: 300,
    description: "Klip kertas untuk mengorganisir dokumen",
    image: "/api/placeholder/200/200",
    brand: "Joyko",
    color: "Assorted",
    unit: "box"
  },
  {
    id: 8,
    name: "Tinta Printer Canon PG-810",
    category: "Printer & Tinta",
    price: 180000,
    stock: 25,
    description: "Tinta printer original Canon dengan kualitas terbaik",
    image: "/api/placeholder/200/200",
    brand: "Canon",
    color: "Hitam",
    unit: "pcs"
  },
  {
    id: 9,
    name: "Map Plastik Kancing",
    category: "Kertas & File",
    price: 5000,
    stock: 500,
    description: "Map plastik untuk menyimpan dokumen penting",
    image: "/api/placeholder/200/200",
    brand: "Sinar Dunia",
    color: "Assorted",
    unit: "pcs"
  },
  {
    id: 10,
    name: "Correction Tape",
    category: "Alat Tulis",
    price: 10000,
    stock: 80,
    description: "Correction tape untuk memperbaiki kesalahan tulisan",
    image: "/api/placeholder/200/200",
    brand: "Joyko",
    color: "Putih",
    unit: "pcs"
  },
  {
    id: 11,
    name: "Penghapus Pensil",
    category: "Alat Tulis",
    price: 3000,
    stock: 200,
    description: "Penghapus yang tidak meninggalkan noda",
    image: "/api/placeholder/200/200",
    brand: "Faber-Castell",
    color: "Putih",
    unit: "pcs"
  },
  {
    id: 12,
    name: "Gunting Kertas",
    category: "Alat Tulis Kantor",
    price: 12000,
    stock: 60,
    description: "Gunting tajam dan nyaman digunakan",
    image: "/api/placeholder/200/200",
    brand: "Kenko",
    color: "Silver",
    unit: "pcs"
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    let filteredProducts = [...products];
    
    // Filter by category
    if (category && category !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    
    // Filter by search term
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Get unique categories
    const categories = [...new Set(products.map(product => product.category))];
    
    return NextResponse.json({
      success: true,
      data: {
        products: paginatedProducts,
        categories,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredProducts.length / limit),
          totalProducts: filteredProducts.length,
          hasNextPage: endIndex < filteredProducts.length,
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.category || !body.price) {
      return NextResponse.json(
        { success: false, error: 'Name, category, and price are required' },
        { status: 400 }
      );
    }
    
    // Create new product
    const newProduct = {
      id: products.length + 1,
      name: body.name,
      category: body.category,
      price: body.price,
      stock: body.stock || 0,
      description: body.description || '',
      image: body.image || '/api/placeholder/200/200',
      brand: body.brand || '',
      color: body.color || '',
      unit: body.unit || 'pcs'
    };
    
    products.push(newProduct);
    
    return NextResponse.json({
      success: true,
      data: newProduct,
      message: 'Product created successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
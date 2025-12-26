'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Package,
  Truck,
  Users,
  Star,
  ShoppingCart,
  Search,
  Menu,
  X
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const productCategories = [
    { name: 'Alat Tulis Kantor', icon: '✏️', count: 150 },
    { name: 'Kertas & File', icon: '📄', count: 89 },
    { name: 'Peralatan Kantor', icon: '🖊️', count: 67 },
    { name: 'Komputer & Aksesoris', icon: '💻', count: 45 },
    { name: 'Penghancur Kertas', icon: '🗑️', count: 23 },
    { name: 'Printer & Tinta', icon: '🖨️', count: 34 }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: 'Pengiriman Cepat',
      description: 'Pengiriman produk ke seluruh Kota Pontianak dan sekitarnya'
    },
    {
      icon: <Package className="w-8 h-8 text-green-600" />,
      title: 'Produk Lengkap',
      description: 'Berbagai macam alat tulis dan perlengkapan kantor modern'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Layanan Profesional',
      description: 'Tim berpengalaman siap membantu kebutuhan Anda'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
      title: 'Kualitas Terjamin',
      description: 'Produk berkualitas tinggi dengan harga kompetitif'
    }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      company: 'CV. Mandiri Jaya',
      text: 'Pelayanan sangat memuaskan, produk lengkap dan pengiriman tepat waktu.',
      rating: 5
    },
    {
      name: 'Siti Nurhaliza',
      company: 'PT. Karya Sejahtera',
      text: 'Harga kompetitif dan kualitas produk terjamin. Recommended supplier!',
      rating: 5
    },
    {
      name: 'Ahmad Fauzi',
      company: 'Kantor Notaris & PPAT',
      text: 'PT Bismika Grafika Khatulistiwa menjadi mitra terpercaya untuk kebutuhan kantor kami.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="PT BISMIKA GRAFIKA KHATULISTIWA" className="h-10 w-auto mr-3" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">PT BISMIKA GRAFIKA KHATULISTIWA</h1>
                <p className="text-xs text-gray-600">Perdagangan Eceran Alat ATK Modern</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 transition">Beranda</a>
              <a href="#produk" className="text-gray-700 hover:text-blue-600 transition">Produk</a>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">Tentang</Link>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 transition">Kontak</a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Belanja Sekarang
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#produk" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Produk</a>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</Link>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Belanja Sekarang
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">
                🏢 Supplier Terpercaya di Pontianak
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Solusi Lengkap <span className="text-blue-600">Alat Tulis Kantor</span> Modern
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                PT BISMIKA GRAFIKA KHATULISTIWA menyediakan berbagai macam alat tulis dan perlengkapan kantor modern dengan kualitas terjamin dan harga kompetitif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Lihat Katalog Produk
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Jenis Produk</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-3xl mb-2">📝</div>
                    <div className="text-sm font-medium">Notebook</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-3xl mb-2">✏️</div>
                    <div className="text-sm font-medium">Pensil</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-3xl mb-2">📎</div>
                    <div className="text-sm font-medium">Klip</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-3xl mb-2">🖊️</div>
                    <div className="text-sm font-medium">Pulpen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Cari produk yang Anda butuhkan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-full">
              Cari
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="produk" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
            <p className="text-xl text-gray-600">Berbagai macam alat tulis dan perlengkapan kantor</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.count} produk tersedia</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Lihat Produk
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami</h2>
            <p className="text-xl text-gray-600">Keunggulan yang membuat kami berbeda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-blue-600">PT BISMIKA GRAFIKA KHATULISTIWA</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Kami adalah perusahaan perdagangan eceran alat ATK modern yang berkomitmen untuk menyediakan produk berkualitas tinggi dengan harga kompetitif. Berlokasi di Pontianak, Kalimantan Barat, kami melayani kebutuhan alat tulis dan perlengkapan kantor untuk berbagai kalangan.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan pengalaman lebih dari 5 tahun, kami telah menjadi mitra terpercaya untuk berbagai perusahaan, kantor, dan institusi pendidikan di Kota Pontianak dan sekitarnya.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>Produk Original</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>Garansi Resmi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>Harga Bersaing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span>Pelayanan Cepat</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
              <img src="/logo.png" alt="PT BISMIKA GRAFIKA KHATULISTIWA" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa Kata Pelanggan</h2>
            <p className="text-xl text-gray-600">Testimoni dari pelanggan setia kami</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl opacity-90">Siap membantu kebutuhan alat tulis kantor Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Alamat</div>
                    <div className="opacity-90">Jl. Sungai Raya Dalam, Komplek Ruko Villa Gading Mansion 2, Kota Pontianak, Provinsi Kalimantan Barat</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Telepon</div>
                    <div className="opacity-90">0823-8246-6247</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="opacity-90">bismikakhatulistiwa@outlook.co.id</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Jam Operasional</div>
                    <div className="opacity-90">Senin - Sabtu: 08:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Kirim Pesan</h3>
              <div className="space-y-4">
                <Input placeholder="Nama Lengkap" className="bg-white/10 border-white/20 text-white placeholder-white/70" />
                <Input placeholder="Email" type="email" className="bg-white/10 border-white/20 text-white placeholder-white/70" />
                <textarea 
                  placeholder="Pesan Anda" 
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 h-32 resize-none"
                />
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Kirim Pesan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="PT BISMIKA GRAFIKA KHATULISTIWA" className="h-8 w-auto mr-2" />
                <h3 className="text-lg font-bold">PT BISMIKA GRAFIKA KHATULISTIWA</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Perdagangan Eceran Alat ATK Modern Terpercaya di Pontianak
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#beranda" className="hover:text-white transition">Beranda</a></li>
                <li><a href="#produk" className="hover:text-white transition">Produk</a></li>
                <li><Link href="/about" className="hover:text-white transition">Tentang Kami</Link></li>
                <li><a href="#kontak" className="hover:text-white transition">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Alat Tulis Kantor</li>
                <li>Peralatan Kantor</li>
                <li>Kertas & File</li>
                <li>Komputer & Aksesoris</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PT BISMIKA GRAFIKA KHATULISTIWA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
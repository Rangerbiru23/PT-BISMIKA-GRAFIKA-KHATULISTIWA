'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Building, Users, Award, Target, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const milestones = [
    { year: 2019, title: "Berdiri", description: "PT BISMIKA GRAFIKA KHATULISTIWA resmi didirikan" },
    { year: 2020, title: "Ekspansi Produk", description: "Menambah berbagai macam alat tulis modern" },
    { year: 2021, title: "Digitalisasi", description: "Meluncurkan website untuk memudahkan pemesanan" },
    { year: 2022, title: "Partnership", description: "Bekerja sama dengan supplier terkemuka" },
    { year: 2023, title: "Growth", description: "Melayani 1000+ pelanggan setia" },
    { year: 2024, title: "Innovation", description: "Terus berinovasi dalam layanan dan produk" }
  ];

  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Integritas",
      description: "Kami berkomitmen untuk jujur dan transparan dalam setiap transaksi"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Kepuasan Pelanggan",
      description: "Kepuasan pelanggan adalah prioritas utama kami"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Kualitas",
      description: "Menyediakan produk berkualitas tinggi dengan harga kompetitif"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Profesionalisme",
      description: "Layanan profesional dan responsif untuk setiap kebutuhan"
    }
  ];

  const team = [
    {
      name: "Direktur Utama",
      role: "Leadership & Strategy",
      description: "Memimpin visi dan misi perusahaan"
    },
    {
      name: "Manajer Operasional",
      role: "Operations Management",
      description: "Mengelola operasional harian dan logistik"
    },
    {
      name: "Manajer Penjualan",
      role: "Sales & Marketing",
      description: "Mengembangkan hubungan dengan pelanggan"
    },
    {
      name: "Tim Customer Service",
      role: "Customer Support",
      description: "Melayani kebutuhan pelanggan dengan ramah"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="PT BISMIKA GRAFIKA KHATULISTIWA" className="h-8 w-auto mr-3" />
                <div>
                  <h1 className="text-lg font-bold text-blue-900">PT BISMIKA GRAFIKA KHATULISTIWA</h1>
                  <p className="text-xs text-gray-600">Tentang Kami</p>
                </div>
              </Link>
            </div>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Building className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang <span className="text-yellow-300">PT BISMIKA GRAFIKA KHATULISTIWA</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Mitra terpercaya untuk kebutuhan alat tulis dan perlengkapan kantor modern di Pontianak dan sekitarnya
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">5+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">1000+</div>
              <div className="text-sm">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-sm">Jenis Produk</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PT BISMIKA GRAFIKA KHATULISTIWA didirikan pada tahun 2019 dengan visi untuk menjadi 
                penyedia alat tulis dan perlengkapan kantor terkemuka di Kalimantan Barat. Berawal dari 
                toko kecil, kami telah berkembang menjadi distributor terpercaya yang melayani berbagai 
                kalangan, dari perusahaan besar hingga institusi pendidikan.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami memahami bahwa alat tulis dan perlengkapan kantor adalah fondasi dari produktivitas. 
                Oleh karena itu, kami berkomitmen untuk menyediakan produk berkualitas tinggi dengan harga 
                yang kompetitif, didukung oleh layanan pelanggan yang prima.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hingga hari ini, kami terus berinovasi dan mengembangkan jangkauan layanan kami untuk 
                memenuhi kebutuhan yang terus berubah di era digital.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
              <img src="/logo.png" alt="PT BISMIKA GRAFIKA KHATULISTIWA" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
            <p className="text-xl text-gray-600">Arah dan tujuan kami untuk masa depan</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Target className="w-6 h-6 mr-2" />
                  Visi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi penyedia alat tulis dan perlengkapan kantor terdepan di Indonesia yang 
                  dikenal dengan kualitas produk, layanan prima, dan inovasi berkelanjutan.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-green-600">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Award className="w-6 h-6 mr-2" />
                  Misi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Menyediakan produk berkualitas dengan harga kompetitif</li>
                  <li>• Memberikan layanan pelanggan yang memuaskan</li>
                  <li>• Terus berinovasi dalam produk dan layanan</li>
                  <li>• Membangun hubungan jangka panjang dengan pelanggan</li>
                  <li>• Mendukung produktivitas dan kesuksesan pelanggan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Inti</h2>
            <p className="text-xl text-gray-600">Prinsip yang memandu setiap tindakan kami</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
            <p className="text-xl text-gray-600">Milestone penting dalam sejarah perusahaan</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 px-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge className="w-fit mb-2">{milestone.year}</Badge>
                      <CardTitle className="text-lg">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600">Profesional yang berdedikasi untuk melayani Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl opacity-90">Kami siap membantu kebutuhan alat tulis kantor Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Alamat</h3>
                <p className="text-sm opacity-90">
                  Jl. Sungai Raya Dalam, Komplek Ruko Villa Gading Mansion 2
                </p>
                <p className="text-sm opacity-90">Kota Pontianak, Kalimantan Barat</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-sm opacity-90">0823-8246-6247</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm opacity-90">bismikakhatulistiwa@outlook.co.id</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Jam Operasional</h3>
                <p className="text-sm opacity-90">Senin - Sabtu</p>
                <p className="text-sm opacity-90">08:00 - 17:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo.png" alt="PT BISMIKA GRAFIKA KHATULISTIWA" className="h-8 w-auto mr-2" />
            <h3 className="text-lg font-bold">PT BISMIKA GRAFIKA KHATULISTIWA</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Perdagangan Eceran Alat ATK Modern Terpercaya di Pontianak
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition">Beranda</Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition">Tentang Kami</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link>
          </div>
          <p className="text-gray-400 text-xs mt-4">
            &copy; 2024 PT BISMIKA GRAFIKA KHATULISTIWA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
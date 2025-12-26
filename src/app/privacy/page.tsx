'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
                  <p className="text-xs text-gray-600">Privacy Policy</p>
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Kebijakan Privasi PT BISMIKA GRAFIKA KHATULISTIWA
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di PT BISMIKA GRAFIKA KHATULISTIWA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan 
                website dan layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan website kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2 text-green-600" />
                Pengumpulan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-900">Informasi yang Kami Kumpulkan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Data Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                <li><strong>Data Akun:</strong> Username, password (terenkripsi), riwayat pembelian</li>
                <li><strong>Data Transaksi:</strong> Informasi pesanan, metode pembayaran, riwayat pembelian</li>
                <li><strong>Data Penggunaan:</strong> IP address, browser, perangkat, waktu akses, halaman yang dikunjungi</li>
                <li><strong>Data Cookies:</strong> Informasi untuk meningkatkan pengalaman pengguna</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mt-4">Cara Kami Mengumpulkan Data:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Saat Anda mendaftar akun</li>
                <li>Saat Anda melakukan pembelian</li>
                <li>Saat Anda menghubungi kami</li>
                <li>Melalui cookies dan teknologi pelacakan</li>
                <li>Melalui formulir kontak dan newsletter</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-purple-600" />
                Penggunaan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan data pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Layanan Pelanggan:</strong> Merespons pertanyaan dan keluhan Anda</li>
                <li><strong>Proses Pesanan:</strong> Memproses dan mengirim pesanan Anda</li>
                <li><strong>Personalisasi:</strong> Menyediakan pengalaman berbelanja yang dipersonalisasi</li>
                <li><strong>Marketing:</strong> Mengirim informasi produk dan promosi (dengan persetujuan)</li>
                <li><strong>Analisis:</strong> Menganalisis penggunaan website untuk meningkatkan layanan</li>
                <li><strong>Keamanan:</strong> Melindungi dari aktivitas penipuan dan penyalahgunaan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-red-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Enkripsi:</strong> Data sensitif dienkripsi menggunakan teknologi SSL</li>
                <li><strong>Akses Terbatas:</strong> Hanya personel berwenang yang dapat mengakses data</li>
                <li><strong>Keamanan Server:</strong> Server yang aman dan terlindungi</li>
                <li><strong>Update Regular:</strong> Sistem keamanan yang selalu diperbarui</li>
                <li><strong>Backup Data:</strong> Backup data yang aman dan teratur</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-yellow-800">
                  <strong>Perhatian:</strong> Meskipun kami telah menerapkan langkah-langkah keamanan yang ketat, 
                  tidak ada sistem yang 100% aman. Kami berusaha untuk melindungi data Anda sebaik mungkin.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan 
                hak privasi Anda, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">
                  <strong>PT BISMIKA GRAFIKA KHATULISTIWA</strong>
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> bismikakhatulistiwa@outlook.co.id
                </p>
                <p className="text-gray-700">
                  <strong>Telepon:</strong> 0823-8246-6247
                </p>
                <p className="text-gray-700">
                  <strong>Alamat:</strong> Jl. Sungai Raya Dalam, Komplek Ruko Villa Gading Mansion 2, 
                  Kota Pontianak, Provinsi Kalimantan Barat
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
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
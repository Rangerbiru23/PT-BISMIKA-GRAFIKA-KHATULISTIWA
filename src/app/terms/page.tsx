'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function TermsConditions() {
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
                  <p className="text-xs text-gray-600">Terms & Conditions</p>
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
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">
            Syarat dan Ketentuan Penggunaan Website PT BISMIKA GRAFIKA KHATULISTIWA
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
                <Gavel className="w-5 h-5 mr-2 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di website PT BISMIKA GRAFIKA KHATULISTIWA. Syarat dan Ketentuan ini 
                mengatur penggunaan website dan layanan yang kami sediakan. Dengan mengakses atau 
                menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                harap jangan menggunakan website kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-green-600" />
                Definisi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-gray-700">
                <li><strong>"Perusahaan"</strong> merujuk pada PT BISMIKA GRAFIKA KHATULISTIWA</li>
                <li><strong>"Website"</strong> merujuk pada situs web bismikagrafika.com</li>
                <li><strong>"Pengguna"</strong> merujuk pada setiap orang yang mengakses atau menggunakan website kami</li>
                <li><strong>"Produk"</strong> merujuk pada alat tulis kantor dan perlengkapan yang kami jual</li>
                <li><strong>"Layanan"</strong> merujuk pada layanan penjualan dan pengiriman produk</li>
                <li><strong>"Pesanan"</strong> merujuk pada permintaan pembelian produk oleh Pengguna</li>
              </ul>
            </CardContent>
          </Card>

          {/* Use of Website */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
                Penggunaan Website
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-900">Kewajiban Pengguna:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat dan lengkap saat pendaftaran</li>
                <li>Menjaga kerahasiaan informasi akun Anda</li>
                <li>Tidak menggunakan website untuk kegiatan ilegal atau tidak sah</li>
                <li>Tidak mengganggu atau merusak fungsi website</li>
                <li>Tingkah laku yang sopan dan menghormati pengguna lain</li>
                <li>Mematuhi semua peraturan perundang-undangan yang berlaku</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mt-4">Larangan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menggunakan website untuk penipuan atau penyalahgunaan</li>
                <li>Mengunggah konten yang melanggar hak cipta atau hak kekayaan intelektual</li>
                <li>Mengirimkan virus, malware, atau kode berbahaya</li>
                <li>Melakukan spam atau pengiriman pesan tidak diinginkan</li>
                <li>Mencoba mendapatkan akses tidak sah ke sistem kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                Produk dan Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-900">Informasi Produk:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kami berusaha menyajikan informasi produk yang akurat</li>
                <li>Harga dan ketersediaan produk dapat berubah sewaktu-waktu</li>
                <li>Kami berhak membatasi jumlah pembelian per produk</li>
                <li>Warna produk mungkin sedikit berbeda karena faktor layar</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mt-4">Pemesanan:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pesanan hanya akan diproses setelah pembayaran dikonfirmasi</li>
                <li>Kami berhak menolak pesanan tanpa pemberitahuan sebelumnya</li>
                <li>Pesanan yang sudah dikonfirmasi tidak dapat dibatalkan</li>
                <li>Pengguna bertanggung jawab atas keakuratan informasi pengiriman</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-900">Metode Pembayaran:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Transfer Bank (BCA, Mandiri, BNI, BRI)</li>
                <li>E-Wallet (GoPay, OVO, DANA)</li>
                <li>Pembayaran tunai (untuk pengambilan langsung)</li>
                <li>COD (Cash on Delivery) untuk area tertentu</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mt-4">Ketentuan Pembayaran:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pembayaran harus dilunasi dalam waktu 24 jam</li>
                <li>Pesanan akan dibatalkan otomatis jika tidak ada pembayaran</li>
                <li>Bukti pembayaran harus dikirim melalui WhatsApp atau email</li>
                <li>Kami tidak bertanggung jawab atas kesalahan transfer</li>
              </ul>
            </CardContent>
          </Card>

          {/* Shipping */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-orange-600" />
                Pengiriman
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-900">Area Pengiriman:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kota Pontianak dan sekitarnya (same day/next day)</li>
                <li>Luar Kota Pontianak (2-5 hari kerja)</li>
                <li>Pengiriman luar pulau (5-10 hari kerja)</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mt-4">Biaya Pengiriman:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Biaya dihitung berdasarkan berat dan jarak</li>
                <li>Gratis ongkir untuk pembelian minimum Rp 500.000</li>
                <li>Biaya tambahan untuk area terpencil</li>
              </ul>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-800">
                  <strong>Informasi:</strong> Kami tidak bertanggung jawab atas keterlambatan pengiriman 
                  yang disebabkan oleh pihak ketiga (jasa pengiriman).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                Pengembalian dan Pengembalian Dana
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-gray-900">Kebijakan Pengembalian:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pengembalian dapat dilakukan dalam 7 hari setelah penerimaan</li>
                <li>Produk harus dalam kondisi asli dan tidak digunakan</li>
                <li>Segel dan kemasan produk harus utuh</li>
                <li>Biaya pengembalian ditanggung pembeli</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mt-4">Alasan Pengembalian yang Diterima:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Produk rusak saat diterima</li>
                <li>Produk tidak sesuai dengan pesanan</li>
                <li>Kesalahan pengiriman dari pihak kami</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mt-4">Pengembalian Dana:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dana akan dikembalikan dalam 3-5 hari kerja</li>
                <li>Pengembalian melalui metode pembayaran yang sama</li>
                <li>Biaya admin bank ditanggung pembeli</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-600" />
                Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, logo, 
                desain, dan software, dilindungi oleh hak cipta dan merek dagang milik PT BISMIKA GRAFIKA KHATULISTIWA.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dilarang keras menggunakan, menyalin, mendistribusikan, atau memodifikasi konten website 
                tanpa izin tertulis dari kami.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Website kami disediakan "sebagaimana adanya" tanpa jaminan dalam bentuk apa pun. 
                Kami tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kerugian langsung atau tidak langsung dari penggunaan website</li>
                <li>Keterlambatan atau gangguan layanan</li>
                <li>Kehilangan data atau informasi</li>
                <li>Kerusakan perangkat dari penggunaan website</li>
                <li>Konten dari pihak ketiga yang terhubung dengan website kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                Privasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Privasi Anda sangat penting bagi kami. Penggunaan data pribadi Anda diatur dalam 
                Kebijakan Privasi kami yang dapat diakses melalui link di footer website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan website kami, Anda menyetujui pengumpulan dan penggunaan data 
                sesuai dengan Kebijakan Privasi kami.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-green-600" />
                Perubahan Syarat dan Ketentuan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan 
                diumumkan melalui website atau email. Penggunaan terus-menerus website setelah 
                perubahan menunjukkan persetujuan Anda terhadap syarat dan ketentuan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
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

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gavel className="w-5 h-5 mr-2 text-red-600" />
                Hukum yang Berlaku
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan 
                diselesaikan melalui perundingan atau, jika tidak mencapai kesepakatan, melalui pengadilan 
                di Kota Pontianak.
              </p>
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
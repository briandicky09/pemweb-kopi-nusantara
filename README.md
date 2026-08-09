# Kopi Nusantara

Website penjualan kopi lokal Indonesia yang menampilkan produk unggulan dari berbagai daerah, lengkap dengan informasi harga, deskripsi rasa, dan halaman pemesanan dalam tampilan yang sederhana dan menarik.

## Fitur

- **Beranda** – hero section, sekilas profil toko, dan highlight produk unggulan.
- **Produk** – daftar kopi khas nusantara beserta harga dan deskripsi rasa.
- **Tentang** – cerita dan profil singkat Kopi Nusantara.
- **Galeri** – kumpulan foto produk dan aktivitas.
- **Pemesanan** – form pemesanan kopi.
- **Kontak** – informasi dan form kontak untuk pertanyaan pelanggan.
- Navbar responsif dengan penanda halaman aktif otomatis (`main.js`).

## Struktur Proyek

```
├── index.html       # Halaman beranda
├── produk.html       # Halaman daftar produk
├── tentang.html       # Halaman tentang toko
├── galeri.html       # Halaman galeri foto
├── pemesanan.html     # Halaman form pemesanan
├── kontak.html       # Halaman form kontak
├── main.js         # Script navbar (penanda link aktif)
└── style.css        # Styling kustom di atas Bootstrap
```

## Teknologi

- HTML5 & CSS3
- [Bootstrap 5.3.3](https://getbootstrap.com/) (via CDN)
- JavaScript (vanilla)

## Cara Menjalankan

Karena situs ini murni statis (HTML/CSS/JS), tidak ada proses build atau instalasi dependensi yang diperlukan.

1. Clone atau unduh repositori ini.
2. Buka file `index.html` langsung di browser, **atau**
3. Jalankan server lokal sederhana, misalnya:

   ```bash
   python3 -m http.server 8000
   ```

   lalu buka `http://localhost:8000` di browser.

## Catatan

- Form pemesanan dan kontak saat ini bersifat statis (belum terhubung ke backend/database).
- Gambar hero dan sebagian gambar produk menggunakan sumber eksternal (Unsplash).

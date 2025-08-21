# LilNews - Portal Berita AI

Ini adalah proyek portal berita sederhana yang dibuat sebagai bagian dari tes teknis. Aplikasi ini mengambil berita terbaru seputar Kecerdasan Buatan (AI) dari berbagai API publik dan menampilkannya dalam antarmuka yang bersih dan responsif.

## Fitur Utama

- **Agregasi Multi-sumber**: Mengambil data dari 3 API berita yang berbeda (NewsAPI, The Guardian, Spaceflight News).
- **Tampilan Dinamis**: Homepage dengan bagian "Berita Baru", "Trending", dan "Rekomendasi".
- **Pencarian**: Fungsionalitas pencarian di navbar untuk memfilter artikel berdasarkan kata kunci.
- **Artikel Tersimpan**: Fitur untuk menyimpan artikel favorit menggunakan `localStorage`.
- **Desain Responsif**: Tampilan yang optimal di perangkat desktop maupun mobile.
- **Navigasi Modern**: Menggunakan React Router DOM untuk navigasi antar halaman yang mulus.

## Teknologi yang Digunakan

- **Framework**: React (dengan Vite)
- **Styling**: Tailwind CSS
- **Navigasi**: React Router DOM
- **Animasi**: Swiper.js (untuk carousel)

## Cara Menjalankan Proyek

1.  **Clone repository ini:**

    ```bash
    git clone https://github.com/amrylil/ai-news-web.git
    ```

2.  **Masuk ke direktori proyek:**

    ```bash
    cd ai-news-web
    ```

3.  **Install semua dependensi:**

    ```bash
    npm install
    ```

4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
    Aplikasi akan tersedia di `http://localhost:5173`.

## Catatan Penting

### 1. Environment Variables (.env)

File `.env` sengaja disertakan di dalam repository ini untuk mempermudah proses pengetesan. Di dalam proyek nyata, file ini seharusnya ditambahkan ke `.gitignore` untuk menjaga kerahasiaan kunci API.

### 2. Konten Halaman Detail

Halaman detail berita **menggunakan konten dummy "Lorem Ipsum"**. Hal ini disebabkan karena API berita yang digunakan umumnya hanya menyediakan judul dan deskripsi singkat, bukan isi artikel secara lengkap. Konten dummy ini digunakan untuk mensimulasikan bagaimana tampilan halaman detail jika memiliki konten yang panjang.

# New Tab Animatik

**Custom Chrome Extension - Animated New Tab Page with Rain, Lightning, and Interactive Features**

---

## 📋 Deskripsi

New Tab Animatik adalah ekstensi Google Chrome yang menggantikan halaman tab baru bawaan dengan antarmuka yang interaktif dan estetis. Proyek ini menghadirkan pengalaman visual yang menenangkan dengan tema hujan badai yang tenang, dilengkapi dengan animasi langit mendung, kilat petir, gerimis, padang rumput bergoyang, serta fitur shortcut website yang dapat dikustomisasi.

Ekstensi ini dirancang untuk meningkatkan produktivitas dengan menyediakan akses cepat ke website favorit sambil menikmati visualisasi yang menenangkan.

---

## ✨ Fitur Utama

### 🌩️ Visual & Animasi
- **Langit Mendung Dinamis**: Gradasi warna gelap dengan tiga lapisan awan yang bergerak pelan
- **Efek Kilat Realistis**: Animasi petir lembut yang muncul secara acak (interval 7-17 detik)
- **Gerimis Miring**: 40 partikel hujan dengan animasi tertiup angin
- **Padang Rumput Interaktif**: 130 helai rumput dengan tinggi bervariasi (30-85px) yang bergoyang secara natural

### 🎭 Karakter Maskot
- **Dual Mascot System**: Dua maskot Nailong dengan animasi independen
  - Maskot Kanan: Animasi bobbing (naik-turun) dengan rotasi halus
  - Maskot Kiri: Animasi goyang dengan orientasi menghadap tengah

### ⚡ Fungsionalitas
- **Jam & Tanggal Real-time**: Menampilkan waktu dan tanggal dalam format Indonesia (id-ID)
- **Pencarian Google Terintegrasi**: Kotak pencarian langsung di tengah halaman
- **Shortcut Website Dinamis**:
  - Tambah, edit, dan hapus shortcut dengan antarmuka intuitif
  - Ikon otomatis dari favicon Google atau custom image/GIF
  - Penyimpanan permanen menggunakan localStorage
  - 10 shortcut default yang dapat dikustomisasi
- **Modal Editor**: Interface popup untuk mengelola shortcut dengan validasi input

### 🎨 Desain
- **Glassmorphism Effects**: Efek blur dan transparansi pada elemen UI
- **Responsive Layout**: Tampilan optimal di berbagai resolusi layar
- **Color Palette**: Tema gelap dengan aksen hijau dan biru yang menenangkan
- **Typography**: Font Segoe UI untuk keterbacaan optimal

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi |
|----------|-----------|
| **Platform** | Google Chrome Extension (Manifest V3) |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Storage** | localStorage API |
| **External API** | Google Favicon Service |
| **Version Control** | Git & GitHub |

---

## 📁 Struktur Folder
new-tab-animatik/
├── manifest.json # Konfigurasi ekstensi (Manifest V3)
── background.js # Service worker untuk redirect tab baru
├── index.html # Struktur halaman utama
├── style.css # Styling dan animasi CSS
├── script.js # Logika aplikasi dan interaktivitas
── nailong.gif # Asset maskot kanan
├── nailong2.gif # Asset maskot kiri
└── README.md # Dokumentasi proyek


---

## 📦 Instalasi

### Prasyarat
- Google Chrome versi 88 atau lebih tinggi
- Koneksi internet (untuk mengambil favicon website)

### Langkah Instalasi

1. **Clone atau Download Repository**
   ```bash
   git clone https://github.com/Avrio26/New-tab-Animatic.git
   cd New-tab-Animatic




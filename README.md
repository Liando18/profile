# AG Profile — Portfolio Aprilian Gevindo

Portfolio personal berbasis **Next.js 16 + TypeScript + Tailwind CSS v4** dengan desain cyberpunk tema hijau, mendukung dark/light mode dan bilingual (Indonesia/English).

---

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Font** — Geist Sans + Geist Mono
- **Data GitHub** — GitHub REST API (fetch langsung di browser)
- **Deployment** — Vercel (recommended)

---

## Fitur

- Desain cyberpunk dengan tema warna hijau
- Dark mode & Light mode (toggle di Navbar, tersimpan di localStorage)
- Bilingual EN/ID (toggle di Navbar, tersimpan di localStorage)
- Typing animation di Hero section
- Foto profil responsif (mobile: atas teks, desktop: kolom kanan)
- GitHub repositories tampil otomatis & real-time via GitHub API
- Filter repository berdasarkan bahasa pemrograman
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll & animasi fade-in

---

## Struktur Folder

```
ag-profile/
├── public/
│   └── foto-ag.jpg           ← foto profil
│   app/
│       ├── globals.css        ← tema warna, animasi, CSS variables
│       ├── layout.tsx         ← root layout + LangProvider
│       ├── page.tsx           ← assembly semua section
│       └── components/
│           ├── LangContext.tsx    ← context global untuk bahasa
│           ├── ThemeToggle.tsx    ← tombol dark/light mode
│           ├── Navbar.tsx         ← navigasi + toggle tema & bahasa
│           ├── Hero.tsx           ← section utama + foto + typing
│           ├── About.tsx          ← tentang, minat, sertifikat
│           ├── Research.tsx       ← publikasi & penelitian
│           ├── Projects.tsx       ← GitHub repositories (live API)
│           ├── Skills.tsx         ← keahlian teknis & soft skills
│           ├── Experience.tsx     ← pendidikan & pengalaman kerja
│           └── Contact.tsx        ← kontak & footer
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## Cara Menjalankan

### 1. Clone atau copy project

```bash
git clone https://github.com/Liando18/ag-profile.git
cd ag-profile
```

### 2. Install dependencies

```bash
npm install
```

### 3. Tambahkan foto profil

Taruh file foto di:

```
public/foto-ag.jpg
```

### 4. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Build untuk Production

```bash
npm run build
npm run start
```

---

## Deploy ke Vercel

```bash
npm install -g vercel
vercel
```

Atau connect langsung repo GitHub ke [vercel.com](https://vercel.com) — Vercel akan auto-detect Next.js dan deploy otomatis.

---

## Kustomisasi

### Ganti data pribadi

Semua data (nama, penelitian, pengalaman, kontak) ada langsung di masing-masing file component di `src/app/components/`.

| Data                         | File             |
| ---------------------------- | ---------------- |
| Nama, deskripsi, tombol hero | `Hero.tsx`       |
| Tentang, minat, sertifikat   | `About.tsx`      |
| Publikasi & penelitian       | `Research.tsx`   |
| GitHub repos                 | otomatis via API |
| Keahlian teknis              | `Skills.tsx`     |
| Pendidikan & pengalaman      | `Experience.tsx` |
| Kontak                       | `Contact.tsx`    |

### Ganti username GitHub

Di `Projects.tsx`, cari baris:

```ts
fetch("https://api.github.com/users/Liando18/repos?...");
```

Ganti `Liando18` dengan username GitHub kamu.

### Ganti tema warna

Semua warna ada di CSS variables di `globals.css`:

```css
[data-theme="dark"] {
  --accent-bright: #00ff88;   /* warna aksen utama */
  --text-primary: #f0fff6;
  --text-secondary: #a7f3d0;
  ...
}
```

---

## Author

**Aprilian Gevindo**

- GitHub: [github.com/Liando18](https://github.com/Liando18)
- Scholar: [Google Scholar](https://scholar.google.com/citations?hl=id&user=13b1AQgAAAAJ)
- Email: liando1801@gmail.com
- WhatsApp: 085835524290

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./components/LangContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liando.vercel.app"),
  title: "Aprilian Gevindo | AI Engineer & Full-Stack Developer",
  description:
    "Portofolio Aprilian Gevindo, M.Kom. — AI Engineer, Peneliti Machine Learning, dan Full-Stack Web Developer di Padang, Indonesia. Memiliki keahlian khusus di bidang Deep Learning, Computer Vision, dan Keamanan Siber.",
  keywords: [
    "Aprilian Gevindo",
    "AI Engineer Indonesia",
    "Peneliti Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Keamanan Siber",
    "Full-Stack Developer",
    "Web Developer Padang",
    "React",
    "Next.js",
    "Laravel",
    "Python",
    "Data Science",
  ],
  authors: [{ name: "Aprilian Gevindo", url: "https://liando.vercel.app" }],
  creator: "Aprilian Gevindo",
  publisher: "Aprilian Gevindo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "https://liando.vercel.app",
    title: "Aprilian Gevindo | AI Engineer & Full-Stack Developer",
    description:
      "Jelajahi portofolio, publikasi ilmiah, dan proyek teknis dari Aprilian Gevindo, seorang Peneliti AI dan Web Developer profesional.",
    siteName: "Portofolio Aprilian Gevindo",
    images: [
      {
        url: "/sc-app.png",
        width: 1200,
        height: 630,
        alt: "Aplikasi Web Portofolio Aprilian Gevindo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprilian Gevindo | AI Engineer & Full-Stack Developer",
    description:
      "Portofolio Aprilian Gevindo, M.Kom. — AI Engineer, Peneliti Machine Learning, dan Full-Stack Web Developer.",
    images: ["/sc-app.png"],
  },
  verification: {
    google: "hG7sRVJuHWPYGIFPhWKZrQ2aBzn2UvJIv2Np6OUjkkg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aprilian Gevindo",
              url: "https://liando.vercel.app",
              image: "https://liando.vercel.app/foto-ag-1.jpeg",
              jobTitle: "AI Engineer & Full-Stack Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Universitas Putra Indonesia YPTK Padang",
              },
              sameAs: [
                "https://github.com/Liando18",
                "https://scholar.google.com/citations?hl=id&user=13b1AQgAAAAJ",
                "https://www.linkedin.com/in/aprilian-gevindo-5766b733b"
              ],
              knowsAbout: [
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Cybersecurity",
                "Web Development"
              ]
            })
          }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

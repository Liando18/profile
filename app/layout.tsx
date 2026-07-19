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
  title: "Aprilian Gevindo | AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Aprilian Gevindo, M.Kom. — AI Engineer, Machine Learning researcher, and Full-Stack Web Developer based in Padang, Indonesia. Specializing in Deep Learning, Computer Vision, and Cybersecurity.",
  keywords: [
    "Aprilian Gevindo",
    "AI Engineer Indonesia",
    "Machine Learning Researcher",
    "Deep Learning",
    "Computer Vision",
    "Cybersecurity",
    "Full-Stack Developer",
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
      "Explore the portfolio, research papers, and technical projects of Aprilian Gevindo, a passionate AI Researcher and Web Developer.",
    siteName: "Aprilian Gevindo Portfolio",
    images: [
      {
        url: "https://liando.vercel.app/profile.png",
        width: 800,
        height: 600,
        alt: "Aprilian Gevindo Profile Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprilian Gevindo | AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Aprilian Gevindo, M.Kom. — AI Engineer, Machine Learning researcher, and Full-Stack Web Developer.",
    images: ["https://liando.vercel.app/profile.png"],
  },
  verification: {
    google: "hG7sRVJuHWPYGIFPhWKZrQ2aBzn2UvJIv2Np6OUjkkg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
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
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

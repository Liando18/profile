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
  title: "Aprilian Gevindo — AI & Web Engineer",
  description:
    "Portfolio of Aprilian Gevindo — M.Kom. Informatics, Machine Learning researcher, AI & full-stack developer from Padang, Indonesia.",
  keywords: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Cybersecurity",
    "React",
    "Laravel",
    "Python",
  ],
  authors: [{ name: "Aprilian Gevindo" }],
  // icons: {
  //   icon: "/icon.png",
  // },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

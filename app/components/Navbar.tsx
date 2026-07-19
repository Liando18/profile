"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useLang } from "./LangContext";

const navLabels = {
  en: ["About", "Education", "Research", "Projects", "Experience", "Skills", "Contact"],
  id: ["Tentang", "Pendidikan", "Penelitian", "Proyek", "Pengalaman", "Keahlian", "Kontak"],
};

const links = [
  "#about",
  "#education",
  "#research",
  "#projects",
  "#experience",
  "#skills",
  "#contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { lang, toggleLang } = useLang();

  const labels = navLabels[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--bg-card)ee" : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--bg-card-border)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="mono text-xs tracking-widest"
            style={{ color: "var(--text-muted)" }}>
            {"<"}
          </span>
          <span
            className="mono font-bold text-sm tracking-wide"
            style={{ color: "var(--accent-bright)" }}>
            AG
          </span>
          <span
            className="mono text-xs tracking-widest"
            style={{ color: "var(--text-muted)" }}>
            {"/>"}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((href, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className="mono text-xs px-3 py-2 rounded-sm transition-all duration-200 tracking-wider"
              style={{
                color:
                  active === href
                    ? "var(--accent-bright)"
                    : "var(--text-secondary)",
                background: active === href ? "var(--accent)18" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (active !== href) {
                  (e.target as HTMLElement).style.color =
                    "var(--accent-bright)";
                  (e.target as HTMLElement).style.background =
                    "var(--accent)0f";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== href) {
                  (e.target as HTMLElement).style.color =
                    "var(--text-secondary)";
                  (e.target as HTMLElement).style.background = "transparent";
                }
              }}>
              {labels[i]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="mono text-xs px-3 py-2 rounded-sm transition-all duration-200"
            style={{
              border: "1px solid var(--bg-card-border)",
              color: "var(--text-secondary)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)66";
              (e.currentTarget as HTMLElement).style.color =
                "var(--accent-bright)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--bg-card-border)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}>
            <div className="flex items-center gap-1.5">
              {lang === "en" ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="16" height="12" className="rounded-sm">
                    <clipPath id="s">
                      <path d="M0,0 v30 h60 v-30 z"/>
                    </clipPath>
                    <clipPath id="t">
                      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                    </clipPath>
                    <g clipPath="url(#s)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                    </g>
                  </svg>
                  <span>EN</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width="16" height="12" className="rounded-sm">
                    <rect width="60" height="20" fill="#ce1126"/>
                    <rect y="20" width="60" height="20" fill="#fff"/>
                  </svg>
                  <span>ID</span>
                </>
              )}
            </div>
          </button>
          <ThemeToggle />
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center card-cyber"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--accent-bright)" }}>
            {menuOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-1"
          style={{
            background: "var(--bg-card)",
            borderTop: "1px solid var(--bg-card-border)",
          }}>
          {links.map((href, i) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setActive(href);
                setMenuOpen(false);
              }}
              className="mono text-xs px-3 py-3 tracking-wider transition-colors"
              style={{ color: "var(--text-secondary)" }}>
              {labels[i]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

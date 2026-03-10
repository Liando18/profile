"use client";
import { useLang } from "./LangContext";

const content = {
  en: {
    sectionLabel: "CONTACT ME",
    heading: "Get In",
    headingAccent: "Touch",
    desc: "I'm open to research collaborations, academic discussions, and freelance development projects. Whether you have an AI/ML challenge or need a full-stack web solution — feel free to reach out.",
    built: "Built with Next.js + Tailwind CSS",
  },
  id: {
    sectionLabel: "HUBUNGI SAYA",
    heading: "Hubungi",
    headingAccent: "Saya",
    desc: "Saya terbuka untuk kolaborasi penelitian, diskusi akademik, dan proyek pengembangan freelance. Baik itu tantangan AI/ML atau kebutuhan solusi web full-stack — jangan ragu untuk menghubungi.",
    built: "Dibangun dengan Next.js + Tailwind CSS",
  },
};

const links = [
  {
    label: "Email",
    value: "liando1801@gmail.com",
    href: "mailto:liando1801@gmail.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "085835524290",
    href: "https://wa.me/6285835524290",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.104.545 4.081 1.5 5.797L0 24l6.396-1.476A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.576-.5-5.062-1.37l-.362-.217-3.799.876.899-3.706-.236-.381A9.935 9.935 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Liando18",
    href: "https://github.com/Liando18",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Google Scholar",
    value: "scholar.google.com",
    href: "https://scholar.google.com/citations?hl=id&user=13b1AQgAAAAJ",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">{t.sectionLabel}</span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--accent)22" }}
          />
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "var(--text-primary)" }}>
          {t.heading}{" "}
          <span className="glow-text" style={{ color: "var(--accent-bright)" }}>
            {t.headingAccent}
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}>
            {t.desc}
          </p>
          <div
            className="card-cyber p-5 rounded-sm mono text-sm"
            style={{ color: "var(--text-muted)" }}>
            <span style={{ color: "var(--accent)66" }}>const</span>
            <span style={{ color: "var(--text-secondary)" }}> location </span>
            <span style={{ color: "var(--accent)66" }}>=</span>
            <span style={{ color: "var(--accent-bright)" }}>
              {" "}
              &quot;Padang, West Sumatra, ID&quot;
            </span>
            <span style={{ color: "var(--text-muted)" }}>;</span>
          </div>
        </div>

        <div className="grid gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="card-cyber p-4 rounded-sm flex items-center gap-4 group">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{
                  background: "var(--accent)12",
                  color: "var(--accent-bright)",
                }}>
                {link.icon}
              </div>
              <div className="flex flex-col">
                <span
                  className="mono text-xs tracking-wide mb-0.5"
                  style={{ color: "var(--text-muted)" }}>
                  {link.label}
                </span>
                <span
                  className="mono text-sm"
                  style={{ color: "var(--text-primary)" }}>
                  {link.value}
                </span>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--accent-bright)" }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div
        className="mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid var(--bg-card-border)" }}>
        <div className="flex items-center gap-2">
          <span className="mono text-xs" style={{ color: "var(--text-muted)" }}>
            {"<"}
          </span>
          <span
            className="mono text-xs font-bold"
            style={{ color: "var(--accent-bright)" }}>
            AG
          </span>
          <span className="mono text-xs" style={{ color: "var(--text-muted)" }}>
            {"/>"}
          </span>
          <span
            className="mono text-xs ml-2"
            style={{ color: "var(--text-muted)" }}>
            Aprilian Gevindo © {new Date().getFullYear()}
          </span>
        </div>
        <span className="mono text-xs" style={{ color: "var(--text-muted)" }}>
          {t.built}
        </span>
      </div>
    </section>
  );
}

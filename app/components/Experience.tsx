"use client";
import { useLang } from "./LangContext";

const experiences = [
  {
    role: {
      en: "Web Developer — Competition System",
      id: "Web Developer — Sistem Kompetisi",
    },
    company: "SMA Negeri 2 Painan",
    period: "Jan – Jun 2025",
    stack: ["Laravel Inertia", "React", "MySQL"],
    points: {
      en: [
        "Built student competition management system used in real competitions.",
        "Designed marketplace-like app with GIS-based drone delivery concept.",
      ],
      id: [
        "Membangun sistem manajemen kompetisi siswa yang digunakan dalam perlombaan nyata.",
        "Merancang aplikasi berbasis marketplace dengan konsep pengiriman drone berbasis GIS.",
      ],
    },
  },
  {
    role: { en: "Web Developer (Freelance)", id: "Web Developer (Freelance)" },
    company: "AGRATA Teknik",
    period: "Aug – Nov 2024",
    stack: ["ReactJS", "ExpressJS", "MySQL"],
    points: {
      en: [
        "Developed web application for promoting home appliance repair services.",
      ],
      id: [
        "Mengembangkan aplikasi web untuk promosi jasa servis peralatan rumah tangga.",
      ],
    },
  },
  {
    role: { en: "Web Developer (Freelance)", id: "Web Developer (Freelance)" },
    company: "PT. Malayapura Spices Group",
    period: "Feb – May 2024",
    stack: ["ReactJS"],
    points: {
      en: ["Built company profile website for a spice export company."],
      id: [
        "Membangun website company profile untuk perusahaan ekspor rempah-rempah.",
      ],
    },
  },
  {
    role: { en: "Web Developer (Freelance)", id: "Web Developer (Freelance)" },
    company: "PT. Andalasia Publisher Corp",
    period: "May – Dec 2023",
    stack: ["Laravel", "MySQL"],
    points: {
      en: [
        "Developed book and article publication platform for a publishing company.",
      ],
      id: [
        "Mengembangkan platform publikasi buku dan artikel untuk perusahaan penerbitan.",
      ],
    },
  },
];

const content = {
  en: {
    sectionLabel: "WORK HISTORY",
    heading: "Work",
    headingAccent: "Experience",
  },
  id: {
    sectionLabel: "PENGALAMAN KERJA",
    heading: "Pengalaman",
    headingAccent: "Kerja",
  },
};

export default function Experience() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="experience" className="py-10 px-6 max-w-6xl mx-auto">
      <div className="mb-8">
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

      <div className="grid sm:grid-cols-2 gap-4">
          {experiences.map((exp, i) => (
            <div key={i} className="card-cyber p-5 rounded-sm">
              <h4
                className="font-semibold text-sm leading-snug mb-1"
                style={{ color: "var(--text-primary)" }}>
                {exp.role[lang]}
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="mono text-xs"
                  style={{ color: "var(--accent-bright)" }}>
                  {exp.company}
                </span>
                <span
                  className="mono text-xs"
                  style={{ color: "var(--text-secondary)" }}>
                  · {exp.period}
                </span>
              </div>
              <ul className="flex flex-col gap-1 mb-3">
                {exp.points[lang].map((pt, j) => (
                  <li
                    key={j}
                    className="text-xs leading-relaxed flex gap-2"
                    style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent)88" }}>›</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <span key={s} className="tag-cyber">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

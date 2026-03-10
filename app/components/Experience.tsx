"use client";
import { useLang } from "./LangContext";

const education = [
  {
    degree: {
      en: "Master's — Informatics Engineering",
      id: "S2 — Magister Teknik Informatika",
    },
    institution: "Universitas Putra Indonesia YPTK Padang",
    period: "Jan 2025 – Mei 2026",
    focus: {
      en: "Concentration: Intelligent Systems",
      id: "Konsentrasi: Intelligent Systems",
    },
    current: false,
    active: { en: "", id: "" },
  },
  {
    degree: {
      en: "Bachelor's — Informatics Engineering",
      id: "S1 — Teknik Informatika",
    },
    institution: "Universitas Putra Indonesia YPTK Padang",
    period: "Oct 2020 – Nov 2024",
    focus: { en: "Concentration: Networking", id: "Konsentrasi: Networking" },
    current: false,
    active: { en: "", id: "" },
  },
];

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
    sectionLabel: "EDUCATION & WORK HISTORY",
    heading: "Education &",
    headingAccent: "Experience",
    eduTitle: "EDUCATION",
    expTitle: "WORK EXPERIENCE",
  },
  id: {
    sectionLabel: "PENDIDIKAN & PENGALAMAN KERJA",
    heading: "Pendidikan &",
    headingAccent: "Pengalaman",
    eduTitle: "PENDIDIKAN",
    expTitle: "PENGALAMAN KERJA",
  },
};

export default function Experience() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="experience" className="pt-1 pb-20 px-6 max-w-6xl mx-auto">
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

      <div className="mb-10">
        <h3
          className="mono text-sm font-semibold tracking-widest mb-5 pb-3"
          style={{
            color: "var(--accent-bright)",
            borderBottom: "1px solid var(--accent)22",
          }}>
          {t.eduTitle}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <div key={i} className="card-cyber p-5 rounded-sm relative">
              {edu.current && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full pulse-glow"
                    style={{ background: "var(--accent-bright)" }}
                  />
                  <span
                    className="mono text-xs"
                    style={{ color: "var(--accent-bright)" }}>
                    {edu.active[lang]}
                  </span>
                </div>
              )}
              <h4
                className="font-semibold text-sm mb-1 pr-16"
                style={{ color: "var(--text-primary)" }}>
                {edu.degree[lang]}
              </h4>
              <p
                className="mono text-xs mb-2"
                style={{ color: "var(--accent-bright)" }}>
                {edu.institution}
              </p>
              <p
                className="mono text-xs mb-1"
                style={{ color: "var(--text-secondary)" }}>
                {edu.period}
              </p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {edu.focus[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3
          className="mono text-sm font-semibold tracking-widest mb-5 pb-3"
          style={{
            color: "var(--accent-bright)",
            borderBottom: "1px solid var(--accent)22",
          }}>
          {t.expTitle}
        </h3>
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
      </div>
    </section>
  );
}

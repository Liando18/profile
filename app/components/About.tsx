"use client";
import { useLang } from "./LangContext";

const interests = [
  { label: { en: "Machine Learning", id: "Machine Learning" }, icon: "⚡" },
  {
    label: {
      en: "Deep Learning / Computer Vision",
      id: "Deep Learning / Computer Vision",
    },
    icon: "👁️",
  },
  {
    label: { en: "Intelligent Systems", id: "Intelligent Systems" },
    icon: "🤖",
  },
  { label: { en: "Cybersecurity", id: "Keamanan Siber" }, icon: "🛡️" },
  { label: { en: "Data Science", id: "Data Science" }, icon: "📊" },
  { label: { en: "Network Security", id: "Keamanan Jaringan" }, icon: "🔐" },
];

const certs = [
  {
    title: {
      en: "Python for Data Science & Machine Learning",
      id: "Python for Data Science & Machine Learning",
    },
    org: "UniAthena · Cambridge CIQ",
    year: "2026",
    link: "https://drive.google.com/file/d/1svePK_YfeTE24Tb6hS1-3sEUBYPMbu0E/view",
  },
  {
    title: { en: "AI+ Foundation", id: "AI+ Foundation" },
    org: "AI CERTs",
    year: "2026",
    link: "https://drive.google.com/file/d/1XNkNsw9MlHJuJ3cMwKErYfuoOxv2XjDc/view",
  },
  {
    title: { en: "AI Engineer", id: "AI Engineer" },
    org: "Dicoding Indonesia - Development Bank of Singapore (DBS) Foundation 2.0",
    year: "2026",
    link: "https://drive.google.com/drive/folders/1BeAE7KidY1h1BlH0x2ChK3ZBoUoBjnD3?usp=drive_link",
  },
  {
    title: {
      en: "Applied Data Science & Gen AI",
      id: "Pelatihan Terapan Data Science & Gen AI",
    },
    org: "Dicoding Indonesia - Microsoft Elevate Training Center",
    year: "2026",
    link: "https://drive.google.com/drive/folders/1D_fPUzZxPCBsG12iRwmsX9T8T9DaI9-M?usp=drive_link",
  },
  {
    title: {
      en: "Artificial Intelligence and Applications",
      id: "Artificial Intelligence and Applications",
    },
    org: "Huawei ICT Academy",
    year: "2026",
    link: "https://drive.google.com/file/d/1x-NB1ftB4-dbsa0Z6by3xO2SlzECQWx1/view",
  },
  {
    title: {
      en: "openGauss Database Technology and Applications",
      id: "openGauss Database Technology and Applications",
    },
    org: "Huawei ICT Academy",
    year: "2026",
    link: "https://drive.google.com/file/d/1HFCnNEduLpvdvHHHDNwKM2kwVSLpefsT/view",
  },
  {
    title: {
      en: "Speaker — Event Management",
      id: "Pemateri Event Management",
    },
    org: "HIMANPURA Padang",
    year: "2024",
    link: null as string | null,
  },
  {
    title: {
      en: "Award — Website Application",
      id: "Penghargaan Aplikasi Berbasis Website",
    },
    org: "HIMANPURA Padang",
    year: "2023",
    link: "https://drive.google.com/file/d/1jSEsRQNA8LgiJq-3c2ZRW81JvEQ2yMYy/view",
  },
  {
    title: { en: "Speaker — Web Programming", id: "Pemateri Web Programming" },
    org: "Forum Studi Informatika UPI YPTK",
    year: "2022",
    link: "https://drive.google.com/file/d/1nN3lnwdYHFXNHvQWjuk7XDk55xCXhQMR/view",
  },
  {
    title: {
      en: "Speaker — Object Oriented Programming (OOP)",
      id: "Pemateri Object Oriented Programming (OOP)",
    },
    org: "Forum Studi Informatika UPI YPTK",
    year: "2022",
    link: "https://drive.google.com/file/d/1yJPTjF6ojcGU_g7d3KJAvOQ-fdNhMTji/view",
  },
];

const content = {
  en: {
    sectionLabel: "ABOUT ME",
    heading: "About",
    headingAccent: "Me",
    p1: "I am a graduate of Master of Informatics Engineering at Universitas Putra Indonesia YPTK Padang, specializing in Intelligent Systems. My research focuses on applying AI and Machine Learning to solve real-world challenges in network security and computer vision.",
    p2: "Beyond research, I actively build full-stack web applications using modern frameworks like Laravel, React, and Next.js — bridging the gap between academic AI research and production-grade software development.",
    interestsLabel: "RESEARCH INTERESTS",
    certsLabel: "CERTIFICATES & TRAINING",
    viewButton: "View",
  },
  id: {
    sectionLabel: "TENTANG SAYA",
    heading: "Tentang",
    headingAccent: "Saya",
    p1: "Saya adalah lulusan Magister Teknik Informatika di Universitas Putra Indonesia YPTK Padang, dengan konsentrasi Intelligent Systems. Penelitian saya berfokus pada penerapan AI dan Machine Learning untuk menyelesaikan tantangan nyata di bidang keamanan jaringan dan computer vision.",
    p2: "Selain penelitian, saya aktif membangun aplikasi web full-stack menggunakan framework modern seperti Laravel, React, dan Next.js — menjembatani riset AI akademis dengan pengembangan software siap produksi.",
    interestsLabel: "MINAT PENELITIAN",
    certsLabel: "SERTIFIKAT & PELATIHAN",
    viewButton: "Lihat",
  },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="about" className="py-10 px-6 max-w-6xl mx-auto">
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

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <p
            className="text-base leading-relaxed mb-5"
            style={{ color: "var(--text-secondary)" }}>
            {t.p1}
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}>
            {t.p2}
          </p>
        </div>
        <div>
          <h3
            className="mono text-xs tracking-widest mb-4"
            style={{ color: "var(--accent-bright)" }}>
            {t.interestsLabel}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {interests.map((interest) => (
              <div
                key={interest.label.en}
                className="flex items-center gap-2.5 p-3 rounded-sm"
                style={{
                  background: "var(--accent)08",
                  border: "1px solid var(--accent)18",
                }}>
                <span className="text-base">{interest.icon}</span>
                <span
                  className="mono text-xs leading-tight"
                  style={{ color: "var(--text-secondary)" }}>
                  {interest.label[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3
          className="mono text-xs tracking-widest mb-5"
          style={{ color: "var(--accent-bright)" }}>
          {t.certsLabel}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="card-cyber p-4 rounded-sm flex items-start gap-3"
              style={cert.link ? { cursor: "pointer" } : undefined}>
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 mt-0.5 mono text-xs font-bold"
                style={{
                  background: "var(--accent)12",
                  color: "var(--accent-bright)",
                  border: "1px solid var(--accent)33",
                }}>
                {cert.year.slice(2)}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium leading-snug mb-1"
                  style={{ color: "var(--text-primary)" }}>
                  {cert.title[lang]}
                </p>
                <p
                  className="mono text-xs mb-2"
                  style={{ color: "var(--text-muted)" }}>
                  {cert.org} · {cert.year}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-xs px-3 py-1 rounded-sm border inline-flex items-center gap-1.5 transition-all duration-200"
                    style={{
                      color: "var(--accent-bright)",
                      borderColor: "var(--accent-bright)44",
                      background: "var(--accent-bright)12",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--accent-bright)22";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--accent-bright)12";
                    }}>
                    {t.viewButton}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

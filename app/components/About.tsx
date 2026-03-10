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
      en: "Speaker — Event Management",
      id: "Pemateri Event Management",
    },
    org: "HIMANPURA Padang",
    year: "2024",
  },
  {
    title: {
      en: "Award — Website Application",
      id: "Penghargaan Aplikasi Berbasis Website",
    },
    org: "HIMANPURA Padang",
    year: "2023",
  },
  {
    title: { en: "Speaker — Web Programming", id: "Pemateri Web Programming" },
    org: "Forum Studi Informatika UPI YPTK",
    year: "2022",
  },
  {
    title: {
      en: "Speaker — Object Oriented Programming",
      id: "Pemateri Object Oriented Programming",
    },
    org: "Forum Studi Informatika UPI YPTK",
    year: "2022",
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
    certsLabel: "CERTIFICATES & AWARDS",
  },
  id: {
    sectionLabel: "TENTANG SAYA",
    heading: "Tentang",
    headingAccent: "Saya",
    p1: "Saya adalah lulusan Magister Teknik Informatika di Universitas Putra Indonesia YPTK Padang, dengan konsentrasi Intelligent Systems. Penelitian saya berfokus pada penerapan AI dan Machine Learning untuk menyelesaikan tantangan nyata di bidang keamanan jaringan dan computer vision.",
    p2: "Selain penelitian, saya aktif membangun aplikasi web full-stack menggunakan framework modern seperti Laravel, React, dan Next.js — menjembatani riset AI akademis dengan pengembangan software siap produksi.",
    interestsLabel: "MINAT PENELITIAN",
    certsLabel: "SERTIFIKAT & PENGHARGAAN",
  },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="about" className="py-1 px-6 max-w-6xl mx-auto">
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
              className="card-cyber p-4 rounded-sm flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 mt-0.5 mono text-xs font-bold"
                style={{
                  background: "var(--accent)12",
                  color: "var(--accent-bright)",
                  border: "1px solid var(--accent)33",
                }}>
                {cert.year.slice(2)}
              </div>
              <div>
                <p
                  className="text-sm font-medium leading-snug mb-1"
                  style={{ color: "var(--text-primary)" }}>
                  {cert.title[lang]}
                </p>
                <p
                  className="mono text-xs"
                  style={{ color: "var(--text-muted)" }}>
                  {cert.org} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

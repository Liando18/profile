"use client";
import { useLang } from "./LangContext";

const education = [
  {
    degree: {
      en: "Master's — Informatics Engineering",
      id: "S2 — Magister Teknik Informatika",
    },
    institution: "Universitas Putra Indonesia YPTK Padang",
    period: {
      en: "September 2024 – March 2026",
      id: "September 2024 – Maret 2026",
    },
    focus: {
      en: "Intelligent Systems · GPA: 3.71",
      id: "Intelligent Systems · IPK: 3.71",
    },
    badge: "S2",
  },
  {
    degree: {
      en: "Bachelor's — Informatics Engineering",
      id: "S1 — Teknik Informatika",
    },
    institution: "Universitas Putra Indonesia YPTK Padang",
    period: {
      en: "October 2020 – September 2024",
      id: "Oktober 2020 – September 2024",
    },
    focus: {
      en: "Networking · GPA: 3.34",
      id: "Networking · IPK: 3.34",
    },
    badge: "S1",
  },
];

const content = {
  en: {
    sectionLabel: "EDUCATION",
    heading: "Education",
    headingAccent: "Background",
  },
  id: {
    sectionLabel: "PENDIDIKAN",
    heading: "Latar",
    headingAccent: "Pendidikan",
  },
};

export default function Education() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="education" className="py-10 px-6 max-w-6xl mx-auto">
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
        {education.map((edu, i) => (
          <div
            key={i}
            className="card-cyber rounded-sm relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: "var(--accent-bright)" }}
            />
            <div className="p-5 flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mono text-xs font-bold"
                style={{
                  background: "var(--accent)12",
                  color: "var(--accent-bright)",
                  border: "1px solid var(--accent)33",
                }}>
                {edu.badge}
              </div>
              <div className="min-w-0">
                <h4
                  className="font-semibold text-sm leading-snug mb-1"
                  style={{ color: "var(--text-primary)" }}>
                  {edu.degree[lang]}
                </h4>
                <p
                  className="mono text-xs mb-1.5"
                  style={{ color: "var(--accent-bright)" }}>
                  {edu.institution}
                </p>
                <p
                  className="mono text-xs"
                  style={{ color: "var(--text-secondary)" }}>
                  {edu.period[lang]}
                </p>
                <p
                  className="mono text-xs mt-1"
                  style={{ color: "var(--text-muted)" }}>
                  {edu.focus[lang]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { useLang } from "./LangContext";

const skillGroups = [
  {
    label: { en: "AI / ML Models", id: "Model AI / ML" },
    icon: "🧠",
    skills: [
      "Naïve Bayes",
      "Decision Tree",
      "Random Forest",
      "K-Nearest Neighbors",
      "Support Vector Machine",
      "K-Means",
      "K-Medoid",
      "YOLO",
      "CNN",
    ],
  },
  {
    label: { en: "Programming & Frameworks", id: "Pemrograman & Framework" },
    icon: "⚙️",
    skills: [
      "PHP — Laravel, CodeIgniter",
      "Python — Flask, Streamlit",
      "JavaScript — React, Next.js, Express",
      "TypeScript",
    ],
  },
  {
    label: { en: "Databases", id: "Basis Data" },
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    label: { en: "Tools & Software", id: "Alat & Software" },
    icon: "🛠️",
    skills: [
      "VS Code",
      "Jupyter Notebook",
      "MatLab",
      "RapidMiner",
      "Postman",
      "VirtualBox",
      "Draw.io",
      "XAMPP / MAMP / LAMP",
      "Microsoft Office",
    ],
  },
];

const softSkills = [
  { label: { en: "Problem Solving", id: "Pemecahan Masalah" }, icon: "🔍" },
  { label: { en: "Analytical Thinking", id: "Berpikir Analitis" }, icon: "📊" },
  { label: { en: "Time Management", id: "Manajemen Waktu" }, icon: "⏱️" },
  { label: { en: "Team Collaboration", id: "Kerja Tim" }, icon: "👥" },
];

const content = {
  en: {
    sectionLabel: "TECHNICAL SKILLS",
    heading: "Technical",
    headingAccent: "Skills",
    softLabel: "Soft Skills",
  },
  id: {
    sectionLabel: "KEAHLIAN TEKNIS",
    heading: "Keahlian",
    headingAccent: "Teknis",
    softLabel: "Soft Skills",
  },
};

export default function Skills() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.label.en}
            className="card-cyber p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl">{group.icon}</span>
              <h3
                className="mono text-sm font-semibold tracking-wide"
                style={{ color: "var(--text-primary)" }}>
                {group.label[lang]}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="badge-cyber">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 card-cyber p-6 md:p-8 rounded-sm">
        <h3
          className="mono text-sm font-semibold tracking-wide mb-6"
          style={{ color: "var(--text-primary)" }}>
          🤝 {t.softLabel}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((s) => (
            <div
              key={s.label.en}
              className="flex flex-col items-center gap-2 p-4 rounded-sm text-center"
              style={{
                background: "var(--accent)08",
                border: "1px solid var(--accent)22",
              }}>
              <span className="text-2xl">{s.icon}</span>
              <span
                className="mono text-xs leading-tight"
                style={{ color: "var(--text-secondary)" }}>
                {s.label[lang]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

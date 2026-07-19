"use client";
import { useLang } from "./LangContext";
import { Brain, Code2, Database, Wrench, Search, BarChart, Clock, Users } from "lucide-react";

const skillGroups = [
  {
    label: { en: "AI / ML Models", id: "Model AI / ML" },
    icon: <Brain size={20} className="text-accent-bright" />,
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
    icon: <Code2 size={20} className="text-accent-bright" />,
    skills: [
      "PHP — Laravel, CodeIgniter",
      "Python — Flask, Streamlit",
      "JavaScript — React, Next.js, Express",
      "TypeScript",
    ],
  },
  {
    label: { en: "Databases", id: "Basis Data" },
    icon: <Database size={20} className="text-accent-bright" />,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    label: { en: "Tools & Software", id: "Alat & Software" },
    icon: <Wrench size={20} className="text-accent-bright" />,
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
  { label: { en: "Problem Solving", id: "Pemecahan Masalah" }, icon: <Search size={20} className="text-accent-bright" /> },
  { label: { en: "Analytical Thinking", id: "Berpikir Analitis" }, icon: <BarChart size={20} className="text-accent-bright" /> },
  { label: { en: "Time Management", id: "Manajemen Waktu" }, icon: <Clock size={20} className="text-accent-bright" /> },
  { label: { en: "Team Collaboration", id: "Kerja Tim" }, icon: <Users size={20} className="text-accent-bright" /> },
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
    <section id="skills" className="py-10 px-6 max-w-6xl mx-auto">
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

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {skillGroups.map((group) => (
          <div
            key={group.label.en}
            className="card-cyber p-6 rounded-sm flex flex-col transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{
                  background: "var(--accent)12",
                  border: "1px solid var(--accent)33",
                }}>
                {group.icon}
              </div>
              <h3
                className="text-lg font-bold tracking-wide"
                style={{ color: "var(--text-primary)" }}>
                {group.label[lang]}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="mono text-xs px-3 py-1.5 rounded-sm transition-all duration-200"
                  style={{
                    background: "var(--accent)08",
                    border: "1px solid var(--accent)18",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)22";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-bright)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-bright)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)08";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)18";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3
          className="mono text-xs tracking-widest mb-5"
          style={{ color: "var(--accent-bright)" }}>
          {t.softLabel.toUpperCase()}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((s) => (
            <div
              key={s.label.en}
              className="card-cyber p-5 rounded-sm flex flex-col items-center text-center gap-3 transition-transform duration-300 hover:-translate-y-1">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-1"
                style={{
                  background: "var(--accent)12",
                  border: "1px solid var(--accent)33",
                }}>
                {s.icon}
              </div>
              <span
                className="text-sm font-medium leading-snug"
                style={{ color: "var(--text-primary)" }}>
                {s.label[lang]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

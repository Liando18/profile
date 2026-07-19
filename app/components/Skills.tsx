"use client";
import { useLang } from "./LangContext";
import { Brain, Code2, Database, Wrench, Search, BarChart, Clock, Users, Handshake } from "lucide-react";

const skillGroups = [
  {
    label: { en: "AI / ML Models", id: "Model AI / ML" },
    icon: <Brain size={24} className="text-accent-bright" />,
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
    icon: <Code2 size={24} className="text-accent-bright" />,
    skills: [
      "PHP — Laravel, CodeIgniter",
      "Python — Flask, Streamlit",
      "JavaScript — React, Next.js, Express",
      "TypeScript",
    ],
  },
  {
    label: { en: "Databases", id: "Basis Data" },
    icon: <Database size={24} className="text-accent-bright" />,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    label: { en: "Tools & Software", id: "Alat & Software" },
    icon: <Wrench size={24} className="text-accent-bright" />,
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
  { label: { en: "Problem Solving", id: "Pemecahan Masalah" }, icon: <Search size={28} className="text-accent-bright" /> },
  { label: { en: "Analytical Thinking", id: "Berpikir Analitis" }, icon: <BarChart size={28} className="text-accent-bright" /> },
  { label: { en: "Time Management", id: "Manajemen Waktu" }, icon: <Clock size={28} className="text-accent-bright" /> },
  { label: { en: "Team Collaboration", id: "Kerja Tim" }, icon: <Users size={28} className="text-accent-bright" /> },
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.label.en}
            className="group relative overflow-hidden rounded-xl transition-all duration-500"
            style={{
              background: "color-mix(in srgb, var(--accent) 3%, var(--bg-card))",
              border: "1px solid color-mix(in srgb, var(--bg-card-border) 50%, transparent)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-bright)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px color-mix(in srgb, var(--accent) 20%, transparent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.01)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--bg-card-border) 50%, transparent)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
            }}>
            
            <div 
              className="absolute -right-20 -top-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
            />
            
            <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-3 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: "color-mix(in srgb, var(--accent) 15%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                    color: "var(--accent-bright)"
                  }}>
                  {group.icon}
                </div>
                <h3
                  className="font-bold text-lg md:text-xl tracking-wide transition-colors duration-300"
                  style={{ color: "var(--text-primary)" }}>
                  {group.label[lang]}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold px-3 py-1.5 rounded-md transition-all duration-300 transform"
                    style={{
                      background: "color-mix(in srgb, var(--bg-card) 80%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--accent) 15%, transparent)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-bright)";
                      (e.currentTarget as HTMLElement).style.color = "var(--accent-bright)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--bg-card) 80%, transparent)";
                      (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--accent) 20%, transparent)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-12 relative group rounded-xl transition-all duration-500 overflow-hidden"
        style={{
          background: "color-mix(in srgb, var(--accent) 2%, var(--bg-card))",
          border: "1px solid color-mix(in srgb, var(--bg-card-border) 50%, transparent)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-bright)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px color-mix(in srgb, var(--accent) 15%, transparent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--bg-card-border) 50%, transparent)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}>
        
        <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[var(--accent-bright)] to-transparent opacity-70" />
        <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-l from-[var(--accent-bright)] to-transparent opacity-70" />

        <div className="p-8 md:p-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-10 pb-6 border-b" style={{ borderColor: "color-mix(in srgb, var(--accent) 15%, transparent)" }}>
            <div
              className="p-4 rounded-xl transition-transform duration-500 group-hover:rotate-12"
              style={{
                background: "color-mix(in srgb, var(--accent) 15%, transparent)",
                border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                color: "var(--accent-bright)"
              }}>
              <Handshake size={36} />
            </div>
            <div className="text-center md:text-left">
              <h3
                className="text-2xl font-bold tracking-widest uppercase mb-2"
                style={{ color: "var(--text-primary)" }}>
                {t.softLabel}
              </h3>
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--text-muted)" }}>
                Interpersonal & Professional Attributes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((s) => (
              <div
                key={s.label.en}
                className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl transition-all duration-300"
                style={{
                  background: "color-mix(in srgb, var(--bg-card) 50%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
                  boxShadow: "inset 0 0 20px color-mix(in srgb, var(--accent) 2%, transparent)"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--accent) 10%, transparent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-bright)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 20px color-mix(in srgb, var(--accent) 10%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--bg-card) 50%, transparent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--accent) 15%, transparent)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 20px color-mix(in srgb, var(--accent) 2%, transparent)";
                }}>
                <div
                  className="transition-transform duration-500 group-hover:scale-125"
                  style={{ color: "var(--accent-bright)", filter: "drop-shadow(0 0 10px color-mix(in srgb, var(--accent) 50%, transparent))" }}>
                  {s.icon}
                </div>
                <span
                  className="text-sm font-bold text-center tracking-wide transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}>
                  {s.label[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes gradientSlide {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}} />
      </div>
    </section>
  );
}

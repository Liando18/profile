"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "./LangContext";

const content = {
  en: {
    badge: "OPEN TO THE WORLD OF WORK & RESEARCH",
    description:
      "Master of Informatics Engineering (M.Kom) graduate with focus on Intelligent Systems. Researching Machine Learning, Deep Learning for Computer Vision, and AI-based Network Security. Based in Padang, West Sumatra, Indonesia.",
    btnResearch: "View Research",
    btnProjects: "GitHub Projects",
    btnScholar: "Google Scholar",
    btnContact: "Contact Me",
    stats: [
      { label: "Research", value: "3+" },
      { label: "Projects", value: "10+" },
      { label: "AI Models", value: "9+" },
    ],
    scroll: "SCROLL",
  },
  id: {
    badge: "TERBUKA UNTUK DUNIA PEKERJAAN & PENELITIAN",
    description:
      "Lulusan Magister Teknik Informatika (M.Kom) dengan konsentrasi Intelligent Systems. Meneliti Machine Learning, Deep Learning untuk Computer Vision, dan Keamanan Jaringan berbasis AI. Berdomisili di Padang, Sumatera Barat, Indonesia.",
    btnResearch: "Lihat Penelitian",
    btnProjects: "Project GitHub",
    btnScholar: "Google Scholar",
    btnContact: "Hubungi Saya",
    stats: [
      { label: "Penelitian", value: "3+" },
      { label: "Proyek", value: "10+" },
      { label: "Model AI", value: "9+" },
    ],
    scroll: "",
  },
};

const roles = {
  en: [
    "AI Researcher",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "Computer Vision Developer",
    "Cybersecurity Enthusiast",
  ],
  id: [
    "Peneliti AI",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "Developer Computer Vision",
    "Cybersecurity Enthusiast",
  ],
};

function ProfilePhoto({
  size,
  showLabel = true,
}: {
  size: number;
  showLabel?: boolean;
}) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-sm blur-2xl opacity-30"
        style={{ background: "var(--accent-bright)", transform: "scale(0.85)" }}
      />
      <div
        className="relative w-full h-full rounded-sm overflow-hidden"
        style={{
          border: "1px solid var(--accent)66",
          boxShadow: "0 0 40px var(--accent)22, inset 0 0 40px var(--accent)08",
        }}>
        <Image
          src="/foto-ag.jpg"
          alt="Aprilian Gevindo"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, var(--bg-card)cc)",
          }}
        />
        {showLabel && (
          <div
            className="absolute bottom-0 left-0 right-0 p-3"
            style={{ borderTop: "1px solid var(--accent)22" }}>
            <div
              className="mono text-xs"
              style={{ color: "var(--accent-bright)" }}>
              Aprilian Gevindo
            </div>
            <div
              className="mono text-xs"
              style={{ color: "var(--text-secondary)" }}>
              Padang, ID
            </div>
          </div>
        )}
      </div>
      <div
        className="absolute -top-2 -right-2 w-4 h-4 rounded-sm"
        style={{ background: "var(--accent-bright)", opacity: 0.8 }}
      />
      <div
        className="absolute -bottom-2 -left-2 w-3 h-3 rounded-sm"
        style={{ border: "1px solid var(--accent-bright)", opacity: 0.6 }}
      />
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setRoleIndex(0);
    setDisplayed("");
    setTyping(true);
  }, [lang]);

  useEffect(() => {
    const currentRoles = roles[lang];
    const current = currentRoles[roleIndex];
    let i = typing ? 0 : current.length;
    const interval = setInterval(
      () => {
        if (typing) {
          i++;
          setDisplayed(current.slice(0, i));
          if (i >= current.length) {
            clearInterval(interval);
            setTimeout(() => setTyping(false), 1800);
          }
        } else {
          i--;
          setDisplayed(current.slice(0, i));
          if (i <= 0) {
            clearInterval(interval);
            setRoleIndex((prev) => (prev + 1) % currentRoles.length);
            setTyping(true);
          }
        }
      },
      typing ? 60 : 30,
    );
    return () => clearInterval(interval);
  }, [roleIndex, typing, lang]);

  const t = content[lang];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 md:pb-1 pb-20 max-w-6xl mx-auto relative">
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center lg:hidden">
          <div className="mb-8 animate-fade-in">
            <ProfilePhoto size={160} showLabel={false} />
          </div>

          <div className="flex items-center gap-3 mb-5 animate-fade-in-up justify-center">
            <div
              className="w-2 h-2 rounded-full pulse-glow shrink-0"
              style={{ background: "var(--accent-bright)" }}
            />
            <span className="section-label">{t.badge}</span>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}>
            <h1
              className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-2"
              style={{ color: "var(--text-primary)" }}>
              Aprilian
            </h1>
            <h1
              className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-6 glow-text"
              style={{ color: "var(--accent-bright)" }}>
              Gevindo
            </h1>
          </div>

          <div
            className="flex items-center justify-center gap-2 mb-6 h-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}>
            <span
              className="mono text-base md:text-xl"
              style={{ color: "var(--text-secondary)" }}>
              {displayed}
            </span>
            <span
              className="cursor-blink mono text-base md:text-xl"
              style={{ color: "var(--accent-bright)" }}>
              _
            </span>
          </div>

          <p
            className="text-base leading-relaxed mb-8 animate-fade-in-up"
            style={{
              color: "var(--text-secondary)",
              animationDelay: "0.3s",
              maxWidth: "480px",
            }}>
            {t.description}
          </p>

          <div
            className="flex flex-wrap justify-center gap-3 mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}>
            <a
              href="#research"
              className="mono text-sm px-5 py-3 rounded-sm transition-all duration-300 font-medium"
              style={{
                background: "var(--accent-bright)",
                color: "#020c06",
                boxShadow: "0 0 20px var(--accent-bright)44",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px var(--accent-bright)88";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px var(--accent-bright)44";
              }}>
              {t.btnResearch}
            </a>
            <a
              href="#projects"
              className="mono text-sm px-5 py-3 rounded-sm transition-all duration-300"
              style={{
                border: "1px solid var(--bg-card-border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-bright)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--accent-bright)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--bg-card-border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-secondary)";
              }}>
              {t.btnProjects}
            </a>
          </div>
          <div
            className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}>
            <a
              href="https://scholar.google.com/citations?hl=id&user=13b1AQgAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-sm px-5 py-3 rounded-sm transition-all duration-300"
              style={{
                border: "1px solid var(--bg-card-border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-bright)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--accent-bright)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--bg-card-border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-secondary)";
              }}>
              {t.btnScholar}
            </a>
            <a
              href="#contact"
              className="mono text-sm px-5 py-3 rounded-sm transition-all duration-300"
              style={{
                border: "1px solid var(--bg-card-border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-bright)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--accent-bright)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--bg-card-border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-secondary)";
              }}>
              {t.btnContact}
            </a>
          </div>

          <div
            className="flex gap-3 w-full max-w-xs animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}>
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="card-cyber p-3 text-center flex-1"
                style={{ borderColor: "var(--bg-card-border)" }}>
                <div
                  className="mono text-xl font-bold glow-text"
                  style={{ color: "var(--accent-bright)" }}>
                  {stat.value}
                </div>
                <div
                  className="mono text-xs mt-0.5"
                  style={{ color: "var(--text-secondary)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <div
                className="w-2 h-2 rounded-full pulse-glow shrink-0"
                style={{ background: "var(--accent-bright)" }}
              />
              <span className="section-label">{t.badge}</span>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}>
              <h1
                className="text-7xl font-bold leading-none tracking-tight mb-2"
                style={{ color: "var(--text-primary)" }}>
                Aprilian
              </h1>
              <h1
                className="text-7xl font-bold leading-none tracking-tight mb-8 glow-text"
                style={{ color: "var(--accent-bright)" }}>
                Gevindo
              </h1>
            </div>

            <div
              className="flex items-center gap-2 mb-8 h-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}>
              <span
                className="mono text-xl"
                style={{ color: "var(--text-secondary)" }}>
                {displayed}
              </span>
              <span
                className="cursor-blink mono text-xl"
                style={{ color: "var(--accent-bright)" }}>
                _
              </span>
            </div>

            <p
              className="max-w-xl text-lg leading-relaxed mb-10 animate-fade-in-up"
              style={{
                color: "var(--text-secondary)",
                animationDelay: "0.3s",
              }}>
              {t.description}
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}>
              <a
                href="#research"
                className="mono text-sm px-6 py-3 rounded-sm transition-all duration-300 font-medium"
                style={{
                  background: "var(--accent-bright)",
                  color: "#020c06",
                  boxShadow: "0 0 20px var(--accent-bright)44",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 30px var(--accent-bright)88";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 20px var(--accent-bright)44";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}>
                {t.btnResearch}
              </a>
              <a
                href="#projects"
                className="mono text-sm px-6 py-3 rounded-sm transition-all duration-300"
                style={{
                  border: "1px solid var(--bg-card-border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--accent-bright)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--accent-bright)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--bg-card-border)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}>
                {t.btnProjects}
              </a>
              <a
                href="https://scholar.google.com/citations?hl=id&user=13b1AQgAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-sm px-6 py-3 rounded-sm transition-all duration-300"
                style={{
                  border: "1px solid var(--bg-card-border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--accent-bright)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--accent-bright)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--bg-card-border)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}>
                {t.btnScholar}
              </a>
              <a
                href="#contact"
                className="mono text-sm px-6 py-3 rounded-sm transition-all duration-300"
                style={{
                  border: "1px solid var(--bg-card-border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--accent-bright)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--accent-bright)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--bg-card-border)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}>
                {t.btnContact}
              </a>
            </div>
          </div>

          <div
            className="flex flex-col items-center gap-8 animate-fade-in"
            style={{ animationDelay: "0.5s" }}>
            <ProfilePhoto size={260} />
            <div className="flex gap-3">
              {t.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-cyber p-4 text-center w-24"
                  style={{ borderColor: "var(--bg-card-border)" }}>
                  <div
                    className="mono text-2xl font-bold glow-text"
                    style={{ color: "var(--accent-bright)" }}>
                    {stat.value}
                  </div>
                  <div
                    className="mono text-xs mt-1"
                    style={{ color: "var(--text-secondary)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in"
        style={{ animationDelay: "0.8s" }}>
        <span
          className="mono text-xs"
          style={{ color: "var(--text-secondary)" }}>
          {t.scroll}
        </span>
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent-bright)88, transparent)",
          }}
        />
      </div>
    </section>
  );
}

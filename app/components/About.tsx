"use client";
import { useState } from "react";
import { useLang } from "./LangContext";
import { Zap, Eye, Bot, Shield, BarChart, Lock, ChevronLeft, ChevronRight } from "lucide-react";

const interests = [
  { label: { en: "Machine Learning", id: "Machine Learning" }, icon: <Zap size={20} className="text-accent-bright" /> },
  {
    label: {
      en: "Deep Learning / Computer Vision",
      id: "Deep Learning / Computer Vision",
    },
    icon: <Eye size={20} className="text-accent-bright" />,
  },
  {
    label: { en: "Intelligent Systems", id: "Intelligent Systems" },
    icon: <Bot size={20} className="text-accent-bright" />,
  },
  { label: { en: "Cybersecurity", id: "Keamanan Siber" }, icon: <Shield size={20} className="text-accent-bright" /> },
  { label: { en: "Data Science", id: "Data Science" }, icon: <BarChart size={20} className="text-accent-bright" /> },
  { label: { en: "Network Security", id: "Keamanan Jaringan" }, icon: <Lock size={20} className="text-accent-bright" /> },
];

const certs = [
  {
    title: {
      en: "Python for Data Science & Machine Learning",
      id: "Python for Data Science & Machine Learning",
    },
    org: "UniAthena in partnership with Cambridge International Qualifications (CIQ)",
    year: "2026",
    link: "https://drive.google.com/file/d/1svePK_YfeTE24Tb6hS1-3sEUBYPMbu0E/view",
  },
  {
    title: { en: "AI+ Foundation™", id: "AI+ Foundation™" },
    org: "AI CERTs",
    year: "2026",
    link: "https://drive.google.com/file/d/1XNkNsw9MlHJuJ3cMwKErYfuoOxv2XjDc/view",
  },
  {
    title: {
      en: "Artificial Intelligence and Applications",
      id: "Artificial Intelligence and Applications",
    },
    org: "Huawei Information and Communication Technology (ICT) Academy",
    year: "2026",
    link: "https://drive.google.com/file/d/1x-NB1ftB4-dbsa0Z6by3xO2SlzECQWx1/view",
  },
  {
    title: {
      en: "openGauss Database Technology and Applications",
      id: "openGauss Database Technology and Applications",
    },
    org: "Huawei Information and Communication Technology (ICT) Academy",
    year: "2026",
    link: "https://drive.google.com/file/d/1HFCnNEduLpvdvHHHDNwKM2kwVSLpefsT/view",
  },
  {
    title: {
      en: "Speaker — Event Management",
      id: "Pemateri Event Management",
    },
    org: "Organisasi HIMANPURA PDG",
    year: "2024",
    link: null as string | null,
  },
  {
    title: {
      en: "Award for Web Application Development",
      id: "Penghargaan Atas Pembangunan Aplikasi Berbasis Website",
    },
    org: "Organisasi HIMANPURA PDG",
    year: "2023",
    link: "https://drive.google.com/file/d/1jSEsRQNA8LgiJq-3c2ZRW81JvEQ2yMYy/view",
  },
  {
    title: {
      en: "Speaker — Web Programming",
      id: "Pemateri Web Programming",
    },
    org: "Forum Studi Informatika Universitas Putra Indonesia YPTK Padang",
    year: "2022",
    link: "https://drive.google.com/file/d/1nN3lnwdYHFXNHvQWjuk7XDk55xCXhQMR/view",
  },
  {
    title: {
      en: "Speaker — Object Oriented Programming (OOP)",
      id: "Pemateri Object Oriented Programming (OOP)",
    },
    org: "Forum Studi Informatika Universitas Putra Indonesia YPTK Padang",
    year: "2022",
    link: "https://drive.google.com/file/d/1yJPTjF6ojcGU_g7d3KJAvOQ-fdNhMTji/view",
  },
];

const content = {
  en: {
    sectionLabel: "ABOUT ME",
    heading: "About",
    headingAccent: "Me",
    p1: "I am a Lecturer at Universitas Bhakti Kencana and a graduate of Master of Informatics Engineering at Universitas Putra Indonesia YPTK Padang, specializing in Intelligent Systems. Experienced in research and application of Machine Learning and Deep Learning, particularly in network security and computer vision.",
    p2: "With a solid track record of reputable scientific publications and active experience in higher education teaching and data/AI-driven systems development, I am strongly dedicated to the Tridharma of Higher Education, applied research, and the latest intelligent technologies.",
    interestsLabel: "RESEARCH INTERESTS",
    certsLabel: "CERTIFICATES & TRAINING",
    viewButton: "View",
  },
  id: {
    sectionLabel: "TENTANG SAYA",
    heading: "Tentang",
    headingAccent: "Saya",
    p1: "Saya adalah Dosen di Universitas Bhakti Kencana dan lulusan Magister Teknik Informatika di Universitas Putra Indonesia YPTK Padang dengan konsentrasi Intelligent Systems. Berpengalaman dalam penelitian dan penerapan Machine Learning serta Deep Learning, khususnya pada domain keamanan jaringan dan computer vision.",
    p2: "Memiliki rekam jejak publikasi ilmiah bereputasi serta pengalaman aktif dalam pengajaran perguruan tinggi dan pengembangan sistem berbasis data/AI. Berkomitmen kuat pada pelaksanaan Tridharma Perguruan Tinggi, pengembangan riset terapan, dan pemanfaatan teknologi cerdas terkini.",
    interestsLabel: "MINAT PENELITIAN",
    certsLabel: "SERTIFIKAT & PELATIHAN",
    viewButton: "Lihat",
  },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang];
  const [certPage, setCertPage] = useState(1);
  const CERTS_PER_PAGE = 6;
  const totalCertPages = Math.ceil(certs.length / CERTS_PER_PAGE);
  const displayedCerts = certs.slice((certPage - 1) * CERTS_PER_PAGE, certPage * CERTS_PER_PAGE);

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
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {displayedCerts.map((cert, i) => {
            const isClickable = Boolean(cert.link);
            const CardTag = isClickable ? "a" : "div";
            const cardProps = isClickable
              ? { href: cert.link as string, target: "_blank", rel: "noopener noreferrer" }
              : {};
            
            return (
            <CardTag
              key={i}
              className="card-cyber p-4 rounded-sm flex items-start gap-3 transition-transform duration-300 hover:-translate-y-1 block"
              {...cardProps}>
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
                  <span
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
                  </span>
                )}
              </div>
            </CardTag>
            );
          })}
        </div>
        
        {totalCertPages > 1 && (
          <div className="flex items-center justify-between p-4 rounded-sm" style={{ background: "var(--accent)05", border: "1px solid var(--accent)15" }}>
            <span className="mono text-xs" style={{ color: "var(--text-secondary)" }}>
              PAGE <span className="font-bold" style={{ color: "var(--accent-bright)" }}>{certPage}</span> OF {totalCertPages}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCertPage(p => Math.max(1, p - 1))}
                disabled={certPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300"
                style={{
                  border: "1px solid",
                  borderColor: certPage === 1 ? "var(--bg-card-border)" : "var(--accent)44",
                  color: certPage === 1 ? "var(--text-secondary)" : "var(--accent-bright)",
                  background: certPage === 1 ? "transparent" : "var(--accent)12",
                  opacity: certPage === 1 ? 0.4 : 1,
                  cursor: certPage === 1 ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (certPage !== 1) {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)22";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px var(--accent)44";
                  }
                }}
                onMouseLeave={(e) => {
                  if (certPage !== 1) {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)12";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }
                }}>
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setCertPage(p => Math.min(totalCertPages, p + 1))}
                disabled={certPage === totalCertPages}
                className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300"
                style={{
                  border: "1px solid",
                  borderColor: certPage === totalCertPages ? "var(--bg-card-border)" : "var(--accent)44",
                  color: certPage === totalCertPages ? "var(--text-secondary)" : "var(--accent-bright)",
                  background: certPage === totalCertPages ? "transparent" : "var(--accent)12",
                  opacity: certPage === totalCertPages ? 0.4 : 1,
                  cursor: certPage === totalCertPages ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (certPage !== totalCertPages) {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)22";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px var(--accent)44";
                  }
                }}
                onMouseLeave={(e) => {
                  if (certPage !== totalCertPages) {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)12";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }
                }}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

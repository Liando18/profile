"use client";
import { useLang } from "./LangContext";

const experiences = [
  {
    role: {
      en: "Lecturer (Permanent Faculty)",
      id: "Dosen Tetap",
    },
    company: "Universitas Bhakti Kencana",
    period: {
      en: "Aug 2026 – Present",
      id: "Agustus 2026 – Sekarang",
    },
    stack: ["Sistem Pintar", "Software Engineering", "Jaringan Komputer"],
    points: {
      en: [
        "Permanent lecturer at Universitas Bhakti Kencana.",
        "Teaching at the Faculty of Social Sciences in the Health Informatics study program.",
        "Subject clusters: Intelligent Systems, Software Engineering, and Computer Networks.",
      ],
      id: [
        "Menjadi dosen tetap di Universitas Bhakti Kencana.",
        "Mengajar di Fakultas Sosial pada program studi Informatika Kesehatan.",
        "Rumpun ilmu yaitu Sistem Pintar, Software Engineering, dan Jaringan Komputer.",
      ],
    },
  },
  {
    role: {
      en: "Student Competition Project",
      id: "Proyek Kompetisi Siswa",
    },
    company: "SMA Negeri 2 Painan",
    period: {
      en: "Jan – Jun 2025",
      id: "Januari – Juni 2025",
    },
    stack: ["Laravel Inertia", "React", "MySQL", "GIS"],
    points: {
      en: [
        "System used for student competition contests.",
        "Marketplace-like app concept featuring GIS-based drone delivery.",
        "Developed using Laravel Inertia (React) and MySQL database.",
      ],
      id: [
        "Sistem digunakan untuk kompetisi perlombaan siswa.",
        "Konsep aplikasi seperti marketplace, tetapi berbasis GIS untuk pengiriman barang melalui drone.",
        "Pengembangan menggunakan Laravel Inertia (React) serta database MySQL.",
      ],
    },
  },
  {
    role: { en: "Web Developer", id: "Web Developer" },
    company: "AGRATA Teknik",
    period: {
      en: "Aug – Nov 2024",
      id: "Agustus – November 2024",
    },
    stack: ["ReactJS", "ExpressJS", "MySQL"],
    points: {
      en: [
        "Developed web-based application for home appliance repair services promotion.",
        "Executed on a freelance basis.",
        "Built using ReactJS, ExpressJS, and MySQL database.",
      ],
      id: [
        "Mengembangkan aplikasi berbasis web untuk promosi jasa servis peralatan rumah tangga.",
        "Pekerjaan dilakukan secara freelance.",
        "Pengembangan menggunakan ReactJS dan ExpressJS serta database MySQL.",
      ],
    },
  },
  {
    role: { en: "Web Developer", id: "Web Developer" },
    company: "PT. Malayapura Spices Group",
    period: {
      en: "Feb – May 2024",
      id: "Februari – Mei 2024",
    },
    stack: ["ReactJS"],
    points: {
      en: [
        "Developed company profile website for a spice export enterprise.",
        "Executed on a freelance basis.",
        "Built using ReactJS.",
      ],
      id: [
        "Mengembangkan website untuk company profile perusahaan.",
        "Pekerjaan dilakukan secara freelance.",
        "Pengembangan menggunakan ReactJS.",
      ],
    },
  },
  {
    role: { en: "Web Developer", id: "Web Developer" },
    company: "PT. Andalasia Publisher Corp",
    period: {
      en: "May – Dec 2023",
      id: "Mei – Desember 2023",
    },
    stack: ["Laravel", "MySQL"],
    points: {
      en: [
        "Developed website platform for publishing books and scientific articles.",
        "Executed on a freelance basis.",
        "Built using Laravel and MySQL database.",
      ],
      id: [
        "Mengembangkan website untuk publikasi buku dan artikel.",
        "Pekerjaan dilakukan secara freelance.",
        "Pengembangan menggunakan Laravel dan database MySQL.",
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
                · {exp.period[lang]}
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

"use client";
import { useLang } from "./LangContext";

const papers = [
  {
    title: {
      en: "Simulation and Analysis of Hybrid Teaming Strategy Using Naive Bayes Algorithm in DDoS Attack Detection",
      id: "Simulasi dan Analisis Strategi Hybrid Teaming Menggunakan Algoritma Naive Bayes dalam Deteksi Serangan DDoS",
    },
    journal: "Journal of Information System Research (JOSH)",
    date: "April 2026",
    status: { en: "Accepted", id: "Diterima" },
    statusColor: "#00ff88",
    tags: [
      "Naive Bayes",
      "DDoS Detection",
      "Cybersecurity",
      "Network Security",
    ],
    abstract: {
      en: "Hybrid teaming strategy simulation and analysis using Naive Bayes algorithm for DDoS attack detection in computer networks.",
      id: "Simulasi dan analisis strategi hybrid teaming menggunakan algoritma Naive Bayes untuk deteksi serangan DDoS pada jaringan komputer.",
    },
  },
  {
    title: {
      en: "Smoker Detection Using YOLO Algorithm and Convolutional Neural Network (CNN)",
      id: "Deteksi Perokok Menggunakan Algoritma YOLO dan Convolutional Neural Network (CNN)",
    },
    journal: "JTI — Jurnal Informatika Terpadu",
    date: "Februari 2026",
    status: { en: "Revision Stage", id: "Tahapan Revisi" },
    statusColor: "#facc15",
    tags: ["YOLO", "CNN", "Computer Vision", "Object Detection"],
    abstract: {
      en: "Real-time smoker detection system combining YOLO object detection with CNN classification for intelligent surveillance applications.",
      id: "Sistem deteksi perokok secara real-time yang menggabungkan YOLO untuk deteksi objek dengan klasifikasi CNN untuk aplikasi pengawasan cerdas.",
    },
  },
  {
    title: {
      en: "Applying Machine Learning to Detect Anomaly Attacks in Computer Networks: Systematic Literature Review",
      id: "Penerapan Machine Learning untuk Mendeteksi Serangan Anomali dalam Jaringan Komputer: Systematic Literature Review",
    },
    journal: "JATI — Jurnal Mahasiswa Teknik Informatika",
    date: "Juni 2025",
    status: { en: "Published", id: "Terbit" },
    statusColor: "#00ff88",
    tags: ["Machine Learning", "Anomaly Detection", "Network Security", "SLR"],
    abstract: {
      en: "Comprehensive systematic literature review on the application of machine learning methods for detecting network anomaly attacks.",
      id: "Systematic literature review komprehensif tentang penerapan metode machine learning untuk mendeteksi serangan anomali jaringan.",
    },
  },
  {
    title: {
      en: "Queue Tree & Port Blocking Method for Network Security at Tapan Regional Hospital Using Mikrotik",
      id: "Penerapan Metode Queue Tree dan Port Blocking untuk Keamanan Jaringan pada RSUD Tapan Menggunakan Mikrotik",
    },
    journal: { en: "S1 Thesis", id: "Skripsi S1" },
    date: "September 2024",
    status: { en: "Completed", id: "Selesai" },
    statusColor: "#60a5fa",
    tags: ["Mikrotik", "Network Management", "Bandwidth", "Security"],
    abstract: {
      en: "Implementation of Queue Tree for bandwidth management and Port Blocking for network security at Tapan Regional Hospital using Mikrotik Router OS.",
      id: "Implementasi Queue Tree untuk manajemen bandwidth dan Port Blocking untuk keamanan jaringan di RSUD Tapan menggunakan Mikrotik Router OS.",
    },
  },
];

const content = {
  en: {
    sectionLabel: "PUBLICATIONS & RESEARCH",
    heading: "Research",
    headingAccent: "Papers",
    scholarLink: "View all on Google Scholar",
  },
  id: {
    sectionLabel: "PUBLIKASI & PENELITIAN",
    heading: "Karya",
    headingAccent: "Ilmiah",
    scholarLink: "Lihat semua di Google Scholar",
  },
};

export default function Research() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="research" className="pt-20 pb-20 px-6 max-w-6xl mx-auto">
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

      <div className="grid gap-5">
        {papers.map((paper, i) => (
          <div key={i} className="card-cyber p-6 md:p-8 rounded-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3
                  className="text-base md:text-lg font-semibold leading-snug mb-2"
                  style={{ color: "var(--text-primary)" }}>
                  {paper.title[lang]}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span
                    className="mono text-xs"
                    style={{ color: "var(--accent-bright)" }}>
                    {typeof paper.journal === "string"
                      ? paper.journal
                      : paper.journal[lang]}
                  </span>
                  <span
                    className="mono text-xs"
                    style={{ color: "var(--text-muted)" }}>
                    {paper.date}
                  </span>
                </div>
              </div>
              <div className="shrink-0">
                <span
                  className="mono text-xs px-3 py-1 rounded-sm border"
                  style={{
                    color: paper.statusColor,
                    borderColor: paper.statusColor + "44",
                    background: paper.statusColor + "12",
                  }}>
                  {paper.status[lang]}
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}>
              {paper.abstract[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <span key={tag} className="tag-cyber">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="https://scholar.google.com/citations?hl=id&user=13b1AQgAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="mono text-xs flex items-center gap-2 transition-all duration-200"
          style={{ color: "var(--accent-bright)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.7";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
          }}>
          {t.scholarLink}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

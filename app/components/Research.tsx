"use client";
import { useLang } from "./LangContext";

const papers = [
  {
    title: {
      en: "Design and Development of a Progressive Web App (PWA)-Based Inventory Management System Using EOQ and ROP Algorithms",
      id: "Design and Development of a Progressive Web App (PWA)-Based Inventory Management System Using EOQ and ROP Algorithms",
    },
    journal: "Jurnal Media Computer Science",
    date: { en: "October 2026", id: "Oktober 2026" },
    status: { en: "Accepted (LoA)", id: "LoA / Diterima" },
    statusColor: "#f59e0b",
    tags: ["PWA", "Inventory Management", "EOQ", "ROP", "Web App"],
    abstract: {
      en: "Design and development of a Progressive Web App (PWA) inventory management system implementing Economic Order Quantity (EOQ) and Reorder Point (ROP) algorithms.",
      id: "Perancangan dan pengembangan sistem manajemen inventaris berbasis Progressive Web App (PWA) menggunakan algoritma Economic Order Quantity (EOQ) dan Reorder Point (ROP).",
    },
    link: null as string | null,
  },
  {
    title: {
      en: "Exploring Public Legitimacy of Forestry Companies Through Machine Learning-Based Social Media Sentiment Analysis",
      id: "Mengeksplorasi Legitimasi Publik terhadap Perusahaan Kehutanan Melalui Analisis Sentimen Media Sosial Berbasis Machine Learning",
    },
    journal: "Jurnal Ekonomi dan Bisnis Dharma Andalas",
    date: { en: "July 2026", id: "Juli 2026" },
    status: { en: "Accepted (LoA)", id: "LoA / Diterima" },
    statusColor: "#f59e0b",
    tags: ["Machine Learning", "Sentiment Analysis", "Social Media"],
    abstract: {
      en: "Exploring public legitimacy of forestry companies using machine learning-based sentiment analysis on social media platforms.",
      id: "Mengeksplorasi legitimasi publik terhadap perusahaan kehutanan melalui analisis sentimen media sosial menggunakan pendekatan machine learning.",
    },
    link: null as string | null,
  },
  {
    title: {
      en: "Simulation and Analysis of Hybrid Teaming Strategy Using Naive Bayes Algorithm in DDoS Attack Detection",
      id: "Simulasi dan Analisis Strategi Hybrid Teaming Menggunakan Algoritma Naive Bayes dalam Deteksi Serangan DDoS",
    },
    journal: {
      en: "Journal of Information System Research (JOSH) | Thesis Research",
      id: "Journal of Information System Research (JOSH) | Penelitian Tesis",
    },
    date: { en: "April 2026", id: "April 2026" },
    status: { en: "Published", id: "Terbit" },
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
    link: "https://ejurnal.seminar-id.com/index.php/josh/article/view/9323" as string | null,
  },
  {
    title: {
      en: "Smoker Detection Using You Only Look Once (YOLO) Algorithm and Convolutional Neural Network (CNN)",
      id: "Deteksi Perokok Menggunakan Algoritma You Only Look Once (YOLO) dan Convolutional Neural Network (CNN)",
    },
    journal: "JIT (Jurnal Informatika Terpadu)",
    date: { en: "March 2026", id: "Maret 2026" },
    status: { en: "Published", id: "Terbit" },
    statusColor: "#00ff88",
    tags: ["YOLO", "CNN", "Computer Vision", "Object Detection"],
    abstract: {
      en: "Real-time smoker detection system combining YOLO object detection with CNN classification for intelligent surveillance applications.",
      id: "Sistem deteksi perokok secara real-time yang menggabungkan YOLO untuk deteksi objek dengan klasifikasi CNN untuk aplikasi pengawasan cerdas.",
    },
    link: "https://journal.nurulfikri.ac.id/index.php/JIT/article/view/2783" as string | null,
  },
  {
    title: {
      en: "Applying Machine Learning to Detect Anomaly Attacks in Computer Networks: Systematic Literature Review",
      id: "Penerapan Machine Learning untuk Mendeteksi Serangan Anomali dalam Jaringan Komputer : Systematic Literature Review",
    },
    journal: "JATI (Jurnal Mahasiswa Teknik Informatika)",
    date: { en: "June 2025", id: "Juni 2025" },
    status: { en: "Published", id: "Terbit" },
    statusColor: "#00ff88",
    tags: ["Machine Learning", "Anomaly Detection", "Network Security", "SLR"],
    abstract: {
      en: "Comprehensive systematic literature review on the application of machine learning methods for detecting network anomaly attacks.",
      id: "Systematic literature review komprehensif tentang penerapan metode machine learning untuk mendeteksi serangan anomali jaringan.",
    },
    link: "https://mail.ejournal.itn.ac.id/jati/article/view/13746" as string | null,
  },
  {
    title: {
      en: "Queue Tree Method for Optimizing Bandwidth Management and Port Blocking Method for Network Security at Tapan Regional General Hospital",
      id: "Penerapan Metode Queue Tree dalam Mengoptimalkan Manajemen Bandwith dan Metode Port Blocking untuk Keamanan Jaringan Pada Rumah Sakit Umum Daerah Tapan",
    },
    journal: { en: "Undergraduate Thesis Research", id: "Penelitian Skripsi" },
    date: { en: "September 2024", id: "September 2024" },
    status: { en: "Completed", id: "Selesai" },
    statusColor: "#60a5fa",
    tags: ["Mikrotik", "Queue Tree", "Port Blocking", "Network Security"],
    abstract: {
      en: "Implementation of Queue Tree for bandwidth management and Port Blocking for network security at Tapan Regional Hospital using Mikrotik Router OS.",
      id: "Implementasi Queue Tree untuk manajemen bandwidth dan Port Blocking untuk keamanan jaringan di RSUD Tapan menggunakan Mikrotik Router OS.",
    },
    link: "http://repository.upiyptk.ac.id/13177/" as string | null,
  },
];

const content = {
  en: {
    sectionLabel: "PUBLICATIONS & RESEARCH",
    heading: "Research",
    headingAccent: "Papers",
    scholarLink: "View all on Google Scholar",
    viewButton: "View",
  },
  id: {
    sectionLabel: "PUBLIKASI & PENELITIAN",
    heading: "Karya",
    headingAccent: "Ilmiah",
    scholarLink: "Lihat semua di Google Scholar",
    viewButton: "Lihat",
  },
};

export default function Research() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="research" className="py-10 px-6 max-w-6xl mx-auto">
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
                    {typeof paper.date === "string" ? paper.date : paper.date[lang]}
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span
                  className="mono text-xs px-3 py-1 rounded-sm border"
                  style={{
                    color: paper.statusColor,
                    borderColor: paper.statusColor + "44",
                    background: paper.statusColor + "12",
                  }}>
                  {paper.status[lang]}
                </span>
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-xs px-3 py-1 rounded-sm border flex items-center gap-1.5 transition-all duration-200"
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
                    }}>{t.viewButton}
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
          href="https://scholar.google.co.id/citations?user=UVNvWHYAAAAJ&hl=id&authuser=1&oi=sra"
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

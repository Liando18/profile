"use client";
import { useEffect, useState } from "react";
import { useLang } from "./LangContext";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  PHP: "#4F5D95",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Vue: "#41b883",
  Shell: "#89e051",
};

function timeAgo(date: string, lang: "en" | "id") {
  const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (lang === "id") {
    if (diff < 60) return `${diff}d lalu`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m lalu`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}j lalu`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)}h lalu`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)}bln lalu`;
    return `${Math.floor(diff / 31536000)}thn lalu`;
  }
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`;
  return `${Math.floor(diff / 31536000)}y ago`;
}

const PER_PAGE = 6;

const content = {
  en: {
    sectionLabel: "GITHUB REPOSITORIES",
    heading: "Open Source",
    headingAccent: "Projects",
    filterAll: "All",
    showing: (n: number, total: number) =>
      `Showing ${n} of ${total} repositories`,
    error: "Could not fetch repositories. Check your connection.",
    noResult: "No repositories found for this filter.",
    prev: "← Prev",
    next: "Next →",
    page: (cur: number, total: number) => `Page ${cur} of ${total}`,
  },
  id: {
    sectionLabel: "REPOSITORI GITHUB",
    heading: "Proyek",
    headingAccent: "Open Source",
    filterAll: "Semua",
    showing: (n: number, total: number) =>
      `Menampilkan ${n} dari ${total} repositori`,
    error: "Tidak dapat mengambil repositori. Periksa koneksi Anda.",
    noResult: "Tidak ada repositori untuk filter ini.",
    prev: "← Sebelumnya",
    next: "Berikutnya →",
    page: (cur: number, total: number) => `Halaman ${cur} dari ${total}`,
  },
};

export default function Projects() {
  const { lang } = useLang();
  const t = content[lang];
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("ALL");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Liando18/repos?per_page=100&sort=updated&type=public",
    )
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => !r.fork));
        setLoading(false);
      })
      .catch(() => {
        setError(t.error);
        setLoading(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const languages = [
    "ALL",
    ...Array.from(
      new Set(repos.map((r) => r.language).filter(Boolean) as string[]),
    ),
  ];
  const filtered =
    filter === "ALL" ? repos : repos.filter((r) => r.language === filter);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const displayed = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section id="projects" className="py-10 px-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">{t.sectionLabel}</span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--accent)22" }}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}>
            {t.heading}{" "}
            <span
              className="glow-text"
              style={{ color: "var(--accent-bright)" }}>
              {t.headingAccent}
            </span>
          </h2>
          <a
            href="https://github.com/Liando18"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-xs flex items-center gap-2 transition-opacity duration-200"
            style={{ color: "var(--accent-bright)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github.com/Liando18
          </a>
        </div>
      </div>

      {!loading && !error && (
        <div className="flex flex-wrap gap-2 mb-6">
          {languages.map((lang_) => (
            <button
              key={lang_}
              onClick={() => { setFilter(lang_); setPage(1); }}
              className="mono text-xs px-3 py-1.5 rounded-sm transition-all duration-200 border"
              style={{
                background:
                  filter === lang_ ? "var(--accent-bright)" : "transparent",
                color: filter === lang_ ? "var(--accent-on)" : "var(--text-secondary)",
                borderColor:
                  filter === lang_
                    ? "var(--accent-bright)"
                    : "var(--bg-card-border)",
              }}>
              {lang_ === "ALL" ? t.filterAll : lang_}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="card-cyber p-6 rounded-sm"
              style={{ height: 180 }}>
              <div className="flex flex-col gap-3">
                <div
                  className="h-4 w-2/3 rounded"
                  style={{ background: "var(--accent)18" }}
                />
                <div
                  className="h-3 w-full rounded"
                  style={{ background: "var(--accent)10" }}
                />
                <div
                  className="h-3 w-3/4 rounded"
                  style={{ background: "var(--accent)10" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div
          className="card-cyber p-8 rounded-sm text-center"
          style={{ borderColor: "#ef444444" }}>
          <span className="mono text-sm" style={{ color: "#ef4444" }}>
            {error}
          </span>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cyber p-6 rounded-sm flex flex-col gap-3 group">
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="mono text-sm font-semibold leading-snug group-hover:text-green-400 transition-colors"
                    style={{ color: "var(--text-primary)" }}>
                    {repo.name}
                  </span>
                  <svg
                    className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: "var(--accent-bright)" }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
                {repo.description && (
                  <p
                    className="text-xs leading-relaxed flex-1"
                    style={{ color: "var(--text-secondary)" }}>
                    {repo.description.length > 100
                      ? repo.description.slice(0, 100) + "…"
                      : repo.description}
                  </p>
                )}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {repo.topics.slice(0, 3).map((t_) => (
                      <span key={t_} className="tag-cyber">
                        {t_}
                      </span>
                    ))}
                  </div>
                )}
                <div
                  className="flex items-center justify-between pt-2"
                  style={{ borderTop: "1px solid var(--bg-card-border)" }}>
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            background:
                              langColors[repo.language] || "var(--accent)66",
                          }}
                        />
                        <span
                          className="mono text-xs"
                          style={{ color: "var(--text-secondary)" }}>
                          {repo.language}
                        </span>
                      </div>
                    )}
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1">
                        <span
                          style={{
                            color: "var(--text-secondary)",
                            fontSize: "10px",
                          }}>
                          ★
                        </span>
                        <span
                          className="mono text-xs"
                          style={{ color: "var(--text-secondary)" }}>
                          {repo.stargazers_count}
                        </span>
                      </div>
                    )}
                  </div>
                  <span
                    className="mono text-xs"
                    style={{ color: "var(--text-secondary)" }}>
                    {timeAgo(repo.updated_at, lang)}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {displayed.length === 0 && (
            <div className="text-center py-12">
              <span
                className="mono text-sm"
                style={{ color: "var(--text-secondary)" }}>
                {t.noResult}
              </span>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span
                className="mono text-xs"
                style={{ color: "var(--text-secondary)" }}>
                {t.showing(displayed.length, repos.length)}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="mono text-xs px-4 py-2 rounded-sm border transition-all duration-200"
                  style={{
                    borderColor:
                      page === 1 ? "var(--bg-card-border)" : "var(--accent)44",
                    color:
                      page === 1
                        ? "var(--text-secondary)"
                        : "var(--accent-bright)",
                    opacity: page === 1 ? 0.4 : 1,
                    cursor: page === 1 ? "not-allowed" : "pointer",
                  }}>
                  {t.prev}
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className="mono text-xs w-8 h-8 rounded-sm border transition-all duration-200"
                        style={{
                          background:
                            page === p ? "var(--accent-bright)" : "transparent",
                          color:
                            page === p ? "var(--accent-on)" : "var(--text-secondary)",
                          borderColor:
                            page === p
                              ? "var(--accent-bright)"
                              : "var(--bg-card-border)",
                          fontWeight: page === p ? "bold" : "normal",
                        }}>
                        {p}
                      </button>
                    ),
                  )}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="mono text-xs px-4 py-2 rounded-sm border transition-all duration-200"
                  style={{
                    borderColor:
                      page === totalPages
                        ? "var(--bg-card-border)"
                        : "var(--accent)44",
                    color:
                      page === totalPages
                        ? "var(--text-secondary)"
                        : "var(--accent-bright)",
                    opacity: page === totalPages ? 0.4 : 1,
                    cursor: page === totalPages ? "not-allowed" : "pointer",
                  }}>
                  {t.next}
                </button>
              </div>
            </div>
          )}

          {totalPages <= 1 && (
            <div
              className="mt-6 mono text-xs"
              style={{ color: "var(--text-secondary)" }}>
              {t.showing(displayed.length, repos.length)}
            </div>
          )}
        </>
      )}
    </section>
  );
}

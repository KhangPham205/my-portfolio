import React from "react";
import {
  profile,
  experiences,
  projects,
  techStacks,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">

      {/* ── Header / Navigation ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/75 border-b border-slate-800">
        <nav className="max-w-5xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          <span className="font-mono font-bold text-base sm:text-xl tracking-tight text-teal-400">
            khangphamtuan:~#
          </span>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">Giới Thiệu</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors hidden sm:inline">Kinh Nghiệm</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Dự Án</a>
            <a href="#stack" className="hover:text-teal-400 transition-colors hidden sm:inline">Tech Stack</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Liên Hệ</a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-24 space-y-20 sm:space-y-28">

        {/* ── Hero / About ── */}
        <section id="about" className="space-y-5">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {profile.name}
          </h1>
          <p className="text-base sm:text-xl font-semibold text-slate-300">
            {profile.title}
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            Tôi là một kỹ sư phần mềm chuyên về hệ thống Backend và kiến trúc Microservices.
            Tôi có đam mê với việc ứng dụng Clean Architecture, Event-Driven (Kafka) và Saga
            pattern để xây dựng các hệ thống mạnh mẽ. Bên cạnh đó, tôi cũng đang nghiên cứu
            sâu về độ tin cậy và quyền riêng tư của AI.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Java Spring Boot", "Golang", "Rust", "Microservices", "Kafka", "AI Privacy"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-mono text-teal-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── Experience & Education ── */}
        <section id="experience" className="space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-800 pb-3 text-slate-200">
            Kinh Nghiệm &amp; Học Vấn
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="border-l-2 border-slate-800 pl-4 ml-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-200">{exp.title}</h3>
                <div className="text-slate-400 text-xs sm:text-sm mt-1">
                  {exp.company}{exp.location ? ` • ${exp.location}` : ""}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-800 pb-3 text-slate-200">
            Dự Án &amp; Nghiên Cứu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group p-5 sm:p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col gap-3"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-200 group-hover:text-teal-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Link buttons */}
                {(project.github || project.link) && (
                  <div className="flex gap-2 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-teal-400 border border-slate-700 hover:border-teal-500/50 rounded px-2 py-1 transition-colors"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        GitHub
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-teal-400 border border-slate-700 hover:border-teal-500/50 rounded px-2 py-1 transition-colors"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        {project.linkLabel ?? "Article"}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* RAPP — featured card spanning full width on small, 1 col on lg */}
            <div className="group sm:col-span-2 lg:col-span-1 p-5 sm:p-6 bg-slate-900/50 border border-amber-500/20 rounded-xl hover:border-amber-400/50 hover:bg-slate-900 transition-all duration-300 flex flex-col gap-3">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-200 group-hover:text-amber-400 transition-colors">
                  Dự án RAPP
                </h3>
                <span className="shrink-0 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-2 py-0.5 rounded font-mono">
                  🥈 Silver Medal
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-1">
                Dự án nghiên cứu về độ tin cậy và quyền riêng tư của AI tại InSecLab.
                Xuất sắc giành Huy chương Bạc tại VietFutureAward 2025.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["AI Privacy", "Research", "VietFutureAward"].map((t) => (
                  <span key={t} className="text-xs font-mono text-amber-500/70 bg-amber-500/5 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              {/* RAPP links — điền URL khi có */}
              <div className="flex gap-2 pt-1">
                <a
                  href="https://vietfuture.world/danh-sach-giai-thuong-vietfuture-2025/" /* TODO: link bài báo / tuyên dương */
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-amber-400/70 hover:text-amber-400 border border-amber-500/20 hover:border-amber-400/50 rounded px-2 py-1 transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  VietFutureAward
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section id="stack" className="space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-800 pb-3 text-slate-200">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {(Object.entries(techStacks) as [string, string[]][]).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-widest">{category}</div>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-800 pb-3 text-slate-200">
            Kết Nối
          </h2>
          <p className="text-slate-400 text-sm">Hãy liên hệ với tôi qua các kênh dưới đây:</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-1 text-sm font-medium text-teal-400">
            <a href={`mailto:${profile.email}`} className="hover:underline hover:text-teal-300 transition-colors">
              ✉ Email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline hover:text-teal-300 transition-colors">
              ⌥ GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline hover:text-teal-300 transition-colors">
              ↗ LinkedIn
            </a>
          </div>
        </section>

      </main>

      <footer className="max-w-5xl mx-auto px-4 sm:px-8 py-8 border-t border-slate-900 text-center text-xs text-slate-600 font-mono">
        © {new Date().getFullYear()} Khang Phạm Tuấn. Built with Next.js &amp; Tailwind CSS v4.
      </footer>
    </div>
  );
}
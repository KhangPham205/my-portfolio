import React from "react";
import {
  profile,
  experiences,
  education,
  projects,
  techStacks,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900">

      {/* ── Header / Navigation ── */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
        <nav className="backdrop-blur-md bg-slate-900/85 border border-white/10 shadow-2xl rounded-full px-5 sm:px-8 py-3 flex justify-between items-center w-full max-w-3xl">
          <span className="font-mono font-bold text-sm sm:text-base tracking-tight text-white mr-4">
            khang<span className="text-orange-400">:~#</span>
          </span>
          <div className="flex gap-4 sm:gap-7 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all">Home</a>
            <a href="#about" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all">About</a>
            <a href="#experience" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all hidden sm:block">Experience</a>
            <a href="#projects" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all hidden sm:block">Projects</a>
            <a href="#contact" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all">Contact</a>
          </div>
        </nav>
      </header>

      {/* ── Hero Landing Page ── */}
      <section
        id="hero"
        className="relative h-screen min-h-[500px] flex items-center justify-center text-center overflow-hidden"
      >
        {/* Background image */}
        {profile.heroImage && (
          <img
            src={profile.heroImage}
            alt="hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 px-4 flex flex-col items-center gap-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
            {profile.name}
          </h1>
          <p className="text-base sm:text-xl text-white/80 font-medium tracking-wide">
            {profile.title}
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-white/50 my-1" />

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white text-sm font-semibold rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/80 hover:bg-orange-500 border border-orange-400/50 hover:border-orange-300 text-white text-sm font-semibold rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
              </svg>
              Projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white text-sm font-semibold rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contact
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-white transition-colors cursor-pointer p-2" aria-label="Scroll down">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-24 space-y-20 sm:space-y-28">

        {/* ── About ── */}
        <section id="about" className="space-y-5">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#E87A3E] drop-shadow-sm leading-tight">
            {profile.name}
          </h1>
          <p className="text-base sm:text-xl font-semibold text-slate-700">
            {profile.title}
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
            Hello everyone, I'm a Software Engineer passionate about Backend development and building distributed systems. I'm interested in Clean Architecture, Microservices, Event-Driven Architecture with Kafka, and I constantly strive to build scalable, stable, and maintainable systems.
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
            Beyond Backend, I'm also exploring DevOps, AI Reliability, and AI Privacy, aiming to create solutions that are both efficient and trustworthy.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Java Spring Boot", "Golang", "Rust", "Microservices", "Kafka", "AI Privacy"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-mono text-orange-600 shadow-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* ── Inline contact links ── */}
          <p className="text-slate-500 text-sm">Hãy liên hệ với tớ qua các kênh dưới đây:</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-1 text-sm font-medium text-orange-600">
            <a href={`mailto:${profile.email}`} className="hover:underline hover:text-orange-700 transition-colors">
              ✉ Email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline hover:text-orange-700 transition-colors">
              ⌥ GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline hover:text-orange-700 transition-colors">
              ↗ LinkedIn
            </a>
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-200 pb-3 text-slate-800">
            Education
          </h2>
          <div className="relative pt-2">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-4 bottom-0 w-px bg-orange-100" />

            {education.map((edu, index) => {
              const startDate = edu.period?.split(/\s*[–\-]\s*/)[0]?.trim() ?? "";
              const endDate = edu.period?.split(/\s*[–\-]\s*/)[1]?.trim() ?? "now";
              const initials = edu.school
                .split(/[\s\-–]+/).filter(Boolean).slice(0, 2)
                .map((w: string) => w[0].toUpperCase()).join("");

              return (
                <div key={edu.degree} className="relative mb-6 last:mb-0">
                  {/* End date / "now" marker at top of item */}
                  <div className="flex items-center mb-4">
                    <div className="w-[11px] h-[11px] rounded-full bg-white border-[2.5px] border-orange-500 shadow-sm z-10 shrink-0" />
                    <div className="w-8 h-px bg-orange-300/70" />
                    <span className="text-[11px] font-mono font-bold text-orange-600 ml-3 tracking-wide uppercase">{endDate}</span>
                  </div>

                  {/* Card with connecting horizontal line */}
                  <div className="relative ml-8">
                    {/* Horizontal connector */}
                    <div className="absolute -left-8 top-1/2 w-8 h-px bg-orange-100" />
                    <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white border border-orange-300 z-10" />

                    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          {edu.logo ? (
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-white border border-slate-100 p-1.5 shadow-sm flex items-center justify-center">
                              <img src={edu.logo} alt={edu.school} className="max-w-full max-h-full object-contain" />
                            </div>
                          ) : (
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 flex items-center justify-center text-sm font-bold font-mono text-orange-600 shadow-sm">{initials}</div>
                          )}
                          <div>
                            <h3 className="text-base font-bold text-slate-800 group-hover:text-orange-600 transition-colors">{edu.degree}</h3>
                            <p className="text-slate-500 text-sm mt-0.5">{edu.school}{edu.location ? ` • ${edu.location}` : ""}</p>
                          </div>
                        </div>
                        {/* Period badge removed from card as requested */}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed pl-13 sm:pl-0">{edu.description}</p>
                    </div>
                  </div>

                  {/* Start-date marker at bottom of item */}
                  <div className="flex items-center mt-4">
                    <div className="w-[11px] h-[11px] rounded-full bg-white border-[2.5px] border-orange-500 shadow-sm z-10 shrink-0" />
                    <div className="w-8 h-px bg-orange-300/70" />
                    <span className="text-[11px] font-mono font-bold text-orange-600 ml-3 tracking-wide uppercase">{startDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-200 pb-3 text-slate-800">
            Experience
          </h2>
          <div className="relative pt-2">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-4 bottom-0 w-px bg-orange-100" />

            {experiences.map((exp, index) => {
              const startDate = exp.period?.split(/\s*[–\-]\s*/)[0]?.trim() ?? "";
              const endDate = exp.period?.split(/\s*[–\-]\s*/)[1]?.trim() ?? "now";
              const initials = exp.company
                .split(/[\s\-–]+/).filter(Boolean).slice(0, 2)
                .map((w: string) => w[0].toUpperCase()).join("");

              return (
                <div key={exp.title} className="relative mb-6 last:mb-0">
                  {/* End date / "now" marker at top of item */}
                  <div className="flex items-center mb-4">
                    <div className="w-[11px] h-[11px] rounded-full bg-white border-[2.5px] border-orange-500 shadow-sm z-10 shrink-0" />
                    <div className="w-8 h-px bg-orange-300/70" />
                    <span className="text-[11px] font-mono font-bold text-orange-600 ml-3 tracking-wide uppercase">{endDate}</span>
                  </div>

                  {/* Card with connecting horizontal line */}
                  <div className="relative ml-8">
                    {/* Horizontal connector */}
                    <div className="absolute -left-8 top-1/2 w-8 h-px bg-orange-100" />
                    <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white border border-orange-300 z-10" />

                    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          {exp.logo ? (
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-white border border-slate-100 p-1.5 shadow-sm flex items-center justify-center">
                              <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                            </div>
                          ) : (
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 flex items-center justify-center text-sm font-bold font-mono text-orange-600 shadow-sm">{initials}</div>
                          )}
                          <div>
                            <h3 className="text-base font-bold text-slate-800 group-hover:text-orange-600 transition-colors">{exp.title}</h3>
                            <p className="text-slate-500 text-sm mt-0.5">{exp.company}{exp.location ? ` • ${exp.location}` : ""}</p>
                          </div>
                        </div>
                        {/* Period badge removed from card as requested */}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed pl-13 sm:pl-0">{exp.description}</p>
                    </div>
                  </div>

                  {/* Start-date marker at bottom of item */}
                  <div className="flex items-center mt-4">
                    <div className="w-[11px] h-[11px] rounded-full bg-white border-[2.5px] border-orange-500 shadow-sm z-10 shrink-0" />
                    <div className="w-8 h-px bg-orange-300/70" />
                    <span className="text-[11px] font-mono font-bold text-orange-600 ml-3 tracking-wide uppercase">{startDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-200 pb-3 text-slate-800">
            Projects &amp; Research
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group p-5 sm:p-6 bg-white border border-slate-200 rounded-xl hover:border-orange-400 hover:shadow-md transition-all duration-300 flex flex-col gap-3 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.github || project.link) && (
                  <div className="flex gap-2 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-orange-600 border border-slate-200 hover:border-orange-400 rounded px-2 py-1 transition-colors"
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
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-orange-600 border border-slate-200 hover:border-orange-400 rounded px-2 py-1 transition-colors"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        {project.linkLabel ?? "Article"}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* RAPP — featured card */}
            <div className="group sm:col-span-2 lg:col-span-1 p-5 sm:p-6 bg-amber-50 border border-amber-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col gap-3 shadow-sm">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">
                  RAPP Project
                </h3>
                <span className="shrink-0 bg-amber-100 text-amber-600 border border-amber-300 text-xs px-2 py-0.5 rounded font-mono">
                  🥈 Silver Medal
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed flex-1">
                A research project focusing on AI reliability and privacy at InSecLab.
                Excellently won the Silver Medal at VietFutureAward 2025.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["AI Privacy", "Research", "VietFutureAward"].map((t) => (
                  <span key={t} className="text-xs font-mono text-amber-600/80 bg-amber-100 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <a
                  href="https://vietfuture.world/danh-sach-giai-thuong-vietfuture-2025/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-amber-600/80 hover:text-amber-600 border border-amber-300 hover:border-amber-400 rounded px-2 py-1 transition-colors"
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
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-200 pb-3 text-slate-800">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {(Object.entries(techStacks) as [string, string[]][]).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <div className="text-xs font-mono text-orange-600 uppercase tracking-widest">{category}</div>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
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
          <h2 className="text-xl sm:text-2xl font-bold border-b border-slate-200 pb-3 text-slate-800">
            Connect
          </h2>
          <p className="text-slate-500 text-sm">Feel free to reach out via the following channels:</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-1 text-sm font-medium text-orange-600">
            <a href={`mailto:${profile.email}`} className="hover:underline hover:text-orange-700 transition-colors">
              ✉ Email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline hover:text-orange-700 transition-colors">
              ⌥ GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline hover:text-orange-700 transition-colors">
              ↗ LinkedIn
            </a>
          </div>
        </section>

      </main>

      <footer className="max-w-5xl mx-auto px-4 sm:px-8 py-8 border-t border-slate-200 text-center text-xs text-slate-400 font-mono">
        © {new Date().getFullYear()} / Khang Phạm Tuấn - Built with Next.js &amp; Tailwind CSS v4.
      </footer>
    </div>
  );
}
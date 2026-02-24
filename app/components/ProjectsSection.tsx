"use client";

import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    year: "2025",
    desc: "Personal brand site dengan animasi halus dan performa cepat.",
    tags: ["Next.js", "Tailwind", "GSAP"],
    image: "/assets/projects/app_project_1.jpeg",
  },
  {
    title: "School LMS",
    year: "2024",
    desc: "Platform belajar sederhana dengan manajemen kelas dan tugas.",
    tags: ["React", "Node.js", "Postgres"],
    image: "/assets/projects/web_project_1.jpeg",
  },
  {
    title: "Cafe Ordering",
    year: "2024",
    desc: "Aplikasi pemesanan menu yang ramah mobile untuk kasir.",
    tags: ["Next.js", "Prisma", "Vercel"],
    image: "/assets/projects/web_project_3.jpeg",
  },
  {
    title: "Event Landing",
    year: "2023",
    desc: "Landing page event dengan pendaftaran dan email capture.",
    tags: ["HTML", "CSS", "JS"],
    image: "/assets/projects/app_project_2.jpeg",
  },
  {
    title: "Habit Tracker",
    year: "2023",
    desc: "Dashboard kebiasaan harian dengan visual progress.",
    tags: ["React", "Chart", "Firebase"],
    image: "/assets/projects/web_project_4.jpeg",
  },
  {
    title: "Inventory App",
    year: "2022",
    desc: "Manajemen stok untuk UMKM dengan laporan mingguan.",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "/assets/projects/web_project_2.jpeg",
  },
];

const heights = ["h-[340px]", "h-[240px]", "h-[180px]"];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 font-syne">
      <div className="absolute inset-0 pointer-events-none">
        <div className="fixed -top-24 right-[-120px] w-[420px] h-[420px] rounded-full bg-[#4fffce] opacity-20 blur-[120px]" />
        <div className="fixed bottom-[-140px] left-[-60px] w-[460px] h-[460px] rounded-full bg-[#7b6fff] opacity-20 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fffce]/70 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4fffce]" />
              </span>
              <span className="font-mono-space text-[#4fffce] tracking-[0.2em] text-xs uppercase">
                Selected Work
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Projects<span className="text-[#4fffce]">.</span>
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className="text-right">
            <div className="font-mono-space text-sm text-[#4fffce]">
              {projects.length} projects
            </div>
            <div className="font-mono-space text-sm text-[#4fffce]">
              open to collaboration
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-[18px]"
        >
          {projects.map((project, index) => {
            const height = heights[index % heights.length];
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="break-inside-avoid mb-[18px]"
              >
                <div className="group rounded-[18px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(79,255,206,0.25)]">
                  <div className={`relative ${height} overflow-hidden`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/10" />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080e1a] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                      <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs text-white font-mono-space">
                        View
                      </span>
                    </div>
                    <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.05]" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-semibold text-white">
                        {project.title}
                      </h4>
                      <span className="text-sm text-slate-400 font-mono-space">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-300 font-mono-space leading-6">
                      {project.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full border border-[#4fffce]/40 text-xs text-[#4fffce] font-mono-space"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#4fffce]/60 text-[#4fffce] font-mono-space hover:bg-[#4fffce]/10 transition"
          >
            Lihat Semua Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

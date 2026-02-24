"use client";

import { motion } from "framer-motion";
import React from "react";

const marqueeItems = [
  "Available for work",
  "Open to collaboration",
  "Full Stack Developer",
  "Based in Indonesia",
  "React  Next.js  Node.js",
];

export default function ContactSection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="relative py-20 font-syne">
      <div className="absolute inset-0 pointer-events-none">
        <div className="fixed -top-24 left-[-120px] w-[420px] h-[420px] rounded-full bg-[#4fffce] opacity-20 blur-[120px]" />
        <div className="fixed bottom-[-160px] right-[-80px] w-[460px] h-[460px] rounded-full bg-[#7b6fff] opacity-20 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-6"
      >
        <div className="flex flex-col gap-6 mb-10">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fffce]/70 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4fffce]" />
            </span>
            <span className="font-mono-space text-[#4fffce] tracking-[0.2em] text-xs uppercase">
              Get In Touch
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2
              className="font-serif-instrument text-white leading-[0.95]"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Mari
              <br />
              <span className="italic text-[#4fffce]">Berkolaborasi.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-mono-space text-slate-400 max-w-[420px] leading-7"
          >
            Punya ide atau project baru? Kirim detailnya dan kita bisa mulai
            diskusi untuk eksekusi yang rapi dan efektif.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="w-full mb-12">
          <div className="border-y border-white/10 py-4 overflow-hidden">
            <div className="marquee-track font-mono-space text-sm text-slate-300">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center gap-4">
                  <span>{item}</span>
                  <span className="text-[#4fffce]">•</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="text-sm text-slate-400 font-mono-space uppercase tracking-[0.2em]">
              Hubungi lewat
            </div>
            <div className="border-t border-white/10">
              {[
                { label: "Email", value: "ayusafitri@email.com" },
                { label: "LinkedIn", value: "linkedin.com/in/ayusafitri" },
                { label: "GitHub", value: "github.com/ayusafitri" },
              ].map((item) => (
                <a
                  key={item.label}
                  href="#contact"
                  className="group flex items-center justify-between py-4 border-t border-white/10 last:border-b transition-all hover:translate-x-2 hover:text-[#4fffce]"
                >
                  <div>
                    <div className="text-white font-medium">{item.label}</div>
                    <div className="text-sm text-slate-400 font-mono-space">
                      {item.value}
                    </div>
                  </div>
                  <span className="text-xl text-white/50 group-hover:text-[#4fffce]">
                    →
                  </span>
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#4fffce]/50 text-[#4fffce] font-mono-space text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fffce]/70 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4fffce]" />
              </span>
              Currently available for work
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4fffce] focus:bg-[#4fffce]/5 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4fffce] focus:bg-[#4fffce]/5 transition"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4fffce] focus:bg-[#4fffce]/5 transition"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full h-[130px] rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4fffce] focus:bg-[#4fffce]/5 transition"
              />
              <div className="text-right text-xs text-slate-500 font-mono-space">
                0 / 500
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-sm text-slate-400">
                  Balasan maksimal{" "}
                  <span className="text-[#4fffce] font-mono-space">24 jam</span>
                </div>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4fffce] text-black font-semibold transition hover:brightness-110"
                >
                  Kirim Pesan
                  <span className="inline-flex transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

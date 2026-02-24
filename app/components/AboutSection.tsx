"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="tentang" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 left-8 w-[420px] h-[420px] rounded-full bg-[#4fffce] opacity-20 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-40px] w-[460px] h-[460px] rounded-full bg-[#7b6fff] opacity-20 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-[1100px] mx-auto px-6 md:px-16 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-start">
          <div className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fffce]/70 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4fffce]" />
              </span>
              <span className="font-mono-space text-[#4fffce] tracking-[0.2em] text-sm uppercase">
                About Me
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-serif-instrument text-white leading-tight">
                Ayu <span className="italic text-[#4fffce]">Safitri</span>
              </h2>
              <p className="mt-3 text-sm text-slate-400 font-mono-space uppercase tracking-[0.2em]">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative pl-5">
              <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#4fffce] to-transparent" />
              <p className="text-slate-300 leading-7">
                Pelajar SMK jurusan Rekayasa Perangkat Lunak yang fokus membangun
                aplikasi web modern. Menyukai UI yang rapi, performa cepat, dan
                alur kerja kolaboratif yang jelas.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#4fffce] text-black font-medium transition hover:brightness-110"
              >
                Lihat Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white/80 font-medium transition hover:border-[#4fffce] hover:text-white"
              >
                Hubungi Saya
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block h-full">
            <div className="about-divider h-full" />
          </div>

          <div className="flex flex-col gap-10">
            <motion.div variants={itemVariants} className="space-y-6">
              {[
                {
                  value: "1",
                  label: "Years Experience",
                  desc: "Mengerjakan project web modern.",
                },
                {
                  value: "12",
                  label: "Projects Delivered",
                  desc: "MVP, landing page, dan portfolio.",
                },
                {
                  value: "4",
                  label: "Core Stacks",
                  desc: "React, Next.js, Node.js, Tailwind.",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group flex items-start gap-6 transition-transform duration-300 hover:translate-x-2"
                >
                  <div className="font-serif-instrument text-4xl text-white leading-none transition-colors duration-300 group-hover:text-[#4fffce]">
                    {stat.value}
                    <sup className="text-[#4fffce] text-lg font-serif-instrument">+</sup>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{stat.label}</div>
                    <div className="text-sm text-slate-400">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  no: "01",
                  title: "Clarity First",
                  desc: "Brief rapi, scope jelas, eksekusi cepat.",
                },
                {
                  no: "02",
                  title: "Crafted UI",
                  desc: "Detail tipografi & spacing konsisten.",
                },
                {
                  no: "03",
                  title: "Reliable Delivery",
                  desc: "Iterasi kecil, feedback, shipping.",
                },
              ].map((item) => (
                <div key={item.no} className="flex items-start gap-4">
                  <div className="font-mono-space text-sm text-[#4fffce]">
                    {item.no}
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.title}</div>
                    <div className="text-sm text-slate-400 font-mono-space">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {["Next.js", "React", "Node.js", "Tailwind", "Figma", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-white/15 text-xs text-white/70 font-mono-space transition hover:border-[#4fffce] hover:text-[#4fffce]"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

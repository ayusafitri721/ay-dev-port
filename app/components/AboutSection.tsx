"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, staggerDirection: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section id="tentang" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-[#081226]/40 to-[#071226]/30 border border-gray-800 p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-40 h-40 lg:w-48 lg:h-48 sm:w-44 sm:h-44 rounded-full bg-[#071226] border border-gray-800 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] ring-1 ring-emerald-500/8">
                  <span className="text-sm text-gray-400">avatar</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold neon-heading">Ayu Safitri</h2>
                  <p className="text-sm text-gray-300 mt-1">Full Stack Developer • SMK RPL</p>
                </div>
              </div>

              <div className="mt-4 text-gray-300">
                <div className="max-w-prose mx-auto lg:mx-0 leading-7 text-justify lg:text-left">
                  <p>
                    Pelajar SMK jurusan Rekayasa Perangkat Lunak. Antusias dalam pemrograman — disiplin, bertanggung jawab,
                    dan nyaman bekerja secara mandiri maupun tim. Fokus mengasah kemampuan Full Stack (front-end & back-end)
                    serta pengalaman praktis membangun aplikasi yang cepat dan aksesibel.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 w-full"
            >
              {[
                { label: "Experience", value: "1+ yrs" },
                { label: "Projects", value: "10+" },
                { label: "Languages", value: "JS" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#071122] border border-gray-800 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-emerald-800/50 hover:border-emerald-400/70 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)]"
                >
                  <div className="text-emerald-400 font-bold text-xl">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#071122] border border-gray-800 rounded-2xl p-8 lg:p-10 shadow-[0_10px_30px_rgba(16,185,129,0.04)]"
            >
              <motion.div variants={itemVariants} className="mb-2">
                <h3 className="text-3xl font-bold neon-heading">Tentang Saya</h3>
                <div className="mt-3 h-1 w-24 bg-emerald-400 rounded opacity-80" />
              </motion.div>

              <motion.div variants={itemVariants} className="prose prose-invert max-w-prose text-gray-300 leading-7">
                <p>
                  Saya suka membangun antarmuka yang bersih dan logis, serta menghubungkannya dengan layanan backend yang
                  handal. Saya percaya bahwa aplikasi yang baik adalah gabungan antara UX yang dipikirkan matang dan kode yang
                  terstruktur.
                </p>

                <p>
                  Saat ini saya mengerjakan proyek-proyek kecil yang memungkinkan saya mengasah React, Next.js, dan
                  pengelolaan state. Saya terbiasa dengan Tailwind CSS, membuat komponen yang dapat dipakai ulang, dan
                  menerapkan praktik terbaik untuk performa.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#071226] border border-gray-800 rounded-lg p-4 transition-transform duration-300 hover:translate-x-2 hover:scale-105 hover:shadow-[0_10px_30px_rgba(16,185,129,0.06)]">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5 4.5 12l3 4.5M16.5 7.5 19.5 12l-3 4.5" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-400">Passion</div>
                      <div className="text-emerald-400 font-semibold">Full Stack Development</div>
                      <div className="text-xs text-gray-400 mt-1">Membangun aplikasi end-to-end dengan fokus clean code & performa tinggi</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#071226] border border-gray-800 rounded-lg p-4 transition-transform duration-300 hover:translate-x-2 hover:scale-105 hover:shadow-[0_10px_30px_rgba(16,185,129,0.06)]">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 8-8M7 9v8a2 2 0 0 0 2 2h8" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-400">Goal</div>
                      <div className="text-emerald-400 font-semibold">Bekerja pada produk nyata & membangun portofolio solid</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full text-base lg:text-lg font-medium transform transition-all duration-200 hover:scale-105 shadow-[0_12px_40px_rgba(16,185,129,0.12)] hover:shadow-emerald-600/60 ring-2 ring-emerald-500/30 ring-offset-2 ring-offset-slate-950"
                >
                  Lihat Projects
                </a>

                <a
                  href="#contact"
                  className="inline-block border border-gray-700 px-6 py-3 rounded-full text-gray-300 hover:text-white text-base lg:text-lg font-medium transition-all duration-200 hover:scale-105 shadow-[0_12px_40px_rgba(16,185,129,0.08)] hover:shadow-emerald-600/60 ring-2 ring-emerald-500/30 ring-offset-2 ring-offset-slate-950"
                >
                  Hubungi Saya
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

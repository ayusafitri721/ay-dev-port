"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AvatarPlaceholder() {
  return (
    <div className="w-48 h-48 rounded-full flex items-center justify-center relative">
      <svg viewBox="0 0 200 200" className="w-48 h-48">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#05202a" />
            <stop offset="100%" stopColor="#07121a" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="96" fill="url(#g)" stroke="#05222c" strokeWidth="2" />
        <g>
          <ellipse cx="100" cy="135" rx="42" ry="18" fill="#0b1220" opacity="0.6" />
          <path d="M60 90c8-20 36-28 40-28s32 8 40 28c6 14 6 36 6 36H54s0-22 6-36z" fill="#08121a" />
        </g>
        <circle cx="140" cy="70" r="6" fill="#10b981" opacity="0.18" />
        <circle cx="60" cy="60" r="4" fill="#84cc16" opacity="0.12" />
        <g className="stroke-[6]" stroke="#10b981" strokeOpacity="0.12">
          <circle cx="100" cy="100" r="86" fill="none" />
        </g>
      </svg>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-300">avatar placeholder</span>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <motion.div variants={item} className="bg-[#0b1220] border border-gray-800 rounded-lg p-4 w-full md:w-40 shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] transition">
      <div className="text-2xl font-bold text-emerald-400">{value}</div>
      <div className="text-sm text-gray-300 mt-1">{title}</div>
    </motion.div>
  );
}

function TimelineItem({ year, title, desc }: { year: string; title: string; desc: string }) {
  return (
    <motion.li variants={item} className="relative pl-8 pb-6">
      <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.18)]" />
      <div className="text-sm text-emerald-300 font-semibold">{year}</div>
      <div className="text-lg text-white font-semibold mt-1">{title}</div>
      <div className="text-sm text-gray-300 mt-2">{desc}</div>
    </motion.li>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071226] to-[#020617] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.section initial="hidden" animate="show" variants={container} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column: avatar + quick facts */}
          <motion.div variants={item} className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex flex-col items-center gap-6">
                <AvatarPlaceholder />
                <div className="text-center">
                  <h2 className="text-2xl font-bold neon-heading">Hi, I'm Ayu Safitri</h2>
                  <p className="text-sm text-gray-300 mt-2">Full Stack Developer • SMK RPL</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                  <StatCard title="Experience" value="2+ yrs" />
                  <StatCard title="Education" value="SMK RPL" />
                  <StatCard title="Focus" value="Full-Stack" />
                  <StatCard title="Availability" value="Open" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column: bio + timeline */}
          <motion.div variants={item} className="lg:col-span-2">
            <motion.div variants={item} className="bg-[#071122] border border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold neon-heading mb-3">Tentang Saya</h3>
              <p className="text-gray-300 leading-relaxed">
                Pelajar SMK jurusan Rekayasa Perangkat Lunak yang super antusias di dunia pemrograman. Disiplin, bertanggung jawab, dan bisa bekerja
                secara mandiri maupun dalam tim. Semangat belajar tinggi, terus mengasah keterampilan di bidang teknologi yang terus berkembang. Saat ini fokus
                menjadi Full Stack Developer handal.
              </p>

              <div className="mt-6 text-gray-300">
                <p className="mb-2">Passion: membangun web apps yang bersih, cepat, dan ramah pengguna. Suka merancang UI/UX yang minimal namun efektif, serta menulis backend logic yang andal.</p>
                <p className="mb-2">Goal: bekerja di startup teknologi atau sebagai freelancer untuk proyek yang menantang dan berdampak.</p>
                <p className="mb-2">Fun fact: suka ngoding sambil denger musik K-pop dan menonton anime sebagai hiburan.</p>
              </div>

              <div className="mt-6">
                <Link href="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-3 rounded-full font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.12)]">
                  Mau kolaborasi? Hubungi saya!
                </Link>
              </div>
            </motion.div>

            <motion.div variants={item} className="bg-transparent">
              <h4 className="text-2xl font-bold neon-heading mb-4">My Journey</h4>
              <motion.ul variants={container} initial="hidden" animate="show" className="space-y-4">
                <TimelineItem year="2024" title="Belajar Web Development" desc="Mulai mendalami HTML, CSS, JavaScript, dan frameworks modern." />
                <TimelineItem year="2025" title="SMK RPL" desc="Mengambil jurusan Rekayasa Perangkat Lunak, fokus pada pembuatan aplikasi dan logika backend." />
                <TimelineItem year="Now" title="Full Stack Focus" desc="Meningkatkan skill full-stack: React, Next.js, Node.js, dan deployment." />
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}

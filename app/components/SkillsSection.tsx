"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type SkillItem = {
  name: string;
  level: number;
  note: string;
};

type SkillGroup = {
  title: string;
  tone: string;
  items: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Core Web",
    tone: "from-emerald-400/20 to-emerald-400/0",
    items: [
      { name: "HTML", level: 90, note: "Semantik & aksesibilitas" },
      { name: "CSS", level: 85, note: "Layout modern & animasi" },
      { name: "JavaScript", level: 80, note: "ES6+ & best practice" },
      { name: "TypeScript", level: 75, note: "Typed JavaScript development" },
      { name: "Responsive Design", level: 82, note: "Adaptive layouts across devices" },
      { name: "Web Performance", level: 70, note: "Optimization and loading speed" },
    ],
  },
  {
    title: "Frontend",
    tone: "from-cyan-400/20 to-cyan-400/0",
    items: [
      { name: "React.js", level: 80, note: "Component driven UI" },
      { name: "React Native", level: 72, note: "Mobile app development" },
      { name: "Kotlin", level: 70, note: "Android app development" },
      { name: "Flutter & Dart", level: 68, note: "Cross-platform mobile apps" },
      { name: "Tailwind CSS", level: 82, note: "Utility-first styling" },
      { name: "TypeScript", level: 70, note: "Typed JavaScript development" },
    ],
  },
  {
    title: "Backend",
    tone: "from-teal-400/20 to-teal-400/0",
    items: [
      { name: "Next.js", level: 75, note: "App Router & SSR" },
      { name: "Laravel", level: 72, note: "PHP framework for web apps" },
      { name: "PHP Native", level: 70, note: "Core PHP development" },
      { name: "Express.js", level: 68, note: "Node.js API framework" },
      { name: "MySQL", level: 72, note: "Relational database management" },
      { name: "Go", level: 60, note: "Backend services" },
    ],
  },
  {
    title: "Tools",
    tone: "from-emerald-300/20 to-emerald-300/0",
    items: [
      { name: "Git", level: 82, note: "Branching workflow" },
      { name: "GitHub", level: 82, note: "Repo hosting & collaboration" },
      { name: "Microsoft Office", level: 75, note: "Docs, sheets, and slides" },
      { name: "Figma", level: 68, note: "UI design collaboration" },
      { name: "Postman", level: 75, note: "API testing and collections" },
      { name: "VS Code", level: 85, note: "Primary code editor workflow" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-0 right-0 h-40 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold neon-heading mb-2">Skills</h3>
            <p className="text-gray-300 max-w-2xl">
              Fokus pada pengembangan web modern dengan prioritas pada performa,
              UI yang rapi, dan pengalaman pengguna yang konsisten.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {["Next.js", "React", "Node.js", "Tailwind"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-sm bg-emerald-400/10 border border-emerald-400/30 text-emerald-300"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="bg-[#071122] border border-gray-800 rounded-2xl p-6 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] transition"
            >
              <div className={`rounded-xl p-4 bg-gradient-to-br ${group.tone} border border-gray-800/70`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <h4 className="text-xl font-semibold">{group.title}</h4>
                  </div>
                  <span className="text-xs text-gray-400">Level indikatif</span>
                </div>
                <div className="space-y-4">
                  {group.items.map((item, idx) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <div className="text-gray-100 font-semibold">{item.name}</div>
                        <div className="text-gray-400">{item.level}%</div>
                      </div>
                      <div className="h-2 rounded-full bg-[#0b1a34] border border-gray-800 overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-300"
                          style={{ width: `${item.level}%`, transformOrigin: "left" }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-2">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { title: "Delivery", text: "Mengutamakan deadline dengan quality check." },
            { title: "Collaboration", text: "Komunikasi jelas & dokumentasi rapi." },
            { title: "Growth", text: "Selalu upgrade skill via project kecil." },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="bg-[#071122] border border-gray-800 rounded-xl p-5"
            >
              <div className="text-emerald-300 font-semibold mb-1">{card.title}</div>
              <p className="text-sm text-gray-300">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

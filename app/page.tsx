import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#071226] text-white">
      {/* HERO / LANDING */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto h-screen px-6 md:px-8 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400 text-black font-semibold text-sm">
                  I&apos;m Ready For Job
                </span>
                <RotatingText
                  texts={["Web Design", "Web Development", "Web Programming", "Mobile Development"]}
                  mainClassName="px-2 bg-emerald-400 text-black overflow-hidden py-0.5 rounded-lg text-2xl font-bold inline-flex"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              <div className="flex flex-col items-start">
                <SplitText
                  text="I'm Ayu Safitri!"
                  className="text-5xl md:text-6xl font-semibold text-start text-white mb-2"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <SplitText
                  text="Full Stack Developer"
                  className="text-3xl md:text-5xl font-semibold text-start text-emerald-400 mb-4"
                  delay={75}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                />

                <BlurText
                  text="Pelajar SMK jurusan Rekayasa Perangkat Lunak. Antusias dalam pemrograman—disiplin, bertanggung jawab, dan mampu bekerja secara mandiri maupun dalam tim. Bersemangat belajar dan terus mengasah keterampilan di bidang teknologi. Saat ini fokus menjadi Full Stack Developer handal."
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="text-lg hero-bio max-w-xl"
                />

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-3 rounded-full font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.12)]"
                  >
                    I'm Ready For Job
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 flex justify-center items-center">
              <div className="w-full h-[60vh] md:h-[80vh]">
                <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / TENTANG */}
      <section id="tentang" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center gap-6">
                <div className="w-44 h-44 rounded-full bg-[#071226] border border-gray-800 flex items-center justify-center">
                  <span className="text-sm text-gray-400">avatar</span>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold neon-heading">Hi, I'm Ayu Safitri</h2>
                  <p className="text-sm text-gray-300 mt-2">Full Stack Developer • SMK RPL</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#071122] border border-gray-800 rounded-2xl p-8">
                <h3 className="text-3xl font-bold neon-heading mb-3">Tentang Saya</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pelajar SMK jurusan Rekayasa Perangkat Lunak yang super antusias di dunia pemrograman. Disiplin, bertanggung jawab, dan bisa bekerja
                  secara mandiri maupun dalam tim. Semangat belajar tinggi, terus mengasah keterampilan di bidang teknologi yang terus berkembang. Saat ini fokus
                  menjadi Full Stack Developer handal.
                </p>
                <div className="mt-6 text-gray-300 space-y-2">
                  <p>Passion: membangun web apps yang bersih, cepat, dan ramah pengguna. Suka merancang UI/UX yang minimal namun efektif.</p>
                  <p>Goal: bekerja di startup teknologi atau sebagai freelancer untuk proyek yang menantang dan berdampak.</p>
                  <p>Fun fact: suka ngoding sambil denger musik K-pop dan menonton anime sebagai hiburan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold neon-heading mb-6">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind",
              "Git",
            ].map((s) => (
              <div key={s} className="bg-[#071122] border border-gray-800 rounded-lg p-4 flex items-center justify-center hover:scale-105 transition">
                <div className="text-center">
                  <div className="text-emerald-400 font-bold text-lg">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold neon-heading mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#071122] border border-gray-800 rounded-xl p-6 hover:shadow-[0_10px_30px_rgba(16,185,129,0.06)] transition">
                <div className="text-xl font-semibold">Project {i}</div>
                <p className="text-gray-300 mt-2">Short description of the project with tech used and role.</p>
                <div className="mt-4">
                  <a className="text-emerald-400 hover:underline" href="#">View</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold neon-heading mb-4">Contact</h3>
          <p className="text-gray-300 mb-6">Interested in collaborating? Send me a message or reach out via email.</p>
          <div className="bg-[#071122] border border-gray-800 rounded-xl p-6">
            <form className="grid grid-cols-1 gap-4">
              <input placeholder="Your name" className="bg-transparent border border-gray-700 rounded px-4 py-2 text-white" />
              <input placeholder="Email" className="bg-transparent border border-gray-700 rounded px-4 py-2 text-white" />
              <textarea placeholder="Message" className="bg-transparent border border-gray-700 rounded px-4 py-2 text-white min-h-[120px]" />
              <div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded-full font-semibold">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

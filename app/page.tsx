import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AboutSection from "./components/AboutSection";
import SkillsCarousel from "./components/SkillsCarousel";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

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

      <AboutSection />

      <SkillsCarousel />

      <ProjectsSection />

      <ContactSection />
    </div>
  );
}

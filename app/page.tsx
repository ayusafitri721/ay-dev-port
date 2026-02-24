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
            <div className="md:col-span-6 font-syne">
              <div className="flex items-center gap-3 mb-7">
                <span className="inline-flex items-center px-4 py-[7px] rounded-[99px] border border-[rgba(79,255,206,0.4)] bg-[rgba(79,255,206,0.08)] text-[#4fffce] font-mono-space text-[0.72rem]">
                  I&apos;m Ready For Job
                </span>
                <RotatingText
                  texts={["Web Design", "Web Development", "Web Programming", "Mobile Development"]}
                  mainClassName="px-4 py-[7px] border border-[rgba(79,255,206,0.4)] bg-[rgba(79,255,206,0.08)] text-[#4fffce] overflow-hidden rounded-[99px] text-[0.72rem] font-mono-space inline-flex"
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
                  className="font-syne text-[clamp(1.6rem,3.2vw,2.6rem)] font-extrabold tracking-[-0.03em] leading-[1.08] text-start text-[#f0f4ff] whitespace-nowrap mb-[6px]"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <SplitText
                  text="Full Stack Developer"
                  className="font-syne text-[clamp(1.6rem,3.2vw,2.6rem)] font-extrabold tracking-[-0.03em] leading-[1.08] text-start text-[#4fffce] whitespace-nowrap mb-7"
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
                  className="font-syne font-normal text-[clamp(0.88rem,1.4vw,1rem)] leading-[1.85] text-[rgba(240,244,255,0.55)] max-w-[500px] mb-10"
                />

                <div>
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
              <div className="w-full h-[60vh] md:h-[80vh] hero-lanyard-float">
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

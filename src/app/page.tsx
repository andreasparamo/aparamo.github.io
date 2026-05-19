import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

const languages = [
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "C++", icon: "cplusplus" },
  { name: "C#", icon: "csharp" },
  { name: "HTML/CSS", icon: "html-css" },
  { name: "SQL", icon: "sql" },
];

const frameworks = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: ".NET 8", icon: "dotnet8" },
];

const tools = [
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "vscode" },
  { name: "Firebase", icon: "firebase" },
  { name: "SQLite", icon: "sqlite" },
  { name: "Linux", icon: "linux" },
  { name: "Windows", icon: "windows" },
];

function SkillGrid({
  skills,
  columns = "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
}: {
  skills: { name: string; icon: string }[];
  columns?: string;
}) {
  return (
    <div className={`grid ${columns} gap-8 text-center text-sm md:text-base text-slate-300`}>
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center gap-3 py-4 border border-slate-800 rounded-lg hover:border-slate-500 hover:text-white transition-colors"
        >
          <Image
            src={`/icons/skills/${skill.icon}.svg`}
            alt={`${skill.name} logo`}
            width={56}
            height={56}
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
          />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-50 font-sans selection:bg-white/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-10 md:py-10">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <a href="#" className="font-light tracking-widest uppercase text-sm md:text-base hover:opacity-70 transition-opacity">

          </a>
          <div className="flex gap-8 text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-400">
            <a href="#work" className="hover:text-white transition-colors duration-200">Work</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-4">
          <AnimatedSection delay={0.1}>
            <h6 className="text-sm md:text-xl text-slate-400 font-light ml-1 md:ml-2 uppercase tracking-[0.2em] mb-2">
              Andreas Arifin Paramo
            </h6>
          </AnimatedSection>
        </div>

        <div className="flex flex-col -gap-2 sm:-gap-4">
          <AnimatedSection delay={0.2}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] text-white">
              FrontEnd
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] text-slate-400">
              BackEnd
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] text-slate-700">
              Developer
            </h1>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-12 md:mt-16 w-11/12 md:w-8/12 lg:w-1/2 ml-auto text-left md:text-right">
            <p className="text-base md:text-lg lg:text-xl font-light text-slate-300 leading-relaxed">
              Dedicated to transforming <strong>complex technical challenges into elegant, functional solutions</strong>. My focus is on delivering clean, maintainable code paired with intuitive design. I am quick to adapt to new environments and passionate about building software that is both robust and user-friendly.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Intro Section */}
      <section id="work" className="w-full min-h-screen px-6 md:px-10 lg:px-20 py-32 max-w-7xl mx-auto flex flex-col justify-center">
        <AnimatedSection>
          <p className="text-3xl sm:text-5xl lg:text-7xl font-thin leading-tight text-white mb-16">
            Great software exists at the intersection of <strong>intuitive design</strong> and <strong>robust architecture</strong>. It requires more than visual appeal; it demands <strong>reliable, maintainable code</strong>.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mb-8">
            <h5 className="text-2xl sm:text-3xl uppercase text-slate-400 font-semibold tracking-widest">
              Projects
            </h5>
          </div>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            Over the years, I have embarked on a diverse range of projects that have allowed me to explore different facets of software development. From building full-stack applications to diving into the complexities of machine learning, each project has been a stepping stone in my journey.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Web Development", "UI/UX Design", "Machine Learning", "Desktop Apps"].map((tag) => (
              <span key={tag} className="text-xs md:text-sm border border-slate-600 rounded-md px-4 py-2 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Projects List Section */}
      <section className="w-full pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Project 01 */}
          <AnimatedSection>
            <a href="https://learntotype.xyz" target="_blank" rel="noreferrer" className="group block border-y border-dashed border-slate-700 py-8 px-6 md:px-10 mt-[-1px] hover:bg-white/5 transition-colors duration-300">
              <div className="flex items-center gap-6 md:gap-12 w-full">
                <span className="text-3xl md:text-5xl font-extralight text-slate-500 tracking-tighter flex-shrink-0">01</span>

                {/* Changed from w-full to flex-1 to prevent squashing the button */}
                <div className="flex-1">
                  <div className="text-xs md:text-sm text-slate-400 font-extralight tracking-widest uppercase mb-1">Web Application</div>
                  <div className="text-2xl md:text-4xl font-light text-white group-hover:text-slate-300 transition-colors">LearnToType</div>
                </div>

                {/* Added flex-shrink-0, a slide-in animation, and refined pill styling */}
                <div className="flex-shrink-0 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
                  <span className="inline-flex items-center justify-center border border-slate-500 group-hover:border-white group-hover:bg-white group-hover:text-black rounded-full px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-slate-300 transition-all duration-300 whitespace-nowrap">
                    View Project
                  </span>
                </div>
              </div>
            </a>
          </AnimatedSection>

          {/* Project 02 */}
          <AnimatedSection>
            <a href="https://github.com/andreasparamo/prism" target="_blank" rel="noreferrer" className="group block border-b border-dashed border-slate-700 py-8 px-6 md:px-10 hover:bg-white/5 transition-colors duration-300">
              <div className="flex items-center gap-6 md:gap-12 w-full">
                <span className="text-3xl md:text-5xl font-extralight text-slate-500 tracking-tighter flex-shrink-0">02</span>

                <div className="flex-1">
                  <div className="text-xs md:text-sm text-slate-400 font-extralight tracking-widest uppercase mb-1">Desktop App</div>
                  <div className="text-2xl md:text-4xl font-light text-white group-hover:text-slate-300 transition-colors">Prism (Screen Time Manager)</div>
                </div>

                <div className="flex-shrink-0 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
                  <span className="inline-flex items-center justify-center border border-slate-500 group-hover:border-white group-hover:bg-white group-hover:text-black rounded-full px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-slate-300 transition-all duration-300 whitespace-nowrap">
                    View Project
                  </span>
                </div>
              </div>
            </a>
          </AnimatedSection>

          {/* Project 03 */}
          <AnimatedSection>
            <a href="https://github.com/TylerKilgoreUNT/video-scene-segmentation-g4" target="_blank" rel="noreferrer" className="group block border-b border-dashed border-slate-700 py-8 px-6 md:px-10 hover:bg-white/5 transition-colors duration-300">
              <div className="flex items-center gap-6 md:gap-12 w-full">
                <span className="text-3xl md:text-5xl font-extralight text-slate-500 tracking-tighter flex-shrink-0">03</span>

                <div className="flex-1">
                  <div className="text-xs md:text-sm text-slate-400 font-extralight tracking-widest uppercase mb-1">Python / ML</div>
                  <div className="text-2xl md:text-4xl font-light text-white group-hover:text-slate-300 transition-colors">Video Scene Segmentation</div>
                </div>

                <div className="flex-shrink-0 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
                  <span className="inline-flex items-center justify-center border border-slate-500 group-hover:border-white group-hover:bg-white group-hover:text-black rounded-full px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-slate-300 transition-all duration-300 whitespace-nowrap">
                    View Project
                  </span>
                </div>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full bg-slate-950 py-32 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection>
            <h5 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-16">Experience</h5>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-2">
                <div className="group w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors duration-300"
                  >
                    <rect x="4" y="4" width="16" height="11" rx="1" />
                    <path d="M 2 19 L 22 19" strokeWidth="2" />
                    <path d="M 4 15 L 2 19" />
                    <path d="M 20 15 L 22 19" />
                    <path d="M 10 7 L 7 9.5 L 10 12" stroke="#fef08a" />
                    <path d="M 14 7 L 17 9.5 L 14 12" stroke="#fef08a" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Web Developer</h3>
                <h4 className="text-slate-400">Parada Ltd.</h4>
                <p className="text-sm text-slate-500 mt-2">Remote | May 2023 – Aug 2023</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-2">
                <div className="group w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors duration-300"
                  >
                    <rect x="2" y="4" width="14" height="12" rx="1" />
                    <path d="M 16 9 L 20 9 L 23 12 L 23 16 L 16 16 Z" />
                    <path d="M 16 12 L 21.5 12 L 19 9 L 16 9 Z" fill="#fef08a" stroke="#fef08a" strokeWidth="1" />
                    <circle cx="6" cy="18" r="2.5" />
                    <circle cx="18" cy="18" r="2.5" />
                    <line x1="4" y1="8" x2="10" y2="8" stroke="#fef08a" />
                    <line x1="5" y1="12" x2="9" y2="12" stroke="#fef08a" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Delivery Associate</h3>
                <h4 className="text-slate-400">Amazon DSP</h4>
                <p className="text-sm text-slate-500 mt-2">Coppell, TX | Jan 2025 – Present</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col gap-2">
                <div className="group w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M 3 2 L 5 2 L 5 20 L 14 20" />
                    <circle cx="5" cy="20" r="2" />
                    <rect x="6" y="12" width="11" height="8" rx="1" />
                    <rect x="8" y="5" width="8" height="7" rx="1" />
                    <line x1="11.5" y1="12" x2="11.5" y2="20" stroke="#fef08a" />
                    <line x1="8" y1="8.5" x2="16" y2="8.5" stroke="#fef08a" strokeDasharray="2 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Moving Specialist</h3>
                <h4 className="text-slate-400">Pack Pro Movers</h4>
                <p className="text-sm text-slate-500 mt-2">Plano, TX | Jan 2024 – Jan 2025</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About / Skills Section */}
      <section id="about" className="w-full py-32 max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="mb-20 border-t border-dashed border-slate-800 pt-8">
            <h5 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-12">Languages</h5>
            <SkillGrid skills={languages} />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-20 border-t border-dashed border-slate-800 pt-8">
            <h5 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-12">Frameworks</h5>
            <SkillGrid skills={frameworks} columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-5" />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-20 border-t border-dashed border-slate-800 pt-8">
            <h5 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-12">Tools & Platforms</h5>
            <SkillGrid skills={tools} columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-5" />
          </div>
        </AnimatedSection>
      </section>

      {/* Footer CTA */}
      <footer className="w-full bg-slate-100 text-black py-32 px-6 md:px-10 lg:px-20 relative flex flex-col items-center justify-center text-center">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <p className="text-4xl sm:text-5xl lg:text-7xl font-thin leading-tight tracking-tight mb-12">
              Looking for new talent? New talent brings <strong>fresh perspectives</strong> and <strong>ignites innovation</strong>.
            </p>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-12 text-slate-700">
              Feel free to download my resume or contact me to discuss your next big idea! I'm available for full-time or freelance work. <strong>Let’s create something great together!</strong>
            </p>
            <a
              href="/Resume_P.pdf"
              download
              className="inline-flex items-center gap-3 border border-black rounded-full px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 text-lg uppercase tracking-widest font-semibold"
            >
              <span>Download my CV</span>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                <path d="M13 11l1.5 6l1.5 -6"></path>
              </svg>
            </a>

            <div className="mt-12 text-sm text-slate-500 uppercase tracking-widest font-semibold">
              <a href="mailto:andreasparamo@gmail.com" className="hover:text-black transition-colors">andreasparamo@gmail.com</a>
              <span className="mx-4">|</span>
              <a href="https://github.com/andreasparamo" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
            </div>
          </div>
        </AnimatedSection>

        <div className="absolute bottom-0 w-full py-6 px-6 md:px-10 flex justify-between items-center text-xs text-slate-400 uppercase tracking-widest border-t border-slate-200">
          <p>© {new Date().getFullYear()} Andreas Arifin Paramo</p>
        </div>
      </footer>
    </main>
  );
}

import AnimatedSection from "@/components/AnimatedSection";
import SplineScene from "@/components/SplineScene";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-surface-lighter/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            aparamo
          </a>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#about" className="hover:text-text transition-colors duration-200">About</a>
            <a href="#experience" className="hover:text-text transition-colors duration-200">Experience</a>
            <a href="#projects" className="hover:text-text transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-text transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Spline */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0 z-0">
          <SplineScene sceneUrl="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
        
        {/* Hero Content (Framer Motion inside AnimatedSection) */}
        <div className="relative z-10 text-center max-w-3xl px-6 pointer-events-none">
          <AnimatedSection delay={0.2}>
            <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-sm font-medium backdrop-blur-sm">
              Welcome to the Next Generation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-text via-primary-light to-accent bg-clip-text text-transparent leading-tight drop-shadow-lg">
              Next.js + 3D Portfolio
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A premium, buttery-smooth experience powered by Framer Motion, Lenis, and Spline.
            </p>
            <div className="flex gap-4 justify-center pointer-events-auto">
              <a href="#projects"
                 className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                Explore Work
              </a>
              <a href="#contact"
                 className="px-6 py-3 rounded-xl border border-surface-lighter text-text-muted font-medium text-sm hover:border-primary/50 hover:text-text transition-all duration-300 bg-surface/50 backdrop-blur-sm">
                Get in Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection className="py-32 px-6" delay={0.1}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">About This Stack</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                This boilerplate completely replaces the old Vite setup. It utilizes the powerful App Router from 
                <strong> Next.js</strong>, offering seamless static exports for GitHub Pages.
              </p>
              <p>
                The silky smooth scrolling you feel is powered by <strong>Lenis</strong>, while the reveals and animations 
                are orchestrated by <strong>Framer Motion</strong>. Everything is styled beautifully using <strong>Tailwind CSS v4</strong>.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-surface-lighter flex flex-col items-center justify-center text-text-muted gap-4 shadow-2xl shadow-primary/5">
                <div className="w-16 h-16 rounded-full bg-primary/20 animate-pulse"></div>
                <span className="text-sm font-medium">Interactive Element Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-surface-lighter/50 text-center text-text-muted text-sm bg-surface">
        <p>&copy; {new Date().getFullYear()} aparamo. Built with Next.js, Framer Motion, and Tailwind CSS.</p>
      </footer>
    </main>
  );
}

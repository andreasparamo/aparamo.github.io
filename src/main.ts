import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-surface-lighter/50">
    <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" class="text-xl font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
        aparamo
      </a>
      <div class="flex gap-6 text-sm text-text-muted">
        <a href="#about" class="hover:text-text transition-colors duration-200">About</a>
        <a href="#experience" class="hover:text-text transition-colors duration-200">Experience</a>
        <a href="#projects" class="hover:text-text transition-colors duration-200">Projects</a>
        <a href="#contact" class="hover:text-text transition-colors duration-200">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="hero" class="min-h-screen flex items-center justify-center px-6 pt-20">
    <div class="text-center max-w-3xl">
      <div class="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-sm font-medium">
        Welcome to my portfolio
      </div>
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-text via-primary-light to-accent bg-clip-text text-transparent leading-tight">
        Your Name Here
      </h1>
      <p class="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
        Software Developer &bull; Problem Solver &bull; Builder of Things
      </p>
      <div class="flex gap-4 justify-center">
        <a href="#projects"
           class="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
          View Projects
        </a>
        <a href="#contact"
           class="px-6 py-3 rounded-xl border border-surface-lighter text-text-muted font-medium text-sm hover:border-primary/50 hover:text-text transition-all duration-300">
          Get in Touch
        </a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">
        <span class="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">About Me</span>
      </h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-4 text-text-muted leading-relaxed">
          <p>
            Replace this with a brief introduction about yourself. Describe your background,
            passions, and what drives you as a developer.
          </p>
          <p>
            Add details about your education, skills, and areas of expertise.
          </p>
        </div>
        <div class="flex justify-center">
          <div class="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-surface-lighter flex items-center justify-center text-text-muted text-sm">
            Your Photo
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="py-24 px-6 bg-surface-light/50">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">
        <span class="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Experience</span>
      </h2>
      <div class="space-y-8 max-w-3xl mx-auto">
        <!-- Experience Card -->
        <div class="p-6 rounded-2xl bg-surface border border-surface-lighter hover:border-primary/30 transition-colors duration-300">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-text">Job Title</h3>
            <span class="text-sm text-text-muted">2024 - Present</span>
          </div>
          <p class="text-primary-light text-sm mb-3">Company Name</p>
          <p class="text-text-muted text-sm leading-relaxed">
            Brief description of your role, responsibilities, and key achievements.
          </p>
        </div>
        <!-- Duplicate and fill in more experience cards as needed -->
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">
        <span class="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Projects</span>
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project Card -->
        <div class="group p-6 rounded-2xl bg-surface-light border border-surface-lighter hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
          <div class="w-full h-40 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-5 flex items-center justify-center text-text-muted text-sm">
            Screenshot
          </div>
          <h3 class="text-lg font-semibold text-text mb-2 group-hover:text-primary-light transition-colors">
            Project Name
          </h3>
          <p class="text-text-muted text-sm mb-4 leading-relaxed">
            Brief description of the project and the technologies used.
          </p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-2.5 py-1 rounded-lg bg-primary/10 text-primary-light text-xs font-medium">React</span>
            <span class="px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs font-medium">Node.js</span>
          </div>
        </div>
        <!-- Duplicate and fill in more project cards as needed -->
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-24 px-6 bg-surface-light/50">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">
        <span class="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Get In Touch</span>
      </h2>
      <p class="text-text-muted mb-10 leading-relaxed">
        I'm always open to discussing new projects, opportunities, or just chatting about tech.
      </p>
      <div class="flex gap-4 justify-center flex-wrap">
        <a href="mailto:your@email.com"
           class="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
          Send Email
        </a>
        <a href="https://github.com/aparamo" target="_blank" rel="noopener"
           class="px-6 py-3 rounded-xl border border-surface-lighter text-text-muted font-medium text-sm hover:border-primary/50 hover:text-text transition-all duration-300">
          GitHub
        </a>
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener"
           class="px-6 py-3 rounded-xl border border-surface-lighter text-text-muted font-medium text-sm hover:border-primary/50 hover:text-text transition-all duration-300">
          LinkedIn
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-8 px-6 border-t border-surface-lighter/50 text-center text-text-muted text-sm">
    <p>&copy; ${new Date().getFullYear()} aparamo. Built with Vite &amp; Tailwind CSS.</p>
  </footer>
`;

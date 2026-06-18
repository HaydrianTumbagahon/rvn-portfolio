import { useEffect, useMemo, useState } from 'react';
import { Link as LinkIcon, Menu, X, Phone, Mail, Download, ArrowRight } from 'lucide-react';
import facebookIcon from './assets/icons/facebook.svg';
import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import personalImg from './assets/images/personal_img.png';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const socials = [
  { label: 'Facebook', href: '#', icon: facebookIcon },
  { label: 'GitHub', href: '#', icon: githubIcon },
  { label: 'LinkedIn', href: '#', icon: linkedinIcon }
];

const skills = [
  'html',
  'css',
  'js',
  'react',
  'tailwind'
];

const projects = [
  {
    id: 1,
    title: 'Modern Portfolio Platform',
    date: '2026',
    description: 'A futuristic personal portfolio experience with dark mode, fluid responsiveness, and animated storytelling.',
    color: 'from-sky-500 to-blue-800'
  },
  {
    id: 2,
    title: 'Interactive Dashboard',
    date: '2025',
    description: 'A minimal dashboard with real-time analytics, clean interactions, and intuitive controls.',
    color: 'from-cyan-500 to-indigo-900'
  },
  {
    id: 3,
    title: 'Brand Experience Site',
    date: '2025',
    description: 'A sleek brand landing experience built for storytelling and polished presentation.',
    color: 'from-violet-500 to-slate-900'
  }
];

const quotes = [
  'Design is intelligence made visible.',
  'Minimalism is not a lack of something. It’s simply the perfect amount of something.',
  'Good design is good business.',
  'Simplicity is the ultimate sophistication.',
  'Design adds value faster than it adds costs.',
  'Content precedes design. Design in the absence of content is not design.',
  'Design is the silent ambassador of your brand.',
  'Great design is a multi-layered relationship between human life and its environment.',
  'The details are not the details. They make the design.',
  'Design is thinking made visual.',
  'Every great design begins with an even better story.',
  'The only important thing about design is how it relates to people.',
  'Make it simple, but significant.',
  'Design is where science and art break even.',
  'The best way to predict the future is to create it.',
  'Simplicity carried to an extreme becomes elegance.',
  'Less is more.',
  'Design is not just what it looks like and feels like. Design is how it works.',
  'Innovation distinguishes between a leader and a follower.',
  'Good design is obvious. Great design is transparent.'
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroParallax, setHeroParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? scrollY / maxScroll : 0);
      setHeroParallax(scrollY * 0.14);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setQuoteIndex((current) => (current + 1) % quotes.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const activeQuote = useMemo(() => quotes[quoteIndex], [quoteIndex]);

  return (
    <div className="relative overflow-x-hidden bg-[#050811] text-white">
      <div className="fixed right-0 top-0 z-50 h-screen w-1 bg-white/10">
        <div
          className="h-full w-full origin-top bg-gradient-to-b from-sky-400 via-sky-500 to-transparent"
          style={{ transform: `scaleY(${scrollProgress})` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#02040c]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
          <a href="#home" className="text-lg font-semibold tracking-[0.35em] text-white/90">
            Portfolio
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-underline text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden text-white/90"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-full overflow-hidden bg-slate-950/95 p-6 shadow-[0_0_120px_rgba(15,23,42,0.18)] transition-transform duration-500 ease-in-out md:hidden"
        style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.35em] text-slate-400">Portfolio</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full border border-slate-600 bg-slate-900 p-2 text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex h-full flex-col justify-between rounded-[2rem] bg-[#0b1120]/95 p-4 shadow-sm">
          <div className="space-y-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-[1.5rem] bg-slate-100 px-5 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="p-4">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-400">Socials</p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex min-w-[3rem] flex-shrink-0 items-center justify-center rounded-[1.5rem] bg-white p-3 shadow-sm transition hover:bg-slate-100"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt={social.label} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="relative overflow-hidden pb-24 pt-16">
        <section id="home" className="relative pt-5">
          <div className="absolute right-0 top-20 hidden h-72 w-72 rounded-full bg-sky-500/10 blur-3xl md:block" />
          <div className="absolute left-0 top-64 hidden h-60 w-60 rounded-full bg-blue-500/10 blur-3xl md:block" />

          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1320px] items-center gap-16 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-sky-200">
                Aspiring web designer
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-[clamp(2.6rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
                  Hi! I'm <span className="text-sky-300">Haydrian Tumbagahon</span>.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                  I craft futuristic digital experiences with a minimal edge, combining elegant motion, responsive layout, and sharp dark-mode design.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-100 transition duration-200 hover:border-sky-300 hover:bg-sky-300/15 hover:text-white"
                >
                  Download CV
                  <Download size={16} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex min-h-[360px] max-w-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4 py-6 shadow-[0_40px_120px_rgba(14,165,233,0.14)]" style={{ transform: `translateY(${heroParallax * 0.1}px)` }}>
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,.18),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,.16),_transparent_18%)]" />
              <img src={personalImg} alt="Personal" className="relative h-full w-full rounded-[1.75rem] object-cover" />
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-24">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">About</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  A concise introduction for a modern portfolio.
                </h2>
                <p className="max-w-2xl leading-8 text-slate-300">
                  I focus on building responsive digital experiences with clear structure, vibrant motion, and polished interactions. My approach is minimal but impactful, letting content breathe while guiding users through each section.
                </p>
              </div>

              <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.3)]">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Education</p>
                  <p className="text-lg font-semibold text-white">University of Technology</p>
                  <p className="text-sm text-slate-400">Graduated Magna Cum Laude</p>
                </div>
                <div className="divide-y divide-white/10 py-4 text-slate-300">
                  <div className="space-y-1 py-4">
                    <p className="font-semibold text-white">Capstone</p>
                    <p className="text-sm text-slate-400">Designing a brand-led digital platform for immersive storytelling.</p>
                  </div>
                  <div className="space-y-1 py-4">
                    <p className="font-semibold text-white">Projects</p>
                    <p className="text-sm text-slate-400">Interactive UI experiments, dashboard systems, motion-driven landing pages.</p>
                  </div>
                  <div className="space-y-1 py-4">
                    <p className="font-semibold text-white">Organization</p>
                    <p className="text-sm text-slate-400">ELITES Finance Director — leading design systems and communications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Technology stack</p>
                <h3 className="mt-3 text-3xl font-bold text-white">Skills in motion.</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-400 md:max-w-xl">
                A continuous carousel of modern tools, frameworks, and systems I use to create fluid front-end experiences.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
              <div className="flex animate-scroll gap-6 py-4 text-sm text-white/80">
                {skills.concat(skills).map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center font-medium text-slate-100 shadow-[0_12px_40px_rgba(255,255,255,0.05)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 py-24">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Projects</p>
                <h2 className="mt-3 text-4xl font-bold text-white">Interactive showcases.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-right">
                Swipe or click each project to reveal the details, with immersive focus mode and polished transitions.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProject(project.id)}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/10 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/5`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{project.date}</span>
                      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="leading-7 text-slate-300">{project.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {activeProject !== null && (
          <div className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-black/90 px-4 py-10 text-white">
            <div className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#07101d] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 p-3 text-white/90 transition hover:border-sky-400/50 hover:text-white"
              >
                <X size={20} />
              </button>
              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div className="space-y-4">
                  <div className="h-72 rounded-[1.75rem] bg-gradient-to-br from-sky-500 to-blue-950 p-6 shadow-[0_30px_80px_rgba(14,165,233,0.35)]">
                    <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-black/20 p-5 backdrop-blur-xl">
                      <span className="text-xs uppercase tracking-[0.35em] text-sky-200/80">Project preview</span>
                      <div className="text-4xl font-bold text-white/90">Zoom</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Project details</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">
                      {projects.find((project) => project.id === activeProject)?.title}
                    </h3>
                    <p className="mt-4 text-slate-300">
                      {projects.find((project) => project.id === activeProject)?.description}
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Created</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {projects.find((project) => project.id === activeProject)?.date}
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Type</p>
                      <p className="mt-2 text-lg font-semibold text-white">Portfolio case study</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Contact</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Let’s build the next experience together.
                </h2>
                <p className="max-w-2xl leading-8 text-slate-300">
                  I’m available for design-led frontend collaborations, immersive portfolio builds, and digital product design systems.
                </p>
              </div>
              <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-950 text-xl font-bold text-white">HT</div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Reach out</p>
                    <p className="text-lg font-semibold text-white">Haydrian Tumbagahon</p>
                  </div>
                </div>
                <div className="space-y-3 rounded-[1.75rem] border border-white/10 bg-[#06101d]/80 p-5">
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-slate-200 transition hover:text-sky-300">
                    <Phone size={18} />
                    <span>+63 912 345 6789</span>
                  </a>
                  <a href="mailto:haydrian@example.com" className="flex items-center gap-3 text-slate-200 transition hover:text-sky-300">
                    <Mail size={18} />
                    <span>haydrian@example.com</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-slate-200 transition hover:text-sky-300">
                    <LinkIcon size={18} />
                    <span>linkedin.com/in/haydrian</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center text-slate-200 shadow-[0_35px_100px_rgba(15,23,42,0.2)]">
                <p className="mx-auto max-w-3xl text-lg italic leading-8 text-slate-300">
                  {activeQuote}
                </p>
              </div>

              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="inline-flex h-11 min-w-[3rem] items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-sm font-semibold text-slate-950 transition hover:border-sky-400/40 hover:bg-sky-300"
                      aria-label={social.label}
                    >
                      <img src={social.icon} alt={social.label} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-slate-400">Created by Ryven</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

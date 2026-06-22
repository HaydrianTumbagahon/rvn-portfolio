import { useEffect, useMemo, useState } from 'react';
import { Link as LinkIcon, Menu, X, Phone, Mail, Download, ArrowRight } from 'lucide-react';
import facebookIcon from './assets/icons/facebook.svg';
import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import htmlIcon from './assets/icons/html.svg';
import cssIcon from './assets/icons/css.svg';
import javascriptIcon from './assets/icons/javascript.svg';
import reactIcon from './assets/icons/react.svg';
import tailwindIcon from './assets/icons/tailwind.svg';
import instagramIcon from './assets/icons/instagram.svg';
import xIcon from './assets/icons/x.svg';
import Orb from './components/Orb';
import Stack from './components/Stack';
import CardSwap, { Card } from './components/CardSwap';
import TiltedCard from './components/TiltedCard';
import GooeyNav from './components/GooeyNav';
import personalImg from './assets/images/personal_img.png';
import todoImg from './assets/images/to-do-app.png';
import mangaImg from './assets/images/manga-translator.png';
import financeImg from './assets/images/finance-app.png';

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

const skillIcons = [htmlIcon, cssIcon, javascriptIcon, reactIcon, tailwindIcon];

const projects = [
  {
    id: 1,
    title: 'To-Do App',
    date: 'September 2025',
    description: 'A lightweight task manager with priorities and due dates.',
    image: todoImg,
    url: 'https://to-do-app-ryven.vercel.app/'
  },
  {
    id: 2,
    title: 'Manga Translator',
    date: 'June 2026',
    description: 'Translate and read manga with inline translations and bookmarks.',
    image: mangaImg,
    url: 'https://rvn-manga-translator.vercel.app/'
  },
  {
    id: 3,
    title: 'Finance App',
    date: 'May 2026',
    description: 'Personal finance manager with budgets, transactions, and visualizations.',
    image: financeImg,
    url: 'https://rvn-finance-app.vercel.app/'
  }
];

const experienceCards = [
  <div key="education" className="h-full w-full rounded-[1.5rem] border border-white/10 bg-[#020814]/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Education</p>
    <h3 className="mt-4 text-2xl font-semibold text-white">B.S. Information Technology</h3>
    <p className="mt-2 text-sm text-slate-300">Aug 2020 — May 2024</p>
    <div className="my-4 h-px bg-white/10" />
    <p className="text-sm leading-7 text-slate-300">Graduated Magna Cum Laude with a focus on IT systems, software development, and user-centered digital experiences.</p>
    <ul className="mt-4 space-y-2 text-sm text-slate-300">
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Systems analysis, troubleshooting, and cross-functional collaboration.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Front-end tools, responsive design, and clean UI implementation.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Research, technical documentation, and project delivery.
      </li>
    </ul>
  </div>,
  <div key="internship" className="h-full w-full rounded-[1.5rem] border border-white/10 bg-[#020814]/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Internship</p>
    <h3 className="mt-4 text-2xl font-semibold text-white">IT Systems Intern</h3>
    <p className="mt-2 text-sm text-slate-300">Jun 2023 — Nov 2023</p>
    <div className="my-4 h-px bg-white/10" />
    <p className="text-sm leading-7 text-slate-300">Supported daily infrastructure operations, improved deployment workflows, and helped maintain internal collaboration systems.</p>
    <ul className="mt-4 space-y-2 text-sm text-slate-300">
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Network support, system monitoring, and incident tracking.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Process documentation and team communication.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Hands-on experience with IT ticketing and support tools.
      </li>
    </ul>
  </div>,
  <div key="job" className="h-full w-full rounded-[1.5rem] border border-white/10 bg-[#020814]/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Job experience</p>
    <h3 className="mt-4 text-2xl font-semibold text-white">IT Support Specialist</h3>
    <p className="mt-2 text-sm text-slate-300">Jan 2024 — Present</p>
    <div className="my-4 h-px bg-white/10" />
    <p className="text-sm leading-7 text-slate-300">Providing technical support across hardware, software, and endpoint systems while optimizing processes for faster resolution and better user outcomes.</p>
    <ul className="mt-4 space-y-2 text-sm text-slate-300">
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Incident troubleshooting, escalation management, and SLA adherence.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Customer service, communication, and cross-team collaboration.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        System updates, asset management, and security best practices.
      </li>
    </ul>
  </div>,
  <div key="training" className="h-full w-full rounded-[1.5rem] border border-white/10 bg-[#020814]/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Training</p>
    <h3 className="mt-4 text-2xl font-semibold text-white">Professional Development</h3>
    <p className="mt-2 text-sm text-slate-300">Feb 2024 — Apr 2024</p>
    <div className="my-4 h-px bg-white/10" />
    <p className="text-sm leading-7 text-slate-300">Completed in-depth coursework and workshops focused on security, IT support, and best practices for delivering modern digital services.</p>
    <ul className="mt-4 space-y-2 text-sm text-slate-300">
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Security fundamentals and risk reduction techniques.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        ITIL-style service delivery and process improvement.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Team coordination, reporting, and quality assurance.
      </li>
    </ul>
  </div>,
  <div key="certification" className="h-full w-full rounded-[1.5rem] border border-white/10 bg-[#020814]/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Certification</p>
    <h3 className="mt-4 text-2xl font-semibold text-white">Certified IT Support Professional</h3>
    <p className="mt-2 text-sm text-slate-300">Oct 2024</p>
    <div className="my-4 h-px bg-white/10" />
    <p className="text-sm leading-7 text-slate-300">A certification validating core IT support knowledge, problem solving, and effective service delivery.</p>
    <ul className="mt-4 space-y-2 text-sm text-slate-300">
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Core troubleshooting and endpoint support skills.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        Best practices for communication and customer care.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
        IT support workflows and efficient issue resolution.
      </li>
    </ul>
  </div>
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroParallax, setHeroParallax] = useState(0);
  const [supportsSmoothMotion, setSupportsSmoothMotion] = useState(true);

  useEffect(() => {
    const checkPerformance = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const saveData = (navigator as any).connection?.saveData;
      const deviceMemory = (navigator as any).deviceMemory;
      const cpuCores = navigator.hardwareConcurrency;
      const isLowEndDevice =
        prefersReducedMotion ||
        saveData ||
        (deviceMemory !== undefined && deviceMemory <= 2) ||
        (cpuCores !== undefined && cpuCores <= 4) ||
        window.innerWidth <= 768;

      setSupportsSmoothMotion(!isLowEndDevice);
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;

        setScrollProgress(maxScroll > 0 ? scrollY / maxScroll : 0);
        setHeroParallax(supportsSmoothMotion ? scrollY * 0.08 : 0);
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [supportsSmoothMotion]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="relative overflow-x-hidden bg-[#050811] text-white">
      <div className="fixed right-0 top-0 z-50 h-screen w-1 bg-white/10">
        <div
          className="h-full w-full origin-top bg-gradient-to-b from-sky-400 via-sky-500 to-transparent"
          style={{ transform: `scaleY(${scrollProgress})` }}
        />
      </div>

      <header className="fixed left-1/2 top-4 z-40 w-[70%] max-w-[1200px] -translate-x-1/2 rounded-[1rem] border border-white/15 bg-slate-950/60/70 backdrop-blur-2xl shadow-[0_35px_80px_rgba(15,23,42,0.24)]">
        <div className="mx-auto flex h-16 min-h-[4rem] items-center justify-between px-4 py-2 sm:px-6">
          <a href="#home" className="text-lg font-black tracking-[0.35em] text-white rvn-glow">
            RVN
          </a>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            <GooeyNav
              items={navigation.map((item) => ({ label: item.label, href: item.href }))}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

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
          <span className="text-sm uppercase tracking-[0.35em] text-sky-300 font-black rvn-glow md:hidden">RYVEN</span>
          <span className="hidden text-sm uppercase tracking-[0.35em] text-sky-300 font-black rvn-glow md:block">RVN</span>
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
        <section id="home" className="relative min-h-[calc(100vh-4rem)] overflow-hidden pt-5">
          <div className="absolute inset-0 z-0">
            <Orb
              hoverIntensity={2}
              rotateOnHover
              hue={0}
              forceHoverState={false}
              backgroundColor="#050811"
            />
          </div>

          <div
            className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1320px] flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 will-change-transform"
            style={supportsSmoothMotion ? { transform: `translate3d(0, ${heroParallax}px, 0)` } : undefined}
          >
            <div className="space-y-8 text-center max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-sky-200">
                IT Professional
              </div>
              <div className="space-y-6 flex flex-col items-center text-center">
                <h1 className="text-[clamp(2.6rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
                  <span className="text-sky-300">Haydrian Tumbagahon</span>
                </h1>
                <p className=" max-w-2xl text-lg leading-8 text-slate-300  sm:text-xl">
                  Turning ideas into polished, user-friendly web experiences. 
                  <br />
                  
                </p>
              </div>
              <div className="flex justify-center flex-wrap gap-4 pt-4">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-100 transition duration-200 hover:border-sky-300 hover:bg-sky-300/15 hover:text-white"
                >
                  Download CV
                  <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 pt-24 pb-6">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-6">
                <p className="text-base uppercase tracking-[0.35em] text-sky-300">About</p>
                <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  Hello! I'm Haydrian C. Tumbagahon
                </h2>
                <p className="max-w-2xl leading-8 text-slate-300 lg:max-w-none">
                  a 23-year-old web designer from San Jose del Monte, Bulacan.
                  I specialize in web design and enjoy using AI tools effectively. I’m skilled in research, documentation, troubleshooting (hardware & software), networking, customer service, and remote support.
                  In my free time, I’m an audiophile who loves exploring IEMs, discovering new tech, playing gacha, strategy, and card games, cycling, and reading.
                  Always eager to learn and create meaningful digital experiences.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-[820px] h-[36rem] sm:h-[38rem] lg:h-[40rem] mt-2">
                  <Stack
                    randomRotation={false}
                    sensitivity={200}
                    sendToBackOnClick
                    cards={experienceCards}
                    autoplay={false}
                    autoplayDelay={3000}
                    pauseOnHover={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-6 pb-12">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Stack</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="marquee h-12 sm:h-16 md:h-20">
                <div className="marquee-track">
                  {Array.from({ length: 8 }).map((_, i) =>
                    skillIcons.map((icon, j) => (
                      <img
                        key={`skill-${i}-${j}`}
                        src={icon}
                        alt={`skill-${j}`}
                        className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0 object-contain"
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 pt-6 pb-24 relative">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Projects</p>
                <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
                <p className="max-w-xl text-sm leading-7 text-slate-400">
                  Turning ideas into polished, functional digital experiences.
                </p>
                <p className="max-w-xl text-sm leading-7 text-slate-400">
                 I build modern, high-quality web applications using React + Vite, Tailwind CSS, and GSAP for smooth, eye-catching animations. By combining these powerful tools with beautiful open-source UI libraries such as Shadcn/UI, Tailgrids, and other carefully selected React component libraries, I create fast, responsive, and visually stunning digital experiences.
                </p>
                <p className="max-w-xl text-sm leading-7 text-slate-400">
                 Each project is crafted with attention to clean code architecture, thoughtful interactions, and pixel-perfect design. Whether it’s a personal portfolio, business website, or interactive web application, my goal is always the same — to deliver solutions that not only look great but also perform exceptionally well across all devices.
                </p>
              </div>

              <div className="relative flex items-center justify-center w-full h-[350px] sm:h-[450px] lg:h-[600px] mx-auto lg:mx-0">
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                  onCardClick={(index) => {}}
                >
                  {projects.map((project) => (
                    <Card
                      key={project.id}
                      customClass="w-[280px] h-[200px] sm:w-[380px] sm:h-[300px] lg:w-[500px] lg:h-[400px] rounded-[2rem] border-white/20 p-0 shadow-[0_30px_80px_rgba(15,23,42,0.5)] overflow-hidden"
                    >
                      <div className="relative w-full h-full">
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                        <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-6">
                          <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{project.date}</p>
                            <h3 className="mt-2 text-lg sm:text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-2 text-xs sm:text-sm leading-5 text-slate-200/90">{project.description}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-200/90">Explore project</span>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
                              <ArrowRight size={18} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pt-10 pb-24 sm:pt-12 lg:pt-24">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="w-full max-w-[720px]">
                <TiltedCard
                  imageSrc={personalImg}
                  altText="Haydrian"
                  containerHeight="220px"
                  imageHeight="220px"
                  displayOverlayContent
                  overlayContent={
                    <div className="flex h-full w-full flex-col items-center justify-center p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-20 w-20 rounded-full overflow-hidden ring-2 ring-white/10">
                          <img src={personalImg} alt="Haydrian" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Reach out</p>
                          <p className="text-lg font-semibold text-white">Haydrian Tumbagahon</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-center gap-3">
                        <a href="https://www.facebook.com/haydrian.tumbagahon" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-300" aria-label="Facebook">
                          <img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/htumbagahon/" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-300" aria-label="Instagram">
                          <img src={instagramIcon} alt="Instagram" className="h-5 w-5" />
                        </a>
                        <a href="https://x.com/xXMrNoBody05Xx" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-300" aria-label="X">
                          <img src={xIcon} alt="X" className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/haydrian-c-tumbagahon" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-300" aria-label="LinkedIn">
                          <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full py-4">
          <div className="mx-auto flex w-full items-center justify-center px-4">
            <p className="text-sm text-slate-400">Created by ryven</p>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;

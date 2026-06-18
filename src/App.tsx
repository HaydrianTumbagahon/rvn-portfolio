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
import Orb from './components/Orb';
import Stack from './components/Stack';
import CardSwap, { Card } from './components/CardSwap';

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

      <header className="fixed left-1/2 top-4 z-40 w-[70%] max-w-[1200px] -translate-x-1/2 rounded-[1rem] border border-white/15 bg-slate-950/60/70 backdrop-blur-2xl shadow-[0_35px_80px_rgba(15,23,42,0.24)]">
        <div className="mx-auto flex h-16 min-h-[4rem] items-center justify-between px-4 py-2 sm:px-6">
          <a href="#home" className="text-lg font-black tracking-[0.35em] text-white rvn-glow">
            RVN
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

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1320px] flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
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
                  href="#contact"
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

        <section id="projects" className="border-t border-white/10 pt-0 pb-24 relative">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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

              <div style={{ height: '600px', position: 'relative' }} className="relative">
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                  onCardClick={(index) => {}}
                >
                  {projects.map((project) => (
                    <Card key={project.id} customClass="w-[500px] h-[400px] rounded-[2rem] border-white/20 bg-gradient-to-br from-slate-900 to-black p-8 flex flex-col justify-between shadow-[0_30px_80px_rgba(15,23,42,0.5)]">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{project.date}</p>
                        <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">Explore project</span>
                        <ArrowRight size={18} className="text-sky-400" />
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </section>

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
                  <a href="tel:+639764808047" className="flex items-center gap-3 text-slate-200 transition hover:text-sky-300">
                    <Phone size={18} />
                    <span>+63 976 480 8047</span>
                  </a>
                  <a href="mailto:haydriantumbagahon1205@gmail.com" className="flex items-center gap-3 text-slate-200 transition hover:text-sky-300">
                    <Mail size={18} />
                    <span>haydriantumbagahon1205@gmail.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/haydrian-c-tumbagahon" className="flex items-center gap-3 text-slate-200 transition hover:text-sky-300">
                    <LinkIcon size={18} />
                    <span>linkedin.com/in/haydrian-c-tumbagahon</span>
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
                <p className="text-sm text-slate-400">Created by ryven</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

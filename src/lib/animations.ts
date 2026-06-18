import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const heroReveal = (container: HTMLElement) => {
  const heading = container.querySelector('h1');
  const paragraph = container.querySelector('p');
  const buttons = container.querySelectorAll('a');

  return gsap.from([heading, paragraph, ...buttons], {
    autoAlpha: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15,
    clearProps: 'all'
  });
};

export const sectionFadeIn = (section: HTMLElement) => {
  return gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
      markers: false
    },
    autoAlpha: 0,
    y: 40,
    duration: 0.9,
    ease: 'power3.out'
  });
};

export const sectionRevealTimeline = (section: HTMLElement) => {
  const items = section.querySelectorAll('.reveal-item');

  return gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
      markers: false
    }
  })
    .from(section.querySelector('h2'), {
      autoAlpha: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from(items, {
      autoAlpha: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.4');
};

export const pinSection = (section: HTMLElement) => {
  return gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=500',
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      markers: false
    }
  });
};

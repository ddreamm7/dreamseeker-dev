import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export function gsapSetup() {
  const animationPresets = {
    'first-section': (section) =>
      gsap.fromTo(
        section,
        { autoAlpha: 1 },
        {
          autoAlpha: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
          },
        },
      ),

    'middle-section': (section) =>
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=200%',
          },
        })
        .fromTo(section, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 })
        .to(section, { duration: 2 })
        .fromTo(section, { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 }),

    'last-section': (section) =>
      gsap.fromTo(
        section,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
          },
        },
      ),
  };

  function init() {
    registerPlugins();
    setScrollSmoother();
    setScrollDefaults();
    setScrollTriggers();
  }

  function registerPlugins() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }

  function setScrollSmoother() {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
    });
  }

  function setScrollDefaults() {
    ScrollTrigger.defaults({
      scrub: true,
      pin: true,
      scroller: '#smooth-wrapper',
    });
  }

  function setScrollTriggers() {
    const main = document.querySelector('main');
    const sections = main.querySelectorAll('[data-scroll]');

    sections.forEach((section) => {
      const type = section.getAttribute('data-scroll');
      const preset = animationPresets[type];
      if (preset) preset(section);
    });
  }

  init();
}

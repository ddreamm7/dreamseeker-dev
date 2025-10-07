import { gsap } from 'gsap';

export function useScrollTrigger(el = {}) {
  if (!el) return;

  const offset = '10%';
  const holdScrollPercent = 300;

  const defaults = {
    scrub: true,
    pin: true,
    anticipatePin: 1,
  };

  const holdScroll = (window.innerHeight * holdScrollPercent) / 100;
  const sections = el.querySelectorAll('[data-scroll-section]');

  sections.forEach((el) => {
    const type = el.getAttribute('data-scroll-section');

    if (type === 'initial-section') {
      gsap.fromTo(
        el,
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: `-${offset}`,
          scrollTrigger: {
            ...defaults,
            trigger: el,
            start: 'top top',
            end: 'bottom top',
          },
        },
      );
      return;
    }

    if (type === 'last-section') {
      gsap.fromTo(
        el,
        { opacity: 0, x: offset },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            ...defaults,
            trigger: el,
            start: 'top top',
            end: 'bottom top',
          },
        },
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        ...defaults,
        trigger: el,
        start: 'top top',
        end: `+=${holdScroll}`,
      },
    });

    tl.fromTo(el, { x: offset, opacity: 0 }, { x: 0, opacity: 1 })
      .to(el, { x: 0 })
      .fromTo(el, { x: 0, opacity: 1 }, { x: `-${offset}`, opacity: 0 });
  });
}

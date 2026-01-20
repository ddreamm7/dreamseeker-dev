import { gsap } from 'gsap';

import { unrefElement } from '@vueuse/core';

export function useAnimateHero(logoRef, buttonRef) {
  const animateHero = () => {
    const logo = unrefElement(logoRef);
    const btn = unrefElement(buttonRef);
    if (!logo || !btn) return;

    const tl = gsap.timeline();

    tl.from(logo, { opacity: 0, duration: 1, delay: 1.5 });

    tl.fromTo('header', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5 });

    tl.from(btn, { opacity: 0, duration: 1.5 }, '<');
  };

  return { animateHero };
}

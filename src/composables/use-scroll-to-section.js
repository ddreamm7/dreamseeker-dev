import { gsap } from 'gsap';

export function useScrollToSection() {
  function scrollToTarget(id) {
    const target = document.getElementById(id);

    if (target) {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: target,
        },
        ease: 'power4',
      });
    }
  }

  return { scrollToTarget };
}

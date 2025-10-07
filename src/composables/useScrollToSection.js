import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollSmoother } from '@/composables/useScrollSmoother.js';

export function useScrollToSection() {
  const smoother = useScrollSmoother();

  const scrollToSection = (id, options = {}) => {
    const element = document.getElementById(id);
    if (!element || !smoother) return console.log('Element not found');

    const { smooth = true } = options;

    const pinTrigger = ScrollTrigger.getAll().find(
      (trigger) => trigger.pin === element,
    );

    const pinStart = pinTrigger.start;
    const pinEnd = pinTrigger.end;
    const pinCenter = pinStart + (pinEnd - pinStart) / 2;

    const targetY = pinCenter - window.innerHeight / 2;

    smoother.scrollTo(targetY, smooth);
    console.log(element.id);
  };
  return { scrollToSection };
}

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export function useScrollToTarget() {
  function scrollToTarget(id) {
    const smoother = ScrollSmoother.get();
    const target = document.getElementById(id);
    const pinTrigger = ScrollTrigger.getAll().find(
      (trigger) => trigger.pin === target,
    );

    const pinStart = pinTrigger.start;
    const pinEnd = pinTrigger.end;

    let targetY = pinStart + (pinEnd - pinStart) / 2 - window.innerHeight / 2;

    if (target.id === 'hero') {
      targetY = pinStart;
    }
    if (target.id === 'contact') {
      targetY = pinEnd;
    }

    smoother.scrollTo(targetY, true);
  }

  return { scrollToTarget };
}

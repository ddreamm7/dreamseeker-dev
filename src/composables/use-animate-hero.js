import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';

export function useAnimateHero(titleRef, buttonRef) {
  const animateHero = () => {
    const el = titleRef?.value;
    const btn = buttonRef?.value;
    if (!el || !btn) return;

    const split = new SplitText(el, { type: 'chars, words' });

    const tl = gsap.timeline({
      defaults: { ease: 'power4' },
    });

    tl.from(split.chars, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.05,
      delay: 1,
    });

    tl.fromTo(
      'header',
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
    );

    tl.from(
      btn,
      {
        opacity: 0,
        y: 20,
        duration: 1,
      },
      '<',
    );
  };

  return { animateHero };
}

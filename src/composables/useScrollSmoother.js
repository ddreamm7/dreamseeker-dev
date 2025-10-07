import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useScrollSmoother() {
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
  });

  ScrollTrigger.defaults({ scroller: '#smooth-wrapper' });

  return smoother;
}

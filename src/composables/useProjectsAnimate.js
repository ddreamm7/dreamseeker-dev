import { nextTick } from 'vue';
import { gsap } from 'gsap';

export function useProjectsAnimate() {
  let currentTween = null;

  async function animateTransition() {
    await nextTick();

    const listCards = document.querySelectorAll('[data-projects-list]');
    const emptyCards = document.querySelectorAll('[data-projects-empty]');

    if (currentTween) {
      currentTween.kill();
      currentTween = null;
    }

    if (listCards.length) {
      gsap.killTweensOf(listCards);
      gsap.set(listCards, { opacity: 0, x: 100 });

      currentTween = gsap.to(listCards, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => {
          currentTween = null;
        },
      });
    }

    if (emptyCards.length) {
      gsap.killTweensOf(emptyCards);
      gsap.set(emptyCards, { opacity: 0, y: 50 });
      gsap.to(emptyCards, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
    }
  }

  return {
    animateTransition,
  };
}

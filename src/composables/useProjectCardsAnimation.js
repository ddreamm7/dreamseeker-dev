import { onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

export function useProjectCardsAnimation() {
  let currentTween = null;

  const card = document.querySelector('[data-project-card]');
  const empty = document.querySelector('[data-project-empty]');

  function animateCard(card) {
    if (!card) return;

    gsap.killTweensOf(card);
    gsap.set(card, { opacity: 0, x: 100 });

    currentTween = gsap.to(card, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      onComplete: () => {
        currentTween = null;
      },
    });
  }

  function animateEmpty(card) {
    if (!card) return;

    gsap.killTweensOf(card);
    gsap.set(card, { opacity: 0, y: 50 });

    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    });
  }

  function animateCards() {
    currentTween?.kill();
    currentTween = null;

    animateCard(card);
    animateEmpty(empty);
  }

  onBeforeUnmount(() => {
    currentTween?.kill();
    currentTween = null;
  });

  return {
    animateCards,
  };
}

/*
  function animateTransition() {
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
*/

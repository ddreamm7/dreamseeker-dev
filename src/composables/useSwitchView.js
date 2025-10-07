import { nextTick } from 'vue';
import { gsap } from 'gsap';

export function useSwitchView(projectsView) {
  return (targetView) => {
    if (projectsView.value === targetView) return;

    const cards = document.querySelectorAll('.project-card');
    const tl = gsap.timeline();

    tl.to(cards, {
      opacity: 0,
      duration: 0.2,
    });

    tl.eventCallback('onComplete', async () => {
      projectsView.value = targetView;
      await nextTick();

      gsap.fromTo(
        '.project-card',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.2,
        },
      );
    });
  };
}

import { useProjectsAnimate } from '@/composables/useProjectsAnimate.js';
import { ref, watch } from 'vue';

export function useProjectsView(projectsView, isDesktop) {
  const { animateTransition } = useProjectsAnimate();
  const forceGrid = ref(false);

  watch(isDesktop, (desktop) => {
    if (!desktop) {
      forceGrid.value = true;
      projectsView.value = 'grid';
    } else {
      forceGrid.value = false;
    }
  });

  async function switchViewMode(targetView) {
    if (projectsView.value === targetView) return;
    if (forceGrid.value && targetView === 'list') return;

    projectsView.value = targetView;
    await animateTransition();
  }

  return {
    switchViewMode,
    forceGrid,
  };
}

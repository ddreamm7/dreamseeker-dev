import { useProjectCardsAnimation } from '@/composables/useProjectCardsAnimation.js';
import { ref, computed, watch } from 'vue';

export function useProjectsSearch(items = [], key = 'title') {
  const { animateCards } = useProjectCardsAnimation();
  const query = ref('');
  const internal = ref('');
  let timer = null;

  function setQuery(value) {
    query.value = value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      internal.value = value;
    }, 500);
  }

  const sourceArray = computed(() => {
    return Array.isArray(items)
      ? items
      : items && typeof items === 'object'
        ? Object.values(items)
        : [];
  });

  const filteredProjects = computed(() => {
    const q = internal.value.trim().toLowerCase();
    if (!q) return sourceArray.value;
    return sourceArray.value.filter((item) => {
      const val = (item?.[key] || '').toString().toLowerCase();
      return val.includes(q);
    });
  });

  const hasResults = computed(() => filteredProjects.value.length > 0);

  watch(internal, async () => {
    await animateCards();
  });

  return {
    query,
    setQuery,
    filteredProjects,
    hasResults,
  };
}

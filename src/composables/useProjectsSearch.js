import { useProjectsAnimate } from '@/composables/useProjectsAnimate.js';
import { ref, computed, watch } from 'vue';

export function useProjectsSearch(items = [], key = 'title') {
  const { animateTransition } = useProjectsAnimate();
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

  const filtered = computed(() => {
    const q = internal.value.trim().toLowerCase();
    if (!q) return sourceArray.value;
    return sourceArray.value.filter((item) => {
      const val = (item?.[key] || '').toString().toLowerCase();
      return val.includes(q);
    });
  });

  const hasResults = computed(() => filtered.value.length > 0);

  watch(internal, async () => {
    await animateTransition();
  });

  return {
    query,
    setQuery,
    filtered,
    hasResults,
  };
}

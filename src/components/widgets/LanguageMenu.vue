<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import LucideIcon from '@/components/base/LucideIcon.vue';
  import { onClickOutside } from '@vueuse/core';

  const { t, locale } = useI18n();
  const isMenuOpen = ref(false);
  const menuRef = ref(null);

  const languages = [
    { code: 'en', label: t('languages.english') },
    { code: 'es', label: t('languages.spanish') },
  ];

  function setLanguage(lang) {
    locale.value = lang;
    isMenuOpen.value = false;
  }

  onClickOutside(menuRef, () => {
    isMenuOpen.value = false;
  });
</script>

<template>
  <div ref="menuRef" class="relative inline-block">
    <button
      class="interactive-text flex cursor-pointer items-center"
      @click="isMenuOpen = !isMenuOpen"
    >
      <LucideIcon name="Languages" />
      <LucideIcon name="ChevronUp" v-if="isMenuOpen" />
      <LucideIcon name="ChevronDown" v-else class="pointer-events-none" />
    </button>
    <ul
      v-if="isMenuOpen"
      class="bg-base border-default/25 divide-default/25 absolute top-16 right-0 z-20 min-w-40 divide-y rounded-lg border-2 px-4"
    >
      <li
        v-for="lang in languages"
        :key="lang.code"
        @click="setLanguage(lang.code)"
        :class="[
          'interactive-text flex items-center py-4',
          { 'text-default font-bold': locale === lang.code },
        ]"
      >
        <LucideIcon name="LucideStar" v-if="locale === lang.code" />
        <p class="w-full text-right">{{ lang.label }}</p>
      </li>
    </ul>
  </div>
</template>

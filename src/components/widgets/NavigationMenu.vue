<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { sections } from '@/constants/sections.js';
  import { useScrollToSection } from '@/composables/use-scroll-to-section.js';
  import { useActiveSection } from '@/composables/use-active-section.js';
  import LucideIcon from '@/components/base/LucideIcon.vue';
  import { onClickOutside } from '@vueuse/core';

  const { t } = useI18n();
  const menuRef = ref(null);
  const isMenuOpen = ref(false);

  const { scrollToTarget } = useScrollToSection();
  const { activeSection } = useActiveSection(sections);

  onClickOutside(menuRef, () => {
    isMenuOpen.value = false;
  });

  function handleItemClick(sectionId) {
    scrollToTarget(sectionId);
    isMenuOpen.value = false;
  }
</script>

<template>
  <div ref="menuRef" class="relative inline-block">
    <button class="interactive-text flex cursor-pointer" @click="isMenuOpen = !isMenuOpen">
      <LucideIcon name="LucideX" v-if="isMenuOpen" />
      <LucideIcon name="MenuIcon" v-else class="pointer-events-none" />
    </button>
    <ul
      v-if="isMenuOpen"
      class="bg-base border-default/25 divide-default/25 absolute top-16 right-0 min-w-48 divide-y rounded-lg border-2 px-4"
    >
      <li
        v-for="section in sections"
        :key="section.id"
        :class="[
          'interactive-text flex items-center py-4',
          { 'text-default font-bold': activeSection === section.id },
        ]"
        @click.prevent="handleItemClick(section.id)"
      >
        <LucideIcon v-if="activeSection === section.id" name="LucideStar" />
        <p class="w-full text-right">
          {{ t(`header.sections.${section.name}`) }}
        </p>
      </li>
    </ul>
  </div>
</template>

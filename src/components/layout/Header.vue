<script setup>
  import { useI18n } from 'vue-i18n';
  import { useMatchViewportSize } from '@/composables/use-match-viewport-size.js';
  import { useScrollToSection } from '@/composables/use-scroll-to-section.js';
  import { sections } from '@/constants/sections.js';
  import NavigationMenu from '@/components/widgets/NavigationMenu.vue';
  import LanguageMenu from '@/components/widgets/LanguageMenu.vue';
  import { useActiveSection } from '@/composables/use-active-section.js';

  const { t } = useI18n();
  const isDesktop = useMatchViewportSize('lg');

  const { scrollToTarget } = useScrollToSection();
  const { activeSection } = useActiveSection(sections);
</script>

<template>
  <header
    class="border-b-default/25 bg-base fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b-2 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48"
  >
    <img
      src="@/assets/images/branding/dreamspace-logo.webp"
      alt="dreamspace_logo"
      class="h-8 w-auto object-contain"
    />
    <nav class="flex gap-x-4 lg:gap-x-8">
      <ul v-if="isDesktop" class="flex gap-x-8">
        <li
          v-for="section in sections"
          :key="section.id"
          @click.prevent="scrollToTarget(section.id)"
        >
          <a
            :class="[
              'interactive-text',
              { 'font-bold text-inherit': activeSection === section.id },
            ]"
          >
            {{ t(`header.sections.${section.name}`) }}
          </a>
        </li>
      </ul>
      <LanguageMenu />
      <NavigationMenu v-if="!isDesktop" />
    </nav>
  </header>
</template>

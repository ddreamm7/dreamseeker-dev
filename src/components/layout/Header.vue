<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useDeviceBreakpoint } from '@/composables/useDeviceBreakpoint.js';
  import { useScrollToSection } from '@/composables/useScrollToSection.js';
  import { sections } from '@/constants/sections.js';
  import { icons } from '@/constants/icons.js';

  const { t, locale } = useI18n();
  const isDesktop = useDeviceBreakpoint('lg');
  const isMobileMenuHover = ref(false);
  const isLanguageMenuHover = ref(false);

  const { scrollToSection } = useScrollToSection();

  const setLanguage = (lang) => {
    locale.value = lang;
    isLanguageMenuHover.value = false;
  };
</script>

<template>
  <header
    class="fixed top-0 z-10 flex h-16 w-full justify-between px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48"
  >
    <a href="/" rel="noopener noreferrer" class="flex items-center">
      <img
        src="@/assets/svg/dreamseeker.svg"
        alt="header-logo"
        class="h-6 w-auto"
      />
    </a>
    <div class="flex gap-x-8">
      <nav v-if="isDesktop" class="flex items-center">
        <ul class="flex h-full items-center gap-x-8">
          <li
            v-for="section in sections"
            :key="section.id"
            class="flex h-full items-center"
          >
            <a
              class="text-lg transition-[color] hover:text-white/50"
              href="#"
              @click.prevent="scrollToSection(section.id)"
            >
              {{ t(`header.sections.${section.name}`) }}
            </a>
          </li>
        </ul>
      </nav>
      <div
        class="relative flex h-full cursor-pointer items-center gap-x-2"
        @mouseenter="isLanguageMenuHover = true"
        @mouseleave="isLanguageMenuHover = false"
        @click="isLanguageMenuHover = !isLanguageMenuHover"
      >
        <img :src="icons.language" alt="language-icon" class="size-6" />
        <img :src="icons.expand" alt="arrow-icon" class="size-4" />
        <ul
          v-if="isLanguageMenuHover"
          class="absolute top-16 right-0 flex-col rounded-md bg-white/10 shadow-md shadow-black"
        >
          <li
            class="p-4 hover:bg-white/10 hover:text-white"
            @click="setLanguage('en')"
          >
            {{ t('languages.english') }}
          </li>
          <li
            class="p-4 hover:bg-white/10 hover:text-white"
            @click="setLanguage('es')"
          >
            {{ t('languages.spanish') }}
          </li>
        </ul>
      </div>
      <!-- Menu mobile -->
      <div
        class="relative flex h-full cursor-pointer items-center"
        v-if="!isDesktop"
        @click="isMobileMenuHover = !isMobileMenuHover"
        @mouseenter="isMobileMenuHover = true"
        @mouseleave="isMobileMenuHover = false"
      >
        <img
          :src="isMobileMenuHover ? icons.close : icons.menu"
          alt="menu-icon"
          class="size-6"
        />
        <div v-if="isMobileMenuHover" class="fixed top-16 left-0 w-full">
          <ul
            class="mx-8 flex flex-col justify-between rounded-md bg-white/10 px-4 shadow-md shadow-black sm:mx-16 sm:flex-row md:mx-24"
          >
            <li
              v-for="section in sections"
              :key="section.id"
              class="cursor-pointer py-4 text-base transition-[color] hover:text-white/50"
              @click="scrollToSection(section.id)"
            >
              {{ t(`header.sections.${section.name}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

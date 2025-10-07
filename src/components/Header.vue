<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useBreakpointMatch } from '@/composables/useBreakpointMatch.js';
  import { useScrollToTarget } from '@/composables/useScrollToTarget.js';
  import { sections } from '@/constants/sections.js';
  import { icons } from '@/constants/icons.js';

  const { t, locale } = useI18n();
  const isDesktop = useBreakpointMatch('lg');
  const isMobileMenuHover = ref(false);
  const isLanguageMenuHover = ref(false);

  const { scrollToTarget } = useScrollToTarget();

  const setLanguage = (lang) => {
    locale.value = lang;
    isLanguageMenuHover.value = false;
  };
</script>

<template>
  <header>
    <a href="/public" rel="noopener noreferrer">
      <img
        src="../assets/svg/dreamseeker.svg"
        alt="header-logo"
        class="h-6 w-auto"
      />
    </a>
    <div class="flex h-full items-center gap-x-8">
      <nav v-if="isDesktop">
        <ul class="flex items-center gap-x-8">
          <li
            v-for="section in sections"
            :key="section.id"
            class="flex h-full items-center"
          >
            <a
              class="transition-[color] hover:text-white/50"
              href="#"
              @click.prevent="scrollToTarget(section.id)"
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
          class="absolute top-16 right-0 rounded-md border-2 border-white/20 bg-black/10 shadow-lg backdrop-blur-xl"
        >
          <li class="p-4 hover:text-white/50" @click="setLanguage('en')">
            {{ t('languages.english') }}
          </li>
          <li class="p-4 hover:text-white/50" @click="setLanguage('es')">
            {{ t('languages.spanish') }}
          </li>
        </ul>
      </div>

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
        <ul
          v-if="isMobileMenuHover"
          class="fixed top-16 right-0 left-0 mx-8 rounded-md border-2 border-white/20 bg-black/20 text-center shadow-lg backdrop-blur-xl sm:mx-16 md:mx-24"
        >
          <li
            v-for="section in sections"
            :key="section.id"
            class="cursor-pointer py-4 text-lg transition-[color] hover:text-white/50"
            @click="scrollToTarget(section.id)"
          >
            {{ t(`header.sections.${section.name}`) }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

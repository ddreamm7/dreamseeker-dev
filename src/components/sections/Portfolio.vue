<script setup>
  import { ref, watch } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useDeviceBreakpoint } from '@/composables/useDeviceBreakpoint.js';
  import { useSwitchView } from '@/composables/useSwitchView.js';
  import { icons } from '@/constants/icons.js';
  import { projects } from '@/constants/projects.js';

  const { t } = useI18n();
  const forceGrid = ref(false);
  const projectsView = ref('grid');
  const switchProjectsView = useSwitchView(projectsView);
  const isDesktop = useDeviceBreakpoint('lg');

  watch(
    isDesktop,
    (desktop) => {
      if (!desktop) {
        forceGrid.value = true;
        projectsView.value = 'grid';
      } else {
        forceGrid.value = false;
      }
    },
    { immediate: true },
  );
</script>

<template>
  <section
    id="portfolio"
    data-scroll-section
    class="flex flex-col justify-center gap-y-12"
  >
    <h2 class="text-6xl font-bold underline underline-offset-8">
      {{ t('projects.title') }}
    </h2>
    <div class="flex h-12 w-full items-center justify-between gap-x-8">
      <div class="relative w-full">
        <img
          :src="icons.search"
          alt="search-icon"
          class="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2"
        />
        <input
          :placeholder="t('projects.search_placeholder')"
          class="h-12 w-full rounded-md bg-white/10 pr-4 pl-10 focus:ring-2 focus:ring-white focus:outline-none"
          type="text"
        />
      </div>
      <div class="flex h-full gap-x-8">
        <button
          :class="[
            'flex w-12 items-center justify-center rounded-md bg-white/10 transition',
            projectsView === 'grid'
              ? 'cursor-default ring-2 ring-white'
              : 'ring-transparent hover:bg-white/20',
          ]"
          @click="switchProjectsView('grid')"
        >
          <img :src="icons.grid" alt="grid-icon" class="size-6" />
        </button>
        <button
          :disabled="forceGrid"
          :class="[
            'flex w-12 items-center justify-center rounded-md bg-white/10 transition',
            forceGrid
              ? 'cursor-not-allowed opacity-30'
              : projectsView === 'list'
                ? 'cursor-default ring-2 ring-white'
                : 'ring-transparent hover:bg-white/20',
          ]"
          @click="switchProjectsView('list')"
        >
          <img :src="icons.list" alt="list-icon" class="size-6" />
        </button>
      </div>
    </div>
    <div
      class="scrollbar scrollbar-thumb-white/25 scrollbar-track scrollbar-hover:scrollbar-thumb-white/50 max-h-1/2 overflow-y-auto rounded-md border-2 border-white/25 p-8"
    >
      <div
        :class="[
          'w-full gap-12',
          projectsView === 'list'
            ? 'flex flex-wrap'
            : 'grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3',
        ]"
      >
        <div
          v-for="(project, key) in projects"
          :key="`project-${key}`"
          :class="[
            'project-card rounded-md border-2 border-white/25 bg-white/10 p-8',
            projectsView === 'list' ? 'flex gap-x-8' : 'flex flex-col gap-y-8',
          ]"
        >
          <img
            :alt="project.alt"
            :src="project.logo"
            :class="[
              'h-48 rounded-md object-cover shadow-md shadow-black',
              projectsView === 'list' ? 'w-72' : 'w-full',
            ]"
          />
          <div class="flex flex-col justify-between gap-y-4 text-white">
            <div class="flex justify-between">
              <h3
                class="text-lg font-bold tracking-widest md:text-xl xl:text-3xl"
              >
                {{ project.title }}
              </h3>
              <p
                class="flex h-full items-center rounded-md bg-white/10 px-2 text-sm md:text-base"
              >
                {{ project.engine }}
              </p>
            </div>
            <p class="flex text-sm md:text-base">
              {{ t(project.description) }}
            </p>
            <div class="flex flex-col gap-x-8 gap-y-4 md:flex-row">
              <a
                :href="project.github"
                class="flex flex-1 items-center justify-center gap-x-2 rounded-md border-2 border-white/10 bg-white/10 p-2 text-sm transition hover:border-white hover:bg-white/20 hover:font-bold md:text-base"
                target="_blank"
              >
                <img :src="icons.source" alt="source-icon" class="size-6" />
                <p>{{ t('projects.source') }}</p>
              </a>
              <a
                :href="project.download"
                class="flex flex-1 items-center justify-center gap-x-2 rounded-md border-2 border-white/10 bg-white/10 p-2 text-sm transition hover:border-white hover:bg-white/20 hover:font-bold md:text-base"
                target="_blank"
              >
                <img :src="icons.download" alt="download-Icon" class="size-6" />
                <p>{{ t('projects.download') }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useBreakpointMatch } from '@/composables/useBreakpointMatch.js';
  import { useProjectsView } from '@/composables/useProjectsView.js';
  import { useProjectsSearch } from '@/composables/useProjectsSearch.js';
  import { projects } from '@/constants/projects.js';
  import { icons } from '@/constants/icons.js';

  const { t } = useI18n();
  const projectsView = ref('list');
  const isDesktop = useBreakpointMatch('lg');

  const { query, setQuery, filtered, hasResults } = useProjectsSearch(projects);

  const { switchViewMode, forceGrid } = useProjectsView(
    projectsView,
    isDesktop,
  );
</script>

<template>
  <section
    id="projects"
    class="bg-section-projects"
    data-scroll="middle-section"
  >
    <article>
      <h1>
        {{ t('projects.heading') }}
      </h1>
      <div class="flex h-12 w-full items-center justify-between gap-x-8">
        <div class="relative w-full">
          <img
            :src="icons.search"
            alt="search-icon"
            class="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2"
          />
          <input
            v-model="query"
            @input="setQuery($event.target.value)"
            :placeholder="t('projects.search_placeholder')"
            class="h-12 w-full rounded-md bg-white/10 pr-4 pl-10 focus:ring-2 focus:ring-white focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex h-full gap-x-8">
          <button
            :disabled="forceGrid"
            :class="[
              'flex w-12 items-center justify-center rounded-md bg-white/10 transition',
              forceGrid
                ? 'cursor-not-allowed opacity-30'
                : projectsView === 'list'
                  ? 'cursor-default ring ring-white'
                  : 'ring-transparent hover:bg-white/20',
            ]"
            @click="switchViewMode('list')"
          >
            <img :src="icons.list" alt="list-icon" class="size-6" />
          </button>
          <button
            :class="[
              'flex w-12 items-center justify-center rounded-md bg-white/10 transition',
              projectsView === 'grid'
                ? 'cursor-default ring ring-white'
                : 'ring-transparent hover:bg-white/20',
            ]"
            @click="switchViewMode('grid')"
          >
            <img :src="icons.grid" alt="grid-icon" class="size-6" />
          </button>
        </div>
      </div>
      <template v-if="hasResults">
        <div
          class="scrollbar scrollbar-thumb-white scrollbar-track-white/10 w-full overflow-x-hidden pr-8"
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
              data-projects-list
              v-for="(project, idx) in filtered"
              :key="`project-${idx}`"
              :class="[
                'flex w-full overflow-auto rounded-md border-2 border-white/20 bg-white/10 shadow-lg',
                projectsView === 'list' ? 'flex-row' : 'flex-col',
              ]"
            >
              <img
                :src="project.logo"
                :alt="project.alt"
                class="h-64 w-auto object-cover"
              />
              <div
                class="flex h-full w-full flex-col justify-between gap-y-8 p-8"
                :class="[
                  'h-64 border-white/20 object-cover',
                  projectsView === 'list' ? 'border-l-2' : 'border-t-2',
                ]"
              >
                <div class="flex h-3/4 max-h-3/4 flex-col gap-y-2">
                  <p class="flex justify-between text-2xl font-bold">
                    {{ project.title }}
                    <span
                      class="flex items-center bg-white/10 px-4 text-base font-normal"
                    >
                      {{ project.engine }}
                    </span>
                  </p>
                  <p>
                    {{ t(project.description) }}
                  </p>
                </div>
                <div class="flex gap-x-8">
                  <a
                    :href="project.github"
                    class="flex w-full items-center justify-center gap-x-2 rounded-md border-2 border-white/25 bg-white/10 py-2 transition hover:border-white hover:bg-black/10 hover:font-bold"
                    target="_blank"
                  >
                    <img :src="icons.source" alt="source-icon" class="size-6" />
                    <p>{{ t('projects.source') }}</p>
                  </a>
                  <a
                    :href="project.download"
                    class="flex w-full items-center justify-center gap-x-2 rounded-md border-2 border-white/25 bg-white/10 text-sm transition hover:border-white hover:bg-white/20 hover:font-bold md:text-base"
                    target="_blank"
                  >
                    <img
                      :src="icons.download"
                      alt="download-Icon"
                      class="size-6"
                    />
                    <p>{{ t('projects.download') }}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <p
        data-projects-empty
        v-else
        class="w-full rounded-md bg-white/10 py-8 text-center text-lg text-white/50"
      >
        {{ t('projects.no_results') }}
      </p>
    </article>
  </section>
</template>

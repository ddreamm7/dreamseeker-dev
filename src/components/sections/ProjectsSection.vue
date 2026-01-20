<script setup>
  import { useProjectsSearch } from '@/composables/useProjectsSearch.js';
  import { useI18n } from 'vue-i18n';
  import { projects } from '@/constants/projects.js';
  import LucideIcon from '@/components/base/LucideIcon.vue';

  const { t } = useI18n();

  const { query, setQuery, filteredProjects, hasResults } = useProjectsSearch(projects);
</script>

<template>
  <section class="default-section">
    <div class="flex items-center justify-start gap-x-6">
      <LucideIcon name="FolderCode" :size="60" />
      <h1>{{ t('projects.heading') }}</h1>
    </div>
    <div class="flex h-12 w-full items-center justify-between gap-x-8">
      <div class="relative w-full">
        <LucideIcon name="Search" class="absolute inset-0 top-1/2 left-2 -translate-y-1/2" />
        <input
          v-model="query"
          @input="setQuery($event.target.value)"
          :placeholder="t('projects.search_placeholder')"
          class="h-12 w-full rounded-md bg-white/10 pr-4 pl-10 focus:ring-2 focus:ring-white focus:outline-none"
          type="text"
        />
      </div>
    </div>
    <template v-if="hasResults">
      <div class="w-full overflow-x-hidden pr-8">
        <div class="grid w-full grid-cols-2 justify-center">
          <div
            data-project-card
            v-for="(project, idx) in filteredProjects"
            :key="`project-${idx}`"
            class="flex w-full flex-col overflow-auto rounded-md border-2 border-white/20 bg-white/10 shadow-lg"
          >
            <div>
              <img :src="project.logo" :alt="project.alt" class="h-64 w-auto object-cover" />
            </div>
            <div
              class="flex h-64 w-full flex-col justify-between gap-y-8 border-white/20 object-cover p-8"
            >
              <div class="flex h-3/4 max-h-3/4 flex-col gap-y-2">
                <p class="flex justify-between text-2xl font-bold">
                  {{ project.titleRef }}
                  <span class="flex items-center bg-white/10 px-4 text-base font-normal">
                    {{ project.engine }}
                  </span>
                </p>
                <p>
                  {{ t(project.description) }}
                </p>
              </div>
              <div class="flex grow gap-x-8">
                <button class="interactive-button w-full">
                  <a :href="project.github" target="_blank">
                    {{ t('projects.source') }}
                  </a>
                </button>
                <button class="interactive-button w-full">
                  <a :href="project.download" target="_blank">
                    {{ t('projects.download') }}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template
      data-project-empty
      v-else
      class="w-full rounded-md bg-white/10 py-8 text-center text-lg text-white/50"
    >
      {{ t('projects.no_results') }}
    </template>
  </section>
</template>

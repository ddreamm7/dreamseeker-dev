<script setup>
  import { useSearchProject } from '@/composables/use-search-project.js';
  import { useI18n } from 'vue-i18n';
  import { projects } from '@/constants/projects.js';
  import LucideIcon from '@/components/widgets/LucideIcon.vue';

  const { t } = useI18n();

  const { query, filteredProjects, hasResults } = useSearchProject(projects);
</script>

<template>
  <section class="default-section">
    <div class="border-b-default/50 w-full border-b-2 pb-24">
      <div class="flex items-center justify-start gap-x-6">
        <LucideIcon name="FolderCode" :size="60" />
        <h1>{{ t('projects.heading') }}</h1>
      </div>
      <div class="flex h-12 w-full items-center justify-between gap-x-8">
        <div class="relative w-full">
          <LucideIcon
            name="Search"
            class="absolute inset-0 top-1/2 left-4 w-fit -translate-y-1/2"
          />
          <input
            v-model="query"
            :placeholder="t('projects.search_placeholder')"
            class="bg-primary border-default/25 ring-default focus:bg-secondary h-12 w-full rounded-md border-2 pr-4 pl-12 focus:ring-2 focus:outline-none"
            type="text"
          />
        </div>
      </div>
      <template v-if="hasResults">
        <div class="mt-16 grid w-full grid-cols-2 justify-between gap-16">
          <div
            data-project-card
            v-for="(project, idx) in filteredProjects"
            :key="`project-${idx}`"
            class="default-card flex flex-col"
          >
            <img
              :src="project.logo"
              :alt="project.alt"
              class="h-72 w-full rounded-lg object-cover"
            />
            <div class="flex w-full flex-col justify-between gap-y-8 p-8">
              <div class="flex h-3/4 max-h-3/4 flex-col gap-y-2">
                <p class="font-heading flex justify-between text-3xl">
                  {{ project.title }}
                  <span class="bg-tertiary flex items-center px-4 text-base font-normal">
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
                  <LucideIcon name="Code" />
                </button>
                <button class="interactive-button w-full">
                  <a :href="project.download" target="_blank">
                    {{ t('projects.download') }}
                  </a>
                  <LucideIcon name="Download" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          data-project-empty
          class="bg-primary text-subtext mt-16 flex h-64 w-full items-center justify-center rounded-md"
        >
          {{ t('projects.no_results') }}
        </div>
      </template>
    </div>
  </section>
</template>

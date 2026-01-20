<script setup>
  import { useI18n } from 'vue-i18n';
  import { socials } from '@/constants/socials.js';
  import LucideIcon from '@/components/widgets/LucideIcon.vue';
  const { t } = useI18n();
</script>

<template>
  <section class="default-section">
    <div class="flex items-center justify-end gap-x-6">
      <h1>{{ t('contact.heading') }}</h1>
      <LucideIcon name="Mail" :size="60" />
    </div>
    <div class="mb-16 flex w-full justify-between gap-x-24">
      <div class="default-card flex w-1/3 flex-col p-8">
        <p class="font-heading text-center text-3xl">
          {{ t('contact.social_links') }}
        </p>
        <ul class="flex w-full grow flex-col justify-center gap-y-8">
          <li v-for="(link, key) in socials" :key="key">
            <a
              :href="link.href"
              :title="link.title"
              rel="noopener noreferrer"
              target="_blank"
              class="bg-secondary border-default/25 hover:border-default flex items-center justify-center gap-x-2 rounded-lg border-2 p-4 transition-colors duration-200 hover:font-bold"
            >
              <img :alt="link.alt" :src="link.icon" class="size-8" />
              {{ link.user }}
            </a>
          </li>
        </ul>
      </div>
      <div class="default-card w-2/3 p-8">
        <h2 class="font-heading text-center text-3xl">
          {{ t('contact.form.heading') }}
        </h2>
        <form
          action="mailto:aalonsoopg@gmail.com"
          method="post"
          enctype="text/plain"
          class="space-y-8"
        >
          <div>
            <label for="name">
              {{ t('contact.form.name') }}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="border-default/25 focus:bg-secondary focus:ring-default mt-2 block w-full rounded-lg border-2 p-2 focus:ring-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label for="email">
              {{ t('contact.form.email') }}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="border-default/25 focus:ring-default focus:bg-secondary mt-2 block w-full rounded-lg border-2 p-2 focus:ring-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label for="message">
              {{ t('contact.form.message') }}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="border-default/25 focus:ring-default focus:bg-secondary mt-2 block w-full rounded-lg border-2 p-2 focus:ring-2 focus:outline-none"
              required
            ></textarea>
          </div>
          <button type="submit" class="interactive-button w-full">
            {{ t('contact.form.submit') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

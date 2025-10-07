<script setup>
  import Hero from '@/components/sections/Hero.vue';
  import Profile from '@/components/sections/Profile.vue';
  import Technologies from '@/components/sections/Technologies.vue';
  import Portfolio from '@/components/sections/Portfolio.vue';
  import Contact from '@/components/sections/Contact.vue';

  import { onMounted, ref } from 'vue';
  import { useScrollTrigger } from '@/composables/useScrollTrigger.js';

  const main = ref(null);

  onMounted(() => {
    useScrollTrigger(main.value);
  });
</script>

<template>
  <main ref="main" class="mx-8 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-40 2xl:mx-48">
    <Hero />
    <Profile />
    <Technologies />
    <Portfolio />
    <Contact />
  </main>
</template>

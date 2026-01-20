<script setup>
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
  import { sections } from '@/constants/sections.js';
</script>

<template>
  <Header />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <Component v-for="section in sections" :is="section.tag" :id="section.id" :key="section.id" />
      <Footer />
    </div>
  </div>
</template>

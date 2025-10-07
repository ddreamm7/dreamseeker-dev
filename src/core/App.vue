<script setup>
  import { sections } from '@/constants/sections.js';
</script>

<template>
  <main ref="main">
    <Component
      v-for="section in sections"
      :key="section.id"
      :is="section.component"
      :id="section.id"
    />
  </main>
</template>

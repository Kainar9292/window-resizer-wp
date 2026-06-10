<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'Window Resizer — Welcome',
  meta: [
    {
      name: 'description',
      content: 'Window Resizer — resize and position browser windows with precision.',
    },
  ],
})

const features = [
  {
    title: 'Precise dimensions',
    description: 'Set window width and height in pixels — perfect for testing responsive layouts.',
  },
  {
    title: 'Quick presets',
    description: 'Switch between popular screen resolutions in one click.',
  },
  {
    title: 'Positioning',
    description: 'Place the window where you need it — left, right, or centered.',
  },
] as const

const steps = [
  'Install the extension from your browser store.',
  'Click the Window Resizer icon in the toolbar.',
  'Choose a preset size or enter your own values.',
] as const
</script>

<template>
  <main class="welcome">
    <WelcomeHero />
    <WelcomeFeatures :features="features" />
    <WelcomeSteps :steps="steps" />
    <WelcomeFooter />
  </main>
</template>

<style scoped>
.welcome {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px 64px;
}
</style>

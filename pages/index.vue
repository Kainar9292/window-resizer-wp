<script setup lang="ts">
import { useHead } from 'nuxt/app'

useHead({
  title: 'Window Resizer',
  meta: [
    {
      name: 'description',
      content: 'Resize and position browser windows with precision — fast, simple, and works offline.',
    },
  ],
})
</script>

<template>
  <div class="home-page">
    <PageBlobs />

    <div class="container">
      <WelcomeNavbar />

      <main class="home-page__main">
        <h1 class="home-page__title">
          Window Resizer
        </h1>
        <p class="home-page__subtitle">
          Resize your browser to any screen resolution instantly
        </p>
        <InstallExtensionButton />
      </main>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  position: relative;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
}

.home-page__main {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: calc(100vh - 108px);
  padding: 0 80px 96px;
}

.home-page__title {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #1a1a2e;
  margin: 0 0 16px;
}

.home-page__subtitle {
  max-width: 640px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #6b7280;
  margin: 0 0 40px;
}
</style>

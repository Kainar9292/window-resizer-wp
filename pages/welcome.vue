<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from 'nuxt/app'
import confetti from 'canvas-confetti'

useHead({
  title: 'Window Resizer — Welcome',
  meta: [
    {
      name: 'description',
      content: 'Welcome to Window Resizer — resize and position browser windows with precision.',
    },
  ],
})

onMounted(() => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  })
})
</script>

<template>
  <div class="welcome-page">
    <PageBlobs />

    <div class="container">
      <WelcomeNavbar :show-install-button="false" />

      <main class="welcome-page__main">
        <h1 class="welcome-page__title">
          🎉 Now you have a great way to Window Resizer
        </h1>

        <section class="welcome-page__step">
          <p class="welcome-page__step-text">
            1. Pin the extension for quick access to the Window Resizer.
          </p>
          <img
            src="/welcome-pin-guide.png"
            alt="Pin the Window Resizer extension: open Extensions menu and click the pin icon"
            class="welcome-page__guide"
            width="1024"
            height="664"
          >
        </section>

        <section class="welcome-page__step">
          <p class="welcome-page__step-text">
            2. Simply click on the extension icon to open the resizer.
          </p>
          <img
            src="/welcome-click-guide.png"
            alt="Click the Window Resizer extension icon in the browser toolbar"
            class="welcome-page__guide"
            width="1024"
            height="664"
          >
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.welcome-page {
  position: relative;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
}

.welcome-page__main {
  position: relative;
  z-index: 1;
  padding: 52px 0 80px;
}

.welcome-page__title {
  max-width: 800px;
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a2e;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0 auto 40px;
}

@media (min-width: 640px) {
  .welcome-page__title {
    font-size: 2.25rem;
  }
}

@media (min-width: 768px) {
  .welcome-page__title {
    font-size: 3rem;
  }
}

.welcome-page__step {
  margin-bottom: 48px;
}

.welcome-page__step:last-child {
  margin-bottom: 0;
}

.welcome-page__step-text {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625;
  color: rgb(149 156 177);
  text-align: center;
  margin-bottom: 48px;
}

.welcome-page__guide {
  display: block;
  width: 100%;
  max-width: 675px;
  height: auto;
  margin: 0 auto;
  border-radius: 12px;
}

@media (min-width: 640px) {
  .welcome-page__step-text {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 768px) {
  .welcome-page__step-text {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

@media (prefers-color-scheme: dark) {
  .welcome-page__step-text {
    color: #fff;
    opacity: 0.9;
  }
}
</style>

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
    <div class="welcome-page__blob welcome-page__blob--top" />
    <div class="welcome-page__blob welcome-page__blob--bottom" />

    <div class="container">
      <WelcomeNavbar />

      <main class="welcome-page__main">
        <h1 class="welcome-page__title">
          🎉 Now you have a great way to Window Resizer
        </h1>

        <section class="welcome-page__step">
          <p class="welcome-page__step-text">
            1. Pin the extension for quick access to the Window Resizer.
          </p>
          <WelcomeBrowserMockup variant="pin" />
        </section>

        <section class="welcome-page__step">
          <p class="welcome-page__step-text">
            2. Simply click on the extension icon to open the resizer.
          </p>
          <WelcomeBrowserMockup variant="click" />
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

.welcome-page__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.45;
}

.welcome-page__blob--top {
  top: -120px;
  right: -80px;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #c4b5fd 0%, #93c5fd 100%);
}

.welcome-page__blob--bottom {
  bottom: -100px;
  left: -60px;
  width: 360px;
  height: 360px;
  background: linear-gradient(135deg, #a5f3fc 0%, #c4b5fd 100%);
}

.welcome-page__main {
  position: relative;
  z-index: 1;
  padding: 54px 0 80px;
}

.welcome-page__title {
  max-width: 800px;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  text-align: center;
  color: #1a1a2e;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0 auto 56px;
}

@media (min-width: 768px) {
  .welcome-page__title {
    font-size: 3rem;
    line-height: 1.25;
  }
}

.welcome-page__step {
  margin-bottom: 56px;
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
  margin-bottom: 3rem;
}

@media (min-width: 575px) {
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

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { GOOGLE_FORM_EMBED_URL } from '~/constants/google-form'

useHead({
  title: "We're sorry to see you go | Window Resizer",
  meta: [
    {
      name: 'description',
      content: 'Share your feedback about Window Resizer — help us improve the extension.',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
})
</script>

<template>
  <div class="feedback-page">
    <div class="container">
      <main class="feedback-page__main">
        <header class="feedback-page__header">
          <h1 class="feedback-page__title">
            We're sorry to see you go.
          </h1>
        </header>

        <section class="feedback-page__card" aria-label="Feedback form">
          <iframe
            :src="GOOGLE_FORM_EMBED_URL"
            class="feedback-page__iframe"
            title="Window Resizer feedback form"
            loading="lazy"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.feedback-page {
  position: relative;
  min-height: 100vh;
  background: #fff;
}

.feedback-page__main {
  position: relative;
  z-index: 1;
  padding: 52px 0 80px;
}

.feedback-page__header {
  margin-bottom: 40px;
}

.feedback-page__title {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #1a1a2e;
  margin: 0 0 12px;
  text-align: center;
}

.feedback-page__subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(149 156 177);
  margin: 0;
}

.feedback-page__card {
  border-radius: 12px;
}

.feedback-page__iframe {
  display: block;
  width: 100%;
  max-width: 640px;
  min-height: 1200px;
  margin: 0 auto;
  border: 0;
  background: #fff;
  border-radius: 8px;
}

.teQAzf {
  max-width: 100%;
}
</style>

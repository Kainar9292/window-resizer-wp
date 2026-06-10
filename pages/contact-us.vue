<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { CONTACT_EMAIL } from '~/constants/contact'

useHead({
  title: 'Contact Us | Window Resizer',
  meta: [
    {
      name: 'description',
      content: 'Contact Window Resizer with any questions — we are happy to help.',
    },
  ],
})
</script>

<template>
  <div class="contact-page">
    <PageBlobs />

    <div class="container">
      <WelcomeNavbar />

      <main class="contact-page__main">
        <div class="contact-page__header">
          <div class="contact-page__intro">
            <h1 class="contact-page__title">
              Contact Us
            </h1>
            <p class="contact-page__subtitle">
              You can contact us with any questions
            </p>
          </div>

          <nav class="contact-page__breadcrumbs" aria-label="Breadcrumb">
            <NuxtLink to="/" class="contact-page__breadcrumb-link">
              Home
            </NuxtLink>
            <span class="contact-page__breadcrumb-separator" aria-hidden="true">&gt;</span>
            <span class="contact-page__breadcrumb-current">Contact Us</span>
          </nav>
        </div>

        <section class="contact-page__card" aria-label="Contact information">
          <p class="contact-page__email">
            E-mail:
            <a
              :href="`mailto:${CONTACT_EMAIL}`"
              class="contact-page__email-link"
            >
              {{ CONTACT_EMAIL }}
            </a>
          </p>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  position: relative;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
}

.contact-page__main {
  position: relative;
  z-index: 1;
  padding: 52px 0 80px;
}

.contact-page__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
}

.contact-page__intro {
  flex: 1;
  min-width: 0;
}

.contact-page__title {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #1a1a2e;
  margin: 0 0 12px;
}

.contact-page__subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(149 156 177);
  margin: 0;
}

.contact-page__breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}

@media (max-width: 639px) {
  .contact-page__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-page__breadcrumbs {
    align-self: flex-end;
  }
}

.contact-page__breadcrumb-link {
  color: rgb(149 156 177);
  text-decoration: none;
  transition: color 0.15s;
}

.contact-page__breadcrumb-link:hover {
  color: var(--blob-green-text);
  text-decoration: none;
}

.contact-page__breadcrumb-separator {
  color: rgb(149 156 177);
}

.contact-page__breadcrumb-current {
  color: var(--blob-green-text);
  font-weight: 500;
}

.contact-page__card {
  padding: 32px 40px;
  background: color-mix(in srgb, var(--blob-green-light) 35%, #fff);
  border-radius: 12px;
}

@media (min-width: 640px) {
  .contact-page__card {
    padding: 40px 48px;
  }
}

.contact-page__email {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #1a1a2e;
  margin: 0;
}

@media (min-width: 640px) {
  .contact-page__email {
    font-size: 1.125rem;
  }
}

.contact-page__email-link {
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s;
}

.contact-page__email-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}
</style>

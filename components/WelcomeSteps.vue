<script setup lang="ts">
defineProps<{
  steps: readonly string[]
}>()
</script>

<template>
  <section class="steps">
    <h2 class="steps__heading">Getting started</h2>
    <ol class="steps__list">
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="steps__item"
      >
        <span class="steps__number">{{ index + 1 }}</span>
        <span class="steps__text">{{ step }}</span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.steps {
  margin-bottom: 64px;
}

.steps__heading {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
}

.steps__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
  margin: 0 auto;
}

.steps__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 20px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.steps__number {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: #4f46e5;
  border-radius: 50%;
}

.steps__text {
  font-size: 0.9375rem;
  color: #334155;
  padding-top: 3px;
}
</style>

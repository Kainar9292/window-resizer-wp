<script setup lang="ts">
interface Feature {
  title: string
  description: string
}

defineProps<{
  features: readonly Feature[]
}>()
</script>

<template>
  <section class="features">
    <h2 class="features__heading">Features</h2>
    <ul class="features__list">
      <li
        v-for="feature in features"
        :key="feature.title"
        class="features__item"
      >
        <h3 class="features__title">{{ feature.title }}</h3>
        <p class="features__description">{{ feature.description }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.features {
  margin-bottom: 64px;
}

.features__heading {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
}

.features__list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.features__item {
  padding: 24px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.features__title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a2e;
}

.features__description {
  font-size: 0.9375rem;
  color: #64748b;
}
</style>

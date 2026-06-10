<template>
  <header class="hero">
    <div class="hero__badge">Browser Extension</div>
    <h1 class="hero__title">Window Resizer</h1>
    <p class="hero__subtitle">
      Control browser window size and position — handy for development,
      testing, and everyday work.
    </p>
  </header>
</template>

<style scoped>
.hero {
  text-align: center;
  margin-bottom: 64px;
}

.hero__badge {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4f46e5;
  background: #eef2ff;
  border-radius: 999px;
}

.hero__title {
  font-size: 2.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.hero__subtitle {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 560px;
  margin: 0 auto;
}
</style>

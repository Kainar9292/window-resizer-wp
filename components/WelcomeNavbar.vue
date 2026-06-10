<template>
  <header class="navbar">
    <NuxtLink to="/welcome" class="navbar__brand">
      <img
        src="/icon.png"
        alt="Window Resizer"
        class="navbar__icon"
        width="44"
        height="44"
      >
      <span class="navbar__name">Window Resizer</span>
    </NuxtLink>

    <nav class="navbar__nav">
      <NuxtLink to="/welcome" class="navbar__link">Home</NuxtLink>
      <a href="mailto:support@windowresizer.app" class="navbar__link">Contact us</a>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 32px 0;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  line-height: normal;
}

.navbar__brand:hover {
  text-decoration: none;
}

.navbar__icon {
  border-radius: 6px;
  flex-shrink: 0;
}

.navbar__name {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  letter-spacing: -0.01em;
  margin-right: 64px;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar__link {
  font-size: 17px;
  font-weight: 500;
  color: #1a1a2e;
  text-decoration: none;
  transition: color 0.15s;
  line-height: normal;
}

.navbar__link:hover {
  color: #1a1a2e;
  text-decoration: none;
}
</style>

<script setup lang="ts">
withDefaults(defineProps<{
  showInstallButton?: boolean
}>(), {
  showInstallButton: true,
})
</script>

<template>
  <header class="navbar">
    <NuxtLink to="/" class="navbar__brand">
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
      <NuxtLink to="/" class="navbar__link">Home</NuxtLink>
      <NuxtLink to="/contact-us" class="navbar__link">Contact us</NuxtLink>
    </nav>

    <InstallExtensionButton
      v-if="showInstallButton"
      variant="outline"
      class="navbar__install"
    />
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
  margin-right: 100px;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar__link {
  font-size: 16px;
  font-weight: 500;
  color: #1a1a2e;
  text-decoration: none;
  transition: color 0.15s;
}

.navbar__link:hover {
  color: var(--blob-green-text);
  text-decoration: none;
}

.navbar__link.router-link-active {
  color: var(--blob-green-text);
}

.navbar__install {
  margin-left: auto;
}
</style>

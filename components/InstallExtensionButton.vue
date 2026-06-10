<script setup lang="ts">
import { CHROME_EXTENSION_URL } from '../constants/extension'

type Variant = 'outline' | 'solid'

withDefaults(defineProps<{
  variant?: Variant
}>(), {
  variant: 'solid',
})
</script>

<template>
  <a
    :href="CHROME_EXTENSION_URL"
    target="_blank"
    rel="noopener noreferrer"
    class="install-btn"
    :class="`install-btn--${variant}`"
  >
    <svg
      class="install-btn__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M0 12c0-2.156.563-4.219 1.594-6l5.156 8.953C7.781 16.781 9.703 18 12 18c.656 0 1.266-.094 1.875-.281l-3.563 6.187C4.454 23.11 0 18.094 0 12Zm17.11 3.094A5.82 5.82 0 0 0 18 12c0-1.781-.797-3.375-2.063-4.5h7.172c.563 1.406.891 2.953.891 4.5 0 6.656-5.39 12-12 12l5.11-8.906ZM22.36 6H12c-2.953 0-5.344 2.11-5.906 4.828L2.53 4.641C4.734 1.828 8.156 0 12 0c4.406 0 8.297 2.438 10.36 6ZM7.874 12A4.131 4.131 0 0 1 12 7.875c2.25 0 4.125 1.875 4.125 4.125A4.131 4.131 0 0 1 12 16.125 4.101 4.101 0 0 1 7.875 12Z"
      />
    </svg>
    <span>Install the extension</span>
  </a>
</template>

<style scoped>
.install-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 240px;
  height: 48px;
  border-radius: 15px;
  font-size: 17px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;
  flex-shrink: 0;
}

.install-btn:hover {
  text-decoration: none;
}

.install-btn--solid {
  color: var(--blob-green-text);
  background: var(--blob-green-light);
  border: 2px solid transparent;
}

.install-btn--solid:hover {
  color: var(--blob-green-text-hover);
  background: var(--blob-green-mint);
}

.install-btn--outline {
  color: var(--blob-green-text);
  background: transparent;
  border: 2px solid var(--blob-green-border);
}

.install-btn--outline:hover {
  color: var(--blob-green-text-hover);
  background: var(--blob-green-light);
  border-color: var(--blob-green-emerald);
}

.install-btn__icon {
  flex-shrink: 0;
  color: inherit;
}
</style>

<template>
  <footer class="footer">
    <p class="footer__text">
      Window Resizer &copy; {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid #e2e8f0;
}

.footer__text {
  font-size: 0.875rem;
  color: #94a3b8;
}
</style>

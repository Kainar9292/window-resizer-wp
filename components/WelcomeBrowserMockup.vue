<script setup lang="ts">
defineProps<{
  variant: 'pin' | 'click'
}>()
</script>

<template>
  <div class="mockup">
    <div class="mockup__window">
      <div class="mockup__chrome">
        <div class="mockup__dots">
          <span class="mockup__dot mockup__dot--red" />
          <span class="mockup__dot mockup__dot--yellow" />
          <span class="mockup__dot mockup__dot--green" />
        </div>
        <div class="mockup__tabs">
          <div class="mockup__tab mockup__tab--active">
            <span class="mockup__tab-favicon" />
            New Tab
          </div>
        </div>
        <div class="mockup__toolbar">
          <div class="mockup__address-bar" />
          <div
            class="mockup__extensions-btn"
            :class="{ 'mockup__extensions-btn--highlight': variant === 'pin' }"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-2 .9-2 2v3.8h1.5c1.93 0 3.5 1.57 3.5 3.5S5.43 18.8 3.5 18.8H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
            </svg>
          </div>
          <div
            v-if="variant === 'click'"
            class="mockup__pinned-icon"
          >
            <img src="/icon.png" alt="" width="20" height="20">
          </div>
        </div>
      </div>

      <div class="mockup__content">
        <div class="mockup__blob mockup__blob--top" />
        <div class="mockup__blob mockup__blob--bottom" />
        <div class="mockup__page">
          <h3 class="mockup__page-title">Window Resizer</h3>
          <p class="mockup__page-subtitle">
            Resize and position browser windows with precision
          </p>
        </div>
      </div>

      <div
        v-if="variant === 'pin'"
        class="mockup__dropdown"
      >
        <p class="mockup__dropdown-title">Extensions</p>
        <div class="mockup__dropdown-item">
          <img src="/icon.png" alt="" width="20" height="20" class="mockup__dropdown-icon">
          <span class="mockup__dropdown-name">Window Resizer</span>
          <div class="mockup__pin-btn mockup__pin-btn--highlight">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1.03-1 1.03 1v-7H19v-2c-1.66 0-3-1.34-3-3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="variant === 'pin'"
      class="annotation annotation--1"
    >
      <div class="annotation__circle">1</div>
      <div class="annotation__arrow annotation__arrow--down-right" />
    </div>

    <div
      v-if="variant === 'pin'"
      class="annotation annotation--2"
    >
      <div class="annotation__circle">2</div>
      <div class="annotation__arrow annotation__arrow--left" />
    </div>

    <div
      v-if="variant === 'click'"
      class="annotation annotation--3"
    >
      <div class="annotation__circle">3</div>
      <div class="annotation__arrow annotation__arrow--down-left" />
    </div>
  </div>
</template>

<style scoped>
.mockup {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.mockup__window {
  position: relative;
  background: #fff;
  border-radius: 12px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.07),
    0 20px 40px -8px rgb(0 0 0 / 0.12);
  overflow: visible;
}

.mockup__chrome {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: #f1f3f4;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 12px 12px 0 0;
}

.mockup__dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.mockup__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.mockup__dot--red { background: #ff5f57; }
.mockup__dot--yellow { background: #febc2e; }
.mockup__dot--green { background: #28c840; }

.mockup__tabs {
  flex: 1;
  min-width: 0;
}

.mockup__tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 0.75rem;
  color: #5f6368;
  background: #fff;
  border-radius: 8px 8px 0 0;
}

.mockup__tab-favicon {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #dadce0;
}

.mockup__toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.mockup__address-bar {
  width: 120px;
  height: 28px;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e0e0e0;
}

.mockup__extensions-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #5f6368;
  border-radius: 50%;
}

.mockup__extensions-btn--highlight {
  background: #fef3c7;
  color: #1a1a2e;
  box-shadow: 0 0 0 2px #fbbf24;
}

.mockup__pinned-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: #fef3c7;
  box-shadow: 0 0 0 2px #fbbf24;
}

.mockup__pinned-icon img {
  border-radius: 4px;
}

.mockup__content {
  position: relative;
  min-height: 220px;
  overflow: hidden;
  border-radius: 0 0 12px 12px;
}

.mockup__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.5;
}

.mockup__blob--top {
  top: -40px;
  right: -20px;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #c4b5fd, #93c5fd);
}

.mockup__blob--bottom {
  bottom: -60px;
  left: -30px;
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #a5f3fc, #c4b5fd);
}

.mockup__page {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  padding: 40px 24px;
  text-align: center;
}

.mockup__page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.mockup__page-subtitle {
  font-size: 0.875rem;
  color: #64748b;
  max-width: 320px;
}

.mockup__dropdown {
  position: absolute;
  top: 52px;
  right: 14px;
  width: 260px;
  padding: 12px 0;
  background: #fff;
  border-radius: 8px;
  box-shadow:
    0 4px 16px rgb(0 0 0 / 0.12),
    0 0 0 1px rgb(0 0 0 / 0.05);
  z-index: 10;
}

.mockup__dropdown-title {
  padding: 0 16px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1a1a2e;
}

.mockup__dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
}

.mockup__dropdown-icon {
  border-radius: 4px;
  flex-shrink: 0;
}

.mockup__dropdown-name {
  flex: 1;
  font-size: 0.8125rem;
  color: #334155;
}

.mockup__pin-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: #94a3b8;
  border-radius: 4px;
}

.mockup__pin-btn--highlight {
  color: #1a1a2e;
  background: #fef3c7;
  box-shadow: 0 0 0 2px #fbbf24;
}

.annotation {
  position: absolute;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 4px;
}

.annotation__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 0.875rem;
  font-weight: 700;
  color: #1a1a2e;
  background: #fbbf24;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgb(251 191 36 / 0.5);
}

.annotation__arrow {
  width: 48px;
  height: 3px;
  background: #fbbf24;
  position: relative;
}

.annotation__arrow::after {
  content: '';
  position: absolute;
  right: -2px;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-left-color: #fbbf24;
}

.annotation--1 {
  top: 8px;
  right: 60px;
  flex-direction: column;
  align-items: flex-end;
}

.annotation--1 .annotation__arrow {
  width: 3px;
  height: 36px;
  transform: rotate(0deg);
}

.annotation--1 .annotation__arrow::after {
  right: auto;
  left: 50%;
  top: auto;
  bottom: -2px;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #fbbf24;
  border-left-color: transparent;
}

.annotation--2 {
  top: 90px;
  right: -8px;
}

.annotation--2 .annotation__arrow {
  width: 36px;
}

.annotation--2 .annotation__arrow::after {
  left: -2px;
  right: auto;
  border: 6px solid transparent;
  border-right-color: #fbbf24;
  border-left-color: transparent;
}

.annotation--3 {
  top: 4px;
  right: 24px;
  flex-direction: column;
  align-items: center;
}

.annotation--3 .annotation__arrow {
  width: 3px;
  height: 28px;
}

.annotation--3 .annotation__arrow::after {
  right: auto;
  left: 50%;
  top: auto;
  bottom: -2px;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #fbbf24;
  border-left-color: transparent;
}

@media (max-width: 640px) {
  .mockup__dropdown {
    width: 220px;
    right: 8px;
  }

  .annotation--2 {
    right: -16px;
  }

  .annotation--2 .annotation__arrow {
    width: 24px;
  }
}
</style>

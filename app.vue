<template>
  <div class="flex flex-col min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Global styles */
html {
  font-family: theme('fontFamily.body');
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6 {
  font-family: theme('fontFamily.heading');
  font-weight: 700;
  line-height: 1.2;
}

p, li, a, button, input, textarea {
  line-height: 1.5;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
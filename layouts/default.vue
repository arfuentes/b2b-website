<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <SiteFooter />
    <CookieConsent />
  </div>
</template>

<script setup>
// Default layout with header and footer
</script>
<template>
  <div class="bg-alternate">
    <div class="container mx-auto px-4 text-center">
      <div class="py-16 text-secondary-500">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
          {{ $t("imageCta.title") }}
        </h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          {{ $t("imageCta.subtitle") }}
        </p>
        <div class="flex justify-center">
          <div>
            <NuxtLink
              :to="tryAppUrl"
              class="bg-primary-500 hover:bg-secondary-500 text-white font-bold py-2 px-10 rounded-md text-center transition-colors"
            >
              {{ $t("home.hero.ctaButton") }}
            </NuxtLink>

            <p class="text-sm text-center text-neutral-400 pt-2">
              {{ $t("home.hero.creditCardMessage") }}
            </p>
          </div>
        </div>
      </div>
      <div class="px-10 md:px-20">
        <img
          :src="`/images/cta/img_${index}.png`"
          :alt="$t('imageCta.title')"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tryAppUrl = `${useRuntimeConfig().public.webappBaseUrl}/register/email`;

const index = ref(1);

onMounted(() => {
  const max = 3;
  index.value = Math.floor(Math.random() * max) + 1;
});
</script>

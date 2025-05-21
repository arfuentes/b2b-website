<template>
  <div class="min-h-screen bg-white">
    <div class="bg-alternate py-16">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-heading font-bold text-secondary-500">
            {{ $t("demo.confirmation.title") }}
          </h1>
        </div>
      </div>
    </div>

    <div class="container md:max-w-3xl mx-auto px-4 py-10">
      <p v-for="i in 4" :key="i" class="pb-6 text-lg">
        {{ $t(`demo.confirmation.paragraph${i}`) }}
      </p>
      <img
        :src="`/images/demo/${$t('demo.confirmation.image')}`"
        :alt="$t('demo.confirmation.title')"
        class="rounded-md w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from "~/composables/useApi";

const route = useRoute();

const localePath = useLocalePath();

const { headers } = useApi();

const id = computed(() => route.params.id);

const token = computed(() => route.params.token);

await useAsyncData(
  () => `demo-validation-${id.value}-${token.value}`,
  async () => {
    try {
      return await $fetch(
        `${useRuntimeConfig().public.apiBaseUrl}/demos/${id.value}/confirm/${
          token.value
        }`,
        {
          method: "PATCH",
          headers,
        }
      );
    } catch (e) {
      throw await navigateTo({
        path: localePath("/"),
      });
    }
  }
);
</script>

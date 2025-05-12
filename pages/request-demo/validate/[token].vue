<template>
  <div>
    <section class="py-16 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="py-10 px-8">
            <h1 class="text-3xl font-heading font-bold mb-4 text-center text-neutral-800">
              {{ $t('requestDemo.validation.title') }}
            </h1>
            
            <div v-if="loading" class="text-center py-8">
              <div class="w-16 h-16 mx-auto mb-4">
                <svg class="animate-spin text-primary-500 w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <p class="text-lg text-neutral-600">
                {{ $t('requestDemo.validation.loading') }}
              </p>
            </div>
            
            <div v-else-if="validationSuccess" class="text-center py-8 animate-fade-in">
              <div class="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 class="text-2xl font-heading font-bold mb-4 text-neutral-800">
                {{ $t('requestDemo.validation.success.title') }}
              </h2>
              <p class="text-lg text-neutral-600 mb-6">
                {{ $t('requestDemo.validation.success.message') }}
              </p>
              <NuxtLink :to="localePath('/')" class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
                {{ $t('common.back') }} to home
              </NuxtLink>
            </div>
            
            <div v-else class="text-center py-8 animate-fade-in">
              <div class="w-20 h-20 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-error-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 class="text-2xl font-heading font-bold mb-4 text-neutral-800">
                {{ $t('requestDemo.validation.error.title') }}
              </h2>
              <p class="text-lg text-neutral-600 mb-6">
                {{ $t('requestDemo.validation.error.message') }}
              </p>
              <NuxtLink :to="localePath('/request-demo')" class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
                {{ $t('requestDemo.form.submit') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const route = useRoute();
const api = useApi();
const localePath = useLocalePath();

const loading = ref(true);
const validationSuccess = ref(false);
const token = route.params.token;

onMounted(async () => {
  try {
    // Validate the token with the API
    const result = await api.validateDemoToken(token);
    validationSuccess.value = result.success;
  } catch (error) {
    console.error('Token validation failed:', error);
    validationSuccess.value = false;
  } finally {
    loading.value = false;
  }
});
</script>
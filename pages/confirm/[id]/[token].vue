<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Loading State -->
        <div v-if="pending" class="text-center">
          <div class="w-16 h-16 mx-auto mb-4">
            <div class="animate-spin rounded-full h-16 w-16 border-4 border-primary-500 border-t-transparent"></div>
          </div>
          <p class="text-lg text-neutral-600">Validating your request...</p>
        </div>

        <!-- Success State -->
        <div v-else-if="!error" class="text-center">
          <div class="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 class="text-3xl font-heading font-bold mb-6">Your Email Has Been Confirmed!</h1>
          
          <div class="prose prose-lg mx-auto mb-8">
            <p>Thank you for confirming your email. Your demo request is now being processed.</p>
            <p>Our team will review your request and reach out soon to schedule your personalized demo. If we need any additional details before setting up the session, we'll contact you first.</p>
            <p>In the meantime, if you have any urgent questions, feel free to reach us at support@zamdit.com.</p>
            <p>We look forward to speaking with you!</p>
          </div>

          <img 
            src="https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg" 
            alt="Email confirmed" 
            class="mx-auto rounded-lg shadow-lg max-w-md w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useApi } from '~/composables/useApi'

const route = useRoute()
const router = useRouter()
const { headers } = useApi()

const { data, pending, error } = await useAsyncData(
  'demo-validation',
  () => $fetch(`${useRuntimeConfig().public.apiBase}/demos/${route.params.id}/confirm/${route.params.token}`, {
    method: 'PATCH',
    headers
  }),
  {
    server: false,
    onError: async (error) => {
      console.error('Error validating demo request:', error)
      await router.push('/')
    }
  }
)
</script>
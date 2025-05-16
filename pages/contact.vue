<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-heading font-bold mb-4 text-center">
          {{ $t('contact.title') }}
        </h1>
        <p class="text-xl text-neutral-600 text-center mb-12">
          {{ $t('contact.subtitle') }}
        </p>

        <div class="bg-white rounded-lg shadow-md p-8">
          <form class="space-y-6">
            <FormInput
              v-model="form.name"
              :label="$t('contact.form.name')"
              required
            />
            
            <FormInput
              v-model="form.email"
              :label="$t('contact.form.email')"
              type="email"
              required
            />
            
            <FormInput
              v-model="form.subject"
              :label="$t('contact.form.subject')"
              required
            />
            
            <FormTextarea
              v-model="form.message"
              :label="$t('contact.form.message')"
              required
              :rows="6"
            />
            
            <div class="flex justify-center">
              <button type="submit" class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                {{ $t('contact.form.submit') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});
</script>
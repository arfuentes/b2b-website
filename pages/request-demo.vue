<template>
  <div>
    <!-- Form Section -->
    <section class="py-16 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="py-10 px-8">
            <div v-if="formSubmitted">
              <!-- Success message after form submission -->
              <div class="text-center py-10 animate-fade-in">
                <div class="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 class="text-3xl font-heading font-bold mb-4 text-neutral-800">
                  {{ $t('requestDemo.success.title') }}
                </h2>
                <p class="text-lg text-neutral-600 mb-6">
                  {{ $t('requestDemo.success.message') }}
                </p>
                <NuxtLink :to="localePath('/')" class="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors">
                  {{ $t('common.back') }} to home
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div v-else>
              <!-- Demo request form -->
              <h1 class="text-3xl font-heading font-bold mb-2 text-neutral-800">
                {{ $t('requestDemo.title') }}
              </h1>
              <p class="text-lg text-neutral-600 mb-8">
                {{ $t('requestDemo.subtitle') }}
              </p>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- First row: Name fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    v-model="form.firstName"
                    :label="$t('requestDemo.form.firstName')"
                    :error="errors.firstName"
                    required
                  />
                  
                  <FormInput
                    v-model="form.lastName"
                    :label="$t('requestDemo.form.lastName')"
                    :error="errors.lastName"
                    required
                  />
                </div>
                
                <!-- Second row: Email and Company -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    v-model="form.email"
                    :label="$t('requestDemo.form.email')"
                    type="email"
                    :error="errors.email"
                    required
                  />
                  
                  <FormInput
                    v-model="form.company"
                    :label="$t('requestDemo.form.company')"
                    :error="errors.company"
                    required
                  />
                </div>
                
                <!-- Third row: Job Title and Phone -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    v-model="form.jobTitle"
                    :label="$t('requestDemo.form.jobTitle')"
                    :error="errors.jobTitle"
                    required
                  />
                  
                  <FormInput
                    v-model="form.phoneNumber"
                    :label="$t('requestDemo.form.phoneNumber')"
                    :error="errors.phoneNumber"
                    required
                  />
                </div>
                
                <!-- Fourth row: Company Size -->
                <div>
                  <label class="block mb-2 text-sm font-medium text-neutral-700">
                    {{ $t('requestDemo.form.companySize') }}
                  </label>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div
                      v-for="(size, index) in companySizes"
                      :key="index"
                      @click="form.companySize = size.value"
                      :class="[
                        'border rounded-md py-2 px-3 text-center cursor-pointer transition-colors',
                        form.companySize === size.value
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-neutral-300 hover:border-primary-300'
                      ]"
                    >
                      {{ size.label }}
                    </div>
                  </div>
                  <p v-if="errors.companySize" class="mt-1 text-sm text-error-500">{{ errors.companySize }}</p>
                </div>
                
                <!-- Fifth row: Interests -->
                <div>
                  <label class="block mb-2 text-sm font-medium text-neutral-700">
                    {{ $t('requestDemo.form.interests') }}
                  </label>
                  <div class="space-y-2">
                    <div
                      v-for="(interest, index) in interests"
                      :key="index"
                      class="flex items-center"
                    >
                      <input
                        :id="`interest-${index}`"
                        type="checkbox"
                        v-model="form.interests"
                        :value="interest.value"
                        class="h-4 w-4 text-primary-500 rounded border-neutral-300 focus:ring-primary-500"
                      />
                      <label :for="`interest-${index}`" class="ml-2 text-neutral-700">
                        {{ interest.label }}
                      </label>
                    </div>
                  </div>
                  <p v-if="errors.interests" class="mt-1 text-sm text-error-500">{{ errors.interests }}</p>
                </div>
                
                <!-- Sixth row: Additional Message -->
                <FormTextarea
                  v-model="form.message"
                  :label="$t('requestDemo.form.message')"
                  :error="errors.message"
                />
                
                <!-- Submission Error Message -->
                <div v-if="submissionError" class="bg-error-100 text-error-700 p-4 rounded-md">
                  {{ submissionError }}
                </div>
                
                <!-- Submit Button -->
                <div class="flex justify-center">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {{ $t('common.loading') }}
                    </span>
                    <span v-else>{{ $t('requestDemo.form.submit') }}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const { t } = useI18n();
const api = useApi();
const localePath = useLocalePath();

// Form state
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  jobTitle: '',
  phoneNumber: '',
  companySize: '',
  interests: [],
  message: ''
});

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  jobTitle: '',
  phoneNumber: '',
  companySize: '',
  interests: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);
const submissionError = ref('');

// Company size options
const companySizes = [
  { value: '1-10', label: '1-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-200', label: '51-200' },
  { value: '201+', label: '201+' }
];

// Interest options
const interests = [
  { value: 'technical_assessments', label: 'Technical Assessments' },
  { value: 'personality_assessments', label: 'Personality Assessments' },
  { value: 'cognitive_assessments', label: 'Cognitive Assessments' },
  { value: 'candidate_management', label: 'Candidate Management' },
  { value: 'reporting_analytics', label: 'Reporting & Analytics' }
];

// Validate the form
const validateForm = () => {
  let isValid = true;
  
  // Reset all errors
  Object.keys(errors).forEach(key => errors[key] = '');
  
  // Validate required fields
  if (!form.firstName.trim()) {
    errors.firstName = t('requestDemo.form.validation.required');
    isValid = false;
  }
  
  if (!form.lastName.trim()) {
    errors.lastName = t('requestDemo.form.validation.required');
    isValid = false;
  }
  
  if (!form.email.trim()) {
    errors.email = t('requestDemo.form.validation.required');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t('requestDemo.form.validation.email');
    isValid = false;
  }
  
  if (!form.company.trim()) {
    errors.company = t('requestDemo.form.validation.required');
    isValid = false;
  }
  
  if (!form.jobTitle.trim()) {
    errors.jobTitle = t('requestDemo.form.validation.required');
    isValid = false;
  }
  
  if (!form.phoneNumber.trim()) {
    errors.phoneNumber = t('requestDemo.form.validation.required');
    isValid = false;
  }
  
  if (!form.companySize) {
    errors.companySize = t('requestDemo.form.validation.required');
    isValid = false;
  }
  
  return isValid;
};

// Submit the form
const submitForm = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  submissionError.value = '';
  
  try {
    await api.submitDemoRequest(form);
    formSubmitted.value = true;
  } catch (error) {
    submissionError.value = error.message || t('common.error');
  } finally {
    isSubmitting.value = false;
  }
};
</script>
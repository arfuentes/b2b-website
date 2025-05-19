<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <!-- Success message after form submission -->
      <div v-if="formSubmitted" class="max-w-3xl mx-auto">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-3xl font-heading font-bold mb-6">Thank You for Requesting a Demo!</h2>
          <div class="prose prose-lg mx-auto">
            <p>We've received your request, and to proceed, you'll first receive an email to confirm your request. Please check your inbox and confirm your email to continue the process.</p>
            <p>Once confirmed, our team will reach out to schedule your personalized demo. If we need any additional details to tailor the session to your needs, we'll contact you first before setting up the demo.</p>
            <p>In the session, we'll walk you through Zamdit's key features, answer any questions, and show you how our platform can streamline your hiring process.</p>
            <p>If you have any urgent questions or specific areas you'd like us to focus on, feel free to reach out at support@zamdit.com.</p>
            <p>We look forward to speaking with you soon!</p>
          </div>
        </div>
        <div class="flex justify-center">
          <img 
            src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
            alt="Calendar on laptop"
            class="rounded-lg shadow-lg max-w-md w-full"
          />
        </div>
      </div>

      <div v-else>
        <!-- Error Alert -->
        <div v-if="submitError" class="max-w-3xl mx-auto mb-8">
          <div class="bg-error-100 border border-error-200 text-error-700 px-4 py-3 rounded-lg relative" role="alert">
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline"> {{ submitError }}</span>
            <button 
              @click="submitError = ''"
              class="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Form Content -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-heading font-bold mb-4">
            Request a Personalized Demo of Zamdit
          </h1>
          <p class="text-xl text-neutral-600">
            Experience how Zamdit can streamline your hiring process. Request a live demo, and our team will walk you through the key features, answer your questions, and show you how Zamdit can help you hire smarter and faster.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Column -->
          <div>
            <h2 class="text-2xl font-heading font-bold mb-6">What to expect?</h2>
            <div class="space-y-4 mb-8">
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span>Personalized Consultation – We'll start with a quick discussion to understand your hiring needs and how Zamdit can support your company.</span>
              </p>
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span>Live Product Walkthrough – Get a hands-on look at Zamdit's features and see how they simplify and speed up hiring.</span>
              </p>
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span>Use Case Insights – Discover how companies like yours benefit from Zamdit and how it can fit into your workflow.</span>
              </p>
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span>Tailored Recommendations – Explore the best plan for your business based on your goals and requirements.</span>
              </p>
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span>No Obligation – This is a free, no-commitment demo to help you make an informed decision.</span>
              </p>
            </div>
            
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
              alt="Product Demo" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>

          <!-- Right Column - Form -->
          <ClientOnly>
            <div class="bg-secondary-500 rounded-lg p-8">
              <h2 class="text-2xl font-heading font-bold mb-6 text-white">Please enter your information</h2>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <UiFormInput
                  v-model="form.fullName"
                  label="Full Name"
                  :error="errors.fullName"
                  required
                  maxlength="255"
                  dark-mode
                />

                <UiFormInput
                  v-model="form.email"
                  label="Business Email"
                  type="email"
                  :error="errors.email"
                  required
                  maxlength="255"
                  dark-mode
                />

                <UiFormInput
                  v-model="form.phone"
                  label="Phone Number"
                  :error="errors.phone"
                  maxlength="20"
                  helper-text="Optional"
                  dark-mode
                />

                <UiFormInput
                  v-model="form.company"
                  label="Company Name"
                  :error="errors.company"
                  required
                  maxlength="255"
                  dark-mode
                />

                <div v-if="!countriesLoading">
                  <label class="block text-sm font-medium text-white mb-2">Country</label>
                  <select
                    v-model="form.countryId"
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors border-neutral-300 focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Select a country</option>
                    <option
                      v-for="country in countries"
                      :key="country.id"
                      :value="country.id"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                  <p v-if="errors.countryId" class="mt-1 text-sm text-error-500">{{ errors.countryId }}</p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-white mb-2">Company Size</label>
                  <select
                    v-model="form.companySize"
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors border-neutral-300 focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Select company size</option>
                    <option
                      v-for="size in companySizes"
                      :key="size"
                      :value="size"
                    >
                      {{ size }}
                    </option>
                  </select>
                  <p v-if="errors.companySize" class="mt-1 text-sm text-error-500">{{ errors.companySize }}</p>
                </div>

                <UiFormMultiSelect
                  v-model="form.preferredWeekdays"
                  :options="weekdayOptions"
                  label="Preferred Weekdays"
                  placeholder="Select preferred weekdays"
                  :error="errors.preferredWeekdays"
                  helper-text="Select one or more weekdays"
                  dark-mode
                />

                <div>
                  <label class="block text-sm font-medium text-white mb-2">Preferred Time</label>
                  <input
                    type="time"
                    v-model="form.preferredTime"
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors border-neutral-300 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                  <p v-if="errors.preferredTime" class="mt-1 text-sm text-error-500">{{ errors.preferredTime }}</p>
                </div>

                <UiFormTextarea
                  v-model="form.comments"
                  label="Additional Comments"
                  :error="errors.comments"
                  maxlength="65000"
                  rows="4"
                  helper-text="Optional"
                  dark-mode
                />

                <!-- Error Messages -->
                <div v-if="submitError" class="bg-error-100 text-error-700 p-4 rounded-md">
                  {{ submitError }}
                </div>

                <div class="flex justify-center">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="isSubmitting">
                      Processing...
                    </span>
                    <span v-else>
                      Request Demo
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, useHead } from '#imports'
import { useApi } from '~/composables/useApi'

interface Country {
  id: string
  name: string
}

interface Form {
  fullName: string
  email: string
  phone: string
  company: string
  countryId: string
  companySize: string
  preferredWeekdays: string[]
  preferredTime: string
  comments: string
}

interface Errors {
  fullName?: string
  email?: string
  phone?: string
  company?: string
  countryId?: string
  companySize?: string
  preferredWeekdays?: string
  preferredTime?: string
  comments?: string
}

const { headers } = useApi()
const countries = ref<Country[]>([])
const countriesLoading = ref(true)
const formSubmitted = ref(false)
const submitError = ref('')
const timeZone = ref('')

const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+']

const weekdayOptions = [
  { value: '1', label: 'Monday' },
  { value: '2', label: 'Tuesday' },
  { value: '3', label: 'Wednesday' },
  { value: '4', label: 'Thursday' },
  { value: '5', label: 'Friday' }
]

const form = reactive<Form>({
  fullName: '',
  email: '',
  phone: '',
  company: '',
  countryId: '',
  companySize: '',
  preferredWeekdays: [],
  preferredTime: '',
  comments: ''
})

const errors = reactive<Errors>({})
const isSubmitting = ref(false)

// Add reCAPTCHA script using useHead
useHead({
  script: [
    {
      src: `https://www.google.com/recaptcha/api.js?render=6Le1080qAAAAAD-zQuyFtTF_WcxX6qOhkAF4YlRm`,
      defer: true
    }
  ]
})

const validateForm = () => {
  let isValid = true
  errors.fullName = ''
  errors.email = ''
  errors.phone = ''
  errors.company = ''
  errors.countryId = ''
  errors.companySize = ''
  errors.preferredWeekdays = ''
  errors.preferredTime = ''
  errors.comments = ''

  if (!form.fullName) {
    errors.fullName = 'Full name is required'
    isValid = false
  } else if (form.fullName.length > 255) {
    errors.fullName = 'Full name must not exceed 255 characters'
    isValid = false
  }

  if (!form.email) {
    errors.email = 'Business email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  } else if (form.email.length > 255) {
    errors.email = 'Email must not exceed 255 characters'
    isValid = false
  }

  if (form.phone && !(/^\+?[0-9]{7,}$/.test(form.phone.replace(/[() \-]/g, '')))) {
    errors.phone = 'Please enter a valid phone number'
    isValid = false
  } else if (form.phone.length > 20) {
    errors.phone = 'Phone number must not exceed 20 characters'
    isValid = false
  }

  if (!form.company) {
    errors.company = 'Company name is required'
    isValid = false
  } else if (form.company.length > 255) {
    errors.company = 'Company name must not exceed 255 characters'
    isValid = false
  }

  if (!form.countryId) {
    errors.countryId = 'Country is required'
    isValid = false
  }

  if (!form.companySize) {
    errors.companySize = 'Company size is required'
    isValid = false
  }

  if (form.preferredWeekdays.length === 0) {
    errors.preferredWeekdays = 'Please select at least one weekday'
    isValid = false
  }

  if (!form.preferredTime) {
    errors.preferredTime = 'Preferred time is required'
    isValid = false
  }

  if (form.comments && form.comments.length > 65000) {
    errors.comments = 'Comments must not exceed 65000 characters'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitError.value = ''

  try {
    // Execute reCAPTCHA
    const recaptchaToken = await (window as any).grecaptcha.execute('6Le1080qAAAAAD-zQuyFtTF_WcxX6qOhkAF4YlRm', { action: 'submit' })

    const payload = {
      name: form.fullName,
      email: form.email,
      phone: form.phone || undefined,
      companyName: form.company,
      companySize: form.companySize,
      country: form.countryId,
      timeZone: timeZone.value,
      preferredWeekdays: form.preferredWeekdays.map(Number),
      preferredTime: form.preferredTime,
      additionalComments: form.comments || undefined,
      recaptchaToken
    }

    const response = await $fetch(`${useRuntimeConfig().public.apiBaseUrl}/demos`, {
      method: 'POST',
      body: payload,
      headers
    })

    formSubmitted.value = true
  } catch (error: any) {
    console.error('Error submitting form:', error)
    if (error.data?.errorCode === 'invalid_recaptcha') {
      submitError.value = 'reCAPTCHA verification failed. Please try again.'
    } else if (error.data?.errorCode === 'no_business_email') {
      errors.email = 'Please use a valid business email address'
    } else if (error.data?.errorCode === 'already_submitted') {
      submitError.value = 'You have already submitted a demo request'
    } else if (error.data?.errorCode === 'invalid_data' && error.data?.errors) {
      Object.entries(error.data.errors).forEach(([key, messages]) => {
        errors[key as keyof Errors] = Array.isArray(messages) ? messages[0] : messages
      })
    } else {
      submitError.value = 'An error occurred. Please try again later.'
    }
  } finally {
    isSubmitting.value = false
  }
}

onMounted(async () => {
  // Set timezone on client-side only
  timeZone.value = Intl.DateTimeFormat().resolvedOptions().timeZone

  try {
    const response = await $fetch<{ data: Country[] }>(`${useRuntimeConfig().public.apiBaseUrl}/demos/countries`, {
      headers
    })
    countries.value = response.data
  } catch (error) {
    console.error('Error fetching countries:', error)
  } finally {
    countriesLoading.value = false
  }
})
</script>
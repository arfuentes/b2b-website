<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <!-- Success message after form submission -->
      <div v-if="formSubmitted" class="max-w-3xl mx-auto">
        <div class="text-center mb-8">
          <div
            class="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-success-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 class="text-3xl font-heading font-bold mb-6">
            Thank You for Requesting a Demo!
          </h2>
          <div class="prose prose-lg mx-auto">
            <p>
              We've received your request, and to proceed, you'll first receive
              an email to confirm your request. Please check your inbox and
              confirm your email to continue the process.
            </p>
            <p>
              Once confirmed, our team will reach out to schedule your
              personalized demo. If we need any additional details to tailor the
              session to your needs, we'll contact you first before setting up
              the demo.
            </p>
            <p>
              In the session, we'll walk you through Zamdit's key features,
              answer any questions, and show you how our platform can streamline
              your hiring process.
            </p>
            <p>
              If you have any urgent questions or specific areas you'd like us
              to focus on, feel free to reach out at support@zamdit.com.
            </p>
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
          <div
            class="bg-error-100 border border-error-200 text-error-700 px-4 py-3 rounded-lg relative"
            role="alert"
          >
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline"> {{ submitError }}</span>
            <button
              @click="submitError = ''"
              class="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
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
            Experience how Zamdit can streamline your hiring process. Request a
            live demo, and our team will walk you through the key features,
            answer your questions, and show you how Zamdit can help you hire
            smarter and faster.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Column -->
          <div>
            <h2 class="text-2xl font-heading font-bold mb-6">
              What to expect?
            </h2>
            <div class="space-y-4 mb-8">
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span
                  >Personalized Consultation – We'll start with a quick
                  discussion to understand your hiring needs and how Zamdit can
                  support your company.</span
                >
              </p>
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span
                  >Live Product Walkthrough – Get a hands-on look at Zamdit's
                  features and see how they simplify and speed up hiring.</span
                >
              </p>
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span
                  >Use Case Insights – Discover how companies like yours benefit
                  from Zamdit and how it can fit into your workflow.</span
                >
              </p>
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span
                  >Tailored Recommendations – Explore the best plan for your
                  business based on your goals and requirements.</span
                >
              </p>
              <p class="flex items-start">
                <span class="text-success-500 mr-2">✔</span>
                <span
                  >No Obligation – This is a free, no-commitment demo to help
                  you make an informed decision.</span
                >
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
              <h2 class="text-2xl font-heading font-bold mb-6 text-white">
                Please enter your information
              </h2>

              <form @submit.prevent="submitForm" class="space-y-6">
                <UiFormInput
                  id="full-name"
                  v-model="form.fullName"
                  label="Full Name"
                  :error="errors.fullName"
                  required
                  maxlength="255"
                  dark-mode
                />

                <UiFormInput
                  id="business-email"
                  v-model="form.email"
                  label="Business Email"
                  type="email"
                  :error="errors.email"
                  required
                  maxlength="255"
                  dark-mode
                />

                <UiFormInput
                  id="phone-number"
                  v-model="form.phone"
                  label="Phone Number"
                  :error="errors.phone"
                  maxlength="20"
                  dark-mode
                />

                <UiFormInput
                  id="company-name"
                  v-model="form.company"
                  label="Company Name"
                  :error="errors.company"
                  required
                  maxlength="255"
                  dark-mode
                />

                <UiFormSelect
                  v-if="!countriesLoading"
                  id="country-id"
                  v-model="form.countryId"
                  label="Country"
                  placeholder="Select a country"
                  :error="errors.countryId"
                  required
                  dark-mode
                  :options="countries"
                />

                <UiFormSelect
                  id="company-size"
                  v-model="form.companySize"
                  label="Company Size"
                  placeholder="Select company size"
                  :error="errors.companySize"
                  required
                  dark-mode
                  :options="companySizes"
                />

                <UiFormMultiSelect
                  id="preferred-weekdays"
                  v-model="form.preferredWeekdays"
                  :options="weekdayOptions"
                  label="Preferred Weekdays"
                  placeholder="Select preferred weekdays"
                  dark-mode
                />

                <UiFormSelect
                  id="preferred-time"
                  v-model="form.preferredTime"
                  label="Preferred Time"
                  placeholder="Select your preferred time"
                  dark-mode
                  :options="times"
                />

                <UiFormTextarea
                  id="additional-comments"
                  v-model="form.comments"
                  label="Additional Comments"
                  :error="errors.comments"
                  maxlength="65000"
                  :rows="4"
                  dark-mode
                />

                <!-- Error Messages -->
                <div
                  v-if="submitError"
                  class="bg-error-100 text-error-700 p-4 rounded-md"
                >
                  {{ submitError }}
                </div>

                <div class="flex justify-center">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="isSubmitting"> Processing... </span>
                    <span v-else> Request Demo </span>
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
import { ref, reactive, onMounted, useHead } from "#imports";
import { useApi } from "~/composables/useApi";

interface Country {
  id: string;
  name: string;
}

interface Form {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  countryId: string;
  companySize: string;
  preferredWeekdays: string[];
  preferredTime: string;
  comments: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  countryId?: string;
  companySize?: string;
  comments?: string;
}

const { headers } = useApi();
const countries = ref<{ value: string; label: string }[]>([]);
const countriesLoading = ref(true);
const formSubmitted = ref(false);
const submitError = ref("");
const timeZone = ref("");

const companySizes = [
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-500", label: "201-500" },
  { value: "500+", label: "500+" },
];

const weekdayOptions = [
  { value: "1", label: "Monday" },
  { value: "2", label: "Tuesday" },
  { value: "3", label: "Wednesday" },
  { value: "4", label: "Thursday" },
  { value: "5", label: "Friday" },
];

const times = computed(() => {
  const list: { value: string; label: string }[] = [];
  for (let hour = 8; hour <= 20; hour++) {
    for (let min of [0, 30]) {
      const hour12 = hour <= 12 ? hour : hour - 12;
      const value = `${hour.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}`;
      const label = `${hour12.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")} ${hour < 12 ? "AM" : "PM"}`;
      list.push({ value, label });
    }
  }
  return list;
});

const form = reactive<Form>({
  fullName: "",
  email: "",
  phone: "",
  company: "",
  countryId: "",
  companySize: "",
  preferredWeekdays: [],
  preferredTime: "",
  comments: "",
});

const errors = reactive<Errors>({});

const isSubmitting = ref(false);

// Add reCAPTCHA script using useHead
useHead({
  script: [
    {
      src: `https://www.google.com/recaptcha/api.js?render=6Le1080qAAAAAD-zQuyFtTF_WcxX6qOhkAF4YlRm`,
      defer: true,
    },
  ],
});

watch(
  () => form.fullName,
  () => {
    errors.fullName = undefined;
  }
);

watch(
  () => form.email,
  () => {
    errors.email = undefined;
  }
);

watch(
  () => form.phone,
  () => {
    errors.phone = undefined;
  }
);

watch(
  () => form.company,
  () => {
    errors.company = undefined;
  }
);

watch(
  () => form.countryId,
  () => {
    errors.countryId = undefined;
  }
);

watch(
  () => form.companySize,
  () => {
    errors.companySize = undefined;
  }
);

watch(
  () => form.comments,
  () => {
    errors.comments = undefined;
  }
);

const moveToError = () => {
  let id = "";
  if (errors.fullName) {
    id = "full-name";
  } else if (errors.email) {
    id = "business-email";
  } else if (errors.phone) {
    id = "phone-number";
  } else if (errors.company) {
    id = "company-name";
  } else if (errors.countryId) {
    id = "country-id";
  } else if (errors.companySize) {
    id = "company-size";
  } else if (errors.comments) {
    id = "additional-comments";
  }
  if (id) {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
};

const validateForm = () => {
  let isValid = true;
  errors.fullName = "";
  errors.email = "";
  errors.phone = "";
  errors.company = "";
  errors.countryId = "";
  errors.companySize = "";
  errors.comments = "";

  if (!form.fullName) {
    errors.fullName = "Full name is required";
    isValid = false;
  } else if (form.fullName.length > 255) {
    errors.fullName = "Full name must not exceed 255 characters";
    isValid = false;
  }

  if (!form.email) {
    errors.email = "Business email is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  } else if (form.email.length > 255) {
    errors.email = "Email must not exceed 255 characters";
    isValid = false;
  }

  if (
    form.phone &&
    !/^\+?[0-9]{7,}$/.test(form.phone.replace(/[() \-]/g, ""))
  ) {
    errors.phone = "Please enter a valid phone number";
    isValid = false;
  } else if (form.phone.length > 20) {
    errors.phone = "Phone number must not exceed 20 characters";
    isValid = false;
  }

  if (!form.company) {
    errors.company = "Company name is required";
    isValid = false;
  } else if (form.company.length > 255) {
    errors.company = "Company name must not exceed 255 characters";
    isValid = false;
  }

  if (!form.countryId) {
    errors.countryId = "Country is required";
    isValid = false;
  }

  if (!form.companySize) {
    errors.companySize = "Company size is required";
    isValid = false;
  }

  if (form.comments && form.comments.length > 65000) {
    errors.comments = "Comments must not exceed 65000 characters";
    isValid = false;
  }

  if (!isValid) {
    moveToError();
  }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  submitError.value = "";

  try {
    // Execute reCAPTCHA
    const recaptchaToken = await (window as any).grecaptcha.execute(
      "6Le1080qAAAAAD-zQuyFtTF_WcxX6qOhkAF4YlRm",
      { action: "submit" }
    );

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
      recaptchaToken,
    };

    const response = await $fetch(
      `${useRuntimeConfig().public.apiBaseUrl}/demos`,
      {
        method: "POST",
        body: payload,
        headers,
      }
    );

    formSubmitted.value = true;
  } catch (error: any) {
    console.error("Error submitting form:", error);
    if (error.data?.errorCode === "invalid_recaptcha") {
      submitError.value = "reCAPTCHA verification failed. Please try again.";
    } else if (error.data?.errorCode === "no_business_email") {
      errors.email = "Please use a valid business email address";
    } else if (error.data?.errorCode === "already_submitted") {
      submitError.value = "You have already submitted a demo request";
    } else if (error.data?.errorCode === "invalid_data" && error.data?.errors) {
      Object.entries(error.data.errors).forEach(([key, messages]) => {
        errors[key as keyof Errors] = Array.isArray(messages)
          ? messages[0]
          : messages;
      });
    } else {
      submitError.value = "An error occurred. Please try again later.";
    }
    moveToError();
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(async () => {
  // Set timezone on client-side only
  timeZone.value = Intl.DateTimeFormat().resolvedOptions().timeZone;

  try {
    const response = await $fetch<{ data: Country[] }>(
      `${useRuntimeConfig().public.apiBaseUrl}/demos/countries`,
      {
        headers,
      }
    );
    countries.value = response.data.map((c: Country) => ({
      value: c.id,
      label: c.name,
    }));
  } catch (error) {
    console.error("Error fetching countries:", error);
  } finally {
    countriesLoading.value = false;
  }
});
</script>

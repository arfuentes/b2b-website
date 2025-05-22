<template>
  <div class="min-h-screen bg-white">
    <div class="bg-alternate py-16">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-heading font-bold mb-4 text-secondary-500">
            {{ $t("demo.title") }}
          </h1>
          <p class="text-xl text-secondary-500 md:max-w-4xl mx-auto">
            {{ $t("demo.subtitle") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Success message after form submission -->
    <div v-if="formSubmitted">
      <div class="container md:max-w-3xl mx-auto px-4 py-16">
        <h2 class="text-3xl font-heading font-bold mb-6 text-success-600">
          {{ $t("demo.success.title") }}
        </h2>
        <p v-for="i in 5" :key="i" class="pb-6 text-lg">
          {{ $t(`demo.success.paragraph${i}`) }}
        </p>
        <img
          :src="`/images/demo/${$t('demo.success.image')}`"
          :alt="$t('demo.success.title')"
          class="rounded-md w-full"
        />
      </div>
    </div>

    <!-- Form Content -->
    <div v-else>
      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Column -->
          <div>
            <h2 class="text-2xl font-heading font-bold mb-6">
              {{ $t("demo.whatToExpect") }}
            </h2>
            <div class="space-y-4 mb-8 text-lg">
              <p
                v-for="(point, index) in points"
                :key="index"
                class="flex items-start pb-6"
              >
                <span class="text-primary-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-10"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>{{ point }}</span>
              </p>
            </div>

            <img
              :src="`/images/demo/${$t('demo.image')}`"
              :alt="$t('demo.title')"
              class="rounded-md w-full"
            />
          </div>

          <!-- Right Column - Form -->
          <ClientOnly>
            <div class="bg-secondary-500 rounded-lg p-8">
              <h2 class="text-2xl font-heading font-bold mb-6 text-white">
                {{ $t("demo.formTitle") }}
              </h2>

              <form @submit.prevent="submitForm" class="space-y-6">
                <UiFormInput
                  id="full-name"
                  v-model="form.fullName"
                  :label="$t('demo.form.fullName')"
                  :error="errors.fullName"
                  required
                  maxlength="255"
                  dark-mode
                />

                <UiFormInput
                  id="business-email"
                  v-model="form.email"
                  :label="$t('demo.form.email')"
                  type="email"
                  :error="errors.email"
                  required
                  maxlength="255"
                  dark-mode
                />

                <UiFormInput
                  id="phone-number"
                  v-model="form.phone"
                  :label="$t('demo.form.phone')"
                  :error="errors.phone"
                  maxlength="20"
                  dark-mode
                />

                <UiFormInput
                  id="company-name"
                  v-model="form.company"
                  :label="$t('demo.form.company')"
                  :error="errors.company"
                  required
                  maxlength="255"
                  dark-mode
                />

                <UiFormSelect
                  v-if="!countriesLoading"
                  id="country-id"
                  v-model="form.countryId"
                  :label="$t('demo.form.countryId')"
                  :placeholder="$t('demo.form.placeholders.countryId')"
                  :error="errors.countryId"
                  required
                  dark-mode
                  :options="countries"
                />

                <UiFormSelect
                  id="company-size"
                  v-model="form.companySize"
                  :label="$t('demo.form.companySize')"
                  :placeholder="$t('demo.form.placeholders.companySize')"
                  :error="errors.companySize"
                  required
                  dark-mode
                  :options="companySizes"
                />

                <UiFormMultiSelect
                  id="preferred-weekdays"
                  v-model="form.preferredWeekdays"
                  :options="weekdayOptions"
                  :label="$t('demo.form.preferredWeekdays')"
                  :placeholder="$t('demo.form.placeholders.preferredWeekdays')"
                  dark-mode
                />

                <UiFormSelect
                  id="preferred-time"
                  v-model="form.preferredTime"
                  :label="$t('demo.form.preferredTime')"
                  :placeholder="$t('demo.form.placeholders.preferredTime')"
                  dark-mode
                  :options="times"
                />

                <UiFormTextarea
                  id="additional-comments"
                  v-model="form.comments"
                  :label="$t('demo.form.comments')"
                  :error="errors.comments"
                  maxlength="65000"
                  :rows="4"
                  dark-mode
                />

                <!-- Error Message -->
                <div
                  class="bg-error-100 border border-error-200 text-error-700 px-4 py-3 rounded-md relative"
                  role="alert"
                  v-if="submitError"
                >
                  <strong class="font-bold">{{
                    $t("demo.form.validation.error")
                  }}</strong>
                  <span class="block sm:inline">{{ submitError }}</span>
                  <button
                    type="button"
                    @click="submitError = ''"
                    class="absolute top-0 bottom-0 right-0 px-4 py-3 opacity-70 hover:opacity-100"
                  >
                    <span class="sr-only">{{ $t("common.close") }}</span>
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

                <div class="flex justify-center">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="isSubmitting">
                      {{ $t("demo.form.submitting") }}
                    </span>
                    <span v-else> {{ $t("demo.form.submit") }} </span>
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
import { useApi } from "~/composables/useApi";

const { t } = useI18n();

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
  { value: "1", label: t("demo.form.weekdays.monday") },
  { value: "2", label: t("demo.form.weekdays.tuesday") },
  { value: "3", label: t("demo.form.weekdays.wednesday") },
  { value: "4", label: t("demo.form.weekdays.thursday") },
  { value: "5", label: t("demo.form.weekdays.friday") },
];

const points = [
  t("demo.point1"),
  t("demo.point2"),
  t("demo.point3"),
  t("demo.point4"),
  t("demo.point5"),
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
    errors.fullName = t("demo.form.validation.fullNameRequired");
    isValid = false;
  } else if (form.fullName.length > 255) {
    errors.fullName = t("demo.form.validation.fullNameTooLong");
    isValid = false;
  }

  if (!form.email) {
    errors.email = t("demo.form.validation.emailRequired");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t("demo.form.validation.emailNotValid");
    isValid = false;
  } else if (form.email.length > 255) {
    errors.email = t("demo.form.validation.emailTooLong");
    isValid = false;
  }

  if (
    form.phone &&
    !/^\+?[0-9]{7,}$/.test(form.phone.replace(/[() \-]/g, ""))
  ) {
    errors.phone = t("demo.form.validation.phoneNotValid");
    isValid = false;
  } else if (form.phone.length > 20) {
    errors.phone = t("demo.form.validation.phoneTooLong");
    isValid = false;
  }

  if (!form.company) {
    errors.company = t("demo.form.validation.companyRequired");
    isValid = false;
  } else if (form.company.length > 255) {
    errors.company = t("demo.form.validation.companyTooLong");
    isValid = false;
  }

  if (!form.countryId) {
    errors.countryId = t("demo.form.validation.countryIdRequired");
    isValid = false;
  }

  if (!form.companySize) {
    errors.companySize = t("demo.form.validation.companySizeRequired");
    isValid = false;
  }

  if (form.comments && form.comments.length > 65000) {
    errors.comments = t("demo.form.validation.commentsTooLong");
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
      useRuntimeConfig().public.recaptchaKey,
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error: any) {
    if (error.data?.errorCode === "invalid_recaptcha") {
      submitError.value = t("demo.form.validation.reCaptchaFailed");
    } else if (error.data?.errorCode === "no_business_email") {
      errors.email = t("demo.form.validation.noBusinessEmail");
    } else if (error.data?.errorCode === "already_submitted") {
      submitError.value = t("demo.form.validation.alreadySubmitted");
    } else if (error.data?.errorCode === "invalid_data" && error.data?.errors) {
      Object.entries(error.data.errors).forEach(([key, messages]) => {
        errors[key as keyof Errors] = Array.isArray(messages)
          ? messages[0]
          : messages;
      });
    } else {
      submitError.value = t("demo.form.validation.genericError");
    }
    moveToError();
  } finally {
    isSubmitting.value = false;
  }
};

let scriptEl: any = undefined;

onMounted(async () => {
  // Adding reCAPTCHA script
  if (!document.getElementById("recaptcha-script")) {
    scriptEl = document.createElement("script");
    scriptEl.id = "recaptcha-script";
    scriptEl.src = `https://www.google.com/recaptcha/api.js?render=${
      useRuntimeConfig().public.recaptchaKey
    }`;
    scriptEl.async = true;
    scriptEl.defer = true;
    document.head.appendChild(scriptEl);
  }

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

onUnmounted(() => {
  // Remove reCAPTCHA script
  if (scriptEl && scriptEl.parentNode) {
    scriptEl.parentNode.removeChild(scriptEl);
  }
  // Remove reCAPTCHA badge
  const badge = document.querySelector(".grecaptcha-badge");
  if (badge && badge.parentNode) {
    badge.parentNode.removeChild(badge);
  }

  // Clear grecaptcha object if needed (optional but safer)
  delete window.grecaptcha;
});
</script>

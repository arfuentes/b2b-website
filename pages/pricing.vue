<template>
  <div class="min-h-screen bg-white">
    <div class="bg-alternate pt-16 pb-12">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl text-secondary-500 font-heading font-bold mb-4">
            {{ $t("pricing.title") }}
          </h1>
          <p class="text-xl text-secondary-500">
            {{ $t("pricing.subtitle") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Pricing -->
    <div class="container mx-auto px-4 py-12">
      <div class="flex justify-between items-center px-2 flex-wrap">
        <div class="flex items-center mb-4">
          <span class="pr-2">{{ $t("pricing.currency") }}</span>
          <UiDropdownButton
            :label="currency"
            :options="currencies"
            @select="changeCurrency"
          />
        </div>
        <div class="mb-4">
          <UiToggleSwitch
            v-model="annually"
            type="left-right"
            :onLabel="$t('pricing.annually')"
            :offLabel="$t('pricing.monthly')"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="plan in plans?.data"
          :key="plan.id"
          class="bg-white rounded-md shadow-md overflow-hidden border"
        >
          <div class="p-4">
            <h3 class="text-xl text-center font-heading font-bold">
              {{ plan.name }}
            </h3>

            <div class="mt-4 text-center">
              <span
                v-if="annually"
                class="text-2xl line-through text-neutral-400"
              >
                {{ priceWhenBilledMonthly(plan) }}
              </span>
              &nbsp;
              <span class="text-2xl font-bold">
                {{
                  annually
                    ? priceWhenBilledYearly(plan)
                    : priceWhenBilledMonthly(plan)
                }}
              </span>
            </div>
            <div class="text-center text-sm font-bold mt-2">
              {{ $t("pricing.perMonth") }}
            </div>
            <div
              v-if="annually"
              class="text-center text-sm mt-0.5 text-neutral-500"
            >
              {{ $t("pricing.percentOff", { percent: percentOff(plan) }) }}
            </div>

            <div class="flex justify-center my-6">
              <NuxtLink
                :to="tryAppUrl"
                class="bg-primary-500 hover:bg-secondary-500 text-white font-bold px-8 py-1.5 rounded-full transition-colors"
              >
                {{ $t("pricing.cardCta") }}
              </NuxtLink>
            </div>

            <hr class="my-6" />

            <!-- features -->
            <div class="flex">
              <span class="text-success-500 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="font-bold text-secondary">{{ plan.users }}</span>
              <span class="ml-1">{{ $t("pricing.countUsers") }}</span>
            </div>

            <div class="flex mt-2">
              <span class="text-success-500 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="font-bold text-secondary">
                {{
                  formatNumber(
                    annually ? plan.candidatesPerYear : plan.candidatesPerMonth
                  )
                }}</span
              >
              <span class="ml-1">
                {{ $t("pricing.countCandidates") }} /
                {{ annually ? $t("pricing.year") : $t("pricing.month") }}</span
              >
            </div>
            <div class="pl-6 text-sm text-neutral-500">
              + {{ additionalCandidatePrice(plan) }} /
              {{ $t("pricing.additionalCandidate") }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <ul class="text-neutral-500 text-sm">
          <li class="my-1">
            {{ $t("pricing.billedInAdvance") }}
          </li>
          <li class="my-1">
            {{ $t("pricing.noCancellationFees") }}
          </li>
          <li class="my-1">
            {{ $t("pricing.vatNotice") }}
          </li>
        </ul>
      </div>
    </div>

    <div class="container mx-auto">
      <hr />
    </div>

    <!-- Plan comparison table -->
    <div class="container mx-auto px-4 py-12">
      <div class="overflow-x-auto">
        <h2 class="text-3xl text-center mb-6">
          {{ $t("pricing.planComparison") }}
        </h2>
        <table class="min-w-full table-auto">
          <thead class="bg-neutral-800 text-white">
            <tr>
              <th class="px-4 py-5 pr-10 text-left text-lg">
                {{ $t("pricing.feature") }}
              </th>
              <th
                v-for="plan in plans?.data"
                :key="plan.id"
                class="px-4 py-5 text-center text-neutral-300"
                :style="columnWidthStyle"
              >
                {{ plan.name }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <td class="px-4 py-4 border-r border-neutral-300">
                <strong>{{ $t("pricing.usersFeature") }}</strong>
              </td>
              <th
                v-for="plan in plans?.data"
                :key="plan.id"
                class="px-4 py-4 text-center"
              >
                {{ plan.users }}
              </th>
            </tr>
            <tr class="bg-alternate">
              <td class="px-4 py-4 border-r border-neutral-300">
                <span
                  v-html="
                    annually
                      ? $t('pricing.candidatesYearFeature')
                      : $t('pricing.candidatesMonthFeature')
                  "
                ></span>
              </td>
              <th
                v-for="plan in plans?.data"
                :key="plan.id"
                class="px-4 py-4 text-center"
              >
                {{
                  formatNumber(
                    annually ? plan.candidatesPerYear : plan.candidatesPerMonth
                  )
                }}
              </th>
            </tr>
            <tr
              v-for="(feature, index) in features"
              :key="index"
              :class="[index % 2 ? 'bg-alternate' : '']"
            >
              <td class="px-4 py-4 border-r border-neutral-300">
                <span v-html="feature"></span>
              </td>
              <th
                v-for="plan in plans?.data"
                :key="plan.id"
                class="px-4 py-4 text-center"
              >
                <span
                  v-if="plan.items.includes(feature)"
                  class="text-success-400 flex justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span v-else class="text-error-400 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-alternate py-12">
      <div class="container mx-auto px-4">
        <div class="flex justify-center my-4">
          <img src="/images/pricing/trial.jpg" class="rounded-full" />
        </div>
        <h2 class="text-3xl text-center mb-6">
          {{ $t("pricing.cta.title") }}
        </h2>
        <p class="text-xl text-center">
          {{ $t("pricing.cta.subtitle1") }}
        </p>
        <p class="text-xl text-center mt-2">
          {{ $t("pricing.cta.subtitle2") }}
        </p>
        <div class="flex justify-center mt-6">
          <NuxtLink
            :to="tryAppUrl"
            class="bg-primary-500 hover:bg-secondary-500 text-white font-bold py-2 px-10 rounded-md text-center transition-colors"
          >
            {{ $t("pricing.cta.button") }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl text-center mb-6">
        {{ $t("pricing.faqTitle") }}
      </h2>

      <div class="max-w-3xl mx-auto mt-10 space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border rounded-md"
        >
          <button
            @click="toggle(index)"
            class="w-full px-4 py-3 text-left font-semibold bg-neutral-50 hover:bg-neutral-100 flex justify-between items-center rounded-t-md"
            :class="{ 'rounded-b-md': !faq.open }"
          >
            {{ faq.question }}
            <svg
              :class="{ 'rotate-180': faq.open }"
              class="w-5 h-5 transform transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-if="faq.open"
            class="px-4 py-3 text-neutral-700 bg-white rounded-md"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useApi,
  type Plan,
  type PlanCurrency,
  type PlansResponse,
} from "~/composables/useApi";

const { t } = useI18n();

const { locale } = useI18n();

const { headers } = useApi();

const annually = ref(true);

const { data: plans } = await useAsyncData<PlansResponse>(() =>
  $fetch(`${useRuntimeConfig().public.apiBaseUrl}/plans`, {
    headers,
  })
);

const currency = ref("USD");

const columnWidthStyle = computed(
  () => `width: ${(100 / ((plans.value?.data.length ?? 1) + 2)).toFixed(2)}%`
);

const currencies = computed(
  () =>
    plans.value?.data[0].currencyDetails.map(
      (c: PlanCurrency) => c.currency
    ) ?? ["USD"]
);

function changeCurrency(curr: string) {
  currency.value = curr;
}

const features = computed(() => {
  const lastPlanIndex = (plans.value?.data.length ?? 1) - 1;
  return plans.value?.data[lastPlanIndex].items ?? [];
});

const findCurrencyData = (plan: Plan) =>
  plan.currencyDetails.find((c) => c.currency == currency.value);

const percentOff = (plan: Plan) => {
  const currencyData = findCurrencyData(plan);
  return currencyData
    ? formatPercent(
        ((currencyData.monthlyPrice || 0) -
          (currencyData.yearlyPrice || 0) / 12) /
          (currencyData.monthlyPrice || 1),
        locale.value,
        1
      )
    : "";
};

const additionalCandidatePrice = (plan: Plan) => {
  const currencyData = findCurrencyData(plan);
  return currencyData
    ? formatCurrency(
        currencyData.candidatePrice,
        currencyData.currency,
        locale.value,
        2
      )
    : "";
};

const priceWhenBilledMonthly = (plan: Plan) => {
  const currencyData = findCurrencyData(plan);
  return currencyData
    ? formatCurrency(
        currencyData.monthlyPrice,
        currencyData.currency,
        locale.value
      )
    : "";
};

const priceWhenBilledYearly = (plan: Plan) => {
  const currencyData = findCurrencyData(plan);
  return currencyData
    ? formatCurrency(
        Math.ceil(currencyData.yearlyPrice / 12),
        currencyData.currency,
        locale.value
      )
    : "";
};

const formatNumber = (n: number) => formatDecimal(n, locale.value, 0, true);

function detectCurrency() {
  const currencyByLocale: Record<string, string> = {
    // Eurozone
    fr: "EUR",
    de: "EUR",
    es: "EUR",
    it: "EUR",
    pt: "EUR",
    nl: "EUR",
    fi: "EUR",
    ie: "EUR",
    at: "EUR",
    be: "EUR",
    gr: "EUR",
    lu: "EUR",
    sk: "EUR",
    si: "EUR",
    lv: "EUR",
    lt: "EUR",
    ee: "EUR",
    cy: "EUR",
    mt: "EUR",

    // UK
    "en-gb": "GBP",

    // Default to USD
    en: "USD",
    "en-us": "USD",
    "en-ca": "USD",
    "en-au": "USD",
  };
  const locale = navigator.language || "en-US";
  const lang = locale.toLowerCase();

  if (currencyByLocale[lang]) {
    return currencyByLocale[lang];
  }
  const baseLang = lang.split("-")[0];
  if (currencyByLocale[baseLang]) {
    return currencyByLocale[baseLang];
  }

  return "USD";
}

const tryAppUrl = `${useRuntimeConfig().public.webappBaseUrl}/register/email`;

const faqs = ref(
  Array.from({ length: 12 }, (_, i) => i + 1).map((idx) => ({
    question: t(`pricing.faq${idx}.question`),
    answer: t(`pricing.faq${idx}.answer`),
    open: false,
  }))
);

const toggle = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};

onMounted(() => {
  currency.value = detectCurrency();
  if (!currencies.value.includes(currency.value)) {
    currency.value = currencies.value?.[0] ?? "USD";
  }
});
</script>

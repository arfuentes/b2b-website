<template>
  <header class="md:fixed w-full top-0 z-50">
    <!-- Top bar - hidden on scroll -->
    <div
      ref="topBar"
      class="bg-neutral-100 text-secondary-500 py-1 transition-all duration-300 ease-in-out"
    >
      <div class="container mx-auto px-4">
        <div class="flex justify-end items-center space-x-4">
          <NuxtLink
            :to="appLoginUrl"
            class="text-sm hover:text-primary-500 transition-colors"
          >
            {{ $t("header.login") }}
          </NuxtLink>
          <div class="relative" ref="languageMenu">
            <button
              class="text-sm hover:text-primary-500 transition-colors flex items-center"
              @click="toggleLanguageMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 pr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>

              {{ currentLocale.name }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <!-- Language menu -->
            <div
              v-if="showLanguageMenu"
              class="absolute right-0 mt-2 py-2 bg-white rounded-md shadow-xl z-50"
              @click.stop
            >
              <div
                v-for="locale in availableLocales"
                :key="locale.code"
                class="block px-8 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-secondary-600 transition-colors cursor-pointer"
                @click="switchLanguage(locale.code)"
              >
                {{ locale.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main navigation -->
    <nav class="bg-white shadow-md">
      <div
        :class="[
          'container mx-auto px-4 transition-all duration-500',
          isShrunk ? 'py-3' : 'py-3 md:py-6',
        ]"
      >
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLinkLocale to="/" class="flex-shrink-0">
            <img src="/images/logo.svg" alt="Zamdit" class="h-10" />
          </NuxtLinkLocale>

          <!-- Navigation Links -->
          <div class="hidden sm:flex text-lg items-center space-x-8">
            <NuxtLinkLocale
              to="features"
              class="text-neutral-700 hover:text-primary-500 transition-colors"
            >
              {{ $t("header.features") }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              to="pricing"
              class="text-neutral-700 hover:text-primary-500 transition-colors"
            >
              {{ $t("header.pricing") }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              to="about"
              class="text-neutral-700 hover:text-primary-500 transition-colors"
            >
              {{ $t("header.aboutUs") }}
            </NuxtLinkLocale>
          </div>

          <span class="hidden sm:inline md:hidden w-1"></span>

          <!-- CTA Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLinkLocale
              to="demo"
              class="border-2 border-primary-500 text-primary-500 font-bold bg-transparent hover:text-secondary-500 hover:border-secondary-500 px-4 py-1 rounded-md transition-colors"
            >
              {{ $t("header.requestDemo") }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              :to="tryAppUrl"
              class="bg-primary-500 font-bold border-2 border-primary-500 hover:bg-secondary-500 hover:border-secondary-500 text-white px-4 py-1 rounded-md transition-colors"
            >
              {{ $t("header.tryFree") }}
            </NuxtLinkLocale>
          </div>

          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 transition-colors"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              :class="[mobileMenuOpen ? 'hidden' : 'block', 'h-6 w-6']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="[mobileMenuOpen ? 'block' : 'hidden', 'h-6 w-6']"
              xmlns="http://www.w3.org/2000/svg"
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

      <!-- Mobile menu -->
      <div
        :class="[
          'transition-all duration-500',
          mobileMenuOpen ? 'block' : 'hidden',
          'sm:hidden',
        ]"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLinkLocale
            to="features"
            class="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 text-lg hover:text-primary-500 hover:bg-neutral-100 transition-colors"
          >
            {{ $t("header.features") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="pricing"
            class="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 text-lg hover:text-primary-500 hover:bg-neutral-100 transition-colors"
          >
            {{ $t("header.pricing") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="aboutUs"
            class="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 text-lg hover:text-primary-500 hover:bg-neutral-100 transition-colors"
          >
            {{ $t("header.aboutUs") }}
          </NuxtLinkLocale>
        </div>
      </div>
    </nav>
  </header>

  <!-- Spacer to prevent content from being hidden under fixed header -->
  <div class="md:h-[92px]"></div>
</template>

<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();
const router = useRouter();

const mobileMenuOpen = ref(false);
const showLanguageMenu = ref(false);
const topBar = ref<HTMLElement | null>(null);
const languageMenu = ref<HTMLElement | null>(null);

const currentLocale = computed(() => {
  return {
    code: locale.value,
    name:
      locales.value.find((l: any) => l.code == locale.value)?.name ?? "English",
  };
});

const availableLocales = computed(() =>
  locales.value.filter((l: any) => l.code !== locale.value)
);

const tryAppUrl = `${useRuntimeConfig().public.webappBaseUrl}/register/email`;

const appLoginUrl = `${useRuntimeConfig().public.webappBaseUrl}/auth/login`;

const toggleLanguageMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value;
};

const switchLanguage = async (lang: "en" | "es") => {
  toggleLanguageMenu();
  await setLocale(lang);
  router.push(localePath("/", lang));
};

const isShrunk = ref(false);

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition < 28) {
    if (topBar.value) {
      topBar.value.classList.remove("hidden", "pointer-events-none");
    }
  } else {
    if (topBar.value) {
      topBar.value.classList.add("hidden", "pointer-events-none");
    }
  }
  isShrunk.value = window.scrollY >= 28;
};

// Close language menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (
    languageMenu.value &&
    !languageMenu.value.contains(event.target as Node)
  ) {
    showLanguageMenu.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>

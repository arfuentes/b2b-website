<template>
  <header>
    <!-- Top bar - hidden on scroll -->
    <div ref="topBar" class="bg-neutral-800 text-white py-2 transition-transform duration-300">
      <div class="container mx-auto px-4">
        <div class="flex justify-end items-center space-x-4">
          <NuxtLink :to="localePath('/login')" class="text-sm hover:text-primary-300 transition-colors">
            {{ $t('header.login') }}
          </NuxtLink>
          <div class="relative" ref="languageMenu">
            <button 
              class="text-sm hover:text-primary-300 transition-colors flex items-center"
              @click="toggleLanguageMenu"
            >
              {{ currentLocale.name }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <!-- Language menu -->
            <div 
              v-if="showLanguageMenu" 
              class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50"
              @click.stop
            >
              <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                @click="showLanguageMenu = false"
              >
                {{ locale.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main navigation - sticky -->
    <nav class="bg-white shadow-md sticky top-0 z-40 py-2">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink :to="localePath('/')" class="flex-shrink-0 p-1">
            <img src="/images/logo.svg" alt="Zamdit" class="h-[40px]" />
          </NuxtLink>
          
          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink :to="localePath('/features')" class="text-neutral-700 hover:text-primary-500 transition-colors">
              {{ $t('header.features') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/pricing')" class="text-neutral-700 hover:text-primary-500 transition-colors">
              {{ $t('header.pricing') }}
            </NuxtLink>
          </div>
          
          <!-- CTA Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLink :to="localePath('/request-demo')" class="border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50 hover:text-primary-600 px-4 py-1 rounded-md transition-colors">
              {{ $t('header.requestDemo') }}
            </NuxtLink>
            <NuxtLink to="https://app3.test.zamdit.com/register/email" class="bg-primary-500 border-2 border-primary-500 hover:bg-secondary-500 hover:border-secondary-500 text-white px-4 py-1 rounded-md transition-colors">
              {{ $t('header.tryFree') }}
            </NuxtLink>
          </div>
          
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 transition-colors"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              :class="[mobileMenuOpen ? 'hidden' : 'block', 'h-6 w-6']"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              :class="[mobileMenuOpen ? 'block' : 'hidden', 'h-6 w-6']"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div :class="[mobileMenuOpen ? 'block' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink 
            :to="localePath('/features')"
            class="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 transition-colors"
          >
            {{ $t('header.features') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/pricing')"
            class="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 transition-colors"
          >
            {{ $t('header.pricing') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/request-demo')"
            class="block px-3 py-2 rounded-md text-base font-medium text-primary-500 hover:text-primary-600 transition-colors"
          >
            {{ $t('header.requestDemo') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/try-free')"
            class="block px-3 py-2 rounded-md text-base font-medium bg-accent-300 hover:bg-accent-400 text-neutral-900 transition-colors"
          >
            {{ $t('header.tryFree') }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useI18nRouting } from '#imports';

const { t, locale } = useI18n();
const { localePath, switchLocalePath } = useI18nRouting();

const mobileMenuOpen = ref(false);
const showLanguageMenu = ref(false);
const topBar = ref<HTMLElement | null>(null);
const languageMenu = ref<HTMLElement | null>(null);
let lastScrollPosition = 0;

const currentLocale = computed(() => {
  return {
    code: locale.value,
    name: locale.value === 'en' ? 'English' : 'Español'
  };
});

const availableLocales = computed(() => {
  return [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ].filter(l => l.code !== locale.value);
});

const toggleLanguageMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value;
};

// Handle scroll for hiding top bar
const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  
  if (currentScrollPosition < lastScrollPosition || currentScrollPosition < 50) {
    // Scrolling up or near top - show the bar
    if (topBar.value) {
      topBar.value.style.transform = 'translateY(0)';
    }
  } else {
    // Scrolling down - hide the bar
    if (topBar.value) {
      topBar.value.style.transform = 'translateY(-100%)';
    }
  }
  
  lastScrollPosition = currentScrollPosition;
};

// Close language menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (languageMenu.value && !languageMenu.value.contains(event.target as Node)) {
    showLanguageMenu.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>
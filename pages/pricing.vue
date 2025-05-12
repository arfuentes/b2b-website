<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-heading font-bold mb-4">
          {{ $t('pricing.title') }}
        </h1>
        <p class="text-xl text-neutral-600">
          {{ $t('pricing.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div v-for="i in 3" :key="i" class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-8">
            <h3 class="text-2xl font-heading font-bold mb-4">Plan {{ i }}</h3>
            <div class="text-4xl font-bold mb-6">$99<span class="text-lg text-neutral-500">/mo</span></div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <div class="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center mr-3">
                  <div class="w-3 h-3 bg-success-500 rounded-full"></div>
                </div>
                <span>Feature 1</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center mr-3">
                  <div class="w-3 h-3 bg-success-500 rounded-full"></div>
                </div>
                <span>Feature 2</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center mr-3">
                  <div class="w-3 h-3 bg-success-500 rounded-full"></div>
                </div>
                <span>Feature 3</span>
              </li>
            </ul>
            <button class="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-lg transition-colors">
              {{ $t('pricing.cta') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
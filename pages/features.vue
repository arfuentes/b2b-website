<template>
  <div class="min-h-screen bg-neutral-50">
    <div class="bg-primary-600 text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
          {{ $t('features.title') }}
        </h1>
        <p class="text-xl text-primary-100 text-center max-w-3xl mx-auto">
          {{ $t('features.subtitle') }}
        </p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
            <div class="w-8 h-8 bg-primary-500 rounded-full"></div>
          </div>
          <h3 class="text-xl font-heading font-bold mb-3">Feature {{ i }}</h3>
          <p class="text-neutral-600">Detailed description of feature {{ i }} and its benefits for your organization.</p>
        </div>
      </div>
    </div>
  </div>
</template>
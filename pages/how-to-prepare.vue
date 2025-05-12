<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-heading font-bold mb-4">
          {{ $t('candidates.prepare.title') }}
        </h1>
        <p class="text-xl text-neutral-600 mb-12">
          {{ $t('candidates.prepare.subtitle') }}
        </p>

        <div class="space-y-8">
          <section class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-heading font-bold mb-4">Before the Assessment</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p>Review the assessment requirements and format</p>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p>Ensure you have a quiet, distraction-free environment</p>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p>Test your equipment and internet connection</p>
              </li>
            </ul>
          </section>

          <section class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-heading font-bold mb-4">During the Assessment</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p>Read instructions carefully</p>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p>Manage your time effectively</p>
              </li>
              <li class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p>Stay focused and calm</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
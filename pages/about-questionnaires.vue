<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-heading font-bold mb-4">
          {{ $t('candidates.questionnaires.title') }}
        </h1>
        <p class="text-xl text-neutral-600 mb-12">
          {{ $t('candidates.questionnaires.subtitle') }}
        </p>

        <div class="space-y-8">
          <section class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-heading font-bold mb-4">Questionnaire Overview</h2>
            <p class="text-neutral-600 mb-6">
              Our online questionnaires are designed to gather comprehensive information about your skills, experience, and preferences in a structured format.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="border border-neutral-200 rounded-lg p-6">
                <h3 class="text-xl font-bold mb-3">Format</h3>
                <ul class="space-y-2 text-neutral-600">
                  <li>Multiple choice questions</li>
                  <li>Short answer responses</li>
                  <li>Scenario-based questions</li>
                  <li>Skills self-assessment</li>
                </ul>
              </div>
              
              <div class="border border-neutral-200 rounded-lg p-6">
                <h3 class="text-xl font-bold mb-3">Duration</h3>
                <ul class="space-y-2 text-neutral-600">
                  <li>15-30 minutes on average</li>
                  <li>Progress can be saved</li>
                  <li>Flexible completion time</li>
                  <li>Section-based structure</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-heading font-bold mb-4">Tips for Success</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p class="text-neutral-600">Read each question carefully before responding</p>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p class="text-neutral-600">Provide specific examples when asked</p>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p class="text-neutral-600">Be honest and consistent in your responses</p>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                </div>
                <p class="text-neutral-600">Take your time to provide thoughtful answers</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
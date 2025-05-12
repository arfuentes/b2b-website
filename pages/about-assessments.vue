<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-heading font-bold mb-4">
          {{ $t('candidates.assessments.title') }}
        </h1>
        <p class="text-xl text-neutral-600 mb-12">
          {{ $t('candidates.assessments.subtitle') }}
        </p>

        <div class="space-y-8">
          <section class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-heading font-bold mb-4">Types of Assessments</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-xl font-bold mb-3">Technical Skills</h3>
                <p class="text-neutral-600">Evaluate your programming, problem-solving, and technical knowledge.</p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3">Cognitive Abilities</h3>
                <p class="text-neutral-600">Assess reasoning, memory, and processing capabilities.</p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3">Personality Traits</h3>
                <p class="text-neutral-600">Understand your work style and team compatibility.</p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3">Situational Judgment</h3>
                <p class="text-neutral-600">Evaluate decision-making in workplace scenarios.</p>
              </div>
            </div>
          </section>

          <section class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-heading font-bold mb-4">Assessment Process</h2>
            <div class="space-y-4">
              <p class="text-neutral-600">Our assessment process is designed to be fair, transparent, and comprehensive. Each assessment is carefully calibrated to measure relevant skills and competencies for the role.</p>
              <p class="text-neutral-600">Results are analyzed using advanced algorithms and industry-standard methodologies to provide accurate insights into candidate capabilities.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
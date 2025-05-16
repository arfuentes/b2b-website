<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-heading font-bold mb-6 text-neutral-800">
          {{ $t('about.title') }}
        </h1>
        
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-heading font-bold mb-4">{{ $t('about.mission') }}</h2>
          <p class="mb-8">
            Our mission is to revolutionize the way organizations assess and evaluate talent, making the process more efficient, fair, and data-driven for everyone involved.
          </p>

          <h2 class="text-2xl font-heading font-bold mb-4">{{ $t('about.story') }}</h2>
          <p class="mb-8">
            Founded in 2020, we set out to solve the challenges organizations face in evaluating candidates effectively. Our platform combines cutting-edge technology with proven assessment methodologies to deliver comprehensive insights.
          </p>

          <h2 class="text-2xl font-heading font-bold mb-4">{{ $t('about.values') }}</h2>
          <ul class="list-disc pl-6 mb-8">
            <li>Innovation in Assessment Technology</li>
            <li>Data-Driven Decision Making</li>
            <li>Fairness and Transparency</li>
            <li>Continuous Improvement</li>
            <li>User-Centric Design</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
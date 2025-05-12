<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-heading font-bold mb-4">
          {{ $t('security.title') }}
        </h1>
        <p class="text-xl text-neutral-600 mb-12">
          {{ $t('security.subtitle') }}
        </p>

        <div class="space-y-12">
          <section>
            <h2 class="text-2xl font-heading font-bold mb-6">{{ $t('security.compliance') }}</h2>
            <div class="prose prose-lg">
              <p>We maintain the highest standards of security compliance, including SOC 2 Type II certification, GDPR compliance, and regular security audits.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-heading font-bold mb-6">{{ $t('security.dataProtection') }}</h2>
            <div class="prose prose-lg">
              <p>All data is encrypted at rest and in transit using industry-standard encryption protocols. We implement multiple layers of security to protect your sensitive information.</p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-heading font-bold mb-6">{{ $t('security.infrastructure') }}</h2>
            <div class="prose prose-lg">
              <p>Our infrastructure is hosted in secure, enterprise-grade data centers with redundant systems and regular security updates.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
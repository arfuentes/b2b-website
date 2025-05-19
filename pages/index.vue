<template>
  <div>
    <!-- Hero Section -->
    <section
      class="bg-alternate text-secondary-500 pt-16 pb-10 background-circle-effect"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center">
          <div
            v-motion-slide-visible-once-left
            :delay="isMobile ? 0 : 200"
            :duration="isMobile ? 1 : 1500"
            class="w-full lg:w-5/12"
            style="max-width: 600px"
          >
            <h1
              class="text-5xl text-secondary-700 font-heading font-bold text-center leading-tight mb-8"
            >
              {{ t("home.hero.title") }}
            </h1>
            <p class="text-3xl text-center mb-8">
              {{ t("home.hero.subtitle") }}
            </p>
            <div class="flex justify-center space-y-4 pt-10">
              <NuxtLink
                :to="tryAppUrl"
                class="w-full text-lg bg-primary-500 hover:bg-secondary-500 text-white font-bold py-2 px-8 rounded-md text-center transition-colors"
                style="max-width: 360px"
              >
                {{ t("home.hero.ctaButton") }}
              </NuxtLink>
            </div>
            <div>
              <p class="text-center text-neutral-400 pt-1">
                {{ t("home.hero.creditCardMessage") }}
              </p>
            </div>
            <div class="p-4 mt-4 flex justify-center pt-4">
              <p
                class="text-lg text-secondary w-full text-justify"
                style="max-width: 360px"
                v-html="t('home.hero.message')"
              ></p>
            </div>
          </div>
          <div class="w-100 lg:w-7/12">
            <img
              v-motion-slide-visible-once-right
              :delay="isMobile ? 0 : 200"
              :duration="isMobile ? 1 : 1500"
              :src="`/images/home/${t('home.hero.image')}`"
              alt="Hero Image"
              class="p-2"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Built For Section -->
    <section class="py-10 bg-alternate">
      <div class="container mx-auto px-4">
        <h2
          class="text-center text-2xl font-heading font-bold mb-10 text-secondary-500"
        >
          {{ $t("home.builtFor.title") }}
        </h2>
        <div
          class="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-4"
        >
          <div v-for="logo in logos" :key="logo" class="flex p-1">
            <img
              :src="`/images/partners/${logo}`"
              class="w-full max-w-full max-h-8 self-center object-cover object-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-heading font-bold text-secondary-500"
          >
            {{ $t("home.features.title") }}
          </h2>
        </div>
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="[
            'flex flex-col sm:flex-row mb-12',
            feature.imageFirst ? 'sm:flex-row-reverse' : '',
          ]"
        >
          <div
            v-motion-pop-visible-once
            :duration="isMobile ? 1 : 1000"
            class="sm:w-1/2 md:w-7/12 lg:w-7/12 p-2 text-xl flex flex-col justify-start items-stretch"
          >
            <div class="flex flex-grow pb-4">
              <h3 class="self-end text-2xl">{{ feature.title }}</h3>
            </div>
            <div class="flex flex-grow">
              <p class="self-start pb-2">
                {{ feature.text }}
              </p>
            </div>
          </div>
          <div
            v-motion-fade-visible-once
            :duration="isMobile ? 1 : 1500"
            class="sm:w-1/2 md:w-5/12 lg:w-5/12 p-2 flex justify-center"
          >
            <img
              :src="`/images/home/${feature.imageSrc}`"
              :alt="feature.title"
              class="rounded-md w-full max-w-[480px] self-center"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="py-20 bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white">
            {{ $t("home.video.title") }}
          </h2>
        </div>

        <div class="relative rounded-lg overflow-hidden shadow-xl">
          <div class="p-5 flex items-center justify-center">
            <div class="relative w-full pb-[56.25%] h-0">
              <iframe
                class="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/JsftIRGMUfk"
                title="YouTube video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-alternate">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-heading font-bold text-secondary-500"
          >
            {{ $t("home.testimonials.title") }}
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            v-motion-pop-visible-once
            :duration="isMobile ? 1 : (index + 1) * 500"
            :class="[
              'bg-white p-6 rounded-lg border-2 border-secondary-500 flex flex-col justify-between h-full',
              index > 2 ? 'hidden sm:flex md:flex lg:hidden' : '',
            ]"
          >
            <div class="mb-4">
              <h3 class="font-heading font-bold mb-16 text-neutral-800">
                {{ testimonial.title }}
              </h3>
              <p class="text-neutral-600 italic">"{{ testimonial.text }}"</p>
            </div>
            <div class="flex w-full justify-between items-center">
              <div class="flex-grow">
                <div class="font-lg font-bold text-neutral-800">
                  {{ testimonial.name }}
                </div>
                <div class="text-neutral-500">
                  {{ testimonial.position }}
                </div>
                <div class="text-neutral-500">
                  {{ testimonial.company }}
                </div>
              </div>
              <div class="ml-4 flex-shrink-0">
                <img
                  :src="`/images/testimonials/${testimonial.logoSrc}`"
                  :alt="testimonial.company"
                  class="w-auto max-h-[50px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-heading font-bold text-secondary-500"
          >
            {{ $t("home.security.title") }}
          </h2>
        </div>
        <div class="flex flex-col sm:flex-row">
          <div class="sm:w-1/2 md:w-5/12 lg:w-5/12 p-2">
            <img
              src="/images/home/enterprise-grade-security.png"
              alt="Security Image"
              class="rounded-md"
              style="
                width: 100%;
                align-self: flex-start;
                height: 100%;
                object-fit: cover;
                object-position: 100% 50%;
                border-radius: 5px;
              "
            />
          </div>
          <div class="sm:w-1/2 md:w-7/12 lg:w-7/12 p-2 sm:pl-10 text-xl">
            <p>{{ t("home.security.introduction") }}</p>
            <ul class="list-disc pl-6 py-2">
              <li class="my-2" v-for="i in 3" :key="i">
                <strong>{{ $t(`home.security.point${i}Title`) }}</strong
                >: {{ $t(`home.security.point${i}Text`) }}
              </li>
            </ul>
            <p>{{ t("home.security.conclusion") }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const isMobile = ref(false);

onBeforeMount(() => {
  isMobile.value = window.innerWidth < 810;
});

const features = computed(() =>
  Array.from({ length: 4 }, (_, i) => i + 1).map((idx) => ({
    title: t(`home.features.feature${idx}.title`),
    text: t(`home.features.feature${idx}.text`),
    imageSrc: t(`home.features.feature${idx}.image`),
    imageFirst: idx % 2 == 1,
  }))
);

const logos = [
  "fullcomms.png",
  "strata.png",
  "kenton.png",
  "immersive.png",
  "nexa.png",
  "kpro.png",
  "verda.png",
];

const testimonials = computed(() =>
  Array.from({ length: 4 }, (_, i) => i + 1).map((idx) => ({
    title: t(`home.testimonials.card${idx}.title`),
    text: t(`home.testimonials.card${idx}.text`),
    name: t(`home.testimonials.card${idx}.name`),
    position: t(`home.testimonials.card${idx}.position`),
    company: t(`home.testimonials.card${idx}.company`),
    logoSrc: t(`home.testimonials.card${idx}.logo`),
  }))
);

const tryAppUrl = `${useRuntimeConfig().public.appBase}/register/email`;
</script>

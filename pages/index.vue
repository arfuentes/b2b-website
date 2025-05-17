<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-alternate text-secondary-500 pt-16 pb-10 background-circle-effect">
      <div class="container mx-auto px-4 animate-slide-up">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="w-full lg:w-5/12" style="max-width: 600px;">
            <h1
              class="text-5xl font-heading font-bold text-center leading-tight mb-8"
            >
              {{ t("home.hero.title") }}
            </h1>
            <p class="text-3xl text-center mb-8" style="animation-delay: 0.1s">
              {{ t("home.hero.subtitle") }}
            </p>
            <div
              class="flex justify-center space-y-4 pt-10"
              style="animation-delay: 0.2s"
            >
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
              :src="`/images/home/${t('home.hero.image')}`"
              alt="Hero Image"
              class="p-2"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="py-10 bg-alternate">
      <div class="container mx-auto px-4">
        <h2
          class="text-center text-2xl font-heading font-bold mb-12 text-neutral-800"
        >
          {{ $t("home.trustedBy.title") }}
        </h2>
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <div v-for="logo in logos" :key="logo" class="flex p-1">
            <img
              :src="`/images/partners/${logo}`"
              class="w-full max-w-full max-h-8 self-center object-cover object-center opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-heading font-bold mb-4 text-neutral-800"
          >
            {{ $t("home.features.title") }}
          </h2>
          <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
            {{ $t("home.features.subtitle") }}
          </p>
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
            class="sm:w-1/2 md:w-7/12 lg:w-7/12 p-2 text-2xl flex flex-col justify-start items-stretch"
          >
            <div class="flex flex-grow pb-4">
              <h3 class="self-end">{{ feature.title }}</h3>
            </div>
            <div class="flex flex-grow">
              <p class="self-start pb-2">
                {{ feature.text }}
              </p>
            </div>
          </div>
          <div class="sm:w-1/2 md:w-5/12 lg:w-5/12 p-2 flex justify-center">
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
    <section class="py-20 bg-neutral-900 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
            {{ $t("home.video.title") }}
          </h2>
          <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
            {{ $t("home.video.subtitle") }}
          </p>
        </div>

        <div
          class="max-w-4xl mx-auto relative rounded-lg overflow-hidden shadow-2xl"
        >
          <div
            class="aspect-w-16 aspect-h-9 bg-neutral-800 flex items-center justify-center"
          >
            <!-- Video thumbnail -->
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Video Thumbnail"
              class="w-full h-full object-cover"
            />

            <!-- Play button overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
              <button
                class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors transform hover:scale-110 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
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
            class="text-3xl md:text-4xl font-heading font-bold mb-4 text-neutral-800"
          >
            {{ $t("home.testimonials.title") }}
          </h2>
          <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
            {{ $t("home.testimonials.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
              <div>
                <h3 class="font-heading font-bold text-neutral-800">
                  Sarah Johnson
                </h3>
                <p class="text-neutral-500 text-sm">HR Director, TechCorp</p>
              </div>
            </div>
            <p class="text-neutral-600 mb-4">
              "This platform has transformed our hiring process. We're able to
              make more informed decisions and our candidate experience has
              improved dramatically."
            </p>
            <div class="flex text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
              <div>
                <h3 class="font-heading font-bold text-neutral-800">
                  Michael Chen
                </h3>
                <p class="text-neutral-500 text-sm">
                  Talent Acquisition Manager, GlobalCo
                </p>
              </div>
            </div>
            <p class="text-neutral-600 mb-4">
              "The detailed analytics and reporting have given us insights we
              never had before. Our quality of hire has improved significantly
              since implementing this solution."
            </p>
            <div class="flex text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
              <div>
                <h3 class="font-heading font-bold text-neutral-800">
                  Emily Rodriguez
                </h3>
                <p class="text-neutral-500 text-sm">
                  Recruitment Lead, StartupX
                </p>
              </div>
            </div>
            <p class="text-neutral-600 mb-4">
              "We've been able to reduce our time-to-hire by 40% while improving
              the quality of our candidates. The platform is intuitive and our
              team was able to get up and running quickly."
            </p>
            <div class="flex text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-heading font-bold mb-4 text-neutral-800 text-center"
        >
          {{ $t("home.security.title") }}
        </h2>
        <p class="text-xl text-center text-neutral-600 mb-8">
          {{ $t("home.security.subtitle") }}
        </p>
        <div class="flex flex-col sm:flex-row">
          <div class="sm:w-1/2 md:w-5/12 lg:w-5/12 p-3">
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
          <div class="sm:w-1/2 md:w-7/12 lg:w-7/12 p-2 text-xl">
            <p>
              At Zamdit, we prioritize the security and privacy of your data.
              Our platform is built on reliable, world-class cloud
              infrastructure, ensuring your information is always protected and
              accessible when you need it.
            </p>
            <ul class="list-disc pl-6 py-2">
              <li class="my-2">
                <strong>Advanced Security Measures</strong>: Zamdit uses
                industry-standard encryption and secure connections to keep your
                data safe from unauthorised access.
              </li>
              <li class="my-2">
                <strong>GDPR Compliance</strong>: We adhere to stringent data
                protection regulations to safeguard candidate and organisational
                information.
              </li>
              <li class="my-2">
                <strong>Regular Monitoring and Audits</strong>: Our team
                conducts continuous monitoring and security audits to maintain
                the highest standards of safety and reliability.
              </li>
            </ul>
            <p>
              With Zamdit, you can focus on hiring the best talent while we take
              care of protecting your data.
            </p>
          </div>
        </div>
        <div class="mt-8 text-center">
          <NuxtLinkLocale
            to="security"
            class="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            {{ $t("common.learnMore") }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <!-- <section class="py-16 bg-primary-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6">
          Ready to transform your assessment process?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Join thousands of companies that are making better hiring decisions
          with our platform.
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <NuxtLinkLocale
            to="demo"
            class="bg-white font-bold text-primary-700 hover:bg-neutral-100 py-3 px-8 rounded-md text-center transition-colors"
          >
            {{ $t("header.requestDemo") }}
          </NuxtLinkLocale>
          <NuxtLink
            :to="tryAppUrl"
            class="bg-secondary-500 text-white font-bold hover:bg-secondary-600 py-3 px-8 rounded-md text-center transition-colors"
          >
            {{ $t("header.tryFree") }}
          </NuxtLink>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

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
  "nibcode.png",
  "klixel.png",
  "kpro.png",
  "greenfield.png",
  "nexatech.png",
];

const tryAppUrl = `${useRuntimeConfig().public.appBase}/register/email`;
</script>

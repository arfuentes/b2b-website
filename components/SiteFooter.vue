<template>
  <footer class="bg-secondary-600 text-white py-12 pb-24 md:pb-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <!-- Company section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t("footer.company") }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLinkLocale to="about" class="footer-link">
                {{ $t("footer.aboutUs") }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="contact" class="footer-link">
                {{ $t("footer.contactUs") }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="blog" class="footer-link">
                {{ $t("footer.blog") }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- Product section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t("footer.product") }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLinkLocale to="features" class="footer-link">
                {{ $t("footer.features") }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="pricing" class="footer-link">
                {{ $t("footer.pricing") }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="security" class="footer-link">
                {{ $t("footer.security") }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- Candidates section -->
        <div>
          <h3 class="text-xl font-heading mb-4">
            {{ $t("footer.candidates") }}
          </h3>
          <ul class="space-y-2">
            <li>
              <NuxtLinkLocale to="prepare" class="footer-link">
                {{ $t("footer.howToPrepare") }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="assessments" class="footer-link">
                {{ $t("footer.aboutAssessments") }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="questionnaires" class="footer-link">
                {{ $t("footer.aboutQuestionnaires") }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- Social media section -->
        <div class="sm:col-span-3 md:col-span-1">
          <h3 class="text-xl font-heading mb-4">{{ $t("footer.followUs") }}</h3>
          <div class="flex space-x-3">
            <a
              v-for="(icon, index) in socialIcons"
              :key="index"
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              :aria-label="icon.label"
            >
              <SocialIcon :name="icon.name" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom section with copyright -->
      <div
        class="mt-12 pt-6 border-t border-neutral-700 text-neutral-400 text-sm flex flex-col sm:flex-row justify-between"
      >
        <div>
          &copy; {{ new Date().getFullYear() }} {{ $t("footer.copyright") }}
        </div>

        <div class="flex flex-wrap mt-4 sm:mt-0 space-x-6">
          <NuxtLinkLocale
            to="privacy"
            class="hover:text-white transition-colors"
          >
            {{ $t("footer.privacy") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="terms" class="hover:text-white transition-colors">
            {{ $t("footer.terms") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="cookie"
            class="hover:text-white transition-colors"
          >
            {{ $t("footer.cookie") }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </footer>
  <div
    class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-4 md:hidden z-50"
  >
    <div class="flex gap-4">
      <NuxtLinkLocale
        to="demo"
        class="flex-1 text-center border-2 border-primary-500 text-primary-500 font-bold bg-transparent hover:text-secondary-500 hover:border-secondary-500 px-4 py-1 rounded-md transition-colors"
      >
        {{ $t("header.requestDemo") }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
        :to="tryAppUrl"
        class="flex-1 text-center bg-primary-500 font-bold border-2 border-primary-500 hover:bg-secondary-500 hover:border-secondary-500 text-white px-4 py-1 rounded-md transition-colors"
      >
        {{ $t("header.tryFree") }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script setup>
const tryAppUrl = `${useRuntimeConfig().public.webappBaseUrl}/register/email`;
const socialIcons = [
  {
    name: "linkedin",
    label: "LinkedIn",
    link: "https://linkedin.com",
  },
  {
    name: "facebook",
    label: "Facebook",
    link: "https://facebook.com",
  },
  {
    name: "twitter",
    label: "X (Twitter)",
    link: "https://twitter.com",
  },
  {
    name: "instagram",
    label: "Instagram",
    link: "https://instagram.com",
  },
  {
    name: "youtube",
    label: "YouTube",
    link: "https://youtube.com",
  },
];
</script>

<style scoped>
.footer-link {
  color: theme("colors.neutral.400");
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: white;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.33rem;
  height: 2.33rem;
  border-radius: 9999px;
  background-color: theme("colors.neutral.700");
  color: white;
  transition: all 0.2s ease;
}

.social-icon:hover {
  background-color: theme("colors.primary.500");
  transform: translateY(-2px);
}
</style>

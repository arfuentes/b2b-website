<template>
  <footer class="bg-secondary-600 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t('footer.company') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLinkLocale to="about" class="footer-link">
                {{ $t('footer.aboutUs') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="contact" class="footer-link">
                {{ $t('footer.contactUs') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="blog" class="footer-link">
                {{ $t('footer.blog') }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
        
        <!-- Product section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t('footer.product') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLinkLocale to="features" class="footer-link">
                {{ $t('footer.features') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="pricing" class="footer-link">
                {{ $t('footer.pricing') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="security" class="footer-link">
                {{ $t('footer.security') }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
        
        <!-- Candidates section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t('footer.candidates') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLinkLocale to="prepare" class="footer-link">
                {{ $t('footer.howToPrepare') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="assessments" class="footer-link">
                {{ $t('footer.aboutAssessments') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="questionnaires" class="footer-link">
                {{ $t('footer.aboutQuestionnaires') }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
        
        <!-- Social media section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t('footer.followUs') }}</h3>
          <div class="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
              <SocialIcon name="linkedin" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
              <SocialIcon name="facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="X (Twitter)">
              <SocialIcon name="twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
              <SocialIcon name="instagram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="YouTube">
              <SocialIcon name="youtube" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- Bottom section with copyright -->
      <div class="mt-12 pt-6 border-t border-neutral-700 text-neutral-400 text-sm flex flex-col md:flex-row justify-between">
        <div>
          &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
        </div>
        <div class="flex mt-4 md:mt-0 space-x-6">
          <NuxtLinkLocale to="privacy" class="hover:text-white transition-colors">
            {{ $t('footer.privacy') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="terms" class="hover:text-white transition-colors">
            {{ $t('footer.terms') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style scoped>
.footer-link {
  color: theme('colors.neutral.400');
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: white;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: theme('colors.neutral.700');
  color: white;
  transition: all 0.2s ease;
}

.social-icon:hover {
  background-color: theme('colors.primary.500');
  transform: translateY(-2px);
}
</style>
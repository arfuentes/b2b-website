<template>
  <footer class="bg-neutral-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t('footer.company') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/about-us')" class="footer-link">
                {{ $t('footer.aboutUs') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contact-us')" class="footer-link">
                {{ $t('footer.contactUs') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/blog')" class="footer-link">
                {{ $t('footer.blog') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Product section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t('footer.product') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/features')" class="footer-link">
                {{ $t('footer.features') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/pricing')" class="footer-link">
                {{ $t('footer.pricing') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/security')" class="footer-link">
                {{ $t('footer.security') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Candidates section -->
        <div>
          <h3 class="text-xl font-heading mb-4">{{ $t('footer.candidates') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/how-to-prepare')" class="footer-link">
                {{ $t('footer.howToPrepare') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about-assessments')" class="footer-link">
                {{ $t('footer.aboutAssessments') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about-questionnaires')" class="footer-link">
                {{ $t('footer.aboutQuestionnaires') }}
              </NuxtLink>
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
          <NuxtLink :to="localePath('/privacy')" class="hover:text-white transition-colors">
            {{ $t('footer.privacy') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/terms')" class="hover:text-white transition-colors">
            {{ $t('footer.terms') }}
          </NuxtLink>
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
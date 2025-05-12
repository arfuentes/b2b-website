<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="py-20 text-center">
      <div class="w-16 h-16 mx-auto mb-4">
        <svg class="animate-spin text-primary-500 w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <p class="text-lg text-neutral-600">
        {{ $t('common.loading') }}
      </p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="py-20 text-center">
      <div class="w-20 h-20 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-error-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <p class="text-lg text-neutral-600 mb-4">
        {{ error }}
      </p>
      <NuxtLink :to="localePath('/blog')" class="text-primary-500 font-medium hover:text-primary-600 transition-colors">
        {{ $t('common.back') }} to Blog
      </NuxtLink>
    </div>

    <!-- Blog Post Content -->
    <div v-else class="min-h-screen bg-neutral-50">
      <!-- Header Section -->
      <div class="bg-white border-b border-neutral-200 py-12">
        <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Left Column -->
            <div class="lg:w-1/2">
              <!-- Breadcrumb -->
              <nav class="flex items-center space-x-2 text-sm mb-6">
                <NuxtLink :to="localePath('/')" class="text-neutral-500 hover:text-primary-500">Home</NuxtLink>
                <span class="text-neutral-400">/</span>
                <NuxtLink :to="localePath('/blog')" class="text-neutral-500 hover:text-primary-500">Blog</NuxtLink>
                <span class="text-neutral-400">/</span>
                <NuxtLink 
                  :to="localePath(`/blog/category/${post.category.slug}`)" 
                  class="text-primary-500 hover:text-primary-600"
                >
                  {{ post.category.name }}
                </NuxtLink>
              </nav>

              <!-- Title -->
              <h1 class="text-3xl lg:text-4xl font-heading font-bold mb-4 text-neutral-800">
                {{ post.title }}
              </h1>

              <!-- Meta Info -->
              <div class="flex items-center space-x-4 mb-6">
                <div class="flex items-center">
                  <img 
                    :src="post.author.image.url" 
                    :alt="post.author.name"
                    class="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div class="font-medium text-neutral-800">{{ post.author.name }}</div>
                    <div class="text-sm text-neutral-500">{{ formatDate(post.publishedAt) }}</div>
                  </div>
                </div>
              </div>

              <!-- Share Section -->
              <div class="flex items-center space-x-4">
                <span class="text-neutral-600">Share:</span>
                <button 
                  v-for="network in shareNetworks" 
                  :key="network.name"
                  @click="sharePost(network.url)"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-primary-500 hover:text-white transition-colors"
                  :aria-label="`Share on ${network.name}`"
                >
                  <SocialIcon :name="network.icon" />
                </button>
              </div>
            </div>

            <!-- Right Column - Featured Image -->
            <div class="lg:w-1/2">
              <img 
                :src="post.image.url" 
                :alt="post.title"
                class="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-3xl mx-auto">
          <!-- Post Content -->
          <div class="prose prose-lg max-w-none mb-12" v-html="post.content"></div>

          <!-- Related Posts -->
          <div v-if="relatedPosts.length > 0">
            <h2 class="text-2xl font-heading font-bold mb-6">
              {{ $t('blog.relatedPosts') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard 
                v-for="relatedPost in relatedPosts" 
                :key="relatedPost.id" 
                :post="relatedPost" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const route = useRoute();
const api = useApi();
const localePath = useLocalePath();

const post = ref(null);
const relatedPosts = ref([]);
const loading = ref(true);
const error = ref(null);

const shareNetworks = computed(() => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.value?.title || '');
  
  return [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: 'facebook'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      icon: 'twitter'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
      icon: 'linkedin'
    }
  ];
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
};

const sharePost = (url) => {
  window.open(url, '_blank', 'width=600,height=400');
};

onMounted(async () => {
  try {
    const slug = route.params.slug;
    const postData = await api.getBlogPostBySlug(slug);
    post.value = postData;
    relatedPosts.value = postData.relatedPosts;
  } catch (err) {
    error.value = err.message || 'Failed to load blog post';
    console.error('Error fetching blog post:', err);
  } finally {
    loading.value = false;
  }
});
</script>
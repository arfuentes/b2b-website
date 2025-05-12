<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02]">
    <div class="h-48 overflow-hidden">
      <img 
        :src="post.image || '/images/blog-placeholder.jpg'" 
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div class="p-6">
      <div class="flex items-center mb-3">
        <span class="inline-block py-1 px-2 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
          {{ post.category.name }}
        </span>
        <span class="mx-2 text-neutral-400">•</span>
        <span class="text-sm text-neutral-500">{{ formatDate(post.published_at) }}</span>
      </div>
      <h3 class="text-xl font-bold mb-2 line-clamp-2">{{ post.title }}</h3>
      <p class="text-neutral-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>
      <NuxtLink :to="localePath(`/blog/${post.slug}`)" class="text-primary-500 font-medium inline-flex items-center hover:text-primary-600">
        {{ $t('blog.readMore') }}
        <svg class="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const localePath = useLocalePath();

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};
</script>
<template>
  <article
    class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1"
  >
    <div class="aspect-video overflow-hidden">
      <img
        :src="post.image.url"
        :alt="post.title"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-6">
      <h2
        class="text-lg font-bold mb-3 line-clamp-2 hover:text-primary-600 transition-colors"
      >
        <NuxtLinkLocale
          :to="{ name: 'blog-slug', params: { slug: post.slug } }"
        >
          {{ post.title }}
        </NuxtLinkLocale>
      </h2>
      <p class="text-neutral-600 mb-4 line-clamp-4">{{ post.abstract }}</p>
      <NuxtLinkLocale
        :to="{ name: 'blog-slug', params: { slug: post.slug } }"
        class="text-primary-500 font-medium inline-flex items-center hover:text-primary-600 transition-colors"
      >
        {{ $t("blog.readMore") }}
        <svg
          class="w-4 h-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </NuxtLinkLocale>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  post: {
    title: string;
    slug: string;
    abstract: string;
    image: {
      url: string;
    };
  };
}

defineProps<Props>();
</script>

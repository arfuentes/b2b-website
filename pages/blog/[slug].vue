<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="py-20 text-center">
      <div class="w-16 h-16 mx-auto mb-4">
        <div
          class="animate-spin rounded-full h-16 w-16 border-4 border-primary-500 border-t-transparent"
        ></div>
      </div>
      <p class="text-lg text-neutral-600">
        {{ $t("common.loading") }}
      </p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="py-20 text-center">
      <div
        class="w-20 h-20 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-error-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <p class="text-lg text-neutral-600 mb-4">
        {{ $t("blog.postErrorMessage") }}
      </p>
      <NuxtLinkLocale
        to="blog"
        class="text-primary-500 font-medium hover:text-primary-600 transition-colors"
      >
        {{ $t("blog.back") }}
      </NuxtLinkLocale>
    </div>

    <!-- Blog Post Content -->
    <div v-else-if="post" class="min-h-screen bg-white">
      <!-- Header Section -->
      <div class="bg-alternate pt-16 pb-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-col sm:flex-row gap-4 lg:gap-8">
            <!-- Left Column -->
            <div class="sm:w-1/2 md:w-7/12">
              <!-- Breadcrumb -->
              <nav class="flex items-center space-x-2 text-sm mb-6">
                <NuxtLinkLocale
                  to="/"
                  class="text-neutral-500 hover:text-primary-500"
                >
                  {{ $t("blog.home") }}
                </NuxtLinkLocale>
                <span class="text-neutral-400">/</span>
                <NuxtLinkLocale
                  to="blog"
                  class="text-neutral-500 hover:text-primary-500"
                  >{{ $t("blog.blog") }}</NuxtLinkLocale
                >
                <span class="text-neutral-400">/</span>
                <NuxtLinkLocale
                  :to="{
                    name: 'blog-category-slug',
                    params: { slug: post.category.slug },
                  }"
                  class="text-primary-500 hover:text-primary-600"
                >
                  {{ post.category.name }}
                </NuxtLinkLocale>
              </nav>

              <!-- Title -->
              <h1
                class="text-3xl lg:text-4xl font-heading font-bold mb-6 text-neutral-800"
              >
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
                    <div class="font-medium text-neutral-800">
                      {{ post.author.name }}
                    </div>
                    <div class="text-sm text-neutral-500">
                      {{ formatDate(post.publishedAt) }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Share Section -->
              <ClientOnly>
                <div class="flex items-center space-x-2">
                  <span class="text-neutral-600">{{ $t("blog.share") }}:</span>
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
              </ClientOnly>
            </div>

            <!-- Right Column - Featured Image -->
            <div class="sm:w-1/2 md:w-5/12">
              <img
                :src="post.image.url"
                :alt="post.title"
                class="w-full h-full self-start object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- Post Content -->
        <div class="blog-content mb-12" v-html="post.content"></div>

        <!-- Related Posts -->
        <div
          v-if="post.relatedPosts?.length > 0"
          class="border-t border-neutral-200 pt-12"
        >
          <h2 class="text-2xl font-heading font-bold mb-6">
            {{ $t("blog.relatedPosts") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogCard
              v-for="relatedPost in post.relatedPosts"
              :key="relatedPost.id"
              :post="relatedPost"
            />
          </div>
        </div>
      </div>
    </div>

    <ImageCta />
  </div>
</template>

<script setup lang="ts">
import { useApi, type BlogPost } from "~/composables/useApi";

const { locale } = useI18n();

const route = useRoute();

const slug = computed(() => route.params.slug);

const { headers } = useApi();

const {
  data: post,
  pending,
  error,
} = await useAsyncData<BlogPost>(
  () => `blog-post-${slug.value}`,
  () =>
    $fetch(`${useRuntimeConfig().public.apiBaseUrl}/posts/slug/${slug.value}`, {
      headers,
    })
);

const shareNetworks = computed(() => {
  if (!post.value) return [];

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.value.title);

  return [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: "facebook",
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      icon: "twitter",
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
      icon: "linkedin",
    },
  ];
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const sharePost = (url: string) => {
  window.open(url, "_blank", "width=600,height=400");
};
</script>

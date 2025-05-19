<template>
  <div class="min-h-screen bg-white">
    <div class="bg-alternate pt-16 pb-10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h1 class="text-4xl text-secondary-500 font-heading font-bold mb-4">
            {{ $t("blog.title") }}
          </h1>
          <p class="text-xl text-secondary-500">
            {{ $t("blog.subtitle") }}
          </p>
        </div>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto">
          <div class="flex gap-3">
            <UiSearchInput
              v-model="searchQuery"
              @clear="clearSearch"
              :placeholder="$t('blog.searchPlaceholder')"
              class="flex-1"
            />
            <button
              @click="handleSearch"
              class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-10">
      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center items-center py-40">
        <div
          class="animate-spin rounded-full h-24 w-24 border-8 border-primary-500 border-t-transparent"
        ></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div
          class="rounded-md bg-red-100 p-4 border border-red-400 text-red-700"
        >
          <p>
            <strong>Error:</strong> Something went wrong while loading the
            posts. Please try again later.
          </p>
          <button
            @click="refresh"
            class="mt-2 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>

      <!-- NO results -->
      <div
        v-else-if="posts && posts?.data.length === 0"
        class="text-center py-12"
      >
        <p class="text-lg text-neutral-600">No blog posts match your search.</p>
        <p class="text-sm text-neutral-500 mt-2">
          Try using different keywords or go back to the
          <NuxtLink to="/blog" class="text-primary-500 hover:underline"
            >full list</NuxtLink
          >.
        </p>
      </div>

      <!-- Posts Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard v-for="post in posts?.data" :key="post.id" :post="post" />
      </div>

      <!-- Pagination -->
      <div v-if="pagination && pagination.lastPage > 1" class="mt-12">
        <div class="flex flex-col justify-center items-center gap-4">
          <UiPagination
            :current-page="pagination.currentPage"
            :total-pages="pagination.lastPage"
            @page-change="handlePageChange"
          />
          <p class="text-sm text-neutral-500">
            {{ pagination.from }} - {{ pagination.to }} of
            {{ pagination.total }}
          </p>
        </div>
      </div>
    </div>

    <ImageCta />
  </div>
</template>

<script setup lang="ts">
import {
  useApi,
  type PaginationData,
  type BlogResponse,
} from "~/composables/useApi";

const route = useRoute();

const queryParam = computed(() => route.query.search ?? "");

const currentPage = computed(() => parseInt(route.query.page as string) || 1);

const searchQuery = ref(queryParam.value);

watch(queryParam, () => {
  searchQuery.value = queryParam.value;
});

const { headers } = useApi();

const {
  data: posts,
  pending,
  error,
  refresh,
} = await useAsyncData<BlogResponse>(
  () => `blog-posts-${currentPage.value}-${queryParam.value}`,
  () =>
    $fetch(`${useRuntimeConfig().public.apiBaseUrl}/posts`, {
      params: {
        page: currentPage.value,
        size: 6,
        query: queryParam.value,
      },
      headers,
    })
);

const pagination: Ref<PaginationData | null> = computed(
  () => posts.value?.pagination ?? null
);

const handlePageChange = async (page: number) => {
  console.log({ event: "page changed", cp: currentPage.value, p: page });
  if (page === currentPage.value) {
    return;
  }
  window.scrollTo({ top: 0 });
  await navigateTo({
    path: "/blog",
    query: {
      search: searchQuery.value || undefined,
      page: page === 1 ? undefined : page,
    },
  });
};

const handleSearch = async () => {
  if (queryParam.value == searchQuery.value) {
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  await navigateTo({
    path: "/blog",
    query: {
      search: searchQuery.value || undefined,
      page: undefined,
    },
  });
};

const clearSearch = async () => {
  searchQuery.value = "";
  await handleSearch();
};
</script>

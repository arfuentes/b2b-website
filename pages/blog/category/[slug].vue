<template>
  <div class="min-h-screen bg-white">
    <div v-if="pending" class="container mx-auto px-4 py-20 text-center">
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
    <div
      v-else-if="error || !posts?.data.length"
      class="container mx-auto px-4 py-20 text-center"
    >
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
        {{ $t("blog.categoryErrorMessage") }}
      </p>
      <NuxtLinkLocale
        to="blog"
        class="text-primary-500 font-medium hover:text-primary-600 transition-colors"
      >
        {{ $t("blog.back") }}
      </NuxtLinkLocale>
    </div>

    <!-- Content -->
    <div v-else>
      <div class="bg-alternate pt-16 pb-10">
        <div class="container mx-auto px-4">
          <!-- Category Header -->
          <div class="text-center">
            <div class="text-sm text-neutral-500">{{ $t("blog.categoryArticles") }}</div>
            <h1 class="text-4xl font-heading font-bold mb-4">
              {{ categoryName }}
            </h1>
            <p v-if="categoryDescription" class="text-xl text-neutral-600 mb-4">
              {{ categoryDescription }}
            </p>
            <NuxtLinkLocale
              to="blog"
              class="text-primary-500 hover:text-primary-600 transition-colors"
            >
              {{ $t("blog.allBlogArticles") }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 py-10">
        <!-- Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {{
                $t("blog.fromTo", {
                  from: pagination.from,
                  to: pagination.to,
                  total: pagination.total,
                })
              }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <ImageCta />
  </div>
</template>

<script setup lang="ts">
import {
  useApi,
  type BlogResponse,
  type PaginationData,
} from "~/composables/useApi";

const route = useRoute();

const localePath = useLocalePath();

const slug = computed(() => route.params.slug);

const currentPage = computed(() => parseInt(route.query.page as string) || 1);

const { headers } = useApi();

const {
  data: posts,
  pending,
  error,
} = await useAsyncData<BlogResponse>(
  () => `blog-category-${slug.value}-${currentPage.value}`,
  () =>
    $fetch(`${useRuntimeConfig().public.apiBaseUrl}/posts`, {
      params: {
        page: currentPage.value,
        size: 6,
        "category.slug": slug.value,
      },
      headers,
    })
);

const categoryName = computed(() => posts.value?.data?.[0].category.name ?? "");

const categoryDescription = computed(
  () => posts.value?.data?.[0].category.description ?? ""
);

const pagination: Ref<PaginationData | null> = computed(
  () => posts.value?.pagination ?? null
);

const handlePageChange = async (page: number) => {
  if (page === currentPage.value) {
    return;
  }
  window.scrollTo({ top: 0 });
  await navigateTo({
    path: localePath("/blog"),
    query: {
      "category.slug": slug.value,
      size: 6,
      page: page === 1 ? undefined : page,
    },
  });
};
</script>

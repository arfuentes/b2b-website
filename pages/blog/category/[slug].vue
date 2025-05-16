<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"
        ></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-error-600 text-lg mb-4">{{ error }}</p>
        <NuxtLinkLocale
          to="blog"
          class="text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          {{ $t("common.back") }} to Blog
        </NuxtLinkLocale>
      </div>

      <!-- Content -->
      <div v-else>
        <!-- Category Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-heading font-bold mb-4">
            {{ categoryName }}
          </h1>
          <p v-if="categoryDescription" class="text-xl text-neutral-600">
            {{ categoryDescription }}
          </p>
        </div>

        <!-- Posts Grid -->
        <div
          v-if="posts.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <BlogCard v-for="post in posts" :key="post.id" :post="post" />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-neutral-600 text-lg">
            No posts found in this category.
          </p>
        </div>

        <!-- Pagination -->
        <div v-if="pagination && pagination.lastPage > 1" class="mt-12">
          <div
            class="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p class="text-neutral-600">
              Showing {{ pagination.from }} to {{ pagination.to }} of
              {{ pagination.total }} posts
            </p>
            <Pagination
              :current-page="pagination.currentPage"
              :total-pages="pagination.lastPage"
              @page-change="handlePageChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useApi } from "~/composables/useApi";

const route = useRoute();
const router = useRouter();
const { getBlogPosts, loading, error } = useApi();
const localePath = useLocalePath();

const posts = ref([]);
const categoryName = ref("");
const categoryDescription = ref("");
const pagination = ref<{
  currentPage: number;
  perPage: number;
  from: number;
  to: number;
  total: number;
  lastPage: number;
} | null>(null);

const fetchPosts = async (page = 1) => {
  try {
    const response = await getBlogPosts(page, 6, "", {
      "category.slug": route.params.slug as string,
    });

    if (!response.data || !Array.isArray(response.data)) {
      throw new Error("Invalid or missing data in server response");
    }

    posts.value = response.data;
    pagination.value = response.pagination;

    // Get category details from the first post
    if (response.data.length > 0) {
      const firstPost = response.data[0];
      if (firstPost.category) {
        categoryName.value = firstPost.category.name;
        categoryDescription.value = firstPost.category.description || "";
      } else {
        router.push(localePath("/blog"));
      }
    } else {
      router.push(localePath("/blog"));
    }
  } catch (err) {
    console.error("Error fetching category posts:", err);
    error.value = err instanceof Error ? err.message : "Failed to load posts";
  }
};

const handlePageChange = (page: number) => {
  fetchPosts(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  fetchPosts();
});
</script>

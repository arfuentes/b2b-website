<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-heading font-bold mb-4">
          {{ $t('blog.title') }}
        </h1>
        <p class="text-xl text-neutral-600">
          {{ $t('blog.subtitle') }}
        </p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="flex gap-3">
          <SearchInput
            v-model="searchQuery"
            :placeholder="$t('blog.searchPlaceholder')"
            class="flex-1"
          />
          <button
            @click="handleSearch"
            :disabled="loading"
            class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading">{{ $t('common.loading') }}</span>
            <span v-else>Search</span>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-error-600 text-lg mb-4">{{ error }}</p>
        <button 
          @click="refresh" 
          class="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
        >
          Try Again
        </button>
      </div>

      <!-- Posts Grid -->
      <div 
        v-else 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <ClientOnly>
          <BlogCard 
            v-for="post in posts?.data" 
            :key="post.id" 
            :post="post" 
          />
        </ClientOnly>
      </div>

      <!-- Pagination -->
      <div v-if="pagination && pagination.lastPage > 1" class="mt-12">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-neutral-600">
            Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} posts
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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { useAsyncData } from '#app'
import { useApi } from '~/composables/useApi'

interface Post {
  id: number
  title: string
  slug: string
  abstract: string
  content: string
  image: {
    url: string
  }
  category: {
    id: number
    name: string
    slug: string
  }
  author: {
    id: number
    name: string
    image: {
      url: string
    }
  }
  publishedAt: string
}

interface PaginationData {
  currentPage: number
  perPage: number
  from: number
  to: number
  total: number
  lastPage: number
}

interface BlogResponse {
  data: Post[]
  pagination: PaginationData
}

const searchQuery = ref('')
const currentPage = ref(1)
const loading = ref(false)

const { headers } = useApi()

const { data: posts, pending, error, refresh } = await useAsyncData<BlogResponse>(
  () => `blog-posts-${currentPage.value}-${searchQuery.value}`,
  () => $fetch(`${useRuntimeConfig().public.apiBase}/posts`, {
    params: {
      page: currentPage.value,
      size: 6,
      query: searchQuery.value
    },
    headers
  }),
  {
    server: false,
    transform: (response) => response,
    default: () => ({ data: [], pagination: null })
  }
)

const pagination: Ref<PaginationData | null> = computed(() => posts.value?.pagination ?? null)

const handlePageChange = async (page: number) => {
  currentPage.value = page
  await refresh()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSearch = async () => {
  loading.value = true
  try {
    currentPage.value = 1
    await refresh()
  } finally {
    loading.value = false
  }
}
</script>
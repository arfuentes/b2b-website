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
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-error-600 text-lg mb-4">{{ error }}</p>
        <button 
          @click="fetchPosts" 
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
        <BlogCard 
          v-for="post in posts" 
          :key="post.id" 
          :post="post" 
        />
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
import { ref, onMounted } from 'vue'
import { useApi } from '~/composables/useApi'

const { getBlogPosts, loading, error } = useApi()
const posts = ref([])
const searchQuery = ref('')
const pagination = ref<{
  currentPage: number
  perPage: number
  from: number
  to: number
  total: number
  lastPage: number
} | null>(null)

const fetchPosts = async (page = 1, query = '') => {
  try {
    const response = await getBlogPosts(page, 6, query)
    posts.value = response.data
    pagination.value = response.pagination
  } catch (err) {
    console.error('Error fetching posts:', err)
  }
}

const handlePageChange = (page: number) => {
  fetchPosts(page, searchQuery.value)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSearch = () => {
  fetchPosts(1, searchQuery.value)
}

onMounted(() => {
  fetchPosts()
})
</script>
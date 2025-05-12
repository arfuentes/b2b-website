<template>
  <div class="flex items-center justify-center space-x-1">
    <!-- Previous button -->
    <button 
      @click="onPageChange(currentPage - 1)"
      :disabled="currentPage === 1"
      :class="[
        'px-4 py-2 rounded-md focus:outline-none transition-colors',
        currentPage === 1
          ? 'text-neutral-400 cursor-not-allowed'
          : 'text-neutral-700 hover:bg-neutral-100'
      ]"
      aria-label="Previous page"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    
    <!-- Page numbers -->
    <div class="flex items-center space-x-1">
      <template v-for="page in displayedPages" :key="page">
        <button
          v-if="page !== '...'"
          @click="onPageChange(page)"
          :class="[
            'px-4 py-2 rounded-md focus:outline-none transition-colors',
            page === currentPage
              ? 'bg-primary-500 text-white'
              : 'text-neutral-700 hover:bg-neutral-100'
          ]"
        >
          {{ page }}
        </button>
        <span v-else class="px-2">{{ page }}</span>
      </template>
    </div>
    
    <!-- Next button -->
    <button 
      @click="onPageChange(currentPage + 1)"
      :disabled="currentPage === totalPages"
      :class="[
        'px-4 py-2 rounded-md focus:outline-none transition-colors',
        currentPage === totalPages
          ? 'text-neutral-400 cursor-not-allowed'
          : 'text-neutral-700 hover:bg-neutral-100'
      ]"
      aria-label="Next page"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'page-change', page: number): void
}>()

const onPageChange = (page: number) => {
  if (page < 1 || page > props.totalPages) return
  emit('page-change', page)
}

const displayedPages = computed(() => {
  const { currentPage, totalPages } = props
  const pages: (number | string)[] = []
  
  if (totalPages <= 7) {
    // Show all pages if there are 7 or fewer
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    // Always show first page
    pages.push(1)
    
    if (currentPage > 3) {
      // Add ellipsis if needed
      pages.push('...')
    }
    
    // Determine which pages to show around current
    const startPage = Math.max(2, currentPage - 1)
    const endPage = Math.min(totalPages - 1, currentPage + 1)
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    
    if (currentPage < totalPages - 2) {
      // Add ellipsis if needed
      pages.push('...')
    }
    
    // Always show last page
    pages.push(totalPages)
  }
  
  return pages
})
</script>
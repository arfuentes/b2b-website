<template>
  <div class="relative flex-1">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <svg
        class="w-5 h-5 text-neutral-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      type="text"
      class="w-full pl-10 pr-8 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-neutral-900"
    />
    <button
      v-if="modelValue"
      type="button"
      @click="$emit('clear')"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 hover:text-gray-600"
    >
      ×
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
});

defineEmits(["update:modelValue", "clear"]);
</script>

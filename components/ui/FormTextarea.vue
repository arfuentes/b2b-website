<template>
  <div>
    <label v-if="label" :for="id" class="block mb-2 text-sm font-medium text-neutral-700">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :class="[
        'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors',
        error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500',
        disabled ? 'bg-neutral-100 cursor-not-allowed' : 'bg-white'
      ]"
    ></textarea>
    <p v-if="error" class="mt-1 text-sm text-error-500">{{ error }}</p>
    <p v-else-if="helperText" class="mt-1 text-sm text-neutral-500">{{ helperText }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: () => `textarea-${Math.random().toString(36).substring(2, 9)}`
  },
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 4
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  helperText: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue']);
</script>
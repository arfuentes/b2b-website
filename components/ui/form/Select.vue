<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="block mb-2 text-sm font-medium"
      :class="labelClass"
    >
      {{ label }}
      <span v-if="!required" class="text-sm" :class="helperTextClass">
        (optional)
      </span>
    </label>
    <select
      :id="id"
      v-bind="$attrs"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :disabled="disabled"
      :class="[
        'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors',
        error
          ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
          : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500',
        disabled ? 'bg-neutral-100 cursor-not-allowed' : 'bg-white',
      ]"
    >
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <p v-if="error" class="mt-1 text-sm text-error-500">{{ error }}</p>
    <p v-else-if="helperText" class="mt-1 text-sm" :class="helperTextClass">
      {{ helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  modelValue?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  darkMode?: boolean;
  options: { value: string | number; label: string }[];
}

const props = withDefaults(defineProps<Props>(), {
  id: () => `select-${Math.random().toString(36).substring(2, 9)}`,
  modelValue: "",
  required: false,
  disabled: false,
  darkMode: false,
});

const labelClass = computed(() =>
  props.darkMode ? "text-white" : "text-neutral-700"
);

const helperTextClass = computed(() =>
  props.darkMode ? "text-neutral-300" : "text-neutral-500"
);
</script>

<style>
select:not([size]) {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 0.75em 0.75em;
  padding-right: 2.5rem;
}
</style>

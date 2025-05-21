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
        {{ $t("common.optional") }}
      </span>
    </label>
    <textarea
      :id="id"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      :class="[
        'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors',
        error
          ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
          : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500',
        disabled ? 'bg-neutral-100 cursor-not-allowed' : 'bg-white',
      ]"
    ></textarea>
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
  rows?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  maxlength?: string | number;
  darkMode?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => `textarea-${Math.random().toString(36).substring(2, 9)}`,
  rows: 4,
  required: false,
  disabled: false,
  darkMode: false,
});

defineEmits(["update:modelValue"]);

const labelClass = computed(() =>
  props.darkMode ? "text-white" : "text-neutral-700"
);
const helperTextClass = computed(() =>
  props.darkMode ? "text-neutral-300" : "text-neutral-500"
);
</script>

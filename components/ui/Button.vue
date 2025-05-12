<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      sizeClasses[size],
      variantClasses[variant]
    ]"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'link'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const variantClasses = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
  secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
  outline: 'border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50',
  ghost: 'bg-transparent hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900',
  link: 'bg-transparent underline-offset-4 hover:underline text-primary-500 hover:text-primary-600'
};

const sizeClasses = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 py-2',
  lg: 'h-11 px-6 text-lg'
};
</script>
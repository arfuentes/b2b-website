<template>
  <div>
    <label
      v-if="label"
      class="block text-sm font-medium mb-2"
      :class="labelClass"
    >
      {{ label }}
      <span v-if="!required" class="text-sm" :class="helperTextClass">
        {{ $t("common.optional") }}
      </span>
    </label>
    <div
      class="relative multiselect"
      @keydown.down="highlightNext"
      @keydown.up="highlightPrev"
      @keydown.enter.prevent="toggleOption(highlightedOption)"
      @keydown.space.prevent="toggleOption(highlightedOption)"
    >
      <div
        @click="toggleDropdown"
        :class="[
          'w-full pl-4 pr-3 py-2 border rounded-md border-neutral-300 transition-colors bg-white cursor-pointer flex justify-between items-center',
          isOpen
            ? 'outline-none ring-2 ring-primary-500 border-primary-500'
            : '',
        ]"
      >
        <span class="truncate">
          {{ displayValue }}
        </span>
        <svg
          class="ml-2 w-3 h-3 text-neutral-400"
          :class="{ 'transform rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 10 6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      <div
        v-if="isOpen"
        class="absolute z-10 w-full mt-0.5 bg-white border border-neutral-200 rounded-md shadow-lg max-h-60 overflow-auto"
      >
        <div class="p-2 space-y-1">
          <div
            v-for="option in options"
            :key="option.value"
            class="flex items-center px-2 py-1.5 rounded hover:bg-neutral-100 cursor-pointer"
            :class="{ 'bg-neutral-100': isHighlighted(option) }"
            @click="toggleOption(option)"
          >
            <input
              type="checkbox"
              :checked="isSelected(option)"
              class="h-4 w-4 text-primary-500 rounded border-neutral-300 focus:ring-primary-500"
            />
            <span class="ml-2">{{ option.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <p v-if="error" class="mt-1 text-sm text-error-500">{{ error }}</p>
    <p v-else-if="helperText" class="mt-1 text-sm" :class="helperTextClass">
      {{ helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string | number;
  label: string;
}

interface Props {
  id?: string;
  modelValue?: (string | number)[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  darkMode?: boolean;
  options: Option[];
}

const props = withDefaults(defineProps<Props>(), {
  id: () => `multi-select-${Math.random().toString(36).substring(2, 9)}`,
  modelValue: () => [],
  required: false,
  disabled: false,
  darkMode: false,
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const highlightedOption = ref<Option | null>(null);

const labelClass = computed(() =>
  props.darkMode ? "text-white" : "text-neutral-700"
);
const helperTextClass = computed(() =>
  props.darkMode ? "text-neutral-300" : "text-neutral-500"
);

const displayValue = computed(() => {
  const selectedOptions = props.options.filter((option: Option) =>
    props.modelValue.includes(option.value)
  );
  if (selectedOptions.length === 0) return props.placeholder;
  return selectedOptions.map((option: Option) => option.label).join(", ");
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value && props.options.length > 0) {
    highlightedOption.value = props.options[0];
  }
};

const isSelected = (option: Option) => {
  return props.modelValue.includes(option.value);
};

const isHighlighted = (option: Option) => {
  return highlightedOption.value === option;
};

const toggleOption = (option?: Option | null) => {
  if (!option) return;

  const newValue = [...props.modelValue];
  const index = newValue.indexOf(option.value);

  if (index === -1) {
    newValue.push(option.value);
  } else {
    newValue.splice(index, 1);
  }

  emit("update:modelValue", newValue);
};

const highlightNext = () => {
  if (!isOpen.value) {
    isOpen.value = true;
    if (props.options.length > 0) {
      highlightedOption.value = props.options[0];
    }
    return;
  }

  const currentIndex = props.options.indexOf(highlightedOption.value!);
  if (currentIndex < props.options.length - 1) {
    highlightedOption.value = props.options[currentIndex + 1];
  }
};

const highlightPrev = () => {
  if (!isOpen.value || !highlightedOption.value) return;

  const currentIndex = props.options.indexOf(highlightedOption.value);
  if (currentIndex > 0) {
    highlightedOption.value = props.options[currentIndex - 1];
  }
};

// Close dropdown when clicking outside
const closeDropdown = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (!target.closest(".multiselect")) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

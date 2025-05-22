<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      class="inline-flex justify-center items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
    >
      {{ label }}
      <svg
        class="ml-2 w-5 h-5"
        :class="{ 'transform rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 z-10 mt-0.5 w-24 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none"
      >
        <ul class="py-1 text-sm text-neutral-800">
          <li v-for="(option, index) in options" :key="index">
            <button
              @click="selectOption(option)"
              :disabled="option == label"
              :class="[
                'w-full text-left px-4 py-2',
                option != label ? 'hover:bg-primary-100' : 'text-neutral-500',
              ]"
            >
              {{ option }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  options: string[];
}

const props = defineProps<Props>();

const emit = defineEmits(["select"]);

const isOpen = ref(false);

const dropdownRef = ref(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectOption(option: string) {
  emit("select", option);
  isOpen.value = false;
}

function handleClickOutside(event: any) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

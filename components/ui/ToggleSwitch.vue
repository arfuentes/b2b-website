<template>
  <div class="flex items-center space-x-3">
    <span
      v-if="type == 'left-right'"
      :class="isOn ? fadeLabelClass : labelClass"
      >{{ offLabel }}</span
    >
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        class="sr-only peer"
        :checked="isOn"
        @change="isOn = !isOn"
      />
      <div
        :class="[
          'w-11 h-6 rounded-full transition-colors duration-300',
          sliderClass,
        ]"
      ></div>
      <div
        :class="[
          'absolute left-0.5 top-0.5 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-full border border-white',
          switchClass,
        ]"
      ></div>
    </label>
    <span :class="type == 'on-off' || isOn ? labelClass : fadeLabelClass">
      {{ type == "left-right" || isOn ? onLabel : offLabel }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  darkMode?: boolean;
  type?: "on-off" | "left-right";
  onLabel?: string;
  offLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  darkMode: false,
  type: "on-off",
  onLabel: "ON",
  offLabel: "OFF",
});

const isOn = defineModel<boolean>({ default: false });

const labelClass = computed(() =>
  props.darkMode ? "font-bold text-white" : "font-bold text-neutral-700"
);

const fadeLabelClass = computed(() =>
  props.darkMode ? "font-bold text-neutral-300" : "font-bold text-neutral-400"
);

const sliderClass = computed(() =>
  props.type == "on-off"
    ? "bg-neutral-300 peer-checked:bg-primary-500"
    : props.darkMode
    ? "bg-primary-800"
    : "bg-primary-100"
);

const switchClass = computed(() =>
  props.type == "on-off" ? "bg-white" : "bg-primary-500"
);
</script>

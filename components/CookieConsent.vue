<template>
  <div
    v-if="showBanner"
    class="fixed bottom-0 right-0 w-full bg-white border-t border-neutral-300 shadow-xl p-4 z-50 sm:bottom-4 sm:right-4 sm:w-auto sm:max-w-2xl sm:border sm:border-neutral-800 sm:rounded-md"
  >
    <div class="max-w-2xl m-auto">
      <p class="text-sm text-neutral-800">
        {{ $t("cookie.concentMessage") }}
        <NuxtLinkLocale
          to="cookie"
          class="underline text-blue-600 hover:text-blue-700"
        >
          {{ $t("cookie.cookiePolicy") }}</NuxtLinkLocale
        >.
      </p>
      <div class="mt-4 flex gap-3 justify-end">
        <button
          @click="declineCookies"
          class="text-sm px-6 py-1 border border-neutral-300 rounded-md hover:bg-neutral-100"
        >
          {{ $t("cookie.decline") }}
        </button>
        <button
          @click="acceptCookies"
          class="text-sm px-6 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {{ $t("cookie.accept") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import eventBus from "@/utils/eventBus";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const showBanner = ref(false);

const GA_MEASUREMENT_ID = "";

const gtag = (...args: any[]) => {
  window.dataLayer.push(args);
};

onMounted(() => {
  showBanner.value = !localStorage.getItem("cookie_consent");
  if (localStorage.getItem("cookie_consent") === "accepted") {
    loadNonEssentialScripts();
  }
  eventBus.on("reopen-cookie-banner", () => {
    showBanner.value = true;
  });
});

const acceptCookies = () => {
  localStorage.setItem("cookie_consent", "accepted");
  showBanner.value = false;
  loadNonEssentialScripts();
};

const declineCookies = () => {
  localStorage.setItem("cookie_consent", "declined");
  showBanner.value = false;
};

function loadNonEssentialScripts() {
  if (!GA_MEASUREMENT_ID || document.getElementById("gtag-script")) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  script.id = "gtag-script";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}
</script>

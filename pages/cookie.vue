<template>
  <div class="min-h-screen bg-white">
    <div class="bg-alternate pt-16 pb-12">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-heading font-bold mb-4 text-secondary-500">
            {{ $t("cookie.title") }}
          </h1>
          <p class="text-xl text-secondary-500 md:max-w-4xl mx-auto">
            {{ $t("cookie.lastUpdated") }}:
            {{ formatDate(lastUpdated, locale) }}
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <section v-if="locale == 'es'" class="max-w-3xl mx-auto">
        <p>
          Esta Política de Cookies explica cómo Zamdit ("nosotros", "nuestro" o
          "nos") utiliza cookies y tecnologías similares cuando visitas nuestro
          sitio web
          <a
            :href="webSiteUrl"
            target="_blank"
            class="underline text-blue-600 hover:text-blue-800"
            >{{ webSiteUrl }}</a
          >
          (el “Sitio”).
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitas un sitio web. Nos ayudan a mejorar tu
          experiencia recordando tus preferencias y recopilando información
          sobre cómo utilizas nuestro Sitio.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">
          Tipos de cookies que utilizamos
        </h2>
        <ul>
          <li>
            <strong>Cookies esenciales:</strong> Son necesarias para el
            funcionamiento del Sitio y no pueden ser desactivadas. Se usan en
            base a nuestro interés legítimo en ofrecer un sitio web funcional.
          </li>
          <li class="mt-2">
            <strong>Cookies analíticas:</strong> Nos ayudan a comprender cómo
            interactúan los visitantes con el Sitio para poder mejorarlo. Solo
            se usan con tu consentimiento.
          </li>
          <li class="mt-2">
            <strong>Cookies de marketing:</strong> Establecidas por socios
            publicitarios para mostrarte anuncios relevantes en otros sitios.
            También se usan solo con tu consentimiento.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">Base legal para su uso</h2>
        <p>
          Dependemos de tu consentimiento para usar cookies no esenciales (como
          las analíticas y de marketing). Puedes retirar tu consentimiento en
          cualquier momento desde los ajustes de cookies disponibles abajo.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Duración de las cookies</h2>
        <p>
          Algunas cookies son de sesión (se eliminan al cerrar el navegador),
          mientras que otras son persistentes (se almacenan por un período
          específico o hasta que las elimines).
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Cookies que utilizamos</h2>
        <ul>
          <li>
            <strong>_ga</strong>: Google Analytics – se usa para distinguir
            usuarios. Expira a los 2 años.
          </li>
          <li class="mt-2">
            <strong>_gid</strong>: Google Analytics – se usa para distinguir
            usuarios. Expira a las 24 horas.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">Gestión de cookies</h2>
        <p>
          Puedes controlar o desactivar las cookies desde la configuración de tu
          navegador. La desactivación de algunas cookies puede afectar tu
          experiencia en el Sitio. También puedes cambiar tus preferencias en
          cualquier momento mediante el botón siguiente.
        </p>
        <p>
          Más información sobre cookies:
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            class="underline text-blue-600 hover:text-blue-800"
          >
            www.allaboutcookies.org </a
          >.
        </p>

        <div class="text-center mt-6">
          <button
            @click="openCookieBanner"
            class="text-sm py-1 px-6 border border-blue-600 rounded-md text-blue-600 hover:text-blue-800 hover:border-blue-800"
          >
            Cambiar tus preferencias de cookies
          </button>
        </div>
      </section>
      <section v-else class="max-w-3xl mx-auto">
        <p>
          This Cookie Policy explains how Zamdit ("we", "our", or "us") uses
          cookies and similar technologies when you visit our website
          <a
            :href="webSiteUrl"
            target="_blank"
            class="underline text-blue-600 hover:text-blue-800"
            >{{ webSiteUrl }}</a
          >
          (the “Site”).
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help improve your experience by remembering preferences
          and collecting information about how you use our Site.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Types of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These are necessary for the Site
            to function and cannot be switched off. They are used based on our
            legitimate interest in providing a functional website.
          </li>
          <li class="mt-2">
            <strong>Analytics Cookies:</strong> These help us understand how
            visitors interact with our Site so we can improve it. These are only
            used with your consent.
          </li>
          <li class="mt-2">
            <strong>Marketing Cookies:</strong> Set by advertising partners to
            show relevant ads across the web. These are also only used with your
            consent.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">Legal Basis for Use</h2>
        <p>
          We rely on your consent to use non-essential cookies (such as
          analytics and marketing). You can withdraw your consent at any time
          via the cookie settings button below.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Cookie Duration</h2>
        <p>
          Some cookies are session-based (deleted when you close your browser),
          while others are persistent (stored for a specific period or until you
          delete them).
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Cookies We Use</h2>
        <ul>
          <li>
            <strong>_ga</strong>: Google Analytics – used to distinguish users.
            Expires after 2 years.
          </li>
          <li class="mt-2">
            <strong>_gid</strong>: Google Analytics – used to distinguish users.
            Expires after 24 hours.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">Managing Cookies</h2>
        <p>
          You can control or disable cookies through your browser settings.
          Disabling some cookies may impact your experience on our Site. You can
          also change your preferences at any time using the button below.
        </p>
        <p>
          Learn more about cookies at:
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            class="underline text-blue-600 hover:text-blue-800"
          >
            www.allaboutcookies.org </a
          >.
        </p>

        <div class="text-center mt-6">
          <button
            @click="openCookieBanner"
            class="text-sm underline text-blue-600 hover:text-blue-800"
          >
            Change your cookie preferences
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import eventBus from "@/utils/eventBus";

const { locale } = useI18n();

const lastUpdated = "2025-05-23";

const webSiteUrl = "https://zamdit.com";

const openCookieBanner = () => {
  eventBus.emit("reopen-cookie-banner");
};
</script>

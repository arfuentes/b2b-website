<template>
  <div class="min-h-screen bg-white">
    <div class="bg-alternate pt-16 pb-12">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-heading font-bold mb-4 text-secondary-500">
            {{ $t("terms.title") }}
          </h1>
          <p class="text-xl text-secondary-500 md:max-w-4xl mx-auto">
            {{ $t("terms.lastUpdated") }}:
            {{ formatDate(lastUpdated, locale) }}
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <section v-if="locale == 'es'" class="max-w-2xl mx-auto">
        <p>
          Por favor, lee detenidamente estos Términos de Servicio ("Términos",
          "Acuerdo") antes de utilizar la plataforma Zamdit ("Servicio",
          "Plataforma") operada por Zamdit Ltd ("nosotros", "nuestro"). Al crear
          una cuenta o utilizar nuestra plataforma, aceptas estar sujeto a estos
          Términos.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">
          1. Registro de cuenta y período de prueba
        </h2>
        <ul>
          <li class="mt-2">
            Crear una cuenta es gratuito y no requiere información de pago.
          </li>
          <li class="mt-2">
            Tendrás acceso a una prueba gratuita de 14 días para explorar
            Zamdit.
          </li>
          <li class="mt-2">
            Puedes activar el modo de
            <strong>Datos de prueba</strong>, que carga datos simulados en la
            plataforma.
          </li>
          <li class="mt-2">
            Puedes cancelar en cualquier momento durante el período de prueba
            sin obligación ni cargo.
          </li>
          <li class="mt-2">
            Al finalizar la prueba, si no se ingresan datos de pago, la cuenta
            será desactivada.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          2. Suscripciones y facturación
        </h2>
        <ul>
          <li class="mt-2">
            Zamdit funciona mediante suscripción mensual o anual.
          </li>
          <li class="mt-2">
            Los planes varían según el número de usuarios, límite de candidatos
            y funciones disponibles.
          </li>
          <li class="mt-2">
            Si excedes el límite de candidatos, se aplicarán cargos adicionales
            por candidato.
          </li>
          <li class="mt-2">
            Todos los planes se facturan por adelantado; los cargos adicionales
            se facturan mensualmente.
          </li>
          <li class="mt-2">
            El primer pago se cobrará aproximadamente una hora después de
            finalizar la prueba, si se configura una suscripción.
          </li>
          <li class="mt-2">
            En las suscripciones anuales, los cargos por candidatos adicionales
            se facturan mensualmente. Si no se puede procesar el pago, seguirás
            teniendo acceso completo a la plataforma, pero el movimiento de
            candidatos desde la etapa de “Solicitado” estará restringido hasta
            que se reciba el pago.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">3. Precios e IVA</h2>
        <ul>
          <li class="mt-2">ATodos los precios no incluyen IVA.</li>
          <li class="mt-2">
            El IVA se aplicará según tu país de facturación y el estado de tu
            registro de IVA.
          </li>
          <li class="mt-2">
            A los clientes del Reino Unido y empresas de la UE no registradas en
            el IVA se les aplicará un 20% de IVA.
          </li>
          <li class="mt-2">
            Las empresas de la UE con un número de IVA válido pueden aplicar el
            mecanismo de inversión del sujeto pasivo.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          4. Gestión de la suscripción
        </h2>
        <h3 class="text-heading font-semibold text-lg mt-4 mb-2 ml-4">
          Mejora de plan
        </h3>
        <ul class="ml-4">
          <li class="mt-2">
            Puedes mejorar tu plan en cualquier momento. Los cargos se
            calcularán de forma prorrateada y se mostrarán antes de confirmar.
          </li>
        </ul>
        <h3 class="text-heading font-semibold text-lg mt-4 mb-2 ml-4">
          Reducción de plan
        </h3>
        <ul class="ml-4">
          <li class="mt-2">
            Para reducir tu plan, primero cancela el plan actual. Luego, al
            finalizar el período de facturación, selecciona el nuevo plan.
          </li>
        </ul>
        <h3 class="text-heading font-semibold text-lg mt-4 mb-2 ml-4">
          Cancelación
        </h3>
        <ul class="ml-4">
          <li class="mt-2">
            Puedes cancelar tu suscripción en cualquier momento. Tu cuenta
            permanecerá activa hasta el final del ciclo de facturación.
          </li>
          <li class="mt-2">
            No se realizan reembolsos por períodos parciales.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          5. Estado de la suscripción
        </h2>
        <ul>
          <li class="mt-2">
            <strong>Prueba:</strong> Acceso gratuito por 14 días, sin cobros.
          </li>
          <li class="mt-2">
            <strong>Pendiente:</strong> La configuración de pago está
            incompleta. Debe confirmarse en un plazo de 23 horas o la cuenta
            será cancelada.
          </li>
          <li class="mt-2">
            <strong>Activa:</strong> El pago se ha procesado correctamente.
            Acceso completo a la plataforma.
          </li>
          <li class="mt-2">
            <strong>Cancelada:</strong> La suscripción ha finalizado. El acceso
            se restringe hasta que se reactive. Conservaremos los datos de tu
            cuenta durante 6 meses sin costo alguno. Si deseas que eliminemos
            permanentemente los datos de tu cuenta tras la cancelación de la
            suscripción, por favor contáctanos.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">6. Facturación y pagos</h2>
        <ul>
          <li class="mt-2">
            Las facturas se emiten al inicio de cada ciclo de facturación.
          </li>
          <li class="mt-2">
            En los planes anuales, el uso adicional de candidatos se factura
            mensualmente.
          </li>
          <li class="mt-2">
            Recibirás una copia de cada factura por correo electrónico y podrás
            descargarla en PDF desde tu Historial de Facturación.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">7. Usuarios y candidatos</h2>
        <ul>
          <li class="mt-2">
            Cada plan incluye un número determinado de usuarios. Los
            reclutadores externos no cuentan en este límite.
          </li>
          <li class="mt-2">
            Puedes mejorar el plan para añadir más usuarios o aumentar el límite
            de candidatos.
          </li>
          <li class="mt-2">
            Puedes establecer restricciones para evitar exceder el número de
            candidatos permitidos.
          </li>
          <li class="mt-2">
            Los candidatos solo se contabilizan dentro del uso de tu plan una
            vez que se mueven fuera de la etapa de “Solicitado”.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          8. Procesamiento de pagos y seguridad
        </h2>
        <ul>
          <li class="mt-2">
            Todos los pagos se procesan de forma segura a través de Stripe.
          </li>
          <li class="mt-2">
            Aceptamos tarjetas principales y billeteras digitales como Visa,
            Mastercard, American Express, Apple Pay y Google Pay.
          </li>
          <li class="mt-2">
            Zamdit no almacena información de tarjetas. Todos los datos
            sensibles son gestionados por Stripe.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          9. Protección de datos y privacidad
        </h2>
        <ul>
          <li class="mt-2">Cumplimos con el RGPD y protegemos tus datos.</li>
          <li class="mt-2">
            Consulta nuestra
            <NuxtLinkLocale
              to="privacy"
              class="underline text-blue-600 hover:text-blue-700"
              >Política de Privacidad</NuxtLinkLocale
            >
            y
            <NuxtLinkLocale
              to="cookie"
              class="underline text-blue-600 hover:text-blue-700"
              >Política de Cookies</NuxtLinkLocale
            >
            para más información.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          10. Cambios en el servicio
        </h2>
        <p>
          Nos reservamos el derecho de modificar o descontinuar funciones o
          planes en cualquier momento. Notificaremos con antelación cualquier
          cambio significativo que afecte tu uso o facturación.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">
          11. Limitación de responsabilidad
        </h2>
        <p>
          En la medida permitida por la ley, Zamdit Ltd no se responsabiliza por
          daños indirectos o consecuentes, incluida la pérdida de datos,
          ingresos o beneficios, derivados del uso del Servicio.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">
          12. Legislación aplicable
        </h2>
        <p>Estos Términos se rigen por las leyes de Inglaterra y Gales.</p>

        <h2 class="text-heading text-xl mt-6 mb-2">13. Contacto</h2>
        <p>
          Si tienes preguntas sobre estos Términos, puedes escribirnos a:
          support@zamdit.com
        </p>
      </section>
      <section v-else class="max-w-2xl mx-auto">
        <p>
          Please read these Terms of Service ("Terms", "Agreement") carefully
          before using the Zamdit platform ("Service", "Platform") operated by
          Zamdit Ltd ("we", "us", "our"). By creating an account or using our
          platform, you agree to be bound by these Terms.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">
          1. Account Registration and Trial
        </h2>
        <ul>
          <li class="mt-2">
            Creating an account is free and requires no payment details.
          </li>
          <li class="mt-2">
            You will have access to a 14-day free trial to explore Zamdit.
          </li>
          <li class="mt-2">
            The trial includes the option to activate
            <strong>Test Data</strong> mode, which populates the platform with
            sample data.
          </li>
          <li class="mt-2">
            You may cancel at any time during the trial with no obligation or
            charge.
          </li>
          <li class="mt-2">
            At the end of the trial, if no payment information is added, your
            account will be deactivated.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          2. Subscriptions and Billing
        </h2>
        <ul>
          <li class="mt-2">
            Zamdit is offered via monthly or yearly subscriptions.
          </li>
          <li class="mt-2">
            Plans vary by user limits, candidate processing limits, and
            features.
          </li>
          <li class="mt-2">
            If you exceed your candidate limit, additional charges per candidate
            apply.
          </li>
          <li class="mt-2">
            All plans are billed in advance; overages are billed monthly.
          </li>
          <li class="mt-2">
            Your first payment will be collected approximately one hour after
            the trial ends, if a subscription is set up.
          </li>
          <li class="mt-2">
            For annual subscriptions, extra candidate charges are billed
            monthly. If a payment cannot be collected, full platform access
            remains available, but candidate movement from the "Applied" stage
            will be restricted until payment is received.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">3. VAT and Pricing</h2>
        <ul>
          <li class="mt-2">All prices are exclusive of VAT.</li>
          <li class="mt-2">
            VAT will be applied based on your billing country and VAT
            registration status.
          </li>
          <li class="mt-2">
            UK clients and non-VAT-registered EU clients will be charged 20%
            VAT.
          </li>
          <li class="mt-2">
            EU clients with a valid VAT number can apply the reverse charge
            mechanism.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          4. Managing Your Subscription
        </h2>
        <h3 class="text-heading font-semibold text-lg mt-4 mb-2 ml-4">
          Upgrading
        </h3>
        <ul class="ml-4">
          <li class="mt-2">
            You may upgrade your plan at any time. Charges will be prorated and
            displayed before confirmation.
          </li>
        </ul>
        <h3 class="text-heading font-semibold text-lg mt-4 mb-2 ml-4">
          Downgrading
        </h3>
        <ul class="ml-4">
          <li class="mt-2">
            To downgrade, cancel your current plan and select a new one after
            your current billing period ends.
          </li>
        </ul>
        <h3 class="text-heading font-semibold text-lg mt-4 mb-2 ml-4">
          Cancellation
        </h3>
        <ul class="ml-4">
          <li class="mt-2">
            You may cancel your subscription at any time. Your access will
            remain active until the end of the billing cycle.
          </li>
          <li class="mt-2">No refunds are issued for partial periods.</li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">5. Subscription Status</h2>
        <ul>
          <li class="mt-2">
            <strong>Trial:</strong> Free access, no billing, ends in 14 days.
          </li>
          <li class="mt-2">
            <strong>Pending:</strong> Payment setup is incomplete; confirmation
            must occur within 23 hours to avoid cancellation.
          </li>
          <li class="mt-2">
            <strong>Active:</strong> A valid payment has been processed. Full
            access to the platform.
          </li>
          <li class="mt-2">
            <strong>Cancelled:</strong> Subscription has ended. Access is
            restricted until reactivation. We’ll retain your account data for 6
            months at no cost. If you wish to have your account data permanently
            deleted after your subscription is cancelled, please contact us.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">6. Invoices and Payments</h2>
        <ul>
          <li class="mt-2">
            Invoices are issued at the start of each billing cycle.
          </li>
          <li class="mt-2">Annual plans bill extra candidate usage monthly.</li>
          <li class="mt-2">
            You may access all invoices in PDF format in your Billing History
            section.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">7. Users and Candidates</h2>
        <ul>
          <li class="mt-2">
            Each plan includes a set number of user accounts. External
            recruiters are excluded from this limit.
          </li>
          <li class="mt-2">
            You may upgrade to increase the number of users or candidate
            allowance.
          </li>
          <li class="mt-2">
            Optional restrictions can be set to prevent exceeding your candidate
            quota.
          </li>
          <li class="mt-2">
            Candidates are only counted toward your plan’s usage once they move
            out of the "Applied" stage.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          8. Payment Processing and Security
        </h2>
        <ul>
          <li class="mt-2">All payments are securely processed via Stripe.</li>
          <li class="mt-2">
            We accept major cards and wallets including Visa, Mastercard,
            American Express, Apple Pay, and Google Pay.
          </li>
          <li class="mt-2">
            Zamdit does not store any sensitive payment information. All card
            data is handled by Stripe.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          9. Data Protection and Privacy
        </h2>
        <ul>
          <li class="mt-2">
            We are committed to GDPR compliance and safeguarding your data.
          </li>
          <li class="mt-2">
            For more details, please refer to our
            <NuxtLinkLocale
              to="privacy"
              class="underline text-blue-600 hover:text-blue-700"
              >Privacy Policy</NuxtLinkLocale
            >
            and
            <NuxtLinkLocale
              to="cookie"
              class="underline text-blue-600 hover:text-blue-700"
              >Cookie Policy</NuxtLinkLocale
            >.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          10. Modifications to the Service
        </h2>
        <p>
          We reserve the right to modify or discontinue features or plans at any
          time. We will provide reasonable notice for significant changes
          affecting your usage or billing.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">
          11. Limitation of Liability
        </h2>
        <p>
          To the extent permitted by law, Zamdit Ltd is not liable for any
          indirect or consequential damages, including loss of data, revenue, or
          profits, resulting from your use of the Service.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">12. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of England and Wales.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">13. Contact</h2>
        <p>
          If you have questions about these Terms, please contact us at:
          support@zamdit.com
        </p>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const lastUpdated = "2025-05-23";
</script>
<style lang="css" scoped>
li {
  list-style-type: initial !important;
  margin-left: 30px;
}
</style>

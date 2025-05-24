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
          Estos Términos de Servicio ("Términos") regulan el acceso y uso de la
          plataforma Zamdit ("Plataforma", "Servicio") proporcionada por
          <strong>Zamdit Ltd</strong> ("Zamdit", "nosotros"). Al acceder o
          utilizar el Servicio, usted acepta estar sujeto a estos Términos.
        </p>
        <p>
          Si está celebrando este acuerdo en nombre de una empresa u
          organización, declara que tiene la autoridad para vincular a dicha
          entidad.
        </p>

        <h2>1. Definiciones</h2>
        <p>
          <strong>1.1 "Cliente", "usted", "su"</strong> se refiere a la persona
          o entidad que utiliza el Servicio.
        </p>
        <p>
          <strong>1.2 "Candidato"</strong> significa un solicitante o persona
          cuya información se almacena, procesa o gestiona en Zamdit.
        </p>
        <p>
          <strong>1.3 "Usuario"</strong> se refiere a cualquier persona
          autorizada por usted para acceder a la Plataforma.
        </p>
        <p>
          <strong>1.4 "Suscripción"</strong> hace referencia al plan de servicio
          específico que elige y paga.
        </p>

        <h2>2. Elegibilidad y Registro</h2>
        <p>
          2.1 Debe tener al menos 18 años y capacidad legal para aceptar estos
          Términos.
        </p>
        <p>
          2.2 Usted es responsable de la confidencialidad de sus credenciales y
          de toda actividad bajo su cuenta.
        </p>

        <h2>3. Prueba Gratuita</h2>
        <p>3.1 Al registrarse, obtiene una prueba gratuita de 14 días.</p>
        <p>3.2 No se requieren datos de pago para activar la prueba.</p>
        <p>3.3 Incluye acceso a funciones clave y modo de Datos de Prueba.</p>
        <p>
          3.4 Si no se añade un método de pago al finalizar, su cuenta será
          suspendida.
        </p>

        <h2>4. Suscripciones y Facturación</h2>
        <p>4.1 El acceso continuo requiere una suscripción pagada activa.</p>
        <p>
          4.2 Los planes varían por número de usuarios, límite de candidatos y
          funciones.
        </p>
        <p>
          4.3 Las tarifas se facturan por adelantado; los excesos se facturan
          mensualmente.
        </p>
        <p>
          4.4 Al ingresar información de pago, autoriza el cobro mediante el
          método designado.
        </p>
        <p>
          4.5 Las suscripciones anuales facturan candidatos adicionales
          mensualmente.
        </p>

        <h2>5. Impuestos e IVA</h2>
        <p>5.1 Todos los precios son sin impuestos.</p>
        <p>
          5.2 Los clientes del Reino Unido y los no registrados en el IVA dentro
          de la UE deben pagar IVA.
        </p>
        <p>
          5.3 Las empresas de la UE con número de IVA válido pueden aplicar el
          mecanismo de inversión del sujeto pasivo.
        </p>
        <p>
          5.4 Usted es responsable de los impuestos aplicables en su
          jurisdicción.
        </p>

        <h2>6. Estado de la Cuenta</h2>
        <p>
          6.1 <strong>Prueba:</strong> Acceso completo durante 14 días sin
          facturación.
        </p>
        <p>
          6.2 <strong>Pendiente:</strong> Datos de pago añadidos, suscripción no
          activada aún.
        </p>
        <p>
          6.3 <strong>Activa:</strong> Suscripción y pago procesados con éxito.
        </p>
        <p>
          6.4 <strong>Cancelada:</strong> La suscripción ha finalizado. Acceso
          limitado y datos retenidos hasta por 6 meses.
        </p>

        <h2>7. Modificaciones de la Suscripción</h2>
        <p>
          7.1 Puede actualizar su plan en cualquier momento. El cargo es
          prorrateado.
        </p>
        <p>
          7.2 Para degradar, cancele su plan actual y suscríbase a uno nuevo
          después del ciclo.
        </p>
        <p>
          7.3 Las cancelaciones entran en vigor al final del ciclo. No hay
          reembolsos parciales.
        </p>

        <h2>8. Límites de Candidatos y Usuarios</h2>
        <p>
          8.1 La suscripción incluye un número definido de usuarios y
          candidatos.
        </p>
        <p>8.2 Los reclutadores externos no cuentan como usuarios.</p>
        <p>8.3 Puede configurar restricciones para evitar exceder límites.</p>
        <p>
          8.4 Los candidatos solo cuentan cuando abandonan el estado "Aplicado".
        </p>

        <h2>9. Pagos y Seguridad</h2>
        <p>
          9.1 Los pagos se procesan mediante <strong>Stripe</strong> de forma
          segura.
        </p>
        <p>9.2 Se aceptan tarjetas de crédito, débito y monederos digitales.</p>
        <p>9.3 Zamdit no almacena datos sensibles de pago.</p>
        <p>
          9.4 Las facturas se emiten al inicio del ciclo y están disponibles en
          su historial.
        </p>

        <h2>10. Uso Aceptable</h2>
        <p>10.1 Usted acepta usar la Plataforma conforme a la ley.</p>
        <p>10.2 No debe:</p>
        <ul>
          <li>Utilizar la plataforma con fines ilegales o dañinos;</li>
          <li>Transmitir virus o código malicioso;</li>
          <li>Acceder sin autorización a sistemas;</li>
          <li>Interferir con el funcionamiento del Servicio.</li>
        </ul>

        <h2>11. Protección de Datos y Privacidad</h2>
        <p>
          11.1 Zamdit cumple con el RGPD del Reino Unido y otras leyes de
          protección de datos.
        </p>
        <p>11.2 Usted es el controlador de datos de los candidatos.</p>
        <p>
          11.3 Zamdit actúa como procesador conforme a nuestra
          <a href="/privacy">Política de Privacidad</a>.
        </p>
        <p>11.4 Puede solicitar eliminación o portabilidad de datos.</p>

        <h2>12. Propiedad Intelectual</h2>
        <p>
          12.1 Zamdit y su tecnología son propiedad de Zamdit Ltd o sus
          licenciantes.
        </p>
        <p>12.2 No puede copiar, modificar o descompilar la Plataforma.</p>
        <p>
          12.3 Los comentarios o sugerencias pasan a ser propiedad de Zamdit.
        </p>

        <h2>13. Disponibilidad y Cambios</h2>
        <p>13.1 No garantizamos acceso ininterrumpido.</p>
        <p>
          13.2 Podemos modificar, suspender o terminar servicios con aviso
          razonable si es posible.
        </p>

        <h2>14. Limitación de Responsabilidad</h2>
        <p>14.1 En la máxima medida permitida, Zamdit no es responsable por:</p>
        <ul>
          <li>Daños indirectos o consecuentes;</li>
          <li>Pérdidas de beneficios, datos u oportunidades;</li>
          <li>Interrupciones o contenido de terceros.</li>
        </ul>

        <p>
          14.2 Nuestra responsabilidad total se limita al monto pagado en los
          últimos 12 meses.
        </p>

        <h2>15. Terminación</h2>
        <p>
          15.1 Podemos suspender o cerrar cuentas por incumplimientos o
          actividades ilegales.
        </p>
        <p>
          15.2 Al finalizar, el acceso se revoca. Conservamos los datos por 12
          meses salvo solicitud de eliminación.
        </p>

        <h2>16. Ley Aplicable y Jurisdicción</h2>
        <p>
          16.1 Estos Términos se rigen por las leyes de
          <strong>Inglaterra y Gales</strong>.
        </p>
        <p>
          16.2 Las disputas serán resueltas ante los tribunales competentes de
          dicha jurisdicción.
        </p>

        <h2>17. Cambios en los Términos</h2>
        <p>17.1 Podemos actualizar estos Términos periódicamente.</p>
        <p>
          17.2 Notificaremos cambios relevantes por correo electrónico o dentro
          de la plataforma con al menos 14 días de antelación.
        </p>

        <h2>18. Contacto</h2>
        <p>Para consultas sobre estos Términos, contáctenos:</p>
        <p>
          <strong>Zamdit Ltd</strong>
        </p>
        <p>
          Correo electrónico:
          <a href="mailto:support@zamdit.com">support@zamdit.com</a>
        </p>
        <p>Dirección: [Insertar dirección registrada], Reino Unido</p>
      </section>
      <section v-else class="max-w-2xl mx-auto">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the
          Zamdit platform ("Platform", "Service") provided by
          <strong>Zamdit Ltd</strong> ("Zamdit", "we", "our", or "us"). By
          accessing or using the Service, you agree to be bound by these Terms.
        </p>
        <p>
          If you are entering into this agreement on behalf of a company or
          organization, you represent that you have the authority to bind such
          entity.
        </p>

        <h2>1. Definitions</h2>

        <p>
          1.1 <strong>"Client", "you", "your"</strong> means the individual or
          entity using the Service.
        </p>
        <p>
          1.2 <strong>"Candidate"</strong> means an applicant or individual
          whose data is stored, processed, or tracked using Zamdit.
        </p>
        <p>
          1.3 <strong>"User"</strong> refers to any individual authorized by you
          to access the Platform.
        </p>
        <p>
          1.4 <strong>"Subscription"</strong> refers to the specific service
          plan you choose and pay for.
        </p>

        <h2>2. Eligibility and Account Registration</h2>
        <p>
          2.1 To access and use Zamdit, you must be at least 18 years old and
          capable of entering into a binding legal agreement.
        </p>
        <p>
          2.2 You are responsible for maintaining the confidentiality of your
          login credentials and for all activities under your account.
        </p>

        <h2>3. Free Trial</h2>
        <p>
          3.1 Upon account registration, you will receive a 14-day free trial.
        </p>
        <p>3.2 No payment details are required to activate the trial.</p>
        <p>
          3.3 The trial includes access to core features and optional Test Data
          mode.
        </p>
        <p>
          3.4 If no payment method is added by the end of the trial, your
          account will be automatically suspended.
        </p>

        <h2>4. Subscriptions and Billing</h2>
        <p>
          4.1 Access to Zamdit requires an active paid subscription after the
          trial period.
        </p>
        <p>
          4.2 Subscription plans vary by user count, candidate limits, and
          feature set.
        </p>
        <p>
          4.3 All fees are billed in advance, and any overage fees are billed
          monthly.
        </p>
        <p>
          4.4 By submitting payment information, you authorize Zamdit to charge
          all applicable fees using the designated payment method.
        </p>
        <p>
          4.5 For annual subscriptions, excess candidate usage is billed
          monthly.
        </p>

        <h2>5. Taxes and VAT</h2>
        <p>5.1 All prices are exclusive of applicable taxes.</p>
        <p>
          5.2 UK customers and non-VAT registered EU clients will be charged VAT
          at the prevailing rate.
        </p>
        <p>
          5.3 EU businesses with a valid VAT number may apply the reverse charge
          mechanism.
        </p>
        <p>
          5.4 You are responsible for any taxes, levies, or duties imposed by
          your jurisdiction.
        </p>

        <h2>6. Account Status</h2>
        <p>
          6.1 <strong>Trial:</strong> Full access without billing for 14 days.
        </p>
        <p>
          6.2 <strong>Pending:</strong> Payment details added but subscription
          not yet activated.
        </p>
        <p>
          6.3 <strong>Active:</strong> Subscription and payment successfully
          processed.
        </p>
        <p>
          6.4 <strong>Cancelled:</strong> Subscription ended. Access is limited,
          but data is retained for up to 6 months.
        </p>

        <h2>7. Modifications to Subscriptions</h2>
        <p>7.1 You may upgrade your plan at any time. Charges are prorated.</p>
        <p>
          7.2 To downgrade, cancel the current plan and subscribe to a new one
          after the billing period ends.
        </p>
        <p>
          7.3 Cancellations take effect at the end of the current billing cycle.
          No refunds are issued for partial use.
        </p>

        <h2>8. Candidate and User Limits</h2>
        <p>
          8.1 Your subscription includes a defined number of users and
          candidates.
        </p>
        <p>8.2 External recruiters are excluded from user count limits.</p>
        <p>
          8.3 You may configure account settings to prevent exceeding candidate
          limits.
        </p>
        <p>
          8.4 Candidates are only counted after leaving the "Applied" stage.
        </p>

        <h2>9. Payment and Security</h2>
        <p>
          9.1 All payments are securely processed via
          <strong>Stripe</strong>.
        </p>
        <p>
          9.2 Zamdit accepts major credit and debit cards and digital wallets.
        </p>
        <p>
          9.3 Zamdit does not store or process any payment card data directly.
        </p>
        <p>
          9.4 Invoices are issued at the start of each billing cycle and are
          accessible in your Billing History section.
        </p>

        <h2>10. Acceptable Use</h2>
        <p>
          10.1 You agree to use the Platform in accordance with all applicable
          laws and regulations.
        </p>
        <p>10.2 You must not:</p>
        <ul>
          <li>
            Use the Platform for unlawful, harmful, or fraudulent purposes;
          </li>
          <li>Transmit viruses or malicious code;</li>
          <li>Attempt to gain unauthorized access to systems or networks;</li>
          <li>Interfere with the integrity or performance of the Platform.</li>
        </ul>

        <h2>11. Data Protection and Privacy</h2>
        <p>
          11.1 Zamdit is fully compliant with the UK GDPR and applicable data
          protection regulations.
        </p>
        <p>11.2 You remain the data controller of your candidate data.</p>
        <p>
          11.3 Zamdit processes data only on your instructions, as outlined in
          the <a href="/privacy">Privacy Policy</a>.
        </p>
        <p>
          11.4 You may request data deletion or portability in accordance with
          data protection laws.
        </p>

        <h2>12. Intellectual Property</h2>
        <p>
          12.1 Zamdit and all intellectual property related to the Service are
          owned by Zamdit Ltd or its licensors.
        </p>
        <p>
          12.2 You may not copy, modify, distribute, or reverse engineer any
          part of the Platform.
        </p>
        <p>
          12.3 All feedback or suggestions become the property of Zamdit without
          compensation or obligation.
        </p>

        <h2>13. Availability and Modifications</h2>
        <p>
          13.1 We strive to ensure uninterrupted access but do not guarantee
          availability.
        </p>
        <p>
          13.2 Zamdit reserves the right to modify, suspend, or discontinue any
          part of the Service at any time with reasonable notice where feasible.
        </p>

        <h2>14. Limitation of Liability</h2>
        <p>
          14.1 To the fullest extent permitted by law, Zamdit shall not be
          liable for:
        </p>
        <ul>
          <li>Indirect, incidental, or consequential damages;</li>
          <li>Loss of profits, data, or business opportunities;</li>
          <li>Service interruptions or third-party content.</li>
        </ul>

        <p>
          14.2 Zamdit’s total liability in any claim arising out of these Terms
          will not exceed the total amount you paid in the 6 months preceding
          the claim.
        </p>

        <h2>15. Termination</h2>
        <p>
          15.1 Zamdit may suspend or terminate your account if you materially
          breach these Terms or engage in unlawful activity.
        </p>
        <p>
          15.2 Upon termination, your access will be revoked, and we will retain
          your data for up to 6 months unless deletion is requested.
        </p>

        <h2>16. Governing Law and Jurisdiction</h2>
        <p>
          16.1 These Terms are governed by the laws of
          <strong>England and Wales</strong>.
        </p>
        <p>
          16.2 Any disputes arising under or related to these Terms will be
          subject to the exclusive jurisdiction of the courts of England and
          Wales.
        </p>

        <h2>17. Changes to the Terms</h2>
        <p>17.1 We may update these Terms periodically.</p>
        <p>
          17.2 We will notify you of significant changes via email or in-app
          notification at least 14 days in advance.
        </p>

        <h2>18. Contact</h2>
        <p>
          If you have questions or concerns about these Terms, please contact:
        </p>
        <p>
          <strong>Zamdit Ltd</strong>
        </p>
        <p>Email: <a href="mailto:support@zamdit.com">support@zamdit.com</a></p>
        <p>Address: [Insert Registered Address], United Kingdom</p>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const lastUpdated = "2025-05-23";
</script>
<style lang="css" scoped>
h2 {
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 1.25em;
}
li {
  list-style-type: initial !important;
  margin-left: 30px;
  margin-bottom: 8px;
}
p {
  margin-bottom: 8px;
}
</style>

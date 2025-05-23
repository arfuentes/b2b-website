<template>
  <div class="min-h-screen bg-white">
    <div class="bg-alternate pt-16 pb-12">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-heading font-bold mb-4 text-secondary-500">
            {{ $t("privacy.title") }}
          </h1>
          <p class="text-xl text-secondary-500 md:max-w-4xl mx-auto">
            {{ $t("privacy.lastUpdated") }}:
            {{ formatDate(lastUpdated, locale) }}
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <section v-if="locale == 'es'" class="max-w-2xl mx-auto">
        <p>
          Zamdit ("nosotros", "nuestro" o "nos") se compromete a proteger tu
          privacidad y garantizar que tus datos personales se traten de forma
          responsable y transparente. Esta Política de Privacidad explica cómo
          recopilamos, usamos, divulgamos y protegemos tus datos personales
          cuando accedes o utilizas nuestra plataforma SaaS, ya sea como
          organización contratante (“Cliente”) o como persona candidata
          (“Candidato”).
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Quiénes Somos</h2>
        <p>
          Zamdit es una empresa con sede en el Reino Unido que ofrece un sistema
          de seguimiento de candidatos para ayudar a las organizaciones en sus
          procesos de selección. Actuamos como responsables del tratamiento de
          datos para los Clientes que usan nuestra plataforma. En el caso de los
          datos de los Candidatos, actuamos como encargados del tratamiento en
          nombre de nuestros Clientes, quienes son los responsables.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">
          Datos Personales que Recopilamos
        </h2>
        <p>
          Podemos recopilar y tratar los siguientes tipos de datos personales:
        </p>
        <ul>
          <li class="mt-2">
            <strong>Información de cuenta:</strong> Nombre, correo electrónico,
            nombre de empresa, cargo y credenciales de acceso.
          </li>
          <li class="mt-2">
            <strong>Información de candidatos:</strong> CV, carta de
            presentación, datos de contacto, respuestas a entrevistas,
            resultados de evaluaciones, referencias e historial laboral.
          </li>
          <li class="mt-2">
            <strong>Datos de uso:</strong> Dirección IP, tipo de navegador,
            información del dispositivo, registros de actividad y comportamiento
            en la plataforma.
          </li>
          <li class="mt-2">
            <strong>Datos de comunicación:</strong> Mensajes, notas, comentarios
            y correspondencia relacionada con procesos de selección.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          Cómo Usamos los Datos Personales
        </h2>
        <p>Utilizamos tus datos para:</p>
        <ul>
          <li class="mt-2">Proporcionar y mantener la plataforma</li>
          <li class="mt-2">
            Permitir el proceso de postulación y evaluación de candidatos
          </li>
          <li class="mt-2">
            Autenticar usuarios y prevenir accesos no autorizados
          </li>
          <li class="mt-2">Comunicarnos contigo sobre tu cuenta o actividad</li>
          <li class="mt-2">
            Monitorizar el rendimiento y mejorar nuestros servicios
          </li>
          <li class="mt-2">Cumplir con obligaciones legales</li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          Base Legal para el Tratamiento
        </h2>
        <p>
          Tratamos los datos personales conforme a la legislación de protección
          de datos del Reino Unido. Las bases legales incluyen:
        </p>
        <ul>
          <li class="mt-2">
            <strong>Consentimiento:</strong> Para cookies opcionales,
            comunicaciones de marketing o cuando el usuario acepta expresamente.
          </li>
          <li class="mt-2">
            <strong>Ejecución de un contrato:</strong> Para prestar los
            servicios según nuestro acuerdo con Clientes o Candidatos.
          </li>
          <li class="mt-2">
            <strong>Obligación legal:</strong> Para cumplir con requisitos
            normativos o legales.
          </li>
          <li class="mt-2">
            <strong>Intereses legítimos:</strong> Para la seguridad, prevención
            del fraude, mejora del servicio y gestión de la plataforma, siempre
            que no prevalezcan tus derechos.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          Divulgación y Compartición de Datos
        </h2>
        <p>Podemos compartir datos personales con:</p>
        <ul>
          <li class="mt-2">
            Proveedores de servicios (ej. alojamiento, correo electrónico,
            analítica) bajo acuerdos estrictos de tratamiento de datos
          </li>
          <li class="mt-2">
            Agencias de selección o colaboradores implicados en el proceso de
            contratación
          </li>
          <li class="mt-2">Autoridades legales si la ley lo exige</li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          Conservación de los Datos
        </h2>
        <p>
          Conservamos los datos personales solo durante el tiempo necesario para
          cumplir los fines establecidos en esta política o lo requerido por
          ley. Los Candidatos pueden solicitar la eliminación de sus datos,
          sujeto a la responsabilidad del Cliente como responsable del
          tratamiento.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Tus Derechos</h2>
        <p>
          De acuerdo con la ley de protección de datos del Reino Unido, tienes
          derecho a:
        </p>
        <ul>
          <li class="mt-2">Acceder a tus datos personales</li>
          <li class="mt-2">Corregir datos inexactos</li>
          <li class="mt-2">
            Solicitar la eliminación de tus datos (“derecho al olvido”)
          </li>
          <li class="mt-2">Restringir u oponerte al tratamiento</li>
          <li class="mt-2">Solicitar la portabilidad de tus datos</li>
          <li class="mt-2">
            Retirar tu consentimiento en cualquier momento (cuando aplique)
          </li>
          <li class="mt-2">
            Presentar una reclamación ante la Oficina del Comisionado de
            Información (ICO):
            <a href="https://ico.org.uk" target="_blank">https://ico.org.uk</a>
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          Transferencias Internacionales
        </h2>
        <p>
          Si tus datos se transfieren fuera del Reino Unido, nos aseguramos de
          que existan garantías adecuadas, como cláusulas contractuales estándar
          u otros mecanismos reconocidos que protejan tu información.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Seguridad de los Datos</h2>
        <p>
          Aplicamos medidas técnicas y organizativas para proteger los datos
          personales frente a pérdida, mal uso, acceso no autorizado o
          divulgación. Esto incluye cifrado, almacenamiento seguro, control de
          accesos y formación al personal.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Cambios en esta Política</h2>
        <p>
          Podemos actualizar esta política ocasionalmente. Te recomendamos
          revisarla periódicamente. En caso de cambios significativos, lo
          notificaremos por la plataforma o por correo electrónico.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Contacto</h2>
        <p>
          Si tienes preguntas o deseas ejercer tus derechos respecto a esta
          política, puedes contactarnos en:
        </p>
        <ul>
          <li class="mt-2">
            <strong>Correo electrónico:</strong> privacy@zamdit.com
          </li>
          <li class="mt-2">
            <strong>Dirección:</strong> Zamdit Ltd, [Dirección Comercial], Reino
            Unido
          </li>
        </ul>
      </section>
      <section v-else class="max-w-2xl mx-auto">
        <p>
          Zamdit ("we", "us", or "our") is committed to protecting your privacy
          and ensuring that your personal data is handled responsibly and
          transparently. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your personal data when you access or use our
          software-as-a-service (SaaS) platform, whether as a hiring
          organization (“Client”) or a job applicant (“Candidate”).
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Who We Are</h2>
        <p>
          Zamdit is a UK-based company that provides an applicant tracking
          system to help organizations manage recruitment. We are the data
          controller for Clients using our platform. For Candidate data, we act
          as a data processor on behalf of our Clients, who are the data
          controllers.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Personal Data We Collect</h2>
        <p>We may collect and process the following types of personal data:</p>
        <ul>
          <li class="mt-2">
            <strong>Account Information:</strong> Name, email, company name,
            role, and login credentials.
          </li>
          <li class="mt-2">
            <strong>Candidate Information:</strong> CV, cover letter, contact
            details, interview responses, assessment results, references, and
            job history.
          </li>
          <li class="mt-2">
            <strong>Usage Data:</strong> IP address, browser type, device
            information, usage logs, and activity within the platform.
          </li>
          <li class="mt-2">
            <strong>Communication Data:</strong> Messages, notes, feedback, and
            correspondence related to recruitment.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">How We Use Personal Data</h2>
        <p>We use your data to:</p>
        <ul>
          <li class="mt-2">Provide and maintain the platform</li>
          <li class="mt-2">
            Enable candidate application and evaluation processes
          </li>
          <li class="mt-2">
            Authenticate users and prevent unauthorised access
          </li>
          <li class="mt-2">
            Communicate with users about their account or activity
          </li>
          <li class="mt-2">
            Monitor system performance and improve our services
          </li>
          <li class="mt-2">Comply with legal obligations</li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">
          Lawful Basis for Processing
        </h2>
        <p>
          We process personal data in accordance with UK data protection law.
          Our lawful bases include:
        </p>
        <ul>
          <li class="mt-2">
            <strong>Consent:</strong> For optional cookies, marketing, or when
            the user explicitly agrees to data processing.
          </li>
          <li class="mt-2">
            <strong>Contract:</strong> To provide services under our agreement
            with Clients or Candidates.
          </li>
          <li class="mt-2">
            <strong>Legal obligation:</strong> To comply with regulatory or
            legal requirements.
          </li>
          <li class="mt-2">
            <strong>Legitimate interests:</strong> For security, fraud
            prevention, service improvement, and platform management, provided
            these do not override your rights.
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">Sharing and Disclosure</h2>
        <p>We may share personal data with:</p>
        <ul>
          <li class="mt-2">
            Third-party service providers (e.g. hosting, email, analytics) under
            strict data processing agreements
          </li>
          <li class="mt-2">
            Recruitment agencies or collaborators explicitly involved in the
            hiring process
          </li>
          <li class="mt-2">
            Legal authorities, if required by law or court order
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">Data Retention</h2>
        <p>
          Personal data is retained only for as long as necessary to fulfil the
          purposes outlined in this policy or as required by law. Candidates may
          request data deletion at any time, subject to the Client's
          responsibility as data controller.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Your Rights</h2>
        <p>You have the following rights under UK data protection law:</p>
        <ul>
          <li class="mt-2">Right to access your personal data</li>
          <li class="mt-2">Right to rectify inaccuracies</li>
          <li class="mt-2">Right to erasure ("right to be forgotten")</li>
          <li class="mt-2">Right to restrict or object to processing</li>
          <li class="mt-2">Right to data portability</li>
          <li class="mt-2">
            Right to withdraw consent at any time (where applicable)
          </li>
          <li class="mt-2">
            Right to lodge a complaint with the Information Commissioner's
            Office (ICO):
            <a href="https://ico.org.uk" target="_blank">https://ico.org.uk</a>
          </li>
        </ul>

        <h2 class="text-heading text-xl mt-6 mb-2">International Transfers</h2>
        <p>
          If personal data is transferred outside the UK, we ensure appropriate
          safeguards are in place, such as Standard Contractual Clauses or
          equivalent mechanisms to protect your information.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Data Security</h2>
        <p>
          We implement technical and organizational measures to secure personal
          data from loss, misuse, unauthorized access, and disclosure. These
          include data encryption, secure storage, access controls, and staff
          training.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We encourage you
          to review it periodically. Material changes will be communicated via
          the platform or email.
        </p>

        <h2 class="text-heading text-xl mt-6 mb-2">Contact Us</h2>
        <p>
          If you have questions or requests about this Privacy Policy or your
          personal data, please contact:
        </p>
        <ul>
          <li class="mt-2"><strong>Email:</strong> privacy@zamdit.com</li>
          <li class="mt-2">
            <strong>Address:</strong> Zamdit Ltd, [Business Address], United
            Kingdom
          </li>
        </ul>
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

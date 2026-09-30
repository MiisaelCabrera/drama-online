// Textos de las páginas. Borrador redactado a partir de lo que hace el proyecto; no es asesoría legal.
import type { ReactNode } from "react";
import { Contact } from "@/app/components";
import { site, type Lang } from "@/site.config";

interface Page {
  title: string;
  description: string;
  body: ReactNode;
}

type PageKey = "home" | "privacy" | "terms" | "deletion";

export const pages: Record<Lang, Record<PageKey, Page>> = {
  es: {
    home: {
      title: site.name,
      description: "Historias de ficción narradas, en español e inglés.",
      body: (
        <>
          <p>
            <strong>{site.name}</strong> publica historias cortas <strong>de ficción</strong>, narradas en video, en
            YouTube, TikTok, Instagram y Facebook. Hay un canal por idioma: <em>{site.channels.es}</em> y{" "}
            <em>{site.channels.en}</em>.
          </p>
          <h2>Cómo se hacen</h2>
          <ul>
            <li>Los guiones se escriben con ayuda de inteligencia artificial y una persona revisa y aprueba cada historia antes de publicarla.</li>
            <li>Las voces son la del creador del proyecto (incluida una versión sintética de su propia voz, con su consentimiento) y voces sintéticas para personajes secundarios. Nunca usamos voces de personas reales sin permiso.</li>
            <li>Los fondos de video son grabaciones propias o generados por computadora.</li>
            <li>Todo el contenido se etiqueta como generado o modificado con IA en cada plataforma.</li>
          </ul>
          <h2>Es ficción</h2>
          <p>
            Las historias son inventadas. No son publicaciones reales de Reddit ni de ningún otro foro, y cualquier
            parecido con personas o hechos reales es coincidencia.
          </p>
        </>
      ),
    },
    privacy: {
      title: "Política de privacidad",
      description: `Cómo ${site.name} trata los datos.`,
      body: (
        <>
          <h2>1. Quiénes somos</h2>
          <p>
            {site.name} es un proyecto que publica historias de ficción narradas en sus propias cuentas de YouTube,
            TikTok, Instagram y Facebook. Esta política explica qué datos tratamos en este sitio web y en nuestras
            integraciones con esas plataformas.
          </p>

          <h2>2. Este sitio web</h2>
          <p>
            Este sitio no usa cookies, ni analítica, ni formularios, y no nos envía ningún dato tuyo. Está alojado en
            GitHub Pages; GitHub puede registrar datos técnicos como tu dirección IP por motivos de seguridad, según
            la <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">declaración de privacidad de GitHub</a>.
          </p>

          <h2>3. Integraciones con plataformas (YouTube, TikTok, Meta)</h2>
          <p>Nuestra aplicación se conecta <strong>únicamente a las cuentas propias del proyecto</strong> para:</p>
          <ul>
            <li>subir nuestros videos y definir su título, descripción, etiquetas, privacidad y la etiqueta de contenido generado con IA;</li>
            <li>consultar el estado de nuestras publicaciones y sus métricas agregadas (vistas, me gusta, comentarios, compartidos).</li>
          </ul>
          <p>
            No recopilamos datos personales de las personas que ven nuestros videos, no leemos mensajes privados y no
            creamos perfiles de usuarios. Los tokens de acceso que entregan las plataformas se guardan en un servidor
            privado del proyecto, no se comparten con terceros y no se venden. Se usan solo para las funciones descritas.
          </p>

          <h2>4. Datos de usuario de las APIs de Google</h2>
          <p>
            El uso y la transferencia a cualquier otra aplicación de la información recibida de las APIs de Google por
            parte de {site.name} se ajustará a la{" "}
            <a href="https://developers.google.com/terms/api-services-user-data-policy">Política de datos de usuario de los servicios de API de Google</a>,
            incluidos los requisitos de Uso Limitado. {site.name} usa los servicios de API de YouTube; consulta también los{" "}
            <a href="https://www.youtube.com/t/terms">Términos de servicio de YouTube</a> y la{" "}
            <a href="https://policies.google.com/privacy">Política de privacidad de Google</a>.
          </p>

          <h2>5. Conservación y seguridad</h2>
          <p>
            Guardamos los tokens mientras la integración esté activa y las métricas de nuestras propias publicaciones
            mientras exista el proyecto. El servidor no está expuesto a internet y el acceso está restringido.
          </p>

          <h2>6. Revocar el acceso y borrar datos</h2>
          <p>
            Puedes revocar el acceso de nuestra aplicación en cualquier momento desde la{" "}
            <a href="https://myaccount.google.com/permissions">configuración de seguridad de Google</a>, la configuración
            de aplicaciones de TikTok o la de Facebook/Instagram. Consulta la página de <a href="../data-deletion/">borrado de datos</a>.
          </p>

          <h2>7. Menores</h2>
          <p>Este proyecto no está dirigido a menores de 13 años y no recopila datos de menores.</p>

          <h2>8. Cambios</h2>
          <p>Si cambiamos esta política, actualizaremos la fecha de esta página.</p>

          <h2>9. Contacto</h2>
          <p><Contact lang="es" /></p>
        </>
      ),
    },
    terms: {
      title: "Términos de servicio",
      description: `Condiciones de uso de ${site.name}.`,
      body: (
        <>
          <h2>1. Aceptación</h2>
          <p>Al ver nuestro contenido o usar este sitio aceptas estos términos. Si no estás de acuerdo, no los uses.</p>
          <h2>2. El contenido es ficción</h2>
          <p>
            Todas las historias de {site.name} son inventadas, escritas con ayuda de inteligencia artificial y revisadas por
            una persona. No describen hechos reales. Cualquier parecido con personas, lugares o hechos reales es coincidencia.
          </p>
          <h2>3. Uso de inteligencia artificial</h2>
          <p>
            Usamos IA para escribir guiones y generar voces. Etiquetamos el contenido como hecho con IA en cada plataforma
            cuando la plataforma lo permite.
          </p>
          <h2>4. Propiedad intelectual</h2>
          <p>
            Los guiones, videos, voces y fondos publicados por {site.name} son propios o se usan con permiso. No se permite
            volver a subirlos ni usarlos con fines comerciales sin autorización.
          </p>
          <h2>5. Plataformas de terceros</h2>
          <p>
            Nuestro contenido se publica en YouTube, TikTok, Instagram y Facebook; su uso también se rige por los términos de
            cada plataforma (por ejemplo, los <a href="https://www.youtube.com/t/terms">Términos de servicio de YouTube</a>).
          </p>
          <h2>6. Sin garantías</h2>
          <p>El contenido se ofrece "tal cual", con fines de entretenimiento, sin garantías de ningún tipo.</p>
          <h2>7. Cambios</h2>
          <p>Podemos actualizar estos términos; la fecha de esta página indica la versión vigente.</p>
          <h2>8. Contacto</h2>
          <p><Contact lang="es" /></p>
        </>
      ),
    },
    deletion: {
      title: "Borrado de datos",
      description: `Cómo solicitar el borrado de datos en ${site.name}.`,
      body: (
        <>
          <p>
            {site.name} no guarda datos personales de quienes ven nuestro contenido. Nuestra aplicación solo se conecta a
            las cuentas propias del proyecto.
          </p>
          <h2>Quitar el acceso de la aplicación</h2>
          <ul>
            <li><strong>Google / YouTube:</strong> <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> → elige la app → Quitar acceso.</li>
            <li><strong>Facebook / Instagram:</strong> Configuración → Seguridad → Apps y sitios web → elige la app → Eliminar.</li>
            <li><strong>TikTok:</strong> Configuración y privacidad → Seguridad → Apps y servicios → elige la app → Quitar acceso.</li>
          </ul>
          <h2>Solicitar el borrado</h2>
          <p>
            Si crees que tenemos algún dato tuyo y quieres que lo borremos, escríbenos indicando la plataforma y tu
            nombre de usuario. Responderemos y confirmaremos el borrado en un plazo máximo de 30 días.
          </p>
          <p><Contact lang="es" /></p>
        </>
      ),
    },
  },
  en: {
    home: {
      title: site.name,
      description: "Narrated fiction stories, in English and Spanish.",
      body: (
        <>
          <p>
            <strong>{site.name}</strong> publishes short, <strong>fictional</strong> narrated video stories on YouTube,
            TikTok, Instagram and Facebook. There is one channel per language: <em>{site.channels.en}</em> and{" "}
            <em>{site.channels.es}</em>.
          </p>
          <h2>How they're made</h2>
          <ul>
            <li>Scripts are written with the help of artificial intelligence, and a person reviews and approves every story before it is published.</li>
            <li>Voices are the creator's own (including a synthetic version of the creator's voice, with the creator's consent) plus synthetic voices for supporting characters. We never use real people's voices without permission.</li>
            <li>Background footage is our own recordings or computer-generated.</li>
            <li>All content is labeled as AI-generated or AI-altered on every platform.</li>
          </ul>
          <h2>It's fiction</h2>
          <p>
            The stories are made up. They are not real Reddit posts or posts from any other forum, and any resemblance to
            real people or events is coincidental.
          </p>
        </>
      ),
    },
    privacy: {
      title: "Privacy Policy",
      description: `How ${site.name} handles data.`,
      body: (
        <>
          <h2>1. Who we are</h2>
          <p>
            {site.name} is a project that publishes narrated fiction stories on its own YouTube, TikTok, Instagram and
            Facebook accounts. This policy explains what data we handle on this website and in our integrations with
            those platforms.
          </p>

          <h2>2. This website</h2>
          <p>
            This website uses no cookies, no analytics and no forms, and sends us no data about you. It is hosted on GitHub
            Pages; GitHub may log technical data such as your IP address for security purposes, as described in the{" "}
            <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">GitHub General Privacy Statement</a>.
          </p>

          <h2>3. Platform integrations (YouTube, TikTok, Meta)</h2>
          <p>Our application connects <strong>only to the project's own accounts</strong> in order to:</p>
          <ul>
            <li>upload our videos and set their title, description, tags, privacy status and AI-generated content label;</li>
            <li>check the status of our posts and their aggregate metrics (views, likes, comments, shares).</li>
          </ul>
          <p>
            We do not collect personal data about people who watch our videos, we do not read private messages, and we do
            not build user profiles. Access tokens issued by the platforms are stored on the project's private server, are
            not shared with third parties and are never sold. They are used only for the functions described above.
          </p>

          <h2>4. Google API user data</h2>
          <p>
            {site.name}'s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
            <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>,
            including the Limited Use requirements. {site.name} uses YouTube API Services; see also the{" "}
            <a href="https://www.youtube.com/t/terms">YouTube Terms of Service</a> and the{" "}
            <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
          </p>

          <h2>5. Retention and security</h2>
          <p>
            We keep tokens while the integration is active, and metrics about our own posts for as long as the project
            exists. The server is not exposed to the internet and access is restricted.
          </p>

          <h2>6. Revoking access and deleting data</h2>
          <p>
            You can revoke our application's access at any time from{" "}
            <a href="https://myaccount.google.com/permissions">Google security settings</a>, TikTok app settings or
            Facebook/Instagram settings. See the <a href="../data-deletion/">data deletion</a> page.
          </p>

          <h2>7. Children</h2>
          <p>This project is not directed to children under 13 and does not collect data from children.</p>

          <h2>8. Changes</h2>
          <p>If we change this policy, we will update the date on this page.</p>

          <h2>9. Contact</h2>
          <p><Contact lang="en" /></p>
        </>
      ),
    },
    terms: {
      title: "Terms of Service",
      description: `Terms of use for ${site.name}.`,
      body: (
        <>
          <h2>1. Acceptance</h2>
          <p>By watching our content or using this website you agree to these terms. If you don't agree, please don't use them.</p>
          <h2>2. The content is fiction</h2>
          <p>
            All {site.name} stories are made up, written with the help of artificial intelligence and reviewed by a person.
            They do not describe real events. Any resemblance to real people, places or events is coincidental.
          </p>
          <h2>3. Use of artificial intelligence</h2>
          <p>We use AI to write scripts and generate voices. We label content as made with AI on every platform that supports it.</p>
          <h2>4. Intellectual property</h2>
          <p>
            Scripts, videos, voices and backgrounds published by {site.name} are our own or used with permission. Re-uploading
            them or using them commercially without authorization is not allowed.
          </p>
          <h2>5. Third-party platforms</h2>
          <p>
            Our content is published on YouTube, TikTok, Instagram and Facebook; its use is also governed by each platform's
            terms (for example, the <a href="https://www.youtube.com/t/terms">YouTube Terms of Service</a>).
          </p>
          <h2>6. No warranties</h2>
          <p>Content is provided "as is", for entertainment purposes, without warranties of any kind.</p>
          <h2>7. Changes</h2>
          <p>We may update these terms; the date on this page shows the current version.</p>
          <h2>8. Contact</h2>
          <p><Contact lang="en" /></p>
        </>
      ),
    },
    deletion: {
      title: "Data Deletion",
      description: `How to request data deletion from ${site.name}.`,
      body: (
        <>
          <p>
            {site.name} does not store personal data about people who watch our content. Our application only connects to
            the project's own accounts.
          </p>
          <h2>Remove the app's access</h2>
          <ul>
            <li><strong>Google / YouTube:</strong> <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> → select the app → Remove access.</li>
            <li><strong>Facebook / Instagram:</strong> Settings → Security → Apps and Websites → select the app → Remove.</li>
            <li><strong>TikTok:</strong> Settings and privacy → Security → Apps and services → select the app → Remove access.</li>
          </ul>
          <h2>Request deletion</h2>
          <p>
            If you believe we hold any data about you and want it deleted, contact us with the platform and your username.
            We will reply and confirm deletion within 30 days at most.
          </p>
          <p><Contact lang="en" /></p>
        </>
      ),
    },
  },
};

// The privacy policy and the terms of service (Daclipy and the other Dalfex products), in Spanish and English.
// The texts the Google, Meta and TikTok app reviews read: keep the YouTube API, Limited Use, revocation and data
// deletion sections when editing.

export const UPDATED = { es: "Actualizado el 4 de octubre de 2026", en: "Last updated October 4, 2026" };

type Section = { id?: string; title: string; body: string[] };
type Doc = { title: string; heading: string; intro: string; sections: Section[] };

export const privacy: Record<"es" | "en", Doc> = {
  es: {
    title: "Política de privacidad — Dalfex",
    heading: "Política de privacidad",
    intro:
      "Esta política explica qué datos trata Dalfex en Daclipy (daclipy.com) y en sus demás productos, para qué los usa y cómo puedes pedir que se borren. Escríbenos a hello@dalfex.com con cualquier pregunta.",
    sections: [
      {
        title: "Quiénes somos",
        body: [
          "Dalfex es un estudio de software con sede en Colombia. Daclipy es nuestra herramienta para crear videos cortos con inteligencia artificial y publicarlos en las cuentas que el usuario conecta. El responsable del tratamiento es Dalfex, contacto hello@dalfex.com.",
        ],
      },
      {
        title: "Datos que recogemos",
        body: [
          "• Cuenta: nombre, correo y foto de perfil cuando entras con Google o con correo y contraseña.",
          "• Contenido: las ideas, textos, imágenes, videos y grabaciones de voz que subes, y los videos que Daclipy genera para ti.",
          "• Cuentas conectadas: cuando conectas YouTube, Facebook, Instagram o TikTok, guardamos los permisos (tokens) que esa plataforma nos entrega, el nombre y el identificador del canal o la cuenta.",
          "• Estadísticas de YouTube: si conectas YouTube, leemos la retención de audiencia de los videos que publicaste desde Daclipy, para mostrártela.",
          "• Pagos: los procesa Polar (polar.sh). No guardamos los datos de tu tarjeta.",
          "• Uso técnico: registros de errores y de uso necesarios para operar y proteger el servicio.",
        ],
      },
      {
        title: "Para qué los usamos",
        body: [
          "Solo para prestarte el servicio: crear tus videos, publicarlos en los canales que conectaste cuando tú lo pides o lo programas, mostrarte sus estadísticas, cobrar el plan que elegiste y darte soporte. No vendemos tus datos ni los usamos para publicidad.",
        ],
      },
      {
        id: "youtube",
        title: "YouTube y los servicios de API de Google",
        body: [
          "Daclipy usa los servicios de API de YouTube para subir los videos que eliges publicar y para leer la retención de audiencia de esos videos. Al conectar YouTube aceptas los Términos de servicio de YouTube (https://www.youtube.com/t/terms) y se aplica la Política de privacidad de Google (https://policies.google.com/privacy).",
          "Los permisos que pedimos son youtube.upload (subir videos), youtube.readonly (leer el canal) y yt-analytics.readonly (leer la retención). No borramos, editamos ni comentamos nada en tu canal.",
          "El uso y la transferencia de la información recibida de las API de Google se ajusta a la Política de datos de usuario de los servicios de API de Google (https://developers.google.com/terms/api-services-user-data-policy), incluidos los requisitos de uso limitado.",
          "Puedes revocar el acceso de Daclipy en cualquier momento desde la configuración de seguridad de tu cuenta de Google (https://myaccount.google.com/permissions) o desconectando YouTube en Daclipy. Al revocarlo, borramos los permisos guardados y las estadísticas leídas de ese canal.",
        ],
      },
      {
        title: "Meta (Facebook e Instagram) y TikTok",
        body: [
          "Con Facebook e Instagram usamos los permisos de publicación de Meta solo para publicar los videos que eliges en la página o la cuenta profesional que conectaste. Con TikTok usamos Login Kit y Content Posting API solo para publicar o enviar a tu bandeja los videos que eliges, con la privacidad que tú indicas.",
        ],
      },
      {
        title: "Con quién los compartimos",
        body: [
          "Con proveedores que nos ayudan a prestar el servicio, bajo sus propios compromisos de seguridad: alojamiento (Railway, Vercel, Cloudflare R2), generación con inteligencia artificial (Google Gemini, Anthropic, Replicate, ElevenLabs), pagos (Polar) y las plataformas que tú conectas, solo cuando publicas en ellas. No compartimos datos de Google, Meta o TikTok con terceros para ningún otro fin.",
        ],
      },
      {
        title: "Seguridad",
        body: [
          "Los permisos de tus cuentas conectadas se guardan cifrados y nunca salen del servidor que publica. El acceso a los datos de producción está limitado al equipo de Dalfex.",
        ],
      },
      {
        id: "eliminacion",
        title: "Conservación y eliminación de datos",
        body: [
          "Guardamos tus datos mientras tu cuenta esté activa. Al desconectar una cuenta (YouTube, Facebook, Instagram o TikTok) borramos de inmediato sus permisos y sus estadísticas. Al borrar un canal o tu cuenta borramos su contenido y sus datos asociados.",
          "Para pedir la eliminación completa de tus datos, incluidos los que recibimos de Facebook, Instagram o TikTok: escribe a hello@dalfex.com desde el correo de tu cuenta con el asunto «Eliminar mis datos». Lo hacemos en un máximo de 30 días y te confirmamos por correo. También puedes quitar el acceso de Daclipy desde la configuración de apps de Facebook, Instagram o TikTok.",
        ],
      },
      {
        title: "Tus derechos",
        body: [
          "Conforme a la Ley 1581 de 2012 de Colombia puedes conocer, actualizar, rectificar y suprimir tus datos, y revocar tu autorización, escribiendo a hello@dalfex.com.",
        ],
      },
      {
        title: "Menores de edad",
        body: ["Daclipy no está dirigido a menores de 18 años."],
      },
      {
        title: "Cambios",
        body: ["Si cambiamos esta política, publicaremos la nueva versión aquí con su fecha."],
      },
    ],
  },
  en: {
    title: "Privacy Policy — Dalfex",
    heading: "Privacy Policy",
    intro:
      "This policy explains which data Dalfex processes in Daclipy (daclipy.com) and its other products, what we use it for and how to have it deleted. Write to hello@dalfex.com with any question.",
    sections: [
      {
        title: "Who we are",
        body: [
          "Dalfex is a software studio based in Colombia. Daclipy is our tool to create short videos with artificial intelligence and publish them to the accounts the user connects. The data controller is Dalfex, contact hello@dalfex.com.",
        ],
      },
      {
        title: "Data we collect",
        body: [
          "• Account: name, email and profile picture when you sign in with Google or with email and password.",
          "• Content: the ideas, texts, images, videos and voice recordings you upload, and the videos Daclipy generates for you.",
          "• Connected accounts: when you connect YouTube, Facebook, Instagram or TikTok, we store the access grants (tokens) that platform gives us and the channel or account name and identifier.",
          "• YouTube statistics: if you connect YouTube, we read the audience retention of the videos you published from Daclipy to show it to you.",
          "• Payments: processed by Polar (polar.sh). We do not store your card details.",
          "• Technical usage: error and usage logs needed to run and protect the service.",
        ],
      },
      {
        title: "How we use it",
        body: [
          "Only to provide the service: create your videos, publish them to the channels you connected when you ask or schedule it, show you their statistics, charge the plan you chose and support you. We do not sell your data or use it for advertising.",
        ],
      },
      {
        id: "youtube",
        title: "YouTube and Google API Services",
        body: [
          "Daclipy uses the YouTube API Services to upload the videos you choose to publish and to read the audience retention of those videos. By connecting YouTube you agree to the YouTube Terms of Service (https://www.youtube.com/t/terms), and the Google Privacy Policy applies (https://policies.google.com/privacy).",
          "We request youtube.upload (upload videos), youtube.readonly (read the channel) and yt-analytics.readonly (read retention). We never delete, edit or comment on anything in your channel.",
          "Dalfex's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy (https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.",
          "You can revoke Daclipy's access at any time from your Google Account security settings (https://myaccount.google.com/permissions) or by disconnecting YouTube in Daclipy. When access is revoked we delete the stored grants and the statistics read for that channel.",
        ],
      },
      {
        title: "Meta (Facebook and Instagram) and TikTok",
        body: [
          "With Facebook and Instagram we use Meta's publishing permissions only to publish the videos you choose to the Page or professional account you connected. With TikTok we use Login Kit and the Content Posting API only to post, or send to your inbox, the videos you choose, with the privacy you select.",
        ],
      },
      {
        title: "Who we share it with",
        body: [
          "With providers that help us run the service, under their own security commitments: hosting (Railway, Vercel, Cloudflare R2), AI generation (Google Gemini, Anthropic, Replicate, ElevenLabs), payments (Polar) and the platforms you connect, only when you publish to them. We do not share Google, Meta or TikTok data with third parties for any other purpose.",
        ],
      },
      {
        title: "Security",
        body: [
          "Connected-account grants are stored encrypted and never leave the server that publishes. Access to production data is limited to the Dalfex team.",
        ],
      },
      {
        id: "data-deletion",
        title: "Retention and data deletion",
        body: [
          "We keep your data while your account is active. Disconnecting an account (YouTube, Facebook, Instagram or TikTok) deletes its grants and statistics immediately. Deleting a channel or your account deletes its content and associated data.",
          "To request full deletion of your data, including data received from Facebook, Instagram or TikTok: email hello@dalfex.com from your account's address with the subject \"Delete my data\". We complete it within 30 days and confirm by email. You can also remove Daclipy's access from the app settings of Facebook, Instagram or TikTok.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "Under Colombian Law 1581 of 2012 you may access, update, correct and delete your data and withdraw your consent by writing to hello@dalfex.com.",
        ],
      },
      {
        title: "Children",
        body: ["Daclipy is not directed to anyone under 18."],
      },
      {
        title: "Changes",
        body: ["If we change this policy we will publish the new version here with its date."],
      },
    ],
  },
};

export const terms: Record<"es" | "en", Doc> = {
  es: {
    title: "Términos de servicio — Dalfex",
    heading: "Términos de servicio",
    intro:
      "Estos términos regulan el uso de Daclipy (daclipy.com) y de los demás productos de Dalfex. Al crear una cuenta los aceptas.",
    sections: [
      {
        title: "El servicio",
        body: [
          "Daclipy crea videos cortos con inteligencia artificial a partir de tus ideas y tu material, y puede publicarlos en las cuentas de YouTube, Facebook, Instagram y TikTok que conectes.",
        ],
      },
      {
        title: "Tu cuenta",
        body: [
          "Debes ser mayor de 18 años y dar datos verdaderos. Eres responsable de lo que se haga con tu cuenta y de mantener seguro tu acceso.",
        ],
      },
      {
        title: "Tu contenido",
        body: [
          "Conservas los derechos sobre lo que subes y sobre los videos generados para ti. Nos das permiso para procesarlo solo para prestarte el servicio. Debes tener los derechos de lo que subes y no infringir derechos de terceros.",
        ],
      },
      {
        title: "Uso aceptable",
        body: [
          "No puedes usar Daclipy para contenido ilegal, engañoso, de odio, sexual con menores, que suplante a personas reales o que infrinja derechos de autor, ni para hacer que personas reales vivas digan cosas que no dijeron. Podemos suspender cuentas que incumplan estas reglas.",
        ],
      },
      {
        title: "Contenido generado con IA",
        body: [
          "Los videos se generan con inteligencia artificial y pueden contener errores. Revisa cada video antes de publicarlo; tú decides qué se publica y respondes por ello.",
        ],
      },
      {
        title: "Plataformas de terceros",
        body: [
          "Publicar en YouTube, Facebook, Instagram o TikTok está sujeto a sus propios términos y políticas, incluidos los Términos de servicio de YouTube (https://www.youtube.com/t/terms). Podemos dejar de ofrecer una integración si la plataforma la cambia o la retira.",
        ],
      },
      {
        title: "Planes y pagos",
        body: [
          "Los planes y créditos se cobran por adelantado a través de Polar. Un video que falla por causa nuestra devuelve sus créditos. Puedes cancelar tu plan cuando quieras; sigue activo hasta el final del periodo pagado.",
        ],
      },
      {
        title: "Responsabilidad",
        body: [
          "El servicio se ofrece tal como está. En la medida que permita la ley, nuestra responsabilidad total se limita a lo que hayas pagado en los últimos tres meses.",
        ],
      },
      {
        title: "Terminación",
        body: [
          "Puedes cerrar tu cuenta en cualquier momento. Podemos cerrarla si incumples estos términos.",
        ],
      },
      {
        title: "Ley aplicable y contacto",
        body: ["Estos términos se rigen por las leyes de Colombia. Contacto: hello@dalfex.com."],
      },
    ],
  },
  en: {
    title: "Terms of Service — Dalfex",
    heading: "Terms of Service",
    intro:
      "These terms govern the use of Daclipy (daclipy.com) and the other Dalfex products. By creating an account you accept them.",
    sections: [
      {
        title: "The service",
        body: [
          "Daclipy creates short videos with artificial intelligence from your ideas and material and can publish them to the YouTube, Facebook, Instagram and TikTok accounts you connect.",
        ],
      },
      {
        title: "Your account",
        body: [
          "You must be 18 or older and provide true information. You are responsible for what happens under your account and for keeping your access secure.",
        ],
      },
      {
        title: "Your content",
        body: [
          "You keep the rights to what you upload and to the videos generated for you. You allow us to process it only to provide the service. You must hold the rights to what you upload and not infringe anyone else's.",
        ],
      },
      {
        title: "Acceptable use",
        body: [
          "You may not use Daclipy for illegal, deceptive or hateful content, sexual content involving minors, content impersonating real people or infringing copyright, or to make living real people say things they did not say. We may suspend accounts that break these rules.",
        ],
      },
      {
        title: "AI-generated content",
        body: [
          "Videos are generated with artificial intelligence and may contain mistakes. Review every video before publishing it; you decide what is published and are responsible for it.",
        ],
      },
      {
        title: "Third-party platforms",
        body: [
          "Publishing to YouTube, Facebook, Instagram or TikTok is subject to their own terms and policies, including the YouTube Terms of Service (https://www.youtube.com/t/terms). We may stop offering an integration if the platform changes or withdraws it.",
        ],
      },
      {
        title: "Plans and payments",
        body: [
          "Plans and credits are charged in advance through Polar. A video that fails through our fault returns its credits. You can cancel your plan at any time; it stays active until the end of the paid period.",
        ],
      },
      {
        title: "Liability",
        body: [
          "The service is provided as is. To the extent the law allows, our total liability is limited to what you paid in the last three months.",
        ],
      },
      {
        title: "Termination",
        body: ["You can close your account at any time. We may close it if you break these terms."],
      },
      {
        title: "Governing law and contact",
        body: ["These terms are governed by the laws of Colombia. Contact: hello@dalfex.com."],
      },
    ],
  },
};

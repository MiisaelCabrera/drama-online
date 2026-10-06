// Datos del proyecto en un solo lugar. Cambia aquí y haz push: GitHub Actions republica el sitio.
export const site = {
  name: "Fogatales",
  channels: { es: "Fogatales ES (@fogatales_es)", en: "Fogatales EN (@fogatales_en)" },
  // Correo de contacto del proyecto. Vacío = se muestra "contacto próximamente".
  // Las revisiones de Google/TikTok/Meta EXIGEN un correo real antes de enviarlas.
  contactEmail: "fogatales@gmail.com",
  lastUpdated: "2026-09-29",
} as const;

export const langs = ["es", "en"] as const;
export type Lang = (typeof langs)[number];
export const isLang = (v: string): v is Lang => (langs as readonly string[]).includes(v);

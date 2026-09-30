// Datos del proyecto en un solo lugar. Cambia aquí y haz push: GitHub Actions republica el sitio.
export const site = {
  name: "Drama Online",
  channels: { es: "Drama Online ES", en: "Drama Online EN" },
  // Correo de contacto del proyecto. Vacío = se muestra "contacto próximamente".
  // Las revisiones de Google/TikTok/Meta EXIGEN un correo real antes de enviarlas.
  contactEmail: "",
  lastUpdated: "2026-09-29",
} as const;

export const langs = ["es", "en"] as const;
export type Lang = (typeof langs)[number];
export const isLang = (v: string): v is Lang => (langs as readonly string[]).includes(v);

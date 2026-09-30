import type { NextConfig } from "next";

// Sitio 100 % estático (GitHub Pages). basePath = nombre del repo en miisaelcabrera.github.io/<repo>/
const config: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_BASE_PATH ?? "/drama-online",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default config;

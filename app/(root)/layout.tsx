import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { site } from "@/site.config";

export const metadata: Metadata = { title: site.name, description: "Historias de ficción narradas · Narrated fiction stories" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

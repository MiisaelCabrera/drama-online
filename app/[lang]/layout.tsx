import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLang, langs } from "@/site.config";

export const dynamicParams = false;
export const generateStaticParams = () => langs.map((lang) => ({ lang }));

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}

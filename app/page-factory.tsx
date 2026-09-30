// Genera cada página (inicio, privacidad, términos, borrado) para todos los idiomas.
import type { Metadata } from "next";
import { Shell } from "@/app/components";
import { pages } from "@/content/pages";
import { ui } from "@/content/ui";
import { site, type Lang } from "@/site.config";

type Key = keyof (typeof pages)["es"];
type Props = { params: Promise<{ lang: string }> };

export function makePage(key: Key, path: string) {
  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const lang = (await params).lang as Lang;
    const p = pages[lang][key];
    return { title: key === "home" ? site.name : `${p.title} · ${site.name}`, description: p.description };
  }

  async function Page({ params }: Props) {
    const lang = (await params).lang as Lang;
    const p = pages[lang][key];
    return (
      <Shell lang={lang} path={path}>
        <h1>{p.title}</h1>
        <p className="updated">{ui[lang].lastUpdated}: {site.lastUpdated}</p>
        {p.body}
      </Shell>
    );
  }

  return { Page, generateMetadata };
}

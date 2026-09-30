import Link from "next/link";
import type { ReactNode } from "react";
import { ui } from "@/content/ui";
import { langs, site, type Lang } from "@/site.config";

export function Contact({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return site.contactEmail ? (
    <>
      {t.contactLabel}: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
    </>
  ) : (
    <span className="pending">{t.contactPending}</span>
  );
}

const routes = [
  ["home", ""],
  ["privacy", "privacy/"],
  ["terms", "terms/"],
  ["deletion", "data-deletion/"],
] as const;

export function Shell({ lang, path, children }: { lang: Lang; path: string; children: ReactNode }) {
  const t = ui[lang];
  const other = langs.find((l) => l !== lang)!;
  return (
    <>
      <header>
        <Link href={`/${lang}/`} className="brand">{site.name}</Link>
        <nav>
          {routes.map(([key, p]) => (
            <Link key={key} href={`/${lang}/${p}`} aria-current={p === path ? "page" : undefined}>
              {t.nav[key]}
            </Link>
          ))}
          <Link href={`/${other}/${path}`} lang={other} className="lang">{t.otherLang}</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <span className="badge">{t.aiBadge}</span>
        <span>© {site.lastUpdated.slice(0, 4)} {site.name}</span>
      </footer>
    </>
  );
}

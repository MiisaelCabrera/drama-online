import Link from "next/link";
import { site } from "@/site.config";

export default function ChooseLanguage() {
  return (
    <main>
      <h1>{site.name}</h1>
      <p className="updated">Historias de ficción narradas · Narrated fiction stories</p>
      <div className="choose">
        <Link href="/es/" lang="es"><strong>Español</strong><span>{site.channels.es}</span></Link>
        <Link href="/en/" lang="en"><strong>English</strong><span>{site.channels.en}</span></Link>
      </div>
    </main>
  );
}

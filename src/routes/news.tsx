import { createFileRoute } from "@tanstack/react-router";
import { NEWS } from "@/lib/edukate-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — TOPCOED University" },
      { name: "description", content: "The latest research, campus stories, and announcements from TOPCOED University." },
      { property: "og:title", content: "News from TOPCOED University" },
      { property: "og:description", content: "Research breakthroughs, campus stories, and announcements." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const [featured, ...rest] = NEWS;
  return (
    <div>
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Newsroom</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            Stories from <em>campus</em> and beyond
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <article className="grid lg:grid-cols-2 gap-10 mb-16 group cursor-pointer">
          <img src={featured.image} alt={featured.title} className="rounded-2xl aspect-[4/3] object-cover w-full" />
          <div className="flex flex-col justify-center">
            <span className="text-xs text-accent font-medium uppercase tracking-widest">Featured · {featured.date}</span>
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold mt-3 tracking-tight group-hover:text-primary transition">{featured.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <span className="mt-6 text-sm font-medium text-primary">Read article →</span>
          </div>
        </article>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((n) => (
            <article key={n.slug} className="group cursor-pointer">
              <img src={n.image} alt={n.title} className="rounded-2xl aspect-[4/3] object-cover w-full" />
              <div className="pt-5">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{n.date}</span>
                <h3 className="font-serif text-xl font-semibold mt-2 leading-snug group-hover:text-primary transition">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

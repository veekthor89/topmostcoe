import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { NEWS, EVENTS } from "@/lib/edukate-data";

export const Route = createFileRoute("/news-events")({
  head: () => ({
    meta: [
      { title: "News & Events — TOPCOED" },
      { name: "description", content: "Announcements, academic updates, and everything happening at Topmost College of Education." },
      { property: "og:title", content: "News & Events at TOPCOED" },
      { property: "og:description", content: "Announcements, academic updates, and everything happening at Topmost College of Education." },
    ],
  }),
  component: NewsEventsPage,
});

type Tab = "all" | "news" | "events";

function NewsEventsPage() {
  const [tab, setTab] = useState<Tab>("all");
  const showNews = tab === "all" || tab === "news";
  const showEvents = tab === "all" || tab === "events";

  const tabs: { id: Tab; label: string }[] = [
    { id: "all", label: "All" },
    { id: "news", label: "News" },
    { id: "events", label: "Events" },
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Newsroom & Calendar</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            News & <em>Events</em> at TOPCOED
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Announcements, academic updates, and everything happening at Topmost College of Education.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition ${
                tab === t.id ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {showNews && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-8">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.map((n) => (
              <article key={n.slug} className="group cursor-pointer">
                <img src={n.image} alt={n.title} className="rounded-2xl aspect-[4/3] object-cover w-full" />
                <div className="pt-5">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{n.date}</span>
                  <h3 className="font-serif text-xl font-semibold mt-2 leading-snug group-hover:text-primary transition">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {showEvents && (
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {EVENTS.map((e) => (
              <article key={e.slug} className="grid md:grid-cols-[160px_280px_1fr] gap-6 group cursor-pointer rounded-2xl border border-border bg-card p-4 hover:border-primary transition">
                <div className="flex md:flex-col items-center md:items-start justify-center md:justify-center rounded-xl bg-primary/10 text-primary p-4">
                  <Calendar className="h-5 w-5 mb-0 md:mb-2 mr-3 md:mr-0" />
                  <span className="font-serif text-lg font-semibold leading-tight">{e.date}</span>
                </div>
                <img src={e.image} alt={e.title} className="rounded-xl aspect-[4/3] md:aspect-square object-cover w-full" />
                <div className="flex flex-col justify-center py-2 md:py-0">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" />TOPCOED Campus</span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold mt-3 tracking-tight group-hover:text-primary transition">{e.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{e.excerpt}</p>
                  <span className="mt-4 text-sm font-medium text-primary">Event details →</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

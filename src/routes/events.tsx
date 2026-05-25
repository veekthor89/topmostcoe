import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { EVENTS } from "@/lib/edukate-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — TOPCOED" },
      { name: "description", content: "Conferences, performances, competitions, and campus gatherings at TOPCOED." },
      { property: "og:title", content: "Events at TOPCOED" },
      { property: "og:description", content: "Conferences, performances, and competitions throughout the year." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Calendar</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            Upcoming <em>events</em> & activities
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-6">
          {EVENTS.map((e) => (
            <article key={e.slug} className="grid md:grid-cols-[280px_1fr] gap-6 group cursor-pointer rounded-2xl border border-border bg-card p-4 hover:border-primary transition">
              <img src={e.image} alt={e.title} className="rounded-xl aspect-[4/3] md:aspect-square object-cover w-full" />
              <div className="flex flex-col justify-center py-2 md:py-0">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 text-accent font-medium"><Calendar className="h-3.5 w-3.5" />{e.date}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />TOPCOED Campus</span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold mt-3 tracking-tight group-hover:text-primary transition">{e.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{e.excerpt}</p>
                <span className="mt-4 text-sm font-medium text-primary">Event details →</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

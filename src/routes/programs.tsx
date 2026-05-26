import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PROGRAMS, type Program } from "@/lib/edukate-data";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — TOPCOED" },
      { name: "description", content: "Browse 120+ undergraduate, graduate, professional, and online programs at TOPCOED." },
      { property: "og:title", content: "Programs at TOPCOED" },
      { property: "og:description", content: "Discover undergraduate, graduate, professional, and online programs designed for real-world success." },
    ],
  }),
  component: ProgramsPage,
});

const CATEGORIES = ["All", "Undergraduate", "Professional", "Technology", "Online"] as const;
type Cat = typeof CATEGORIES[number];

function ProgramsPage() {
  const [cat, setCat] = useState<Cat>("All");
  const list: Program[] = cat === "All" ? PROGRAMS : PROGRAMS.filter((p) => p.category === cat);

  return (
    <div>
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Academics</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            Find the programme<br />built for your path.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed whitespace-pre-line">
            Whether you're a school leaver, a working professional, or a healthcare {"\n"}
            practitioner seeking a teaching qualification Topmost College of Education offers an accredited programme designed specifically for you.{"\n"}
            All programmes are TRCN-recognised and nationally approved.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition border ${
                cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <Link key={p.slug} to="/programs/$slug" params={{ slug: p.slug }} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{p.category}</span>
                <h3 className="font-serif text-xl font-semibold mt-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">View program <ChevronRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

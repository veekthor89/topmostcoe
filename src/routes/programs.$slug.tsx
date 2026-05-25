import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, GraduationCap } from "lucide-react";
import { PROGRAMS } from "@/lib/edukate-data";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = PROGRAMS.find((p) => p.slug === params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.program.title} — Edukate University` },
          { name: "description", content: loaderData.program.blurb },
          { property: "og:title", content: `${loaderData.program.title} — Edukate University` },
          { property: "og:description", content: loaderData.program.blurb },
          { property: "og:image", content: loaderData.program.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-4xl font-semibold">Program not found</h1>
      <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-primary">← All programs</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
    </div>
  ),
  component: ProgramDetail,
});

function ProgramDetail() {
  const { program } = Route.useLoaderData();

  return (
    <article>
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
          <ArrowLeft className="h-4 w-4" /> Back to programs
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">{program.category}</span>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold mt-4 tracking-tight leading-[1.05]">{program.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{program.blurb}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Clock, l: "Duration", v: "4 Years" },
              { icon: Calendar, l: "Intake", v: "Spring 2025" },
              { icon: GraduationCap, l: "Degree", v: program.category },
            ].map((f) => (
              <div key={f.l} className="rounded-xl border border-border p-4">
                <f.icon className="h-4 w-4 text-accent" />
                <div className="mt-2 text-xs text-muted-foreground">{f.l}</div>
                <div className="text-sm font-semibold mt-0.5">{f.v}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition">
            Apply for this program
          </Link>
        </div>
        <img src={program.image} alt={program.title} className="rounded-2xl aspect-[4/3] object-cover w-full" />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 prose prose-neutral">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">About the program</h2>
        <p className="text-muted-foreground leading-relaxed mt-4">
          {program.title} at TOPCOED University combines rigorous theory with hands-on practice. You'll work alongside award-winning faculty, collaborate with peers from 50+ countries, and graduate with a portfolio that opens doors at leading employers worldwide.
        </p>
        <h3 className="font-serif text-2xl font-semibold tracking-tight mt-10">What you'll learn</h3>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li className="flex gap-3"><span className="text-accent">→</span> Core foundations covered across the first two years</li>
          <li className="flex gap-3"><span className="text-accent">→</span> Specialization tracks in years three and four</li>
          <li className="flex gap-3"><span className="text-accent">→</span> Capstone project with industry or research partners</li>
          <li className="flex gap-3"><span className="text-accent">→</span> Career coaching and global internship placement</li>
        </ul>
      </section>
    </article>
  );
}

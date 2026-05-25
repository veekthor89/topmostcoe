import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe, Users, BookOpen, ChevronRight } from "lucide-react";
import { PROGRAMS, NEWS, EVENTS, STATS } from "@/lib/edukate-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOPCOED — Your Journey Begins Here" },
      { name: "description", content: "Discover undergraduate, graduate, and online programs at TOPCOED. Empowering 42,000+ students from 50+ countries." },
      { property: "og:title", content: "TOPCOED — Your Journey Begins Here" },
      { property: "og:description", content: "World-class education, global community, and a tradition of excellence." },
      { property: "og:image", content: "https://framerusercontent.com/images/rrMnWG3fE8i7781QrGikDFsyhNg.png" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = PROGRAMS.slice(0, 4);
  const latestNews = NEWS.slice(0, 3);
  const upcomingEvents = EVENTS.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
              Trusted by 42,000+ students
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl font-semibold tracking-tight mt-6 leading-[1.05]">
              Your Journey<br/>Begins at <em className="text-primary">TOPCOED</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              For 130+ years, we've prepared curious minds for a changing world.
              Choose from 120+ programs across our four schools and join a global community of doers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition">
                Apply for Spring 2025 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/programs" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:border-primary transition">
                Browse programs
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://framerusercontent.com/images/rrMnWG3fE8i7781QrGikDFsyhNg.png" alt="Campus life" className="rounded-2xl aspect-[3/4] object-cover w-full" />
              <div className="space-y-4 pt-12">
                <img src="https://framerusercontent.com/images/Pu3AWXkoL923GNTuKAI4BLH3eI.png" alt="Students collaborating" className="rounded-2xl aspect-square object-cover w-full" />
                <img src="https://framerusercontent.com/images/nroVYM3DilNq9iycRfWWilYrfE.png" alt="Lecture" className="rounded-2xl aspect-[3/4] object-cover w-full" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-lg border border-border p-4 flex items-center gap-3 max-w-xs">
              <div className="h-10 w-10 rounded-full bg-accent grid place-items-center"><Award className="h-5 w-5 text-accent-foreground" /></div>
              <div className="text-sm"><div className="font-semibold">Top 5</div><div className="text-muted-foreground text-xs">National Innovation Ranking</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl md:text-5xl font-semibold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <img src="https://framerusercontent.com/images/Rm3kw04I228nOhAb46Dgmagv3OE.png" alt="Library" className="rounded-2xl w-full aspect-[4/3] object-cover" />
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">About TOPCOED</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold mt-3 tracking-tight">Innovative Education for Global Impact</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At TOPCOED, we are committed to delivering an education that prepares students for the challenges of a rapidly changing world. TOPCOED stands for academic excellence, original research, and a community where every student belongs.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {[
              { icon: Award, label: "Top 5 National Innovation Ranking" },
              { icon: BookOpen, label: "20+ Research Centers" },
              { icon: Globe, label: "50+ Countries Represented" },
              { icon: Users, label: "25,000+ Students Enrolled" },
            ].map((f) => (
              <div key={f.label} className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-secondary grid place-items-center shrink-0"><f.icon className="h-4 w-4 text-primary" /></div>
                <span className="text-sm">{f.label}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            Read more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-accent">Academics</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-semibold mt-3 tracking-tight">Our Academic Programs</h2>
            </div>
            <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">View all programs <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <Link key={p.slug} to="/programs/$slug" params={{ slug: p.slug }} className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary transition">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-muted-foreground">{p.category}</span>
                  <h3 className="font-serif text-lg font-semibold mt-1 leading-snug">{p.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">Explore <ChevronRight className="h-3 w-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News + Events */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl font-semibold">Latest News</h2>
            <Link to="/news" className="text-sm text-primary font-medium">All news →</Link>
          </div>
          <div className="space-y-5">
            {latestNews.map((n) => (
              <Link key={n.slug} to="/news" className="flex gap-4 group">
                <img src={n.image} alt={n.title} className="h-24 w-32 rounded-xl object-cover shrink-0" />
                <div>
                  <div className="text-xs text-muted-foreground">{n.date}</div>
                  <div className="font-serif text-lg font-semibold mt-1 group-hover:text-primary transition">{n.title}</div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl font-semibold">Upcoming Events</h2>
            <Link to="/events" className="text-sm text-primary font-medium">All events →</Link>
          </div>
          <div className="space-y-5">
            {upcomingEvents.map((e) => (
              <Link key={e.slug} to="/events" className="flex gap-4 group">
                <img src={e.image} alt={e.title} className="h-24 w-32 rounded-xl object-cover shrink-0" />
                <div>
                  <div className="text-xs text-accent font-medium">{e.date}</div>
                  <div className="font-serif text-lg font-semibold mt-1 group-hover:text-primary transition">{e.title}</div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{e.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-12 lg:p-20 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight">Ready to begin your journey?</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-md">Join a vibrant community of thinkers, creators, and leaders. Applications open for Spring 2025.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:bg-accent/90 transition">
              Apply for Spring 2025 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="hidden lg:block relative h-64">
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              <img src="https://framerusercontent.com/images/7cPJ5EciFsRzDDJZK2TJu7Qctro.png" alt="" className="rounded-2xl object-cover h-full w-full" />
              <img src="https://framerusercontent.com/images/HmFELP6MermaGIGefLN5WtCQco.png" alt="" className="rounded-2xl object-cover h-full w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

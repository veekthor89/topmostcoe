import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe, Users, BookOpen, ChevronRight } from "lucide-react";
import { PROGRAMS, NEWS, EVENTS, STATS } from "@/lib/edukate-data";
import heroImage from "@/assets/hero-image.jpg";
import secondaryImage from "@/assets/secondary-image.jpg";
import lectureImage from "@/assets/lecture.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOPCOED — Train. Qualify. Teach with Purpose" },
      { name: "description", content: "Topmost College of Education prepares the next generation of Nigerian teachers through accredited degree, diploma, and professional programmes." },
      { property: "og:title", content: "TOPCOED — Train. Qualify. Teach with Purpose" },
      { property: "og:description", content: "Topmost College of Education prepares the next generation of Nigerian teachers through accredited degree, diploma, and professional programmes." },
      { property: "og:image", content: heroImage },
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
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
              Apply for 2025/2026 Session
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl font-semibold tracking-tight mt-6 leading-[1.05] whitespace-pre-line">
              Train. Qualify{"\n"}Teach with Purpose
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Topmost College of Education prepares the next generation of Nigerian teachers 
              through accredited degree, diploma, and professional programmes - right in the heart of Lagos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition">
                Apply for 2025/2026 Session →
              </Link>
              <Link to="/programs" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:border-primary transition">
                Apply for 2025/2026 Session →
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={heroImage} alt="Campus life" className="rounded-2xl aspect-[3/4] object-cover w-full" />
              <div className="space-y-4 pt-12">
                <img src={secondaryImage} alt="Students collaborating" className="rounded-2xl aspect-square object-cover w-full" />
                <img src={lectureImage} alt="Lecture" className="rounded-2xl aspect-[3/4] object-cover w-full" />
              </div>
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
            <p className="mt-4 text-primary-foreground/80 max-w-md">Join a vibrant community of thinkers, creators, and leaders. Applications open for 2025/2026 Session.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:bg-accent/90 transition">
              Apply for 2025/2026 Session →
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
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { STATS } from "@/lib/edukate-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Topmost College of Education" },
      { name: "description", content: "Training Nigeria's teachers for over two decades. Topmost College of Education is a Federal Government-approved institution accredited by the TRCN." },
      { property: "og:title", content: "About TOPCOED" },
      { property: "og:description", content: "Empowering futures through academic excellence and innovation." },
      { property: "og:image", content: "https://framerusercontent.com/images/Rm3kw04I228nOhAb46Dgmagv3OE.png" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">About TOPCOED</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            Training Nigeria's teachers<br />for over two decades.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Topmost College of Education is a Federal Government-approved institution<br />in Ipaja, Lagos accredited by the Teachers Registration Council of Nigeria<br />and affiliated with Lagos State University, Ojo. We exist for one purpose:<br />to produce qualified, licensed, and capable educators for Nigerian classrooms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <img src="https://framerusercontent.com/images/Rm3kw04I228nOhAb46Dgmagv3OE.png" alt="Campus" className="rounded-2xl aspect-[4/3] object-cover w-full" />
        <div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight">Our mission</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We exist to prepare students for the challenges of a rapidly changing world. Every program is built on three commitments: rigorous academics, original research, and a learning community where every student belongs.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We measure success by the impact our graduates make — in industry, in research labs, and in the communities they call home.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-5xl font-semibold text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight max-w-2xl">What guides us</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { t: "Academic Excellence", d: "Faculty drawn from the world's leading institutions, ranked top-5 nationally for innovation." },
            { t: "Global Perspective", d: "Students from 50+ countries learn alongside one another in every classroom and lab." },
            { t: "Real-World Impact", d: "20+ research centers translate scholarship into industry, policy, and community outcomes." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-8">
              <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground grid place-items-center font-serif font-semibold">{v.t[0]}</div>
              <h3 className="font-serif text-xl font-semibold mt-5">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/programs" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition">
            Apply for 2025/2026 Session →
          </Link>
        </div>
      </section>
    </div>
  );
}

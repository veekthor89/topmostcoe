import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Briefcase } from "lucide-react";
import { STATS } from "@/lib/edukate-data";
import graduateCap from "@/assets/graduate-cap.png";
import documentationIcon from "@/assets/documentation.png";
import handshakeIcon from "@/assets/handshake.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Topmost College of Education" },
      { name: "description", content: "Training Nigeria's teachers for over two decades. Topmost College of Education is a Federal Government-approved institution accredited by the TRCN." },
      { property: "og:title", content: "About TOPCOED" },
      { property: "og:description", content: "Empowering futures through academic excellence and innovation." },
      { property: "og:image", content: "/about-campus.jpg" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">About Topmost</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            Training Nigeria's teachers<br />for over two decades.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Topmost College of Education is a Federal Government-approved institution<br />in Ipaja, Lagos accredited by the Teachers Registration Council of Nigeria<br />and affiliated with Lagos State University, Ojo. We exist for one purpose:<br />to produce qualified, licensed, and capable educators for Nigerian classrooms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <img src="/about-campus.jpg" alt="Campus" className="rounded-2xl aspect-[4/3] object-cover w-full" />
        <div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight">Our mission</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed whitespace-pre-line">
            At Topmost College of Education, our mission is straightforward:
            to provide accessible, accredited, and practical teacher-training
            programmes that prepare every student to meet the standards
            required by the Teachers Registration Council of Nigeria.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
            We measure our success not by rankings but by how many of our
            graduates are standing in classrooms across Nigeria, teaching legally,
            confidently, and effectively.
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
            { t: "Accreditation First", d: "Every programme we offer is backed by formal accreditation TRCN, LASU, NMC, and FGN. Your qualification means something \nwhen it comes from Topmost.", icon: "cap" as const },
            { t: "Practical Teacher Training", d: "We don't just teach we prepare. Our programmes are structured around Nigeria's classroom realities, TRCN examination requirements, and the demands of modern school administration.", icon: "globe" as const },
            { t: "Accessible to All", d: "From school leavers to working nurses, from fresh NCE students to experienced professionals our flexible full-time and part-time options are designed to meet you where you are.", icon: "briefcase" as const },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-8">
              <div className="h-12 w-12 grid place-items-center">
                {v.icon === "cap" ? (
                  <img src={graduateCap} alt="" className="h-full w-full object-contain" />
                ) : v.icon === "globe" ? (
                  <img src={documentationIcon} alt="" className="h-full w-full object-contain" />
                ) : (
                  <Briefcase className="h-8 w-8 text-accent" strokeWidth={1.5} />
                )}
              </div>
              <h3 className="font-serif text-xl font-semibold mt-5">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{v.d}</p>
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

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SITE } from "@/lib/edukate-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TOPCOED" },
      { name: "description", content: "Get in touch with TOPCOED admissions, faculty, or campus services." },
      { property: "og:title", content: "Contact TOPCOED" },
      { property: "og:description", content: "Reach our admissions and student services teams." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Get in touch</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            Let's start a <em>conversation</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Whether you're applying, exploring research partnerships, or just curious — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div className="space-y-6">
          {[
            { icon: Phone, l: "Phone", v: SITE.phone, href: `tel:${SITE.phone}` },
            { icon: Mail, l: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MapPin, l: "Visit us", v: SITE.address },
          ].map((c) => (
            <a key={c.l} href={c.href ?? "#"} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary transition">
              <div className="h-11 w-11 rounded-full bg-secondary grid place-items-center shrink-0"><c.icon className="h-5 w-5 text-primary" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.l}</div>
                <div className="font-serif text-lg font-semibold mt-1">{c.v}</div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-8 space-y-5"
        >
          <h2 className="font-serif text-2xl font-semibold">Send a message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="First name" name="first" />
            <Field label="Last name" name="last" />
          </div>
          <Field label="Email" name="email" type="email" />
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Message</label>
            <textarea required rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition">
            {sent ? "Sent — we'll be in touch" : <>Send message <Send className="h-4 w-4" /></>}
          </button>
        </form>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input id={name} name={name} type={type} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
    </div>
  );
}

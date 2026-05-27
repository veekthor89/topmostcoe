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
          <Field label="Full Name" name="fullName" />
          <Field label="Phone Number" name="phone" type="tel" />
          <Field label="Email" name="email" type="email" />
          <div>
            <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Subject</label>
            <select id="subject" name="subject" required defaultValue="" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition">
              <option value="" disabled>Select a subject</option>
              <option value="admission">Admission Enquiry</option>
              <option value="programme">Programme Information</option>
              <option value="trcn">TRCN CBT / PQEI</option>
              <option value="nabteb">NABTEB Registration</option>
              <option value="fees">Fees & Payment</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Message</label>
            <textarea id="message" name="message" required rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition">
            {sent ? "Sent — we'll be in touch" : <>Send message <Send className="h-4 w-4" /></>}
          </button>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Or reach us faster on WhatsApp:</p>
            <a
              href="https://wa.me/2348037204088"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#1ebe5d] transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
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

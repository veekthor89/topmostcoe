import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply Now — Topmost College of Education (TOPCOED)" },
      { name: "description", content: "Apply for the 2025/2026 academic session at Topmost College of Education. TRCN-accredited and LASU-affiliated programmes in Ipaja, Lagos." },
      { property: "og:title", content: "Apply Now — Topmost College of Education (TOPCOED)" },
      { property: "og:description", content: "Apply for the 2025/2026 academic session at Topmost College of Education. TRCN-accredited and LASU-affiliated programmes in Ipaja, Lagos." },
    ],
  }),
  component: ApplyPage,
});

const PROGRAMMES = [
  "B.Sc Education — Sciences (LASU Sandwich)",
  "B.A Education — Arts & Humanities (LASU Sandwich)",
  "B.Ed — Early Childhood & Primary Education",
  "B.Ed — Educational Management & Guidance",
  "NCE — School of Sciences",
  "NCE — Arts & Social Sciences",
  "NCE — School of Education",
  "NCE — Vocational & Technical Education",
  "NCE — Languages",
  "Professional Diploma in Education (PDE)",
  "NABTEB O Level — NBC & NTC",
  "NABTEB A Level — General Education",
];

const QUALIFICATIONS = [
  "WAEC/SSCE", "NECO", "GCE", "NCE", "OND", "HND",
  "B.Sc / B.A / B.Ed", "M.Sc / MBA", "Other",
];

const HEAR_ABOUT = ["WhatsApp", "Facebook", "Google Search", "Friend or Family", "Physical Flyer", "Other"];

function ApplyPage() {
  const [submitted, setSubmitted] = useState<{ fullName: string; phone: string } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitted({
      fullName: String(data.get("fullName") ?? ""),
      phone: String(data.get("phone") ?? ""),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Admissions</span>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            Apply to Topmost College of Education
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Complete the form below to apply for the 2025/2026 academic session. All fields marked <span className="text-accent">*</span> are required.
            After submission, our admissions team will contact you within 2 working days.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1.6fr_1fr] gap-10">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-serif text-2xl font-semibold text-primary">Application received</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Thank you, <strong>{submitted.fullName}</strong>. Your application has been received.
                Our admissions team will contact you on <strong>{submitted.phone}</strong> within 2 working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-10">
              {/* Section 1 */}
              <Section title="Personal Information">
                <div className="grid md:grid-cols-2 gap-5">
                  <Text name="fullName" label="Full Name" required className="md:col-span-2" />
                  <Text name="dob" label="Date of Birth" type="date" required />
                  <Select name="gender" label="Gender" required options={["Male", "Female"]} />
                  <Select name="maritalStatus" label="Marital Status" options={["Single", "Married", "Other"]} />
                  <Text name="phone" label="Phone Number" type="tel" required />
                  <Text name="whatsapp" label="WhatsApp Number" type="tel" placeholder="If different from phone number" />
                  <Text name="email" label="Email Address" type="email" />
                  <Textarea name="address" label="Home Address" rows={2} required className="md:col-span-2" />
                  <Text name="state" label="State of Origin" required />
                  <Text name="lga" label="LGA" />
                </div>
              </Section>

              <Divider />

              {/* Section 2 */}
              <Section title="Academic Background">
                <div className="grid md:grid-cols-2 gap-5">
                  <Select name="qualification" label="Highest Qualification" required options={QUALIFICATIONS} className="md:col-span-2" />
                  <Text name="institution" label="Institution Last Attended" required />
                  <Text name="gradYear" label="Year of Graduation" />
                </div>
              </Section>

              <Divider />

              {/* Section 3 */}
              <Section title="Programme Selection">
                <div className="grid md:grid-cols-2 gap-5">
                  <Select name="programme" label="Programme Applying For" required options={PROGRAMMES} className="md:col-span-2" />
                  <Select name="studyMode" label="Preferred Study Mode" required options={["Full-Time", "Part-Time", "Evening Classes"]} />
                  <Text name="specialisation" label="Subject Combination or Specialisation" placeholder="e.g. Biology/Mathematics or Early Childhood Education — if applicable" />
                </div>
              </Section>

              <Divider />

              {/* Section 4 */}
              <Section title="Additional Information">
                <div className="space-y-5">
                  <RadioGroup name="trcn" label="Do you currently hold a TRCN licence?" required options={["Yes", "No", "In Progress"]} />
                  <Select name="hearAbout" label="How did you hear about us?" options={HEAR_ABOUT} />
                  <Textarea name="message" label="Additional Message or Questions" rows={4} placeholder="Any other information you'd like us to know" />
                </div>
              </Section>

              {/* Submit */}
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#16a34a] text-white px-6 py-4 text-base font-medium hover:bg-[#15803d] transition"
                >
                  Submit Application →
                </button>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  By submitting this form, you agree to be contacted by Topmost College of Education regarding your application.
                  Application forms are sold for ₦10,400 — payment details will be sent to you after submission.
                </p>
                <p className="text-sm">
                  Prefer to apply in person?{" "}
                  <a
                    href="https://wa.me/2348037204088"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#16a34a] font-medium hover:underline"
                  >
                    WhatsApp us to schedule a visit →
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Aside */}
        <aside className="lg:sticky lg:top-24 lg:self-start space-y-5">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-xl font-semibold">Need help applying?</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>📞 Call us: <a href="tel:08037204088" className="text-foreground hover:text-primary">08037204088</a></p>
              <p>📞 <a href="tel:08033183854" className="text-foreground hover:text-primary">08033183854</a></p>
              <p>💬 WhatsApp: <a href="https://wa.me/2348037204088" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">wa.me/2348037204088</a></p>
              <p>✉ <a href="mailto:topcoed@yahoo.com" className="text-foreground hover:text-primary">topcoed@yahoo.com</a></p>
            </div>
            <div className="mt-5 pt-5 border-t border-border text-sm">
              <p className="font-medium text-foreground">Office Hours:</p>
              <p className="text-muted-foreground mt-1">Mon – Fri: 8:00am – 5:00pm<br />Sat: 9:00am – 2:00pm</p>
            </div>
            <div className="mt-5 pt-5 border-t border-border text-sm">
              <p className="font-medium text-foreground">Admissions Office:</p>
              <p className="text-muted-foreground mt-1">12/13 Alaja Browne Close,<br />Olude Bus Stop, Ipaja, Lagos.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 text-xs text-muted-foreground leading-relaxed">
            ⚠ Please note: It is now illegal for any person without a recognised teaching qualification to teach in any Nigerian primary or secondary school — TRCN Act 31 of 1993. We can help you get qualified.
          </div>
        </aside>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-xl font-semibold mb-5">{title}</h2>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="border-t border-border" />;
}

const labelCls = "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2";
const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive";

function Text({ name, label, type = "text", required, placeholder, className = "" }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelCls}>{label}{required && <span className="text-accent"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder ?? " "} className={inputCls} />
    </div>
  );
}

function Textarea({ name, label, rows = 3, required, placeholder, className = "" }: { name: string; label: string; rows?: number; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelCls}>{label}{required && <span className="text-accent"> *</span>}</label>
      <textarea id={name} name={name} rows={rows} required={required} placeholder={placeholder} className={inputCls} />
    </div>
  );
}

function Select({ name, label, options, required, className = "" }: { name: string; label: string; options: readonly string[]; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelCls}>{label}{required && <span className="text-accent"> *</span>}</label>
      <select id={name} name={name} required={required} defaultValue="" className={inputCls}>
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function RadioGroup({ name, label, options, required }: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <span className={labelCls}>{label}{required && <span className="text-accent"> *</span>}</span>
      <div className="flex flex-wrap gap-3">
        {options.map((o) => (
          <label key={o} className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm cursor-pointer hover:border-primary transition">
            <input type="radio" name={name} value={o} required={required} className="accent-primary" />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

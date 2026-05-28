import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, AlertTriangle, CheckCircle2 } from "lucide-react";

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

const QUALIFICATIONS = ["WAEC/SSCE", "NECO", "GCE", "NCE", "OND", "HND", "B.Sc / B.A / B.Ed", "M.Sc / MBA", "Other"];
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
const REFERRALS = ["WhatsApp", "Facebook", "Google Search", "Friend or Family", "Physical Flyer", "Other"];

type FormState = {
  fullName: string; dob: string; gender: string; marital: string;
  phone: string; whatsapp: string; email: string; address: string;
  state: string; lga: string;
  qualification: string; institution: string; gradYear: string;
  programme: string; mode: string; specialisation: string;
  trcn: string; referral: string; additional: string;
};

const INITIAL: FormState = {
  fullName: "", dob: "", gender: "", marital: "", phone: "", whatsapp: "",
  email: "", address: "", state: "", lga: "", qualification: "",
  institution: "", gradYear: "", programme: "", mode: "", specialisation: "",
  trcn: "", referral: "", additional: "",
};

const REQUIRED: (keyof FormState)[] = [
  "fullName", "dob", "gender", "phone", "address", "state",
  "qualification", "institution", "programme", "mode", "trcn",
];

function ApplyPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState<{ fullName: string; phone: string } | null>(null);

  const update = (k: keyof FormState) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof FormState, string>> = {};
    REQUIRED.forEach((k) => { if (!form[k].trim()) errs[k] = "This field is required"; });
    if (Object.keys(errs).length) {
      setErrors(errs);
      const first = document.querySelector<HTMLElement>(`[data-field="${Object.keys(errs)[0]}"]`);
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted({ fullName: form.fullName, phone: form.phone });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Admissions</span>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold mt-4 tracking-tight max-w-4xl leading-[1.05]">
            Apply to Topmost College of Education
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Complete the form below to apply for the 2025/2026 academic session. All fields marked * are required. After submission, our admissions team will contact you within 2 working days.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1.6fr_1fr] gap-10">
        {/* Form / Success */}
        <div>
          {submitted ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-[#25D366]/10 grid place-items-center">
                <CheckCircle2 className="h-7 w-7 text-[#25D366]" />
              </div>
              <h2 className="font-serif text-3xl font-semibold mt-6">Application received</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Thank you, {submitted.fullName}. Your application has been received. Our admissions team will contact you on {submitted.phone} within 2 working days.
              </p>
              <a
                href="https://wa.me/2348037204088"
                target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#1ebe5d] transition"
              >
                Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 lg:p-10 space-y-10">
              {/* Section 1 */}
              <Section title="Personal Information">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input label="Full Name" name="fullName" required value={form.fullName} onChange={update("fullName")} error={errors.fullName} className="md:col-span-2" />
                  <Input label="Date of Birth" name="dob" type="date" required value={form.dob} onChange={update("dob")} error={errors.dob} />
                  <Select label="Gender" name="gender" required value={form.gender} onChange={update("gender")} error={errors.gender} options={["Male", "Female"]} />
                  <Select label="Marital Status" name="marital" value={form.marital} onChange={update("marital")} options={["Single", "Married", "Other"]} />
                  <Input label="Phone Number" name="phone" type="tel" required value={form.phone} onChange={update("phone")} error={errors.phone} />
                  <Input label="WhatsApp Number" name="whatsapp" type="tel" value={form.whatsapp} onChange={update("whatsapp")} placeholder="If different from phone number" />
                  <Input label="Email Address" name="email" type="email" value={form.email} onChange={update("email")} />
                  <Textarea label="Home Address" name="address" required rows={2} value={form.address} onChange={update("address")} error={errors.address} className="md:col-span-2" />
                  <Input label="State of Origin" name="state" required value={form.state} onChange={update("state")} error={errors.state} />
                  <Input label="LGA" name="lga" value={form.lga} onChange={update("lga")} />
                </div>
              </Section>

              <Divider />

              {/* Section 2 */}
              <Section title="Academic Background">
                <div className="grid md:grid-cols-2 gap-5">
                  <Select label="Highest Qualification" name="qualification" required value={form.qualification} onChange={update("qualification")} error={errors.qualification} options={QUALIFICATIONS} className="md:col-span-2" />
                  <Input label="Institution Last Attended" name="institution" required value={form.institution} onChange={update("institution")} error={errors.institution} />
                  <Input label="Year of Graduation" name="gradYear" value={form.gradYear} onChange={update("gradYear")} />
                </div>
              </Section>

              <Divider />

              {/* Section 3 */}
              <Section title="Programme Selection">
                <div className="grid md:grid-cols-2 gap-5">
                  <Select label="Programme Applying For" name="programme" required value={form.programme} onChange={update("programme")} error={errors.programme} options={PROGRAMMES} className="md:col-span-2" />
                  <Select label="Preferred Study Mode" name="mode" required value={form.mode} onChange={update("mode")} error={errors.mode} options={["Full-Time", "Part-Time", "Evening Classes"]} />
                  <Input label="Subject Combination or Specialisation" name="specialisation" value={form.specialisation} onChange={update("specialisation")} placeholder="e.g. Biology/Mathematics or Early Childhood Education — if applicable" />
                </div>
              </Section>

              <Divider />

              {/* Section 4 */}
              <Section title="Additional Information">
                <div className="space-y-5">
                  <div data-field="trcn">
                    <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Do you currently hold a TRCN licence? <span className="text-accent">*</span></label>
                    <div className="flex flex-wrap gap-3">
                      {["Yes", "No", "In Progress"].map((opt) => (
                        <label key={opt} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm cursor-pointer transition ${form.trcn === opt ? "border-primary bg-primary/5 text-primary" : "border-border bg-background hover:border-primary/50"}`}>
                          <input type="radio" name="trcn" value={opt} checked={form.trcn === opt} onChange={() => update("trcn")(opt)} className="sr-only" />
                          {opt}
                        </label>
                      ))}
                    </div>
                    {errors.trcn && <p className="mt-2 text-xs text-destructive">{errors.trcn}</p>}
                  </div>
                  <Select label="How did you hear about us?" name="referral" value={form.referral} onChange={update("referral")} options={REFERRALS} />
                  <Textarea label="Additional Message or Questions" name="additional" rows={4} value={form.additional} onChange={update("additional")} placeholder="Any other information you'd like us to know" />
                </div>
              </Section>

              {/* Submit */}
              <div className="pt-2 space-y-4">
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-base font-medium hover:bg-primary/90 transition">
                  Submit Application →
                </button>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  By submitting this form, you agree to be contacted by Topmost College of Education regarding your application. Application forms are sold for ₦10,400 — payment details will be sent to you after submission.
                </p>
                <p className="text-sm">
                  Prefer to apply in person?{" "}
                  <a href="https://wa.me/2348037204088" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium hover:underline">
                    WhatsApp us to schedule a visit →
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Aside */}
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-xl font-semibold">Need help applying?</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="tel:08037204088" className="hover:text-primary transition">Call us: 08037204088</a></li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="tel:08033183854" className="hover:text-primary transition">08033183854</a></li>
              <li className="flex items-start gap-3">
                <svg className="h-4 w-4 mt-0.5 text-[#25D366] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                <a href="https://wa.me/2348037204088" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">WhatsApp: wa.me/2348037204088</a>
              </li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="mailto:topcoed@yahoo.com" className="hover:text-primary transition">topcoed@yahoo.com</a></li>
            </ul>
            <div className="mt-6 pt-5 border-t border-border">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Office Hours</div>
              <p className="mt-2 text-sm">Mon – Fri: 8:00am – 5:00pm<br />Sat: 9:00am – 2:00pm</p>
            </div>
            <div className="mt-6 pt-5 border-t border-border">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Admissions Office</div>
              <p className="mt-2 text-sm flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />12/13 Alaja Browne Close, Olude Bus Stop, Ipaja, Lagos.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-foreground/80">
              Please note: It is now illegal for any person without a recognised teaching qualification to teach in any Nigerian primary or secondary school — TRCN Act 31 of 1993. We can help you get qualified.
            </p>
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

const fieldBase = "w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none transition";
const fieldOk = "border-border focus:border-primary";
const fieldErr = "border-destructive focus:border-destructive";

function Input({ label, name, value, onChange, type = "text", required, placeholder, error, className }: {
  label: string; name: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; placeholder?: string; error?: string; className?: string;
}) {
  return (
    <div className={className} data-field={name}>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input id={name} name={name} type={type} value={value} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldBase} ${error ? fieldErr : fieldOk}`} />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Textarea({ label, name, value, onChange, rows = 3, required, placeholder, error, className }: {
  label: string; name: string; value: string; onChange: (v: string) => void;
  rows?: number; required?: boolean; placeholder?: string; error?: string; className?: string;
}) {
  return (
    <div className={className} data-field={name}>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea id={name} name={name} rows={rows} value={value} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldBase} ${error ? fieldErr : fieldOk}`} />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({ label, name, value, onChange, options, required, error, className }: {
  label: string; name: string; value: string; onChange: (v: string) => void;
  options: string[]; required?: boolean; error?: string; className?: string;
}) {
  return (
    <div className={className} data-field={name}>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <select id={name} name={name} value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldBase} ${error ? fieldErr : fieldOk}`}>
        <option value="" disabled>Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

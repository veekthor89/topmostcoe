import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/edukate-data";
import logo from "@/assets/topcoed-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/news", label: "News" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <span className="font-serif italic">{SITE.tagline}</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 hover:text-accent transition"><Phone className="h-3 w-3" />{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-accent transition"><Mail className="h-3 w-3" />{SITE.email}</a>
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" />{SITE.address}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Topmost College of Education" className="h-10 w-auto" />
          <span className="font-serif text-xl font-semibold tracking-tight">{SITE.name}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition" activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition">
            Apply Now
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm font-medium py-1" activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium">
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

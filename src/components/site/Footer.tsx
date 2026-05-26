import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/edukate-data";
import logo from "@/assets/topcoed-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Topmost College of Education" className="h-10 w-auto" />
            <span className="font-serif text-xl font-semibold">{SITE.name}</span>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
            Empowering educators across Nigeria.{"\n"}Accredited. Affiliated. Trusted.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-primary-foreground/60">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
            <li><Link to="/programs" className="hover:text-accent transition">Programs</Link></li>
            <li><Link to="/news" className="hover:text-accent transition">News</Link></li>
            <li><Link to="/events" className="hover:text-accent transition">Events</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-primary-foreground/60">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" />{SITE.phone}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" />{SITE.email}</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />{SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} VANNI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

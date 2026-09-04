import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/aquatru-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-input bg-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={logo.url} alt="MENA AQUA Tru" loading="lazy" className="h-7 w-auto sm:h-8" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Whole house water solutions for UAE homes and businesses — engineered, installed and
            maintained by certified specialists since 2012.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-input text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/book", label: "Book Appointment" },
              { to: "/faq", label: "FAQ" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> +971 4 555 0123
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> +971 50 555 0123 (WhatsApp)
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> care@menaaquatru.ae
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Warehouse 12, Al Quoz 3, Dubai, UAE
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Working Hours</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Sat – Thu: 8:00 AM – 8:00 PM
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Friday: 2:00 PM – 8:00 PM
            </li>
            <li className="rounded-xl border border-input bg-secondary/40 p-3 text-xs leading-relaxed">
              Emergency support line answered 24/7 for AMC and commercial clients.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-input">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 MENA AQUA Tru Water Solutions LLC. All rights reserved.</p>
          <p>Dubai Municipality Approved · ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
}

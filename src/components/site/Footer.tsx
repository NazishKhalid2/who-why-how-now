import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/aquatru-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-input bg-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={logo.url} alt="MENA AQUA Tru" loading="lazy" className="h-7 w-auto sm:h-8" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Water filtration, softening and purification systems for homes and businesses in the UAE.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
            Quick Links
          </h3>
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
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 050-7183290
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 050-7183290
              (WhatsApp)
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> sales.aquatru@gmail.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Al Muteena, Deira, Dubai, United Arab Emirates
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
            Working Hours
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Open 7 days a week
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              8:00 AM - 9:00 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-input">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 MENA AQUA Tru Water Solutions LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

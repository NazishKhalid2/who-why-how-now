import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, CalendarClock, FlaskConical, Hammer, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, CTABanner } from "@/components/site/Shared";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — AquaPure UAE" },
      {
        name: "description",
        content:
          "Installation, annual maintenance (AMC), water testing and repairs — certified water specialists covering all emirates.",
      },
      { property: "og:title", content: "Services — AquaPure UAE" },
      { property: "og:description", content: "Installation, AMC plans, water testing and repairs across the UAE." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    icon: Wrench,
    title: "Installation",
    desc: "Certified technicians install under-sink, whole-house and commercial systems — commissioned, tested and explained before we leave. Most residential installs finish in a single visit.",
    points: ["Next-day appointments", "Tidy, guaranteed workmanship", "Post-install water test included"],
  },
  {
    icon: CalendarClock,
    title: "Maintenance & AMC Plans",
    desc: "Annual contracts that keep your system at peak performance without you lifting a finger. We track filter life, schedule visits and sanitize the full system.",
    points: ["Scheduled filter & membrane changes", "Full-system sanitization", "Priority 24/7 emergency line"],
  },
  {
    icon: FlaskConical,
    title: "Water Testing",
    desc: "On-site TDS, chlorine and hardness testing with a clear written report — free with every consultation, and available as a standalone service for facilities.",
    points: ["On-site digital testing", "Lab sampling for commercial clients", "Honest, obligation-free advice"],
  },
  {
    icon: Hammer,
    title: "Repairs & Upgrades",
    desc: "Leaks, low pressure, strange taste — we repair all major brands, not just our own. Genuine parts from our Al Quoz warehouse, fitted by specialists.",
    points: ["All brands serviced", "Genuine spare parts", "Same-day dispatch in Dubai & Sharjah"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-underwater px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-drift" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Services</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            We solve the problem — and keep it solved
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            A purification system is only as good as its maintenance. That's why our service team is
            the heart of AquaPure.
          </p>
        </Reveal>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What We Do" title="Four ways we look after your water" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <div className="glass glow-hover flex h-full flex-col rounded-3xl p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-transform hover:translate-x-1"
                >
                  Book this service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

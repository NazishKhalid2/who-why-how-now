import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Award,
  Wrench,
  Clock,
  Home,
  Building2,
  CalendarClock,
  Package,
  ClipboardCheck,
  ArrowRight,
  BadgeCheck,
  Headset,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, CTABanner } from "@/components/site/Shared";
import { images } from "@/data/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "MENA AQUA Tru UAE, Pure Water for Homes & Businesses" },
      {
        name: "description",
        content:
          "Water purification systems, installation and maintenance for homes and businesses across the UAE. Book a free water test and consultation.",
      },
      { property: "og:title", content: "MENA AQUA Tru UAE, Pure Water for Homes & Businesses" },
      {
        property: "og:description",
        content:
          "Water purification systems, installation and maintenance across the UAE. Book a free consultation.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const trustItems = [
  { icon: Home, label: "Homes & businesses across the UAE" },
  { icon: Wrench, label: "Installation, service & repairs" },
  { icon: Package, label: "Genuine filters & spare parts" },
  { icon: Clock, label: "Open 7 days, 8:00 AM to 9:00 PM" },
];

const categories = [
  {
    icon: Home,
    title: "Residential RO Systems",
    desc: "Under-sink and whole-house systems that turn municipal supply into crisp, safe drinking water.",
    to: "/products",
  },
  {
    icon: Building2,
    title: "Commercial Filtration",
    desc: "Turnkey RO plants for restaurants, offices, schools and facilities, sized to your demand.",
    to: "/products",
  },
  {
    icon: CalendarClock,
    title: "Maintenance Plans",
    desc: "Annual maintenance plans with scheduled filter changes, sanitization and priority service.",
    to: "/services",
  },
  {
    icon: Package,
    title: "Genuine Spare Parts",
    desc: "Membranes, cartridges and fittings, genuine parts delivered and fitted across the UAE.",
    to: "/products",
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: "Free Consultation",
    desc: "We test your water on-site and recommend exactly what you need, nothing more.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    desc: "Certified technicians install and commission your system, usually within one visit.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled Maintenance",
    desc: "Filters, membranes and sanitization handled automatically on your plan.",
  },
  {
    icon: Headset,
    title: "Lifetime Support",
    desc: "Phone and WhatsApp support 7 days a week, 8:00 AM to 9:00 PM.",
  },
];

const features = [
  {
    icon: BadgeCheck,
    title: "One Accountable Team",
    desc: "The people who test your water are the people who install and service the system.",
  },
  {
    icon: Clock,
    title: "Open Every Day",
    desc: "Appointments 7 days a week, from 8:00 AM to 9:00 PM, across the UAE.",
  },
  {
    icon: ShieldCheck,
    title: "Written Quotations",
    desc: "The scope, price and warranty terms are confirmed in writing before any work starts.",
  },
  {
    icon: Headset,
    title: "Direct Support",
    desc: "Call or WhatsApp 050-7183290 and speak to the team handling your system.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-underwater pt-16">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Water Purification · UAE
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Clean, tested water for homes and businesses in the UAE
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We test your water, install the right filtration, softening or purification system,
              and keep it serviced. Based in Al Muteena, Deira, Dubai.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="rounded-md bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/products"
                className="glass inline-flex items-center gap-2 rounded-md px-8 py-4 text-sm font-bold text-foreground transition-colors hover:border-primary"
              >
                View Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass glow-hover overflow-hidden rounded-3xl">
              <img
                src={images.heroImg}
                alt="MENA AQUA Tru reverse osmosis purification system"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-input bg-background px-4 py-7 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustItems.map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-2.5 text-sm font-semibold text-muted-foreground"
            >
              <t.icon className="h-5 w-5 text-primary" />
              {t.label}
            </div>
          ))}
        </Reveal>
      </section>

      {/* Who we are */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                MENA AQUA Tru Water Solutions LLC
              </h3>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold">Where we are</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Al Muteena, Deira, Dubai, United Arab Emirates
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">When we are open</dt>
                  <dd className="mt-1 text-muted-foreground">
                    7 days a week, 8:00 AM to 9:00 PM
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">What we do</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Water testing, filtration, softening and purification systems, installation,
                    maintenance and genuine spare parts.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">How to reach us</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Phone and WhatsApp 050-7183290, sales.aquatru@gmail.com
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Water specialists you can invite into your home
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              MENA AQUA Tru supplies and services water filtration, softening and purification
              systems for homes and businesses in the UAE. We test the water first, recommend a
              system that fits it, install it, and look after it afterwards.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Free on-site water testing before we recommend anything",
                "Written quotations, so the price is agreed before work starts",
                "One team for installation, servicing and spare parts",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm font-medium">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {line}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-transform hover:translate-x-1"
            >
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Products / how we solve problems */}
      <section className="bg-deep-2/40 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Solve Your Problem"
          title="One partner for every drop"
          sub="From a single kitchen tap to a full commercial plant, systems and services engineered for UAE water conditions."
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="h-full">
              <Link
                to={c.to}
                className="glass glow-hover group flex h-full flex-col rounded-3xl p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Next Step Is Easy"
          title="From first call to pure water in days"
          sub="A simple, transparent process, you always know what happens next."
        />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="h-full">
              <div className="glass relative h-full rounded-3xl p-7">
                <span className="absolute right-6 top-5 font-display text-4xl font-extrabold text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why trust us */}
      <section className="bg-deep-2/40 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Trust Us" title="Built on proof, not promises" />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="h-full">
              <div className="glass glow-hover h-full rounded-3xl p-7 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      <CTABanner />
    </>
  );
}

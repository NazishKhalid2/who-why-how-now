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
  Star,
  ArrowRight,
  BadgeCheck,
  Headset,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, CTABanner, WaveDivider } from "@/components/site/Shared";
import { images, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "MENA AQUA Tru UAE — Pure Water for Homes & Businesses" },
      {
        name: "description",
        content:
          "Certified water purification systems, expert installation and 24/7 support across the UAE. 500+ installations. Book a free water test and consultation today.",
      },
      { property: "og:title", content: "MENA AQUA Tru UAE — Pure Water for Homes & Businesses" },
      {
        property: "og:description",
        content:
          "Certified water purification systems, expert installation and 24/7 support across the UAE. Book a free consultation.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const trustItems = [
  { icon: BadgeCheck, label: "Dubai Municipality Approved" },
  { icon: Award, label: "ISO 9001:2015 Certified" },
  { icon: ShieldCheck, label: "2-Year On-Site Warranty" },
  { icon: Home, label: "500+ Installations" },
  { icon: Clock, label: "Serving UAE Since 2012" },
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
    desc: "Turnkey RO plants for restaurants, offices, schools and facilities — sized to your demand.",
    to: "/products",
  },
  {
    icon: CalendarClock,
    title: "Maintenance Plans",
    desc: "Annual AMC plans with scheduled filter changes, sanitization and priority 24/7 support.",
    to: "/services",
  },
  {
    icon: Package,
    title: "Genuine Spare Parts",
    desc: "Membranes, cartridges and fittings — genuine parts delivered and fitted across the UAE.",
    to: "/products",
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: "Free Consultation",
    desc: "We test your water on-site and recommend exactly what you need — nothing more.",
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
    desc: "24/7 phone and WhatsApp support with same-day technician dispatch.",
  },
];

const features = [
  { icon: BadgeCheck, title: "Certified Technicians", desc: "Every installer is trained, background-checked and municipality-approved." },
  { icon: Clock, title: "Fast Installation", desc: "Next-day appointments across Dubai, Sharjah, Abu Dhabi and the Northern Emirates." },
  { icon: ShieldCheck, title: "Real Warranty", desc: "Up to 3 years on-site warranty — parts and labour, no fine print." },
  { icon: Headset, title: "24/7 Support", desc: "A human answers, day or night. Emergency dispatch for AMC clients." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-underwater pt-16">
        <div className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl animate-drift" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[22rem] w-[22rem] rounded-full bg-deep-2/60 blur-3xl animate-drift-slow" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-24">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Water Purification · UAE
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Pure water for every home and business in the{" "}
              <span className="text-gradient-aqua">Emirates</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We design, install and maintain certified purification systems — so the water your
              family drinks and your business serves is tested, pure and guaranteed.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.82_0.125_205/50%)]"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/products"
                className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-foreground transition-all hover:border-primary"
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
                width={1344}
                height={896}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <WaveDivider className="text-background" />
      </section>

      {/* Trust bar */}
      <section className="border-b border-input px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {trustItems.map((t) => (
            <div key={t.label} className="flex items-center gap-2.5 text-sm font-semibold text-muted-foreground">
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
            <div className="glass glow-hover overflow-hidden rounded-3xl">
              <img
                src={images.aboutImg}
                alt="MENA AQUA Tru technician testing drinking water in a Dubai home"
                width={1024}
                height={768}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Water specialists you can invite into your home
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Since 2012, MENA AQUA Tru has helped UAE families and businesses stop worrying about what
              comes out of their taps. Our in-house engineers and municipality-approved technicians
              handle everything — testing, installation, maintenance — with one accountable team.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Free on-site water testing before we recommend anything",
                "Transparent pricing — the quote is the price, always",
                "One team for life: install, service and emergency support",
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
          sub="From a single kitchen tap to a full commercial plant — systems and services engineered for UAE water conditions."
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <Link
                to={c.to}
                className="glass glow-hover group flex h-full flex-col rounded-3xl p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
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
          sub="A simple, transparent process — you always know what happens next."
        />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
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
        <SectionHeading
          eyebrow="Why Trust Us"
          title="Built on proof, not promises"
        />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
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

      {/* Testimonials */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted across the Emirates"
          sub="Real customers, real water tests, real results."
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="glass flex h-full flex-col rounded-3xl p-7">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 border-t border-input pt-4">
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

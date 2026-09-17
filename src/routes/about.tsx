import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Eye, Target, ShieldCheck, Award, BadgeCheck, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, CTABanner } from "@/components/site/Shared";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us, MENA AQUA Tru UAE" },
      {
        name: "description",
        content:
          "MENA AQUA Tru supplies, installs and services water filtration, softening and purification systems for homes and businesses in the UAE.",
      },
      { property: "og:title", content: "About Us, MENA AQUA Tru UAE" },
      {
        property: "og:description",
        content: "Water filtration, softening and purification specialists based in Al Muteena, Deira, Dubai.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const certs = [
  { icon: BadgeCheck, label: "On-site water testing before any recommendation" },
  { icon: Award, label: "Written quotations with the scope agreed upfront" },
  { icon: ShieldCheck, label: "Installation, servicing and genuine spare parts in-house" },
  { icon: Users, label: "Open 7 days a week, 8:00 AM to 9:00 PM" },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-underwater px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            About MENA AQUA Tru
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Who we are, and why water is all we do
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            MENA AQUA Tru Water Solutions LLC supplies, installs and services water filtration,
            softening and purification systems for homes and businesses across the UAE, from our
            base in Al Muteena, Deira, Dubai.
          </p>
        </Reveal>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                At a glance
              </h3>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold">Address</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Al Muteena, Deira, Dubai, United Arab Emirates
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Hours</dt>
                  <dd className="mt-1 text-muted-foreground">7 days a week, 8:00 AM to 9:00 PM</dd>
                </div>
                <div>
                  <dt className="font-semibold">Phone & WhatsApp</dt>
                  <dd className="mt-1 text-muted-foreground">050-7183290</dd>
                </div>
                <div>
                  <dt className="font-semibold">Email</dt>
                  <dd className="mt-1 text-muted-foreground">sales.aquatru@gmail.com</dd>
                </div>
              </dl>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">Our story</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Water is all we do. We test what comes out of your tap, explain the results in plain
              terms, and recommend a system that matches the water rather than a fixed package.
              Filtration, softening, reverse osmosis and UV sterilization for homes, and turnkey
              plants for restaurants, offices and facilities.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              After installation we stay involved: scheduled filter and membrane changes,
              sanitization, repairs on all major brands, and genuine spare parts from our Al
              Muteena base.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-deep-2/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass glow-hover h-full rounded-3xl p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To make clean, tested water available at every tap in the UAE, with service that
                continues long after installation day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass glow-hover h-full rounded-3xl p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A UAE where no family second-guesses a glass of water, and no business depends on
                plastic bottles to serve its people.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Trust Us"
          title="How we work"
          sub="Straightforward commitments you can hold us to."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {certs.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <div className="glass flex items-center gap-4 rounded-2xl p-6">
                <c.icon className="h-7 w-7 shrink-0 text-primary" />
                <p className="font-semibold">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all"
          >
            <Droplets className="h-4 w-4" /> Book Your Free Water Test
          </Link>
        </Reveal>
      </section>

      <CTABanner />
    </>
  );
}

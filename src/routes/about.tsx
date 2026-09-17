import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Eye, Target, ShieldCheck, Award, BadgeCheck, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, CTABanner } from "@/components/site/Shared";
import { images } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us, MENA AQUA Tru UAE" },
      {
        name: "description",
        content:
          "Since 2012, MENA AQUA Tru has delivered certified water purification to 500+ UAE homes and businesses. Meet the team behind the trust.",
      },
      { property: "og:title", content: "About Us, MENA AQUA Tru UAE" },
      {
        property: "og:description",
        content: "Certified water purification specialists serving the UAE since 2012.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const certs = [
  { icon: BadgeCheck, label: "Dubai Municipality Approved Contractor" },
  { icon: Award, label: "ISO 9001:2015 Quality Management" },
  { icon: ShieldCheck, label: "NSF-Certified Components Only" },
  { icon: Users, label: "Trained & Background-Checked Technicians" },
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
            MENA AQUA Tru was founded in Dubai in 2012 on a simple observation: families were buying
            bottled water because they didn't trust their taps, and nobody was fixing the root
            cause. We set out to change that, one building at a time.
          </p>
        </Reveal>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="glass glow-hover overflow-hidden rounded-3xl">
              <img
                src={images.aboutImg}
                alt="MENA AQUA Tru specialist at work in a UAE home"
                width={1024}
                height={768}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">Our story</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              What started as a two-person installation team is today a full-service water company:
              in-house engineers, a genuine spare-parts warehouse in Al Muteena, Deira, and
              maintenance fleets covering every emirate. Over 500 installations later, our approach
              hasn't changed, test first, recommend honestly, and stand behind every system for
              life.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We serve villas in Arabian Ranches, cafés in Sharjah, schools in Abu Dhabi and labour
              accommodation in Jebel Ali, with the same standard of care.
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
                To make bottled-water quality available at every tap in the UAE, sustainably,
                affordably, and with service that never makes you chase us.
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
          title="Certified, approved, accountable"
          sub="Credentials you can verify, and a warranty you can actually use."
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

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Wrench,
  Clock,
  Home,
  Building2,
  CalendarClock,
  Package,
  ClipboardCheck,
  ArrowRight,
  Headset,
  Droplets,
  Filter,
  FlaskConical,
  Gauge,
  Warehouse,
  PackageCheck,
  Ship,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { images, products } from "@/data/site";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const trustItems = [
  { icon: Droplets, title: "Water testing", label: "Test before recommendation" },
  { icon: Filter, title: "Advanced filtration", label: "RO, softening and UV systems" },
  { icon: Wrench, title: "Installation", label: "Fitted and commissioned by our team" },
  { icon: Package, title: "Ongoing care", label: "Maintenance and genuine spare parts" },
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
    title: "Installation",
    desc: "Our team installs and commissions the selected system at your property.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled Maintenance",
    desc: "Filters, membranes and sanitization handled automatically on your plan.",
  },
  {
    icon: Headset,
    title: "Ongoing Support",
    desc: "Phone and WhatsApp support 7 days a week, 8:00 AM to 9:00 PM.",
  },
];

const features = [
  {
    icon: FlaskConical,
    title: "One Accountable Team",
    desc: "The people who test your water are the people who install and service the system.",
  },
  {
    icon: Gauge,
    title: "Test First",
    desc: "We test your water before recommending filtration, softening or purification.",
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

const warehouseFacts = [
  { icon: Warehouse, label: "Warehouse", value: "United States" },
  {
    icon: PackageCheck,
    label: "Stocked there",
    value: "Filtration systems and spare parts",
  },
  {
    icon: Ship,
    label: "Delivery",
    value: "Shipped to the UAE for installation and service",
  },
  { icon: MapPin, label: "Fitted from", value: "Al Muteena, Deira, Dubai" },
];

function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-editorial">
      <section className="relative min-h-[760px] overflow-hidden bg-underwater pt-20 lg:min-h-[820px]">
        <div aria-hidden className="home-water-word">
          WATER
        </div>
        <div aria-hidden className="home-bubble home-bubble-one" />
        <div aria-hidden className="home-bubble home-bubble-two" />

        <div className="relative z-10 mx-auto grid min-h-[680px] max-w-7xl grid-cols-1 px-4 pb-44 pt-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-52 lg:pt-16">
          <div className="relative z-30 self-start lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary">
                Water purification / UAE
              </p>
            </div>
            <h1 className="max-w-xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Pure water.
              <span className="block font-light text-primary">Better living.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
              We test your water, select the right filtration, softening or purification system,
              install it and keep it serviced across the UAE.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-12 px-7 font-bold">
                <Link to="/products">Explore Filters</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7 font-bold">
                <Link to="/book">
                  Find Your Filter <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative z-20 mt-14 min-h-[340px] lg:col-span-7 lg:mt-0 lg:min-h-[520px]">
            <div className="home-product-frame absolute inset-x-0 top-0 mx-auto w-[min(100%,680px)] overflow-hidden border border-border bg-card p-2 shadow-[var(--shadow-soft)] sm:p-3 lg:-top-6 lg:right-0 lg:mr-0">
              <img
                src={images.heroImg}
                alt="MENA AQUA Tru water softener, triple filtration and UV sterilizer system"
                width={1200}
                height={900}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex items-end justify-between gap-4 px-3 pb-3 pt-4 sm:px-5">
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-primary">
                    Complete water care
                  </p>
                  <p className="mt-1 text-sm font-semibold">Softening / Filtration / UV</p>
                </div>
                <span className="hidden text-xs text-muted-foreground sm:block">Al Muteena, Dubai</span>
              </div>
            </div>
            <div className="home-tech-label absolute -left-4 top-1/2 z-30 hidden w-44 -translate-y-1/2 border border-border bg-background p-5 shadow-[var(--shadow-soft)] sm:block lg:-left-10">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary">
                Water first
              </span>
              <p className="mt-2 text-sm font-semibold leading-5">On-site testing before recommendation</p>
            </div>
          </div>
        </div>

        <div className="home-curve absolute inset-x-0 bottom-0 z-20 bg-background px-4 pb-7 pt-16 sm:px-6 lg:px-8 lg:pb-9 lg:pt-20">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h2 className="text-sm font-bold">{item.title}</h2>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                How we solve your problem
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Find the filtration system that fits your water.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-muted-foreground lg:col-span-4 lg:justify-self-end">
              From a dedicated drinking-water tap to whole-house softening, we start with the water
              at your property and recommend from there.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            <Link
              to="/products/$productId"
              params={{ productId: featuredProducts[0]!.id }}
              className="group relative overflow-hidden border border-border bg-deep-2 lg:col-span-7"
            >
              <img
                src={images.heroImg}
                alt="MENA AQUA Tru filtration system range"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="grid gap-3 border-t border-border bg-background p-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Residential</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{featuredProducts[0]!.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{featuredProducts[0]!.tagline}</p>
                </div>
                <span className="text-sm font-bold text-foreground">{featuredProducts[0]!.price}</span>
              </div>
            </Link>

            <div className="lg:col-span-5">
              {featuredProducts.slice(1).map((product, index) => (
                <Link
                  key={product.id}
                  to="/products/$productId"
                  params={{ productId: product.id }}
                  className="group grid min-h-48 grid-cols-[auto_1fr] gap-5 border-b border-border py-8 first:pt-0"
                >
                  <span className="font-display text-4xl font-light text-primary/50">
                    0{index + 2}
                  </span>
                  <span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {product.category}
                    </span>
                    <span className="mt-2 block font-display text-2xl font-semibold">{product.name}</span>
                    <span className="mt-3 block text-sm leading-6 text-muted-foreground">
                      {product.tagline}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                      {product.price} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              ))}
              <Button asChild variant="outline" className="mt-8 h-11 px-6">
                <Link to="/products">View all products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Who we are</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
              One water team, from test to service.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-3xl text-xl leading-9 text-foreground">
              MENA AQUA Tru supplies, installs and services water filtration, softening and
              purification systems for homes and businesses across the UAE.
            </p>
            <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <dl className="space-y-6 text-sm">
                <div>
                  <dt className="font-bold">Based in Dubai</dt>
                  <dd className="mt-1 text-muted-foreground">Al Muteena, Deira, Dubai, UAE</dd>
                </div>
                <div>
                  <dt className="font-bold">Open every day</dt>
                  <dd className="mt-1 text-muted-foreground">8:00 AM to 9:00 PM</dd>
                </div>
              </dl>
              <div>
                <p className="text-sm leading-7 text-muted-foreground">
                  Water testing, written quotations, installation, scheduled maintenance and
                  genuine spare parts are handled by one accountable team.
                </p>
                <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  More about MENA AQUA Tru <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Where our stock comes from
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
                Supplied from our warehouse in the United States.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
                Our filtration systems and spare parts are stocked at our own warehouse in the
                United States, then shipped to the UAE for installation and service. Ordering from
                that stock means the components we fit are the components we sell, and replacements
                are drawn from the same supply.
              </p>
              <Button asChild variant="outline" className="mt-8 h-11 px-6">
                <Link to="/contact">Ask about availability</Link>
              </Button>
            </div>

            <div className="w-full max-w-2xl border border-border bg-deep lg:col-span-7 lg:justify-self-end">
              <div className="flex items-center justify-between gap-4 border-b border-border bg-deep-2 px-6 py-4 sm:px-7">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-primary">
                  Supply at a glance
                </span>
                <span className="text-xs text-muted-foreground">United States to UAE</span>
              </div>
              <dl className="divide-y divide-border">
                {warehouseFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-5 px-6 py-6 sm:px-7">
                    <fact.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-6">
                      <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        {fact.label}
                      </dt>
                      <dd className="text-base font-semibold">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Why trust us</p>
              <h2 className="mt-4 max-w-lg font-display text-4xl font-semibold leading-tight">
                Clear recommendations, written before work starts.
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="border-t border-border pt-5">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-4 py-24 text-primary-foreground sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-aqua">The next step</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                From a water test to the right system.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-primary-foreground/70 lg:col-span-5 lg:justify-self-end">
              Book a free consultation. We will test the water at your property and explain the
              available options before you decide.
            </p>
          </div>
          <ol className="mt-16 grid gap-8 border-t border-primary-foreground/20 pt-10 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="text-xs font-bold text-aqua">0{index + 1}</span>
                <step.icon className="mt-6 h-6 w-6 text-aqua" />
                <h3 className="mt-5 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/65">{step.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-12 bg-primary px-7 font-bold text-primary-foreground">
              <Link to="/book">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 border-primary-foreground/30 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="https://wa.me/971507183290" target="_blank" rel="noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

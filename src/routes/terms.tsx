import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MENA AQUA Tru UAE" },
      {
        name: "description",
        content:
          "Terms of service for MENA AQUA Tru Water Solutions products, installation and maintenance plans in the UAE.",
      },
      { property: "og:title", content: "Terms & Conditions — MENA AQUA Tru UAE" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

const sections = [
  {
    title: "Quotations & pricing",
    body: "All quotations are valid for 30 days and include supply, standard installation and commissioning unless stated otherwise. Prices are in UAE Dirhams and inclusive of VAT where applicable.",
  },
  {
    title: "Installation",
    body: "Installations are scheduled at mutually agreed times. Customers are responsible for providing access to the installation area and a standard power and water connection point. Structural or plumbing modifications outside the agreed scope may be quoted separately.",
  },
  {
    title: "Warranty",
    body: "Residential systems carry a 2-year on-site warranty (3 years for whole-house stations) covering parts and labour, excluding consumables such as filters and membranes and damage from misuse, unauthorized repair or abnormal feed-water conditions.",
  },
  {
    title: "Maintenance (AMC) plans",
    body: "AMC plans run for 12 months from the date of activation and include the visits and consumables listed in your plan document. Plans are transferable within the same property and renewable annually.",
  },
  {
    title: "Appointments & cancellations",
    body: "Appointments may be rescheduled free of charge up to 4 hours before the scheduled time via phone or WhatsApp. Repeated no-shows may require a booking deposit.",
  },
  {
    title: "Liability",
    body: "Our liability is limited to the value of the products and services supplied. We are not liable for indirect losses arising from water quality issues unrelated to our systems or from failure of customer-maintained equipment.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of the United Arab Emirates and the Emirate of Dubai. Any disputes will be handled by the courts of Dubai.",
  },
];

function TermsPage() {
  return (
    <section className="relative overflow-hidden bg-underwater px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-drift" />
      <Reveal className="relative mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Legal</p>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2026</p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

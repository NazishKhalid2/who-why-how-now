import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy, MENA AQUA Tru UAE" },
      {
        name: "description",
        content:
          "How MENA AQUA Tru Water Solutions collects, uses and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy, MENA AQUA Tru UAE" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

const sections = [
  {
    title: "Information we collect",
    body: "When you book an appointment, request a quote or contact us, we collect your name, phone number, email address, location and any notes you choose to share. We also keep service records related to your installed systems.",
  },
  {
    title: "How we use it",
    body: "Your information is used solely to schedule and deliver our services, maintain your systems, honour warranties and respond to your enquiries. With your consent, we may send maintenance reminders and occasional offers.",
  },
  {
    title: "What we never do",
    body: "We do not sell, rent or trade your personal data to third parties. Data is shared only with the technicians and partners directly involved in delivering your service, and only to the extent required.",
  },
  {
    title: "Storage & security",
    body: "Customer records are stored on access-controlled systems within the UAE. We retain service history for the lifetime of your warranty and maintenance plans, after which records are securely deleted on request.",
  },
  {
    title: "Your rights",
    body: "You may request a copy, correction or deletion of your personal data at any time by emailing sales.aquatru@gmail.com. We respond to all requests within 7 working days.",
  },
  {
    title: "Contact",
    body: "Questions about this policy: MENA AQUA Tru Water Solutions LLC, Al Muteena, Deira, Dubai, United Arab Emirates · sales.aquatru@gmail.com · 050-7183290.",
  },
];

function PrivacyPage() {
  return (
    <section className="relative overflow-hidden bg-underwater px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Legal</p>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Privacy Policy
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

import { createFileRoute, Link } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/Shared";
import { faqs } from "@/data/site";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ, MENA AQUA Tru UAE" },
      {
        name: "description",
        content:
          "Answers about UAE tap water, filter replacement, installation times, warranties, free water testing and service coverage.",
      },
      { property: "og:title", content: "FAQ, MENA AQUA Tru UAE" },
      {
        property: "og:description",
        content: "Common questions about water purification in the UAE, answered.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
});

function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-underwater px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">FAQ</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Questions, answered honestly
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Can't find what you're looking for? Call us or message on WhatsApp, a specialist, not a
            bot, will answer.
          </p>
        </Reveal>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="glass overflow-hidden rounded-2xl transition-colors data-[state=open]:border-primary/40"
              >
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-bold sm:text-base">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden px-6 text-sm leading-relaxed text-muted-foreground data-[state=closed]:animate-[accordion-up_0.25s_ease-out] data-[state=open]:animate-[accordion-down_0.25s_ease-out]">
                  <p className="pb-5">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Still unsure?{" "}
            <Link to="/contact" className="font-bold text-primary hover:underline">
              Get in touch
            </Link>{" "}
           , or{" "}
            <Link to="/book" className="font-bold text-primary hover:underline">
              book a free water test
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <CTABanner />
    </>
  );
}

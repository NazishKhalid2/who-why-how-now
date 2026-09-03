import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/971505550123"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_30px_oklch(0.84_0.135_184/40%)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  dark = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "")}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl",
          dark ? "text-foreground" : "text-mist-foreground",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn("mt-4 leading-relaxed", dark ? "text-muted-foreground" : "text-mist-foreground/70")}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}

export function WaveDivider({ flip = false, className }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("wave-divider", flip && "rotate-180", className)}
    >
      <path
        d="M0,40 C240,80 480,0 720,24 C960,48 1200,72 1440,32 L1440,72 L0,72 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CTABanner() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-caustics" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Ready for water you can <span className="text-gradient-aqua">trust</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
          Book a free consultation and water test today. A certified specialist will recommend the
          right system for your home or business — no pressure, no obligation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/book"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.84_0.135_184/50%)]"
          >
            Book a Free Consultation
          </a>
          <a
            href="https://wa.me/971505550123"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-full px-8 py-3.5 text-sm font-bold text-foreground transition-all hover:border-primary"
          >
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}

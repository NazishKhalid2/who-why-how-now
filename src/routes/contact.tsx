import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — MENA AQUA Tru UAE" },
      {
        name: "description",
        content:
          "Reach MENA AQUA Tru by phone, WhatsApp or email — or visit our Al Muteena, Deira showroom in Dubai. Emergency support 24/7 for AMC clients.",
      },
      { property: "og:title", content: "Contact Us — MENA AQUA Tru UAE" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, email and location for MENA AQUA Tru UAE.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) errs["name"] = "Please enter your name";
    const email = String(data.get("email") ?? "").trim();
    if (!email) errs["email"] = "Please enter your email";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      errs["email"] = "Enter a valid email address";
    if (!String(data.get("message") ?? "").trim()) errs["message"] = "Please write a short message";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-underwater px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-drift" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Contact</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Talk to a water specialist
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Questions about your water, your system, or a quote? We answer fast — usually within the
            hour during working times.
          </p>
        </Reveal>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass-strong h-full rounded-3xl p-7 sm:p-10">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h2 className="mt-6 text-2xl font-bold">Message sent</h2>
                  <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out — we'll reply within one working hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">Name *</span>
                    <input name="name" className={inputCls} placeholder="Your name" />
                    {errors["name"] && (
                      <p className="mt-1.5 text-xs font-medium text-destructive">
                        {errors["name"]}
                      </p>
                    )}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">Email *</span>
                    <input
                      name="email"
                      type="email"
                      className={inputCls}
                      placeholder="you@example.com"
                    />
                    {errors["email"] && (
                      <p className="mt-1.5 text-xs font-medium text-destructive">
                        {errors["email"]}
                      </p>
                    )}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">Phone</span>
                    <input name="phone" className={inputCls} placeholder="+971 5X XXX XXXX" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">Message *</span>
                    <textarea
                      name="message"
                      rows={5}
                      className={inputCls}
                      placeholder="How can we help?"
                    />
                    {errors["message"] && (
                      <p className="mt-1.5 text-xs font-medium text-destructive">
                        {errors["message"]}
                      </p>
                    )}
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.6_0.115_218/40%)]"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="glass overflow-hidden rounded-3xl">
                <iframe
                  title="MENA AQUA Tru location — Al Muteena, Deira, Dubai"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=55.31%2C25.26%2C55.34%2C25.28&layer=mapnik&marker=25.27%2C55.325"
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="glass grid flex-1 gap-5 rounded-3xl p-7 sm:grid-cols-2">
                {[
                  { icon: Phone, label: "Phone", value: "050-7183290" },
                  { icon: MessageCircle, label: "WhatsApp", value: "050-7183290" },
                  { icon: Mail, label: "Email", value: "sales.aquatru@gmail.com" },
                  { icon: MapPin, label: "Address", value: "Al Muteena, Deira, Dubai" },
                  { icon: Clock, label: "Open 7 days", value: "8:00 AM – 9:00 PM" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

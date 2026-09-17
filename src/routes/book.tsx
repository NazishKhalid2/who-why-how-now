import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book an Appointment, MENA AQUA Tru UAE" },
      {
        name: "description",
        content:
          "Book a free water test and consultation. Choose your date and time, a certified specialist visits your home or business anywhere in the UAE.",
      },
      { property: "og:title", content: "Book an Appointment, MENA AQUA Tru UAE" },
      {
        property: "og:description",
        content: "Book a free water test and consultation anywhere in the UAE.",
      },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
});

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}

function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) errs["name"] = "Please enter your name";
    const phone = String(data.get("phone") ?? "").trim();
    if (!phone) errs["phone"] = "Please enter your phone number";
    else if (!/^[+\d][\d\s-]{6,}$/.test(phone)) errs["phone"] = "Enter a valid phone number";
    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      errs["email"] = "Enter a valid email address";
    if (!String(data.get("location") ?? "").trim()) errs["location"] = "Please enter your location";
    if (!String(data.get("date") ?? "")) errs["date"] = "Pick a preferred date";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-underwater px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Next Step</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Book your free consultation
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
            A certified specialist will test your water, answer your questions and give you an
            honest recommendation, free, with no obligation.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-strong mt-12 rounded-3xl p-7 sm:p-10">
            {submitted ? (
              <div className="py-8 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h2 className="mt-6 text-2xl font-bold">Request received</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you, our team will call you within one working hour to confirm your
                  appointment. Prefer instant confirmation? Message us on WhatsApp at 050-7183290.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name *">
                  <input name="name" className={inputCls} placeholder="Ahmed Al Falasi" />
                  {errors["name"] && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">{errors["name"]}</p>
                  )}
                </Field>
                <Field label="Phone *">
                  <input name="phone" className={inputCls} placeholder="+971 5X XXX XXXX" />
                  {errors["phone"] && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">{errors["phone"]}</p>
                  )}
                </Field>
                <Field label="Email">
                  <input
                    name="email"
                    type="email"
                    className={inputCls}
                    placeholder="you@example.com"
                  />
                  {errors["email"] && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">{errors["email"]}</p>
                  )}
                </Field>
                <Field label="Location / Address *">
                  <input name="location" className={inputCls} placeholder="Community, Emirate" />
                  {errors["location"] && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">
                      {errors["location"]}
                    </p>
                  )}
                </Field>
                <Field label="Service Type">
                  <select
                    name="service"
                    className={inputCls}
                    defaultValue="Free Consultation & Water Test"
                  >
                    {[
                      "Free Consultation & Water Test",
                      "New System Installation",
                      "Maintenance / Filter Change",
                      "Repair",
                      "Commercial Quote",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred Date *">
                  <input name="date" type="date" className={inputCls} />
                </Field>
                <Field label="Preferred Time">
                  <select name="time" className={inputCls} defaultValue="Morning (8-12)">
                    {["Morning (8-12)", "Afternoon (12-4)", "Evening (4-8)"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                {errors["date"] && (
                  <p className="-mt-3 text-xs font-medium text-destructive sm:col-span-2">
                    {errors["date"]}
                  </p>
                )}
                <div className="sm:col-span-2">
                  <Field label="Notes">
                    <textarea
                      name="notes"
                      rows={4}
                      className={inputCls}
                      placeholder="Tell us about your water concerns, property type, or existing system…"
                    />
                  </Field>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all sm:col-span-2"
                >
                  <CalendarCheck className="h-4 w-4" /> Confirm Booking Request
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/Shared";
import { products } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — AquaPure UAE" },
      {
        name: "description",
        content:
          "Residential RO systems, commercial filtration plants and genuine spare parts — engineered for UAE water conditions.",
      },
      { property: "og:title", content: "Products — AquaPure UAE" },
      { property: "og:description", content: "RO systems, commercial plants and genuine spare parts for UAE water." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

const filters = ["All", "Residential", "Commercial", "Spare Parts"] as const;

function ProductsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="relative overflow-hidden bg-underwater px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-drift" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Products</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Systems built for UAE water
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Every product we sell is one we install and service ourselves — selected for reliability
            in Gulf heat, high-TDS feed water and storage-tank conditions.
          </p>
        </Reveal>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
                active === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <Link
                to="/products/$productId"
                params={{ productId: p.id }}
                className="glass glow-hover group flex h-full flex-col overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground">{p.price}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/Shared";
import { products } from "@/data/site";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductDetailPage,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — MENA AQUA Tru UAE` },
      { name: "description", content: loaderData?.product.tagline ?? "" },
      {
        property: "og:title",
        content: `${loaderData?.product.name ?? "Product"} — MENA AQUA Tru UAE`,
      },
      { property: "og:description", content: loaderData?.product.tagline ?? "" },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `/products/${loaderData?.product.id ?? ""}` },
    ],
    links: [{ rel: "canonical", href: `/products/${loaderData?.product.id ?? ""}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: loaderData.product.name,
              description: loaderData.product.description,
              category: loaderData.product.category,
            }),
          },
        ]
      : [],
  }),
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();

  return (
    <>
      <section className="relative overflow-hidden bg-underwater px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-drift" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>
          <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="glass glow-hover overflow-hidden rounded-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {product.category}
              </span>
              <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-5 leading-relaxed text-muted-foreground">{product.description}</p>
              <p className="mt-6 font-display text-2xl font-extrabold text-gradient-aqua">
                {product.price}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.6_0.115_218/40%)]"
                >
                  <CalendarCheck className="h-4 w-4" /> Book Installation
                </Link>
                <Link
                  to="/contact"
                  className="glass rounded-full px-7 py-3.5 text-sm font-bold transition-all hover:border-primary"
                >
                  Ask a Question
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">Specifications</h2>
          <dl className="glass mt-6 divide-y divide-border overflow-hidden rounded-3xl">
            {product.specs.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {s.label}
                </dt>
                <dd className="text-sm text-muted-foreground sm:text-right">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <CTABanner />
    </>
  );
}

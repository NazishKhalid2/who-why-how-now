import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/Shared";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogArticlePage,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Article"} — MENA AQUA Tru UAE` },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:title", content: loaderData?.post.title ?? "" },
      { property: "og:description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/blog/${loaderData?.post.slug ?? ""}` },
    ],
    links: [{ rel: "canonical", href: `/blog/${loaderData?.post.slug ?? ""}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.post.title,
              datePublished: loaderData.post.date,
              author: { "@type": "Person", name: loaderData.post.author },
            }),
          },
        ]
      : [],
  }),
});

function BlogArticlePage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article className="relative overflow-hidden bg-underwater px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-drift" />
        <div className="relative mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <Reveal>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4 text-primary" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-primary" />
                {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
            <div className="glass mt-8 overflow-hidden rounded-3xl">
              <img src={post.image} alt={post.title} width={1024} height={768} className="h-auto w-full object-cover" />
            </div>
            <div className="mt-10 space-y-6">
              {post.body.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>
      <CTABanner />
    </>
  );
}

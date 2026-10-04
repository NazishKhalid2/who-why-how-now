import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/Shared";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-underwater px-4">
      <div className="relative max-w-md text-center">
        <p className="font-display text-8xl font-extrabold">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">This page drifted away</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Let's get you back to clear water.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MENA AQUA Tru UAE, Premium Water Purification" },
      {
        name: "description",
        content:
          "MENA AQUA Tru delivers certified water purification systems, installation and maintenance for homes and businesses across the UAE.",
      },
      { property: "og:title", content: "MENA AQUA Tru UAE, Premium Water Purification" },
      {
        property: "og:description",
        content:
          "Certified RO systems, whole-house filtration and 24/7 support across the UAE. Book a free water test today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MENA AQUA Tru UAE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Sora:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MENA AQUA Tru Water Solutions LLC",
          description: "Premium water purification systems and services in the UAE.",
          telephone: "+971507183290",
          email: "sales.aquatru@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Al Muteena, Deira",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}

const DEFAULT_VERCEL_STATIC_URL = "https://YOUR-PROJECT.vercel.app";
const DEFAULT_FIGMA_SPA_URL = "https://YOUR-FIGMA-SITE.figma.site";

const VERCEL_PATHS = [
  "/robots.txt",
  "/sitemap.xml",
  "/psychoeducational-evaluation",
  "/psychology-today",
];

function normalizeOrigin(origin) {
  return origin.replace(/\/+$/, "");
}

function shouldRouteToVercel(pathname) {
  if (VERCEL_PATHS.includes(pathname)) return true;
  return (
    pathname.startsWith("/psychoeducational-evaluation/") ||
    pathname.startsWith("/psychology-today/")
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const cleanPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

    const vercelOrigin = normalizeOrigin(
      env.VERCEL_STATIC_URL || DEFAULT_VERCEL_STATIC_URL
    );
    const figmaOrigin = normalizeOrigin(
      env.FIGMA_SPA_URL || DEFAULT_FIGMA_SPA_URL
    );

    const routeToVercel = shouldRouteToVercel(cleanPath);
    const targetOrigin = routeToVercel ? vercelOrigin : figmaOrigin;

    const targetUrl = new URL(targetOrigin + pathname + url.search);

    try {
      const response = await fetch(targetUrl, request);
      if (response.ok) return response;

      if (!routeToVercel) {
        // If Figma returns a non-OK response, try Vercel as a safety net.
        const fallbackUrl = new URL(vercelOrigin + pathname + url.search);
        const fallbackResponse = await fetch(fallbackUrl, request);
        return fallbackResponse.ok ? fallbackResponse : response;
      }

      return response;
    } catch (error) {
      if (routeToVercel) {
        // If Vercel is down, optionally fall back to the SPA.
        try {
          const fallbackUrl = new URL(figmaOrigin + pathname + url.search);
          const fallbackResponse = await fetch(fallbackUrl, request);
          return fallbackResponse.ok
            ? fallbackResponse
            : new Response("Vercel routing failed.", { status: 502 });
        } catch (fallbackError) {
          return new Response("Routing failed.", { status: 502 });
        }
      }

      return new Response("Routing failed.", { status: 502 });
    }
  },
};

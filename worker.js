export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    const VERCEL_ORIGIN = "https://YOUR-PROJECT.vercel.app";
    const FIGMA_ORIGIN  = "https://YOUR-FIGMA-SITE.figma.site";

    const cleanPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

    const isVercel =
      cleanPath === "/robots.txt" ||
      cleanPath === "/sitemap.xml" ||
      cleanPath === "/psychoeducational-evaluation" ||
      cleanPath.startsWith("/psychoeducational-evaluation/") ||
      cleanPath === "/psychology-today" ||
      cleanPath.startsWith("/psychology-today/");

    if (isVercel) {
      let targetPath = cleanPath;
      if (cleanPath === "/psychoeducational-evaluation") targetPath = "/psychoeducational-evaluation/index.html";
      if (cleanPath === "/psychology-today") targetPath = "/psychology-today/index.html";
      return fetch(VERCEL_ORIGIN + targetPath + url.search, request);
    }

    return fetch(FIGMA_ORIGIN + path + url.search, request);
  }
};

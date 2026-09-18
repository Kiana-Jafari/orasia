import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
    server: {
        handlers: {
            GET: () => {
                const baseUrl = "https://orasiatrade.com";

                const urls = [
                    "/",
                    "/about",
                    "/contact",
                    "/products",
                    "/products/import-product-01",
                    "/products/import-product-02",
                    "/products/import-product-03",
                    "/products/export-product-01",
                    "/products/export-product-02",
                    "/products/export-product-03",
                ];

                const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
                        .map(
                            (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
  </url>`,
                        )
                        .join("\n")}
</urlset>`;

                return new Response(sitemap, {
                    headers: {
                        "Content-Type": "application/xml",
                    },
                });
            },
        },
    },
});
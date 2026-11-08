import type { NextRequest } from "next/server";
import { siteUrl } from "@/lib/site-url";

export function GET(request: NextRequest) {
  const homepage = siteUrl ?? new URL("/", request.nextUrl).href;
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${homepage.replace(/&/g, "&amp;")}</loc></url></urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}

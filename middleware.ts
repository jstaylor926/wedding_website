import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow Home and Travel pages
  const allowed = pathname === "/" || pathname.startsWith("/travel");

  // Always allow Next internals and static assets
  const isInternal = pathname.startsWith("/_next") || pathname === "/favicon.ico";
  const isAsset = pathname.includes(".");

  if (allowed || isInternal || isAsset) {
    return NextResponse.next();
  }

  // Redirect all other routes to Home
  const url = req.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*",
};


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public app routes
  const allowedRoutes = ["/", "/travel", "/schedule", "/registry", "/faq"];
  const allowed = allowedRoutes.some((route) =>
    route === "/" ? pathname === route : pathname.startsWith(route),
  );

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

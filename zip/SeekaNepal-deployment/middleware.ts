import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const match = path.match(/^\/class-(\d+)(\/.*)?$/);
  if (match) {
    const url = request.nextUrl.clone();
    url.pathname = `/class/${match[1]}${match[2] ?? ""}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };

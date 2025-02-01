import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken"); // Check for an auth token in cookies

  if (!token) {
    // Redirect to login if no token is found
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next(); // Allow request to proceed if authenticated
}

export const config = {
    matcher: [
      "/user-profile", // Apply middleware to this page
      "/checkout",     // Apply middleware to the checkout page
    ],
  };
  
import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  SESSION_MS,
  passwordMatches,
  createSessionToken,
} from "@/lib/adminAuth";

export async function POST(request) {
  try {
    if (!process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Admin access is not configured." },
        { status: 503 }
      );
    }

    const { password } = await request.json();

    if (passwordMatches(password)) {
      const response = NextResponse.json({
        success: true,
        message: "Authenticated successfully.",
      });

      response.cookies.set({
        name: ADMIN_COOKIE,
        value: createSessionToken(),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: SESSION_MS / 1000,
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { error: "Invalid admin passcode." },
      { status: 401 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Error processing login." },
      { status: 500 }
    );
  }
}

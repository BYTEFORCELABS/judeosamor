import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { getMediaData, addAppearance } from "@/lib/db";

export async function GET(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ success: true, ...getMediaData() });
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  if (!body.title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  const appearance = addAppearance({
    title: body.title,
    videoId: body.videoId || null,
    href: body.href || null,
    kind: body.kind || "",
    channel: body.channel || "",
    role: body.role || "",
    summary: body.summary || "",
  });

  return NextResponse.json({ success: true, appearance });
}

import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { getPublicationsData, addPublication } from "@/lib/db";

export async function GET(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ success: true, ...getPublicationsData() });
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  if (!body.title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  const publication = addPublication({
    title: body.title,
    authors: body.authors || [],
    venue: body.venue || "",
    volume: body.volume || "",
    year: body.year || "",
    citations: Number(body.citations) || 0,
    area: body.area || "all",
    summary: body.summary || "",
  });

  return NextResponse.json({ success: true, publication });
}

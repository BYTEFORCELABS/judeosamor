import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { updatePublication, deletePublication } from "@/lib/db";

export async function PUT(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const updated = updatePublication(id, {
    title: body.title,
    authors: body.authors,
    venue: body.venue,
    volume: body.volume,
    year: body.year,
    citations: body.citations !== undefined ? Number(body.citations) : undefined,
    area: body.area,
    summary: body.summary,
  });

  if (!updated) {
    return NextResponse.json({ error: "Publication not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true, publication: updated });
}

export async function DELETE(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  deletePublication(id);
  return NextResponse.json({ success: true });
}

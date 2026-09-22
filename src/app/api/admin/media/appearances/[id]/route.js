import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { updateAppearance, deleteAppearance } from "@/lib/db";

export async function PUT(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const updated = updateAppearance(id, {
    title: body.title,
    videoId: body.videoId,
    href: body.href,
    kind: body.kind,
    channel: body.channel,
    role: body.role,
    summary: body.summary,
  });

  if (!updated) {
    return NextResponse.json({ error: "Appearance not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true, appearance: updated });
}

export async function DELETE(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  deleteAppearance(id);
  return NextResponse.json({ success: true });
}

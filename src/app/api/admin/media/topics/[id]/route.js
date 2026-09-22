import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { updateSpeakingTopic, deleteSpeakingTopic } from "@/lib/db";

export async function PUT(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const updated = updateSpeakingTopic(id, {
    topic: body.topic,
    audience: body.audience,
    desc: body.desc,
  });

  if (!updated) {
    return NextResponse.json({ error: "Topic not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true, topic: updated });
}

export async function DELETE(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  deleteSpeakingTopic(id);
  return NextResponse.json({ success: true });
}

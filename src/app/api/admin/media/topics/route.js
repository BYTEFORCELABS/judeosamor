import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { addSpeakingTopic } from "@/lib/db";

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  if (!body.topic) {
    return NextResponse.json({ error: "Topic is required." }, { status: 400 });
  }

  const topic = addSpeakingTopic({
    topic: body.topic,
    audience: body.audience || "",
    desc: body.desc || "",
  });

  return NextResponse.json({ success: true, topic });
}

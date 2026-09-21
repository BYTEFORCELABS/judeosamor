import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { getSubscribers, deleteSubscriber } from "@/lib/db";

export async function GET(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const subscribers = getSubscribers();
  return NextResponse.json({
    success: true,
    subscribers,
  });
}

export async function DELETE(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Subscriber ID/Email is required" }, { status: 400 });
  }

  deleteSubscriber(id);
  return NextResponse.json({ success: true, message: "Subscriber removed." });
}

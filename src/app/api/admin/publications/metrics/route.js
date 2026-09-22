import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { updateScholarMetrics } from "@/lib/db";

export async function PUT(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const data = updateScholarMetrics({
    scholarMetrics: body.scholarMetrics,
    scholarRetrieved: body.scholarRetrieved,
    scholarUrl: body.scholarUrl,
  });

  return NextResponse.json({ success: true, ...data });
}

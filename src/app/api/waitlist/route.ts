import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistPayload = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  teamSize?: string;
  timeline?: string;
  useCase?: string;
  updatesOptIn?: boolean;
  website?: string;


export async function POST(request: Request) {
  let payload: WaitlistPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim().toLowerCase();
  const website = payload.website?.trim();

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Waitlist form is not configured." }, { status: 500 });
  }

  const outbound = {
    name,
    email,
    company: payload.company?.trim() || "",
    role: payload.role?.trim() || "",
    teamSize: payload.teamSize?.trim() || "",
    timeline: payload.timeline?.trim() || "",
    useCase: payload.useCase?.trim() || "",
    updatesOptIn: Boolean(payload.updatesOptIn),
    source: "waitlist",
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "",
    referrer: request.headers.get("referer") ?? "",
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (process.env.WAITLIST_WEBHOOK_SECRET) {
    headers["X-Waitlist-Secret"] = process.env.WAITLIST_WEBHOOK_SECRET;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(outbound),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Unable to submit right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

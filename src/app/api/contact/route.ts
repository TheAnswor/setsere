import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : null;
  const phone = typeof body.phone === "string" ? body.phone.trim() : null;
  const service = typeof body.service === "string" && body.service ? body.service : null;

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 422 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 422 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Message is too long (max 5000 characters)." },
      { status: 422 }
    );
  }

  try {
    const record = await db.contactMessage.create({
      data: {
        name,
        email,
        message,
        company,
        phone,
        service,
      },
    });
    return NextResponse.json({ ok: true, id: record.id }, { status: 201 });
  } catch (err) {
    console.error("[contact] failed to persist message", err);
    return NextResponse.json(
      { ok: false, error: "Could not submit your message right now." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await db.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        name: true,
        company: true,
        email: true,
        phone: true,
        service: true,
        message: true,
        status: true,
        createdAt: true,
      },
    });
    return NextResponse.json({ ok: true, messages });
  } catch (err) {
    console.error("[contact] failed to list messages", err);
    return NextResponse.json(
      { ok: false, error: "Could not load messages." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = "https://xpfwfdfivehigppdmhnx.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to Supabase prospects table
    const prospectRes = await fetch(`${SUPABASE_URL}/rest/v1/prospects`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone || null,
        company: company || null,
        status: "new",
        source: "Website Contact Form",
        notes: `Subject: ${subject || "General"}\n\n${message}`,
      }),
    });

    if (!prospectRes.ok) {
      const err = await prospectRes.text();
      console.error("Supabase error:", err);
      // Still return success to user — don't expose DB errors
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

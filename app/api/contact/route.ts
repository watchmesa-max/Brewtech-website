import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = "https://xpfwfdfivehigppdmhnx.supabase.co";
// Key is set here directly as fallback — also set SUPABASE_SERVICE_KEY in Vercel env vars
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZndmZGZpdmVoaWdwcGRtaG54Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTA1MjQwNCwiZXhwIjoyMDk2NjI4NDA0fQ.M0rlC_N6RjISw8q5v0Ygp7q_go_Pbhyaj6tTPxzLzIk";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

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
      return NextResponse.json({ error: "Failed to save enquiry" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const description =
      typeof body.description === "string" ? body.description.trim() : "";

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }
    if (name.length > 100 || email.length > 254 || description.length > 5000) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Contact form environment variables are missing.");

      return NextResponse.json(
        { error: "The contact service is not configured." },
        { status: 500 }
      );
    }

    
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}


    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      html: `
    <div style="margin:0;padding:32px 16px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
      <div style="max-width:520px;margin:0 auto;padding:28px;background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;">
        <p style="margin:0 0 20px;font-size:11px;letter-spacing:1.5px;color:#71717a;">
          PORTFOLIO CONTACT
        </p>

        <h1 style="margin:0 0 12px;font-size:24px;line-height:1.3;">
          New message received
        </h1>

        <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#52525b;">
          Someone has reached out through your portfolio contact form.
        </p>

        <div style="border-top:1px solid #e4e4e7;padding-top:20px;">
          <p style="margin:0 0 6px;font-size:11px;color:#71717a;">NAME</p>
          <p style="margin:0 0 20px;font-size:15px;">${escapeHtml(name)}</p>

          <p style="margin:0 0 6px;font-size:11px;color:#71717a;">EMAIL</p>
          <p style="margin:0 0 20px;font-size:15px;">
            <a href="mailto:${escapeHtml(email)}" style="color:#4f46e5;text-decoration:none;">
              ${escapeHtml(email)}
            </a>
          </p>

          <p style="margin:0 0 6px;font-size:11px;color:#71717a;">MESSAGE</p>
          <p style="margin:0;font-size:14px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;">${escapeHtml(description)}</p>
        </div>

        <div style="margin-top:28px;padding-top:16px;border-top:1px solid #e4e4e7;">
          <p style="margin:0;font-size:11px;color:#a1a1aa;">
            Sent through your portfolio contact form.
          </p>
        </div>
      </div>
    </div>
  `,
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Your message was sent successfully.", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

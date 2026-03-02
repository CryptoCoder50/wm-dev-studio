import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, message, company } = body;

    // Honeypot check
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "warrenmason19@hotmail.co.uk",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email, // ← see fix below
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await resend.emails.send({
      from: "Contact Form <noreply@yourdomain.com>",
      to: "YOUR_REAL_EMAIL@company.com", // ← CHANGE THIS
      subject: `New Inquiry from ${body.name}`,
      replyTo: body.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, "<br>")}</p>
      `,
    });
    return Response.json({ success: true });
  } catch (error: any) {
    return Response.json(
      { error: "Failed" + error.message.toString() },
      { status: 500 }
    );
  }
}

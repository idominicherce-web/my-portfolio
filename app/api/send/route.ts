// app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		// 1. Extract incoming form fields from the request body
		const { email, message } = await request.json();

		// Basic validation guardrails
		if (!email || !message) {
			return NextResponse.json(
				{ error: "Email and message are required fields." },
				{ status: 400 },
			);
		}

		// 2. Dispatch the email payload through Resend
		const data = await resend.emails.send({
			from: "Portfolio Contact <onboarding@resend.dev>", // Free accounts use this domain by default
			to: "dominicherce@gmail.com", // Your verified email address
			subject: `New Portfolio Message from ${email}`,
			text: `Sender: ${email}\n\nMessage:\n${message}`,
		});

		return NextResponse.json({ success: true, data });
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message || "Internal Server Error" },
			{ status: 500 },
		);
	}
}

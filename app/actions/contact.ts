// app/actions/contact.ts
"use server";

import { Resend } from "resend";

// Initialize Resend with your hidden environment variable token
const resend = new Resend(process.env.RESEND_API_KEY);

// Define a type contract interface for the form lifecycle states
export interface FormState {
	success: boolean | null;
	message: string;
}

/**
 * Handles server-side processing and validation for email transmissions via Resend.
 */
export async function submitContactForm(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;

	// Security validation fallback guardrail
	if (!email || !message) {
		return {
			success: false,
			message: "All fields are required before sending.",
		};
	}

	try {
		// Dispatch the email payload safely through the Resend API infrastructure
		await resend.emails.send({
			from: "Portfolio Contact <onboarding@resend.dev>", // Free accounts use this sandbox domain
			to: "i_dominicmarcus.herce@stratpoint.com", // Your personal recipient inbox
			subject: `New Portfolio Message from ${email}`,
			text: `Sender Email: ${email}\n\nMessage Content:\n${message}`,
		});

		return {
			success: true,
			message: "✓ Thank you! Your message has been sent successfully.",
		};
	} catch (error: unknown) {
		// Catch block error handling compliant with your Biome rules
		const errorMessage =
			error instanceof Error ? error.message : "Internal Server Error";
		return {
			success: false,
			message: `Transmission failure: ${errorMessage}`,
		};
	}
}

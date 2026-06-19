"use server"; // Enforces that this entire file runs exclusively on the secure server environment

export interface FormState {
	success: boolean | null;
	message: string;
}

// This action will process the form data directly on the server
export async function submitContactForm(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	// Simulate an asynchronous server network delay (e.g., waiting for an email API provider)
	await new Promise((resolve) => setTimeout(resolve, 1500));

	const email = formData.get("email") as string;
	const message = formData.get("message") as string;

	// Simple server-side validation check
	if (!email || !message || message.trim().length < 5) {
		return {
			success: false,
			message: "Validation failed: Message must be at least 5 characters long.",
		};
	}

	// For binding Prisma, Resend, or a database stream
	console.log(`Server received message from ${email}: ${message}`);

	return {
		success: true,
		message:
			"Thank you! Your message has been sent successfully to Dominic's inbox.",
	};
}

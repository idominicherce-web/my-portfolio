"use client";

import { useState } from "react";

export default function ContactPage() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		setErrorMessage("");

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, message }),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Something went wrong.");
			}

			// Reset form fields on successful transmission
			setStatus("success");
			setEmail("");
			setMessage("");
		} catch (err: any) {
			setStatus("error");
			setErrorMessage(err.message || "Failed to submit message.");
		}
	};

	return (
		<main className="flex-1 max-w-md w-full mx-auto p-8 flex flex-col justify-center min-h-[calc(100vh-65px)] gap-6 bg-background text-foreground transition-colors duration-200">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
				<p className="text-muted-foreground text-sm">
					Interested in collaborating? Drop your details below.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
				<div className="space-y-2">
					<label
						htmlFor="email"
						className="text-xs font-semibold text-muted-foreground"
					>
						Email Address
					</label>
					<input
						id="email"
						type="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={status === "loading"}
						className="h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
						placeholder="you@example.com"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor="message"
						className="text-xs font-semibold text-muted-foreground"
					>
						Your Message
					</label>
					<textarea
						id="message"
						required
						rows={5}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						disabled={status === "loading"}
						className="w-full rounded-xl border border-border bg-card p-4 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 resize-none"
						placeholder="Write your message here..."
					/>
				</div>

				<button
					type="submit"
					disabled={status === "loading"}
					className="h-11 w-full rounded-xl bg-stratpoint-blue text-white text-sm font-semibold hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center"
				>
					{status === "loading" ? "Sending..." : "Send Message"}
				</button>

				{/* Status UI Notifications */}
				{status === "success" && (
					<p className="text-xs text-green-500 font-medium text-center">
						✓ Message sent successfully! I'll get back to you soon.
					</p>
				)}
				{status === "error" && (
					<p className="text-xs text-destructive font-medium text-center">
						✕ {errorMessage}
					</p>
				)}
			</form>
		</main>
	);
}

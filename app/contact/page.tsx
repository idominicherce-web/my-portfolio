"use client"; // 🧠 Declared because we are binding interactive hooks

import { useActionState } from "react";
import { type FormState, submitContactForm } from "@/app/actions/contact";
import SubmitButton from "@/components/SubmitButton";

const initialState: FormState = {
	success: null,
	message: "",
};

export default function ContactPage() {
	// useActionState receives the server action, handles async state tracking, and manages return states
	const [state, formAction] = useActionState(submitContactForm, initialState);

	return (
		<main className="flex-1 max-w-md w-full mx-auto p-8 flex flex-col justify-center min-h-[calc(100vh-65px)] gap-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight mb-2 bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
					Get in Touch
				</h1>
				<p className="text-zinc-400 text-sm">
					Have a question or want to work together? Drop a message directly
					below.
				</p>
			</div>

			{/* Banners for success or error feedback */}
			{state.success === true && (
				<div className="p-4 text-xs font-medium rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
					{state.message}
				</div>
			)}
			{state.success === false && (
				<div className="p-4 text-xs font-medium rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
					{state.message}
				</div>
			)}

			<form action={formAction} className="flex flex-col gap-4">
				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="email"
						className="text-xs font-medium text-zinc-400 uppercase tracking-wider"
					>
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						placeholder="you@example.com"
						className="w-full p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-100 placeholder-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors"
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="message"
						className="text-xs font-medium text-zinc-400 uppercase tracking-wider"
					>
						Your Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={5}
						placeholder="Write your message here..."
						className="w-full p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-100 placeholder-zinc-600 text-sm focus:border-blue-500 focus:outline-none transition-colors resize-none"
					/>
				</div>

				<SubmitButton />
			</form>
		</main>
	);
}

"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
	// useFormStatus automatically watches the parent form's submission state
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-foreground0 disabled:border-zinc-700 disabled:cursor-not-allowed transition-colors border border-blue-500/20 cursor-pointer flex items-center justify-center gap-2"
		>
			{pending ? (
				<>
					<span className="w-4 h-4 border-2 border-zinc-400 border-t-zinc-100 rounded-full animate-spin" />
					Sending Message...
				</>
			) : (
				"Send Message"
			)}
		</button>
	);
}

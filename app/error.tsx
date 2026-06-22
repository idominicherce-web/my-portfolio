"use client"; // Error boundaries MUST be client-side components

import { useEffect } from "react";

interface ErrorBoundaryProps {
	error: Error & { digest?: string };
	reset: () => void; // A native function to re-attempt rendering the route segment
}

export default function GlobalErrorBoundary({
	error,
	reset,
}: ErrorBoundaryProps) {
	useEffect(() => {
		// In a production app, this is where the stream errors to an ingestion tracker like Sentry
		console.error("Caught runtime exception via Error Boundary:", error);
	}, [error]);

	return (
		<main className="flex-1 max-w-md w-full mx-auto p-8 flex flex-col items-center justify-center text-center min-h-[calc(100vh-65px)] gap-4">
			<span className="text-xs font-mono px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-md uppercase tracking-widest">
				Application Alert
			</span>
			<h1 className="text-3xl font-bold tracking-tight text-zinc-100">
				Something went wrong
			</h1>
			<p className="text-zinc-400 text-sm leading-relaxed">
				An unexpected client or server exception was triggered. You can attempt
				to clear the cache and re-render the layout.
			</p>

			<div className="flex gap-3 mt-2">
				<button
					type="button"
					onClick={() => reset()} // Fires the recovery handler
					className="px-5 py-2.5 rounded-lg bg-blue-600 font-semibold text-zinc-50 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/10 text-sm cursor-pointer"
				>
					Try Again
				</button>
				<a
					href="/"
					className="px-5 py-2.5 rounded-lg bg-zinc-800 font-semibold text-zinc-300 hover:bg-zinc-700 transition-colors text-sm"
				>
					Return Home
				</a>
			</div>
		</main>
	);
}

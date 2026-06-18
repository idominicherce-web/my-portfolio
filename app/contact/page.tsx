export default function ContactPage() {
	return (
		<main className="flex-1 max-w-xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)]">
			<div className="text-center">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
					Get in Touch
				</h1>
				<p className="text-zinc-400 text-sm md:text-base">
					Have an interesting project or want to collaborate? Drop me a message!
				</p>
			</div>

			{/* Placeholder Form: Later we can add 'use client' and a state hook here for processing */}
			<form className="flex flex-col gap-4 mt-4 bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="name"
						className="text-xs font-medium text-zinc-400 uppercase tracking-wider"
					>
						Name
					</label>
					<input
						id="name"
						type="text"
						placeholder="Your Name"
						className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-hidden focus:border-blue-500 transition-colors"
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="email"
						className="text-xs font-medium text-zinc-400 uppercase tracking-wider"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="your.email@example.com"
						className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-hidden focus:border-blue-500 transition-colors"
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="message"
						className="text-xs font-medium text-zinc-400 uppercase tracking-wider"
					>
						Message
					</label>
					<textarea
						id="message"
						rows={4}
						placeholder="Tell me about your project..."
						className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-hidden focus:border-blue-500 transition-colors resize-none"
					/>
				</div>

				<button
					type="button"
					className="mt-2 w-full py-3 rounded-lg bg-blue-600 font-semibold text-zinc-50 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/10 cursor-pointer"
				>
					Send Message
				</button>
			</form>
		</main>
	);
}

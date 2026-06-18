import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center p-8 bg-zinc-950 text-zinc-50 font-sans">
			{/* Hero Section */}
			<section className="text-center max-w-2xl flex flex-col gap-4 my-auto">
				<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
					Dominic Herce
				</h1>
				<p className="text-zinc-400 text-lg md:text-xl font-medium">
					Software Engineer Intern • Stratpoint
				</p>
				<p className="text-zinc-500 text-sm md:text-base max-w-md mx-auto">
					Building modern web applications using Next.js, React 19, and full-stack cloud ecosystems.
				</p>

				{/* Call To Actions */}
				<div className="flex gap-4 justify-center mt-4">
					<Link
						href="/projects"
						className="px-5 py-2.5 rounded-lg bg-blue-600 font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
					>
						View Projects
					</Link>
					<Link
						href="/contact"
						className="px-5 py-2.5 rounded-lg bg-zinc-800 font-semibold text-zinc-300 hover:bg-zinc-700 hover:text-zinc-50 transition-all border border-zinc-700"
					>
						Get in Touch
					</Link>
				</div>
			</section>

			{/* Subtle Footer */}
			<footer className="text-zinc-600 text-xs tracking-wider font-mono mt-auto py-4">
				&copy; {new Date().getFullYear()} • Powered by Next.js & Biome
			</footer>
		</main>
	);
}
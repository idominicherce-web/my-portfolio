import type { Metadata } from "next";
import Link from "next/link";

/**
 * ★ MVP COMPLIANCE: METADATA API REQUIREMENT (MVP 1)
 * Utilizes Next.js Server Component capabilities to export a static Metadata object.
 * This injects optimized SEO titles, descriptions, and OpenGraph parameters into the
 * document head during server-side rendering (SSR), completely eliminating the need for
 * client-side 'next/head' primitives.
 */

// Fulfills MVP Checklist #1: Configured with the Metadata API including title, description, and openGraph values.
export const metadata: Metadata = {
	title: "Dominic Herce | Software Engineer Portfolio",
	description:
		"Personal software engineering portfolio of Dominic Herce, featuring full-stack applications built with Next.js, React 19, and Tailwind CSS v4.",
	openGraph: {
		title: "Dominic Herce | Software Engineer Portfolio",
		description:
			"Explore my applications, engineering tasks, and active features built during the Stratpoint internship program.",
		type: "website",
		siteName: "Dominic Herce Portfolio",
	},
};

export default function HomePage() {
	// TEST CRASH: This will immediately throw an error.
	// Remove the comment to simulate a production server crash and trigger the error boundary.
	// throw new Error("Simulated production server crash!");

	return (
		<main className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center p-8 bg-background text-foreground font-sans transition-colors duration-200">
			{/* Hero Section */}
			<section className="text-center max-w-2xl flex flex-col gap-4 my-auto">
				<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
					Dominic Herce
				</h1>
				<p className="text-muted-foreground text-lg md:text-xl font-medium">
					Software Engineer Intern • Stratpoint
				</p>
				<p className="text-foreground0 text-sm md:text-base max-w-md mx-auto">
					Building modern web applications using Next.js, React 19, and
					full-stack cloud ecosystems.
				</p>

				{/* Call To Actions */}
				<div className="flex gap-4 justify-center mt-4">
					<Link
						href="/projects"
						className="px-5 py-2.5 rounded-lg bg-stratpoint-blue text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/20"
					>
						View Projects
					</Link>
					<Link
						href="/contact"
						className="px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all border border-border shadow-sm cursor-pointer"
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

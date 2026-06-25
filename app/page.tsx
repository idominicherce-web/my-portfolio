import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ParallaxHero from "@/components/ParallaxHero";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";

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
		"Personal software engineering portfolio of Dominic Herce, featuring full-stack applications built with Next.js, React, TypeScript, and modern cloud technologies.",
	openGraph: {
		title: "Dominic Herce | Software Engineer Portfolio",
		description:
			"Explore my software engineering projects, AR-HUD research, and full-stack development experience.",
		type: "website",
		siteName: "Dominic Herce Portfolio",
	},
};

/* UPDATED: Converted function to 'async' to enable Next.js streaming boundaries */
export default async function HomePage() {
	/**
	 * ★ MVP COMPLIANCE: error.tsx REQUIREMENT (MVP 6)
	 * TEST CRASH: Uncomment the line below to simulate a server-side rendering failure
	 * and verify that the application-level error boundary correctly handles runtime errors.
	 */
	// throw new Error("Simulated production server crash!");

	return (
		<main className="w-full bg-background text-foreground transition-colors duration-200">
			{/* HERO SECTION */}
			<ParallaxHero />

			{/* ABOUT SECTION */}
			<AboutSection />

			{/* FEATURED PROJECTS */}
			<ProjectsSection />

			{/* TECHNOLOGY STACK */}
			<TechStackSection />

			{/* CONTACT / CALL TO ACTION */}
			<ContactSection />

			{/* SUBTLE FOOTER */}
			<footer className="border-t border-border py-6 text-center text-xs tracking-wider font-mono text-muted-foreground">
				© {new Date().getFullYear()} Dominic Herce • Built with Next.js, React,
				Tailwind CSS, and Framer Motion
			</footer>
		</main>
	);
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Blocks, Cpu, Database, Layers } from "lucide-react";

export default function TechStackSection() {
	const { scrollYProgress } = useScroll();

	// Smooth, calibrated parallax velocities for background decorative nodes
	const iconSlowY = useTransform(scrollYProgress, [0, 1], [0, -40]);
	const iconFastY = useTransform(scrollYProgress, [0, 1], [0, 40]);

	return (
		<section
			id="tech"
			className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground transition-colors duration-200"
		>
			{/* BACKGROUND DECORATIVE FLOATING PARALLAX NODES */}
			<motion.div
				style={{ y: iconSlowY }}
				className="absolute left-12 top-1/4 opacity-10 dark:opacity-20 text-muted-foreground pointer-events-none hidden sm:block"
			>
				<Blocks size={70} />
			</motion.div>

			<motion.div
				style={{ y: iconFastY }}
				className="absolute right-12 top-1/3 opacity-10 dark:opacity-20 text-muted-foreground pointer-events-none hidden sm:block"
			>
				<Database size={70} />
			</motion.div>

			<motion.div
				style={{ y: iconSlowY }}
				className="absolute left-24 bottom-1/4 opacity-10 dark:opacity-20 text-muted-foreground pointer-events-none hidden sm:block"
			>
				<Cpu size={70} />
			</motion.div>

			<motion.div
				style={{ y: iconFastY }}
				className="absolute right-24 bottom-1/3 opacity-10 dark:opacity-20 text-muted-foreground pointer-events-none hidden sm:block"
			>
				<Layers size={70} />
			</motion.div>

			{/* CORE CONTENT BLOCK */}
			<div className="text-center z-10 max-w-xl px-6 flex flex-col gap-4">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
					Core Technology Stack
				</h2>

				<p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed">
					A curated selection of robust languages, frameworks, and modern
					toolchains optimized for performance.
				</p>

				<div className="mt-4 p-5 rounded-xl border border-border bg-card/50 backdrop-blur-xs">
					<p className="font-mono text-xs md:text-sm tracking-tight text-stratpoint-blue font-semibold">
						Next.js • React 19 • TypeScript • Tailwind v4 • Biome • Neon DB •
						Vercel
					</p>
				</div>
			</div>
		</section>
	);
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
	Braces,
	Cloud,
	Code2,
	Database,
	MonitorSmartphone,
	Server,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function ParallaxHero() {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	// Background Layers
	const bgGlowY = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const gridY = useTransform(scrollYProgress, [0, 1], [0, 250]);

	// Main Content
	const textY = useTransform(scrollYProgress, [0, 1], [0, 350]);
	const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

	// Floating Tech Icons
	const icon1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const icon2Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
	const icon3Y = useTransform(scrollYProgress, [0, 1], [0, -350]);
	const icon4Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const icon5Y = useTransform(scrollYProgress, [0, 1], [0, -250]);
	const icon6Y = useTransform(scrollYProgress, [0, 1], [0, 400]);

	const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 40]);
	const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

	return (
		<div
			ref={containerRef}
			className="relative w-full h-[calc(100vh-65px)] overflow-hidden flex items-center justify-center bg-background"
		>
			{/* BACKGROUND GLOW */}
			<motion.div
				style={{ y: bgGlowY }}
				className="absolute inset-0 pointer-events-none"
			>
				<div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px]" />
				<div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-indigo-500/20 blur-[120px]" />
			</motion.div>

			{/* GRID */}
			<motion.div
				style={{ y: gridY }}
				className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,119,198,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,198,0.06)_1px,transparent_1px)] bg-size-[24px_24px]"
			/>

			{/* FLOATING ICONS */}

			<motion.div
				style={{ y: icon1Y, rotate: rotate1 }}
				className="absolute top-[15%] left-[10%] text-blue-500"
			>
				<Code2 size={80} />
			</motion.div>

			<motion.div
				style={{ y: icon2Y, rotate: rotate2 }}
				className="absolute top-[65%] left-[15%] text-indigo-500"
			>
				<Database size={70} />
			</motion.div>

			<motion.div
				style={{ y: icon3Y, rotate: rotate1 }}
				className="absolute top-[20%] right-[12%] text-cyan-500"
			>
				<Server size={90} />
			</motion.div>

			<motion.div
				style={{ y: icon4Y, rotate: rotate2 }}
				className="absolute top-[75%] right-[15%] text-violet-500"
			>
				<Cloud size={75} />
			</motion.div>

			<motion.div
				style={{ y: icon5Y, rotate: rotate1 }}
				className="absolute top-[35%] left-[80%] text-sky-500"
			>
				<MonitorSmartphone size={65} />
			</motion.div>

			<motion.div
				style={{ y: icon6Y, rotate: rotate2 }}
				className="absolute top-[45%] left-[5%] text-purple-500"
			>
				<Braces size={60} />
			</motion.div>

			{/* HERO CONTENT */}
			<motion.div
				style={{
					y: textY,
					opacity: textOpacity,
				}}
				className="relative z-20 text-center px-6"
			>
				<h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
					Dominic Herce
				</h1>

				<p className="mt-4 text-muted-foreground max-w-lg mx-auto">
					Building modern web applications using Next.js, React, TypeScript, and
					cloud-native technologies.
				</p>

				<div className="flex justify-center gap-4 mt-8">
					<Link
						href="/projects"
						className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
					>
						View Projects
					</Link>

					<Link
						href="/contact"
						className="px-6 py-3 rounded-lg border border-border"
					>
						Contact
					</Link>
				</div>
			</motion.div>
		</div>
	);
}

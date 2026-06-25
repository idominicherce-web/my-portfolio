"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
	return (
		<motion.section
			id="contact"
			className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground transition-colors duration-200"
			initial={{ opacity: 0, scale: 0.98 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.7 }}
		>
			<div className="text-center max-w-md flex flex-col items-center gap-4">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
					Let's Build Something Together
				</h2>

				<p className="text-muted-foreground text-sm md:text-base max-w-xs leading-relaxed">
					Interested in collaborating or discussing full-stack cloud
					opportunities? Drop a message directly below.
				</p>

				<Link
					href="/contact"
					className="mt-2 px-6 py-3 rounded-lg bg-stratpoint-blue text-white font-semibold hover:opacity-90 transition-all shadow-md shadow-blue-500/10 cursor-pointer text-sm"
				>
					Contact Me
				</Link>
			</div>
		</motion.section>
	);
}

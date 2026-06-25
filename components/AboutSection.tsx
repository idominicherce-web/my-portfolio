"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
	return (
		<motion.section
			id="about"
			className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground transition-colors duration-200"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-3xl text-center flex flex-col gap-6">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
					About Me
				</h2>

				<div className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify wrap-break-word flex flex-col gap-4">
					<p>
						I am Dominic Herce, a Computer Science student major in Software
						Technology at De La Salle University Manila, currently refining my
						skills as a Software Engineer Intern at Stratpoint. I specialize in
						building clean, accessible, and highly scalable full-stack
						applications while navigating high-performance web and cloud
						ecosystems.
					</p>
					<p>
						With a strong foundation spanning multiple programming paradigms, my
						experience covers the entire software development lifecycle—from
						structured requirements engineering and secure relational database
						design to comprehensive implementation and end-to-end testing. I
						thrive on translating complex logical and data problems into clean,
						modular components.
					</p>
				</div>
			</div>
		</motion.section>
	);
}

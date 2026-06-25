"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/app/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
	// Dynamically slice exactly the first 2 items from your centralized data array
	const featuredProjects = projectsData.slice(0, 2);

	return (
		<section
			id="projects"
			className="min-h-screen px-6 py-24 bg-muted/20 text-foreground transition-colors duration-200 flex items-center"
		>
			<div className="max-w-4xl mx-auto w-full">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
						Featured Projects
					</h2>
					<p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
						A selected glance at my algorithmic engines, predictive machine
						learning models, and full-stack software systems.
					</p>
				</div>

				{/* THE DYNAMIC DUAL-COLUMN GRID MATRIX */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.slug}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: 0.6,
								delay: index * 0.15,
							}}
							className="flex flex-col h-full"
						>
							<ProjectCard project={project} />
						</motion.div>
					))}
				</div>

				{/* Global Explore Redirection Call-To-Action Link */}
				<div className="flex justify-center mt-12">
					<Link
						href="/projects"
						className="text-sm font-semibold text-stratpoint-blue hover:underline flex items-center gap-1 cursor-pointer transition-colors duration-200"
					>
						Explore All Projects &rarr;
					</Link>
				</div>
			</div>
		</section>
	);
}

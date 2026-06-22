import ProjectCard from "@/components/ProjectCard";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ProjectsPage() {
	await delay(1500); // Simulate a temporary server transmission delay to watch the skeleton stream

	// PATCH: Added precise slug key identifiers matching the dynamic data dictionary
	const projects = [
		{
			slug: "portfolio-website",
			title: "Portfolio Website",
			description:
				"A high-performance, responsive portfolio built using Next.js, React 19, Tailwind CSS v4, and Biome.",
			tech: ["Next.js", "React 19", "Tailwind v4", "TypeScript"],
		},
		{
			slug: "task-manager",
			title: "Intern Task Management System",
			description:
				"A production-ready workspace tracker built to handle intern deliverables during the Stratpoint program.",
			tech: ["Next.js", "TypeScript", "PostgreSQL", "Neon Database"],
		},
	];

	return (
		<main className="flex-1 max-w-4xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)]">
			<div>
				<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
					My Projects
				</h1>
				<p className="text-zinc-400 text-sm md:text-base">
					A collection of applications, engineering tasks, and active features I
					am building.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-4 mt-4">
				{projects.map((project) => (
					<ProjectCard
						key={project.slug} // Use slug as the unique React list map key item
						slug={project.slug}
						title={project.title}
						description={project.description}
						tech={project.tech}
					/>
				))}
			</div>
		</main>
	);
}

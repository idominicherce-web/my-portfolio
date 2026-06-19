// Latest Changes: Turn page into an Async Server Component
import ProjectCard from "@/components/ProjectCard";

// A small utility function to simulate a database network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ProjectsPage() {
	// Simulate fetching projects from a database (takes 2 seconds)
	await delay(2000);

	const projects = [
		{
			title: "Project 1",
			description: "A brief description of the project.",
			tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
		},
		{
			title: "Project 2",
			description: "A brief description of the project.",
			tech: ["Next.js", "PostgreSQL", "TypeScript"],
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
						key={project.title}
						title={project.title}
						description={project.description}
						tech={project.tech}
					/>
				))}
			</div>
		</main>
	);
}

export default function ProjectsPage() {
	// Draft data for portfolio projects
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
					<div
						key={project.title}
						className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md flex flex-col gap-3 hover:border-zinc-700 transition-colors"
					>
						<h2 className="text-xl font-semibold text-zinc-100">
							{project.title}
						</h2>
						<p className="text-zinc-400 text-sm leading-relaxed flex-1">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{project.tech.map((t) => (
								<span
									key={t}
									className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
								>
									{t}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}

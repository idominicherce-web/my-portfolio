// app/projects/page.tsx
import { projectsData } from "@/app/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
	return (
		<main className="flex-1 max-w-4xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)]">
			<div>
				<h1 className="text-3xl font-bold tracking-tight mb-2 bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
					My Projects
				</h1>
				<p className="text-zinc-400 text-sm">
					A showcase of my software applications, thesis engineering systems,
					and academic work.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
				{projectsData.map((projectItem) => (
					<ProjectCard key={projectItem.slug} project={projectItem} />
				))}
			</div>
		</main>
	);
}

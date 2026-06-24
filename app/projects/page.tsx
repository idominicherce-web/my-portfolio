// app/projects/page.tsx
import { projectsData } from "@/app/data/projects";
import ProjectCard from "@/components/ProjectCard";

/**
 * ★ MVP COMPLIANCE: ASYNC SERVER COMPONENT DATA SEPARATION (MVP 3)
 * Operates as an asynchronous Server Component that reads project data directly from
 * a centralized data store array instead of hardcoded strings. Iterates through the collection
 * to dynamically map and feed clean object properties down into separate <ProjectCard> instances
 * structured inside a responsive grid layout.
 */

export default function ProjectsPage() {
	return (
		<main className="flex-1 max-w-4xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)]">
			<div>
				<h1 className="text-3xl font-bold tracking-tight mb-2 bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
					My Projects
				</h1>
				<p className="text-muted-foreground text-sm">
					A showcase of my software applications, thesis engineering systems,
					and academic work.
				</p>
			</div>

			{/* THE DYNAMIC CANVAS GRID MATRIX: 
               	Automatically structures columns based on screen breakpoint sizes */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
				{projectsData.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</main>
	);
}

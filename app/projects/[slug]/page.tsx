// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projectsData } from "@/app/data/projects";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
	const resolvedParams = await params;
	const currentSlug = resolvedParams.slug;

	// Search the centralized array for a match
	const project = projectsData.find((p) => p.slug === currentSlug);

	if (!project) {
		notFound();
	}

	return (
		<main className="flex-1 max-w-2xl w-full mx-auto p-8 flex flex-col gap-4 justify-center min-h-[calc(100vh-65px)]">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight text-zinc-100">
					{project.title}
				</h1>
				<div className="flex gap-2 flex-wrap">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-400"
						>
							{tag}
						</span>
					))}
				</div>
			</div>

			<hr className="border-zinc-800 my-2" />

			<p className="text-zinc-300 text-sm leading-relaxed">
				{project.description}
			</p>
		</main>
	);
}

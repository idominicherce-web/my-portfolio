import Image from "next/image"; // MVP #8 Requirement: Native Next.js optimization import
import { notFound } from "next/navigation";
import { projectsData } from "@/app/data/projects";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
	const resolvedParams = await params;
	const currentSlug = resolvedParams.slug;

	const project = projectsData.find((p) => p.slug === currentSlug);

	if (!project) {
		notFound();
	}

	return (
		<main className="flex-1 max-w-2xl w-full mx-auto p-8 flex flex-col gap-5 justify-center min-h-[calc(100vh-65px)]">
			{/* Dynamic Header Titles */}
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

			<hr className="border-zinc-800 my-1" />

			{/* MVP #8 Requirement: Image Optimization without raw <img> elements */}
			{project.image && (
				<div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
					<Image
						src={project.image}
						alt={`Simulation mockup visualization interface layout of ${project.title}`}
						width={1200} // Explicit width configuration to preserve layout aspect ratio mapping
						height={675} // Explicit height configuration to mitigate cumulative layout shift (CLS)
						className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
						priority // Informs the framework engine to instantly preload this above-the-fold canvas asset
					/>
				</div>
			)}

			<p className="text-zinc-300 text-sm leading-relaxed mt-2">
				{project.description}
			</p>
		</main>
	);
}

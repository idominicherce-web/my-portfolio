// app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/app/data/projects";
import ProjectHeroLayout from "@/components/ProjectHeroLayout";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
	const resolvedParams = await params;

	if (!resolvedParams?.slug) {
		notFound();
	}

	const currentSlug = resolvedParams.slug;
	const project = projectsData.find((p) => p.slug === currentSlug);

	if (!project) {
		notFound();
	}

	return (
		<ProjectHeroLayout title={project.title} tags={project.tags}>
			{project.image && (
				<div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl group cursor-pointer">
					<Image
						src={project.image}
						alt={`Mockup representation of ${project.title}`}
						width={1200}
						height={675}
						className="w-full h-auto object-cover transition-transform duration-700 ease-out transform scale-100 group-hover:scale-102"
						priority
					/>
				</div>
			)}

			<p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-4 text-justify wrap-break-word scroll-dynamic-text">
				{project.description}
			</p>
		</ProjectHeroLayout>
	);
}

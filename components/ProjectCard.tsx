import Link from "next/link";

export interface ProjectProps {
	title: string;
	description: string;
	tech: string[];
	slug: string; // PATCH: added slug key to the ProjectProps interface to ensure type safety and proper routing in the ProjectCard component
}

export default function ProjectCard({
	title,
	description,
	tech,
	slug,
}: ProjectProps) {
	return (
		<Link
			href={`/projects/${slug}`} // Automatically routes to app/projects/[slug]/page.tsx
			className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md flex flex-col gap-3 hover:border-blue-500/50 hover:bg-zinc-900/60 transition-all group duration-200"
		>
			{/* Project Title (changes color on hover anywhere on the card) */}
			<h2 className="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors flex justify-between items-center">
				{title}
				<span className="text-xs text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200">
					→
				</span>
			</h2>

			{/* Project Description */}
			<p className="text-zinc-400 text-sm leading-relaxed flex-1">
				{description}
			</p>

			{/* Tech Badge Grid Wrapper */}
			<div className="flex flex-wrap gap-2 mt-2">
				{tech.map((t) => (
					<span
						key={t}
						className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
					>
						{t}
					</span>
				))}
			</div>
		</Link>
	);
}

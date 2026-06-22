// components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/app/data/projects";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700/60 transition-colors flex flex-col justify-between gap-4">
			<div className="space-y-2">
				<h2 className="text-lg font-bold text-zinc-100 tracking-tight">
					{project.title}
				</h2>
				<p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
					{project.summary}
				</p>
			</div>

			<div className="flex items-center justify-between gap-2 mt-2">
				<div className="flex gap-1.5 flex-wrap">
					{project.tags.slice(0, 2).map((tag) => (
						<span
							key={tag}
							className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-800"
						>
							{tag}
						</span>
					))}
				</div>

				<Link
					href={`/projects/${project.slug}`}
					className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
				>
					Details &rarr;
				</Link>
			</div>
		</div>
	);
}

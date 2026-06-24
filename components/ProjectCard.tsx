// components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/app/data/projects";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="p-5 rounded-2xl border border-zinc-800 bg-background/20 hover:border-zinc-700/60 transition-colors flex flex-col justify-between gap-4">
			<div className="space-y-2">
				<h2 className="text-lg font-bold text-foreground tracking-tight">
					{project.title}
				</h2>
				<p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
					{project.summary}
				</p>
			</div>

			<div className="flex items-end justify-between gap-4 mt-2">
				<div className="flex gap-1.5 flex-wrap max-w-[70%]">
					{project.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-muted/70 text-foreground border border-border dark:bg-zinc-800/60 dark:border-zinc-800"
						>
							{tag}
						</span>
					))}
				</div>

				<Link
					href={`/projects/${project.slug}`}
					className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 pb-0.5"
				>
					Details &rarr;
				</Link>
			</div>
		</div>
	);
}

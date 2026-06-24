// components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/app/data/projects";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		/* UPDATED: Changed fixed zinc borders to border-border, bg-background/20 to bg-card/40, and enhanced hovers */
		<div className="p-5 rounded-2xl border border-border bg-card/40 hover:border-border/80 hover:shadow-sm transition-all flex flex-col justify-between gap-4 duration-200">
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
							/* UPDATED: Removed hardcoded dark overrides; replaced with a single, highly responsive semantic token class combination */
							className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border transition-colors duration-200"
						>
							{tag}
						</span>
					))}
				</div>

				<Link
					href={`/projects/${project.slug}`}
					/* UPDATED: text-blue-400 -> text-stratpoint-blue (or text-blue-600 dark:text-blue-400 for fallback) */
					className="text-xs font-semibold text-stratpoint-blue hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 pb-0.5 cursor-pointer"
				>
					Details &rarr;
				</Link>
			</div>
		</div>
	);
}

// Define the TypeScript shape for the component's incoming props data
export interface ProjectProps {
	title: string;
	description: string;
	tech: string[];
}

export default function ProjectCard({
	title,
	description,
	tech,
}: ProjectProps) {
	return (
		<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md flex flex-col gap-3 hover:border-zinc-700 transition-colors">
			{/* Project Title */}
			<h2 className="text-xl font-semibold text-zinc-100">{title}</h2>

			{/* Project Description (Flex-1 ensures it pushes the tech tags to the bottom evenly) */}
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
		</div>
	);
}

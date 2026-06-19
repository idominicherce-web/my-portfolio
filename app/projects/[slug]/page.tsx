import Link from "next/link";
import { notFound } from "next/navigation";

// 1. Mock dataset mapping unique slugs to project data
const PROJECTS_DATA: Record<
	string,
	{ title: string; description: string; tech: string[]; role: string }
> = {
	"portfolio-website": {
		title: "Portfolio Website",
		description:
			"A high-performance, responsive portfolio built using Next.js, React 19, Tailwind CSS v4, and Biome.",
		tech: ["Next.js", "React 19", "Tailwind v4", "TypeScript"],
		role: "Full-Stack Developer",
	},
	"task-manager": {
		title: "Intern Task Management System",
		description:
			"A production-ready workspace tracker built to handle intern deliverables during the Stratpoint program.",
		tech: ["Next.js", "TypeScript", "PostgreSQL", "Neon Database"],
		role: "Full-Stack Developer",
	},
};

// 2. Define types for the Next.js dynamic routing parameters context
interface ProjectRouteProps {
	params: Promise<{ slug: string }>;
}

export default async function IndividualProjectPage({
	params,
}: ProjectRouteProps) {
	// 3. Await the async params stream according to React 19 specifications
	const resolvedParams = await params;
	const project = PROJECTS_DATA[resolvedParams.slug];

	// 4. Safely trigger Next.js notFound() fallback if the slug matches nothing in our dataset
	if (!project) {
		notFound();
	}

	return (
		<main className="flex-1 max-w-3xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)]">
			<Link
				href="/projects"
				className="text-xs font-medium text-zinc-500 hover:text-blue-400 transition-colors uppercase tracking-wider mb-2 flex items-center gap-1"
			>
				← Back to Projects
			</Link>

			<div>
				<span className="text-xs font-mono px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-md">
					{project.role}
				</span>
				<h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 text-zinc-100">
					{project.title}
				</h1>
			</div>

			<p className="text-zinc-400 text-sm md:text-base leading-relaxed">
				{project.description}
			</p>

			<div className="border-t border-zinc-800 pt-6">
				<h2 className="text-sm font-semibold text-zinc-300 mb-3">
					Technologies Deployed
				</h2>
				<div className="flex flex-wrap gap-2">
					{project.tech.map((t) => (
						<span
							key={t}
							className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
						>
							{t}
						</span>
					))}
				</div>
			</div>
		</main>
	);
}

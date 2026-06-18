export default function AboutPage() {
	return (
		<main className="flex-1 max-w-3xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)]">
			<div>
				<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
					About Me
				</h1>
				<p className="text-zinc-400 text-sm md:text-base">
					Software Engineer Intern at Stratpoint, specializing in
					high-performance web ecosystems.
				</p>
			</div>

			<div className="flex flex-col gap-4 text-zinc-300 leading-relaxed text-sm md:text-base">
				<p>
					Hello! I am Dominic, a developer dedicated to building clean,
					accessible, and highly scalable user interfaces. Currently, I am
					refining my full-stack engineering skills at Stratpoint, working with
					modern tools like Next.js, React 19, Neon cloud-native databases, and Vercel deployment.
				</p>
				<p>
					My core technical focus involves building responsive frontend systems,
					working with typed codebases using TypeScript, and ensuring
					exceptional delivery standards by using optimized toolchains like
					Biome.
				</p>
			</div>

			<div className="mt-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/30">
				<h2 className="text-lg font-semibold text-zinc-100 mb-3">
					Core Tech Stack
				</h2>
				<div className="flex flex-wrap gap-2">
					{[
						"Next.js (App Router)",
						"React 19",
						"Tailwind v4",
						"TypeScript",
						"Biome",
                        "Neon DB",
                        "Vercel Deployment",
                        "Android Studio",
                        "Unity Game Engine"
					].map((skill) => (
						<span
							key={skill}
							className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</main>
	);
}

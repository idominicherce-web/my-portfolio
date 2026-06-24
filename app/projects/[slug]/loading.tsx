// app/projects/[slug]/loading.tsx

export default function ProjectDetailLoading() {
	return (
		<div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-8 animate-pulse">
			{/* Header Stack Simulator */}
			<div className="flex flex-col items-center space-y-4 text-center">
				{/* Project Title Placeholder */}
				<div className="h-10 w-3/4 md:w-1/2 bg-zinc-800 rounded-xl" />

				{/* Technology Tag Pills Placeholder (Mapping across a few items) */}
				<div className="flex flex-wrap justify-center gap-2 pt-2">
					<div className="h-5 w-16 bg-zinc-800 rounded-md" />
					<div className="h-5 w-24 bg-zinc-800 rounded-md" />
					<div className="h-5 w-28 bg-zinc-800 rounded-md" />
					<div className="h-5 w-20 bg-zinc-800 rounded-md" />
				</div>
			</div>

			{/* Hero Device/Mockup Display Card Simulator */}
			{/* Matches the 1200x675 (16:9 aspect ratio) image frame border precisely */}
			<div className="w-full aspect-video rounded-2xl border border-zinc-800 bg-background/40" />

			{/* Descriptive Narrative Text Stack Simulator */}
			<div className="space-y-3 pt-2">
				<div className="h-4 w-full bg-zinc-800 rounded-md" />
				<div className="h-4 w-full bg-zinc-800 rounded-md" />
				<div className="h-4 w-11/12 bg-zinc-800 rounded-md" />
				<div className="h-4 w-4/5 bg-zinc-800 rounded-md" />
			</div>
		</div>
	);
}

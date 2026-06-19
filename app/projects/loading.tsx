export default function ProjectsLoading() {
	// Create an array of 2 items to render 2 placeholder skeleton cards
	const skeletonCards = [1, 2];

	return (
		<main className="flex-1 max-w-4xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)] animate-pulse">
			{/* Header Title Skeleton Placements */}
			<div>
				<div className="h-9 w-48 bg-zinc-800 rounded-lg mb-3" />
				<div className="h-4 w-96 bg-zinc-900 rounded-md" />
			</div>

			{/* Card Layout Grid Skeleton Placements */}
			<div className="grid md:grid-cols-2 gap-4 mt-4">
				{skeletonCards.map((id) => (
					<div
						key={id}
						className="p-5 rounded-xl border border-zinc-900 bg-zinc-900/20 h-45 flex flex-col gap-4"
					>
						<div className="h-6 w-1/3 bg-zinc-800 rounded-md" />
						<div className="space-y-2 flex-1">
							<div className="h-4 w-full bg-zinc-900 rounded-md" />
							<div className="h-4 w-5/6 bg-zinc-900 rounded-md" />
						</div>
						<div className="flex gap-2">
							<div className="h-6 w-14 bg-zinc-800 rounded-md" />
							<div className="h-6 w-16 bg-zinc-800 rounded-md" />
							<div className="h-6 w-12 bg-zinc-800 rounded-md" />
						</div>
					</div>
				))}
			</div>
		</main>
	);
}

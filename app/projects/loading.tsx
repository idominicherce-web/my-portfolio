// projects/loading.tsx
/**
 * ★ MVP COMPLIANCE: VISUALLY MEANINGFUL SKELETON UI STREAMS (MVP 7)
 * Intercepts Next.js asynchronous route resolution steps to stream immediate visual placeholders.
 * Avoids old-school ambiguous spinning rings by rendering gray pulsing layout approximations
 * that mirror the exact dimensions of incoming text and grid card structures, vastly reducing
 * experienced content-load friction and improving perceived web page speed metrics.
 */
export default function ProjectsLoading() {
	// Create an array of 2 items to render 2 placeholder skeleton cards
	const skeletonCards = [1, 2];

	return (
		<main className="flex-1 max-w-4xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)] bg-background text-foreground animate-pulse transition-colors duration-200">
			{/* Header Title Skeleton Placements */}
			<div>
				{/* UPDATED: Changed bg-zinc-800 -> bg-muted */}
				<div className="h-9 w-48 bg-muted rounded-lg mb-3" />
				{/* UPDATED: Changed bg-background -> bg-muted/50 for optimal visibility on all canvases */}
				<div className="h-4 w-96 bg-muted/50 rounded-md" />
			</div>

			{/* Card Layout Grid Skeleton Placements */}
			<div className="grid md:grid-cols-2 gap-4 mt-4">
				{skeletonCards.map((id) => (
					<div
						key={id}
						/* UPDATED: border-zinc-900 -> border-border | bg-background/20 -> bg-card/60 */
						className="p-5 rounded-xl border border-border bg-card/60 h-45 flex flex-col gap-4 transition-colors duration-200"
					>
						{/* Project Card Header Placeholder */}
						<div className="h-6 w-1/3 bg-muted rounded-md" />

						{/* Project Summary Description Lines Placeholders */}
						<div className="space-y-2 flex-1">
							<div className="h-4 w-full bg-muted/50 rounded-md" />
							<div className="h-4 w-5/6 bg-muted/50 rounded-md" />
						</div>

						{/* Technology Pill Badges Placeholders */}
						<div className="flex gap-2">
							<div className="h-6 w-14 bg-muted rounded-md" />
							<div className="h-6 w-16 bg-muted rounded-md" />
							<div className="h-6 w-12 bg-muted rounded-md" />
						</div>
					</div>
				))}
			</div>
		</main>
	);
}

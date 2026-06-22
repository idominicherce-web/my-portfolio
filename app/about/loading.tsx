export default function AboutLoading() {
	return (
		<main className="flex-1 max-w-3xl w-full mx-auto p-8 flex flex-col gap-6 justify-center min-h-[calc(100vh-65px)]">
			{/* Shimmer Effect Wrapper using Tailwind's native pulse animation */}
			<div className="animate-pulse flex flex-col gap-6">
				{/* Top Small Tag Skeleton */}
				<div className="h-6 w-32 bg-zinc-800 rounded-md" />

				{/* Page Heading Title Skeleton */}
				<div className="space-y-3 mt-2">
					<div className="h-10 w-3/4 bg-zinc-800 rounded-lg" />
					<div className="h-4 w-1/2 bg-zinc-800 rounded-md" />
				</div>

				<hr className="border-zinc-800 my-2" />

				{/* Narrative Paragraph Blocks Skeletons */}
				<div className="space-y-3">
					<div className="h-4 w-full bg-zinc-800 rounded-md" />
					<div className="h-4 w-full bg-zinc-800 rounded-md" />
					<div className="h-4 w-5/6 bg-zinc-800 rounded-md" />
				</div>

				<div className="space-y-3 pt-4">
					<div className="h-4 w-full bg-zinc-800 rounded-md" />
					<div className="h-4 w-4/5 bg-zinc-800 rounded-md" />
				</div>

				{/* Bottom Tech/Tooling Badges Tracker Skeleton */}
				<div className="pt-6 border-t border-zinc-800 space-y-3">
					<div className="h-5 w-40 bg-zinc-800 rounded-md" />
					<div className="flex gap-2 flex-wrap">
						<div className="h-6 w-16 bg-zinc-800 rounded-md" />
						<div className="h-6 w-24 bg-zinc-800 rounded-md" />
						<div className="h-6 w-20 bg-zinc-800 rounded-md" />
						<div className="h-6 w-14 bg-zinc-800 rounded-md" />
					</div>
				</div>
			</div>
		</main>
	);
}

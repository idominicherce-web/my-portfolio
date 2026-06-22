export default function ContactLoading() {
	return (
		<main className="flex-1 max-w-md w-full mx-auto p-8 flex flex-col justify-center min-h-[calc(100vh-65px)] gap-6">
			{/* Shimmer Effect Wrapper using Tailwind's native pulse animation */}
			<div className="animate-pulse flex flex-col gap-6">
				{/* Header Section Skeletons */}
				<div className="space-y-2">
					<div className="h-8 w-48 bg-zinc-800 rounded-lg" />
					<div className="h-4 w-full bg-zinc-800 rounded-md" />
				</div>

				{/* Form Inputs Skeletons */}
				<div className="flex flex-col gap-5 mt-2">
					{/* Email Input Block */}
					<div className="space-y-2">
						<div className="h-3 w-28 bg-zinc-800 rounded-md" />
						<div className="h-11 w-full bg-zinc-800 rounded-xl" />
					</div>

					{/* Message Textarea Block */}
					<div className="space-y-2">
						<div className="h-3 w-28 bg-zinc-800 rounded-md" />
						<div className="h-32 w-full bg-zinc-800 rounded-xl" />
					</div>

					{/* Submit Button Block */}
					<div className="h-11 w-full bg-zinc-800 rounded-xl mt-2" />
				</div>
			</div>
		</main>
	);
}

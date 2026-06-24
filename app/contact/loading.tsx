// contact/loading.tsx
export default function ContactLoading() {
	return (
		<main className="flex-1 max-w-md w-full mx-auto p-8 flex flex-col justify-center min-h-[calc(100vh-65px)] gap-6 bg-background text-foreground transition-colors duration-200">
			{/* Shimmer Effect Wrapper using Tailwind's native pulse animation */}
			<div className="animate-pulse flex flex-col gap-6">
				{/* Header Section Skeletons */}
				<div className="space-y-2">
					{/* UPDATED: bg-zinc-800 -> bg-muted */}
					<div className="h-8 w-48 bg-muted rounded-lg" />
					<div className="h-4 w-full bg-muted/70 rounded-md" />
				</div>

				{/* Form Inputs Skeletons */}
				<div className="flex flex-col gap-5 mt-2">
					{/* Email Input Block */}
					<div className="space-y-2">
						{/* UPDATED: bg-zinc-800 -> bg-muted for labels and fields */}
						<div className="h-3 w-28 bg-muted rounded-md" />
						<div className="h-11 w-full bg-muted rounded-xl" />
					</div>

					{/* Message Textarea Block */}
					<div className="space-y-2">
						<div className="h-3 w-28 bg-muted rounded-md" />
						<div className="h-32 w-full bg-muted rounded-xl" />
					</div>

					{/* Submit Button Block */}
					<div className="h-11 w-full bg-muted rounded-xl mt-2" />
				</div>
			</div>
		</main>
	);
}

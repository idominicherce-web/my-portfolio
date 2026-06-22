"use client";

import { type ReactNode, useEffect, useState } from "react";

interface ProjectHeroLayoutProps {
	title: string;
	tags: string[];
	children: ReactNode;
}

export default function ProjectHeroLayout({
	title,
	tags,
	children,
}: ProjectHeroLayoutProps) {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Calculate interpolation values based on scroll range (0px to 300px)
	const progress = Math.min(scrollY / 300, 1);

	return (
		<div className="w-full min-h-screen flex flex-col items-center">
			{/* Title Section: Starts centered, rolls up smoothly, scales down slightly */}
			<div
				style={{
					paddingTop: `${Math.max(40 - progress * 35, 5)}vh`,
					paddingBottom: `${Math.max(40 - progress * 38, 2)}vh`,
				}}
				className="w-full flex flex-col items-center text-center transition-all duration-75 ease-out will-change-[padding]"
			>
				<div className="max-w-2xl px-8 space-y-4">
					<h1
						style={{ transform: `scale(${1 - progress * 0.15})` }}
						className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 transition-transform duration-75 origin-center"
					>
						{title}
					</h1>

					{/* Centered Tags with dynamic fading opacity */}
					<div
						style={{ opacity: 1 - progress * 0.2 }}
						className="flex gap-2 flex-wrap justify-center items-center transition-opacity duration-75"
					>
						{tags.map((tag) => (
							<span
								key={tag}
								className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 border border-zinc-700 text-zinc-400 shadow-xs"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>

			{/* Content Section: Fades and slides in beautifully below the title on scroll */}
			<div
				style={{
					opacity: progress,
					transform: `translateY(${Math.max(40 - progress * 40, 0)}px)`,
				}}
				className="w-full max-w-2xl px-8 pb-24 transition-all duration-500 ease-out will-change-[transform,opacity]"
			>
				<hr className="border-zinc-800 mb-8" />
				{children}
			</div>
		</div>
	);
}

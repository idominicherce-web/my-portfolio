// components/ProjectHeroLayout.tsx
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
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			if (totalHeight > 0) {
				setScrollProgress(window.scrollY / totalHeight);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Text scaling parameters (scale 0.96 to 1.04)
	const textScale = 0.96 + scrollProgress * 0.08;
	// Parallax translation height constraints
	const titleTranslateY = -scrollProgress * 50;

	return (
		<div className="w-full min-h-screen flex flex-col items-center bg-zinc-950 text-zinc-100 selection:bg-blue-500/30 overflow-x-hidden">
			{/* Parallax Center Title Header Block */}
			<div
				style={{ transform: `translateY(${titleTranslateY}px)` }}
				className="w-full flex flex-col items-center text-center pt-[35vh] pb-[15vh] px-6 md:px-8 will-change-transform transition-transform duration-75 ease-out"
			>
				<div className="max-w-2xl w-full space-y-4 animate-fade-in">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 drop-shadow-md">
						{title}
					</h1>

					<div className="flex gap-2 flex-wrap justify-center items-center">
						{tags.map((tag) => (
							<span
								key={tag}
								className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 shadow-sm"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>

			{/* Main Container Assembly Block */}
			<div className="w-full max-w-3xl px-6 md:px-8 pb-32 flex flex-col gap-8">
				<hr className="border-zinc-900 w-full" />

				<div className="w-full flex flex-col gap-8">
					<div className="w-full">{children}</div>

					{/* Scoped global styles for synchronized text transformation loops */}
					<style jsx global>{`
            .scroll-dynamic-text {
              transform: scale(${textScale});
              transform-origin: top center;
              transition: transform 100ms ease-out;
              will-change: transform;
            }
          `}</style>
				</div>
			</div>
		</div>
	);
}

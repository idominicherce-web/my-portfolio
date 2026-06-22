"use client";

import { type ReactNode, useEffect, useState } from "react";

interface ParallaxHeaderProps {
	children: ReactNode;
}

export default function ParallaxHeader({ children }: ParallaxHeaderProps) {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Speed multiplier: Controls how fast the header moves upwards (0.4 means it floats up at 40% scroll speed)
	const translateY = -scrollY * 0.4;

	return (
		<div
			style={{ transform: `translateY(${translateY}px)` }}
			className="w-full flex flex-col items-center text-center will-change-transform transition-transform duration-75 ease-out"
		>
			{children}
		</div>
	);
}

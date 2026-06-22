// components/ScrollReveal.tsx
"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
	children: ReactNode;
	delay?: string;
}

export default function ScrollReveal({
	children,
	delay = "delay-0",
}: ScrollRevealProps) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsIntersecting(true);
					observer.unobserve(entry.target);
				}
			},
			{
				/* Tweak settings so it triggers immediately when the element's top edge crosses the window boundary */
				threshold: 0,
				rootMargin: "0px 0px -20px 0px",
			},
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`transform transition-all duration-1000 ease-out ${delay} ${
				isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
			}`}
		>
			{children}
		</div>
	);
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext, useRef, type ReactNode } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

// A helper component that "freezes" the visual layout of the exiting route
function FrozenRoute({ children }: { children: ReactNode }) {
	const context = useContext(LayoutRouterContext);
	const frozenContext = useRef(context);

	if (!frozenContext.current && context) {
		frozenContext.current = context;
	}

	return (
		<LayoutRouterContext.Provider value={frozenContext.current}>
			{children}
		</LayoutRouterContext.Provider>
	);
}

/**
 * ★ STRETCH GOAL: FRAMEWORK-DRIVEN ROUTE TRANSITIONS (FIXED EXIT LIFECYCLE)
 * Leverages React 19 Client context and Framer Motion's AnimatePresence lifecycle pipeline.
 * Utilizes a FrozenRoute wrapper to hold the Next.js layout context active during exit animations.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -16 }}
				transition={{
					duration: 0.35, // Snappier duration feels cleaner for page transitions
					ease: [0.16, 1, 0.3, 1],
				}}
				className="flex-1 flex flex-col w-full"
			>
				{/* THE FIX: FrozenRoute prevents Next.js from destroying the old DOM structure instantly */}
				<FrozenRoute>{children}</FrozenRoute>
			</motion.div>
		</AnimatePresence>
	);
}

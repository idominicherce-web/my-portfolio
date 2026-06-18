"use client"; // Required in Next.js App Router to use hooks like useState

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	// A standard React hook to manage the state of a mobile navigation menu
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
			<div className="max-w-5xl mx-auto flex items-center justify-between p-4">
				<Link
					href="/"
					className="font-bold text-lg tracking-tight text-zinc-50"
				>
					DH.
				</Link>

				{/* Desktop Navigation Router Links */}
				<nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
					<Link
						href="/projects"
						className="hover:text-zinc-50 transition-colors"
					>
						Projects
					</Link>
					<Link
						href="/contact"
						className="hover:text-zinc-50 transition-colors"
					>
						Contact
					</Link>
				</nav>

				{/* Mobile Hamburger Button using our Hook state */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-zinc-400 hover:text-zinc-50 focus:outline-hidden"
					aria-label="Toggle Menu"
				>
					<svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24">
						<title>Toggle Mobile Menu</title>
						{isOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Dropdown Mobile Menu controlled seamlessly by the hook */}
			{isOpen && (
				<nav className="md:hidden border-t border-zinc-900 bg-zinc-950 p-4 flex flex-col gap-4 text-sm font-medium text-zinc-400">
					<Link
						href="/projects"
						onClick={() => setIsOpen(false)}
						className="hover:text-zinc-50"
					>
						Projects
					</Link>
					<Link
						href="/contact"
						onClick={() => setIsOpen(false)}
						className="hover:text-zinc-50"
					>
						Contact
					</Link>
				</nav>
			)}
		</header>
	);
}

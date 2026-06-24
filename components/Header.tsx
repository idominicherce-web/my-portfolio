"use client"; // Required in Next.js App Router to use hooks like useState

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" }, // This links directly to app/about/page.tsx
		{ name: "Projects", href: "/projects" },
		{ name: "Contact", href: "/contact" },
	];

	// A standard React hook to manage the state of a mobile navigation menu
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full border-b border-zinc-800 bg-background/80 backdrop-blur-md sticky top-0 z-50">
			<div className="max-w-5xl mx-auto flex items-center justify-between p-4">
				<Link
					href="/"
					className="font-bold text-lg tracking-tight text-foreground"
				>
					DH.
				</Link>

				{/* Desktop Navigation Router Links & Theme Controls */}
				<div className="hidden md:flex items-center gap-6">
					<nav className="flex gap-6 text-sm font-medium text-muted-foreground">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="hover:text-foreground transition-colors"
							>
								{link.name}
							</Link>
						))}
					</nav>

					{/* Desktop Mode Toggle Switch */}
					<div className="border-l border-zinc-800 pl-4">
						<ThemeToggle />
					</div>
				</div>

				{/* Mobile Hamburger Button using our Hook state */}
				<div className="flex items-center gap-4 md:hidden">
					{/* Mobile Mode Toggle Switch (Accessible directly beside hamburger) */}
					<ThemeToggle />

					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="text-muted-foreground hover:text-foreground focus:outline-hidden cursor-pointer"
						aria-label="Toggle Menu"
					>
						<svg
							className="h-6 w-6 fill-none stroke-current"
							viewBox="0 0 24 24"
						>
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
			</div>

			{/* Dropdown Mobile Menu controlled seamlessly by the hook */}
			{isOpen && (
				<nav className="nav-menu md:hidden border-t border-zinc-900 bg-background p-4 flex flex-col gap-4 text-sm font-medium text-muted-foreground">
					<Link href="/" onClick={() => setIsOpen(false)}>
						Home
					</Link>
					<Link href="/about" onClick={() => setIsOpen(false)}>
						About
					</Link>
					<Link
						href="/projects"
						onClick={() => setIsOpen(false)}
						className="hover:text-foreground"
					>
						Projects
					</Link>
					<Link
						href="/contact"
						onClick={() => setIsOpen(false)}
						className="hover:text-foreground"
					>
						Contact
					</Link>
				</nav>
			)}
		</header>
	);
}

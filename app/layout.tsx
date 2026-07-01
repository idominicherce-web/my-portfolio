import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Dominic Herce | Portfolio",
	description: "Software Engineer Intern at Stratpoint",
};

/**
 * ★ MVP COMPLIANCE: SHARED LAYOUT HIERARCHY (MVP 2)
 * Acts as the root template boundary for the entire application wrapper.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				"font-sans",
				inter.variable,
			)}
			suppressHydrationWarning
		>
			<body className="bg-background text-foreground min-h-full flex flex-col font-sans transition-colors duration-200">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					<Header />
					{/* STRETCH GOAL: Framer Motion global page transitions wrapper mounted below static navigation elements */}
					<div className="flex-1 flex flex-col">
						<PageTransition>{children}</PageTransition>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="bg-zinc-950 text-zinc-50 min-h-full flex flex-col font-sans">
				{/* The Header is now global and will render on every page route */}
				<Header />

				{/* The main wrapper ensures pages grow dynamically but always fill the screen */}
				<div className="flex-1 flex flex-col">{children}</div>
			</body>
		</html>
	);
}
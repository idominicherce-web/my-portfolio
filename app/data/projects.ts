// app/data/projects.ts

export interface Project {
	slug: string;
	title: string;
	summary: string;
	description: string;
	tags: string[];
	image: string;
}

export const projectsData: Project[] = [
	{
		slug: "side-collision-avoidance-hud",
		title: "Side Collision Avoidance HUD",
		summary:
			"An automotive Heads-Up Display concept designed for side collision warning systems.",
		description:
			"Research and UI design for a vehicle HUD overlay that utilizes blind-spot telemetry to provide real-time side-impact mitigation cues directly within the driver's forward field of view.",
		tags: [
			"Unity Game Engine",
			"C# Programming",
			"Automotive Systems",
			"HUD Design",
			"UI/UX",
		],
		image: "/images/side-collision-hud.png", // ── Path mapping points to the public folder asset
	},
];

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
			"Developed a real-time driver assistance system using the Unity Game Engine and C# to mitigate blind-spot and lane-merging accidents through an immersive Heads-Up Display (HUD). The project involved designing and scripting a dynamic vehicular telemetry overlay that projects predictive side-impact warning cues directly within the driver’s primary line of sight. To ensure optimal cognitive load, legibility, and human-factors safety, the visual display and alert iconography were designed strictly in accordance with ISO automotive standards for ergonomics and driver-information systems. The system was validated within a simulated 3D driving environment, demonstrating a measurable reduction in situational response times.",
		tags: [
			"Unity Game Engine",
			"C# Programming",
			"Automotive Systems",
			"HUD Design",
			"UI/UX",
		],
		image: "/images/side-collision-hud.png", // ── Path mapping points to the public folder asset
	},
	{
		slug: "parkr-reservation-app",
		title: "Parkr: Smart Parking Reservation App",
		summary:
			"A mobile application UI designed to streamline and automate real-time slot bookings in commercial malls.",
		description:
			"Designed a comprehensive cross-platform mobile application interface for hassle-free slot bookings. Implemented custom telemetry maps, instantaneous parking tier selection structures, secure localized payment gateways, and live QR confirmation tokens for modern smart-city infrastructure.",
		tags: [
			"Mobile App",
			"Android Studio",
			"Kotlin Programming",
			"UI/UX Design",
			"Figma",
			"Smart Cities",
		],
		image: "/images/parkr-ad.png",
	},
	{
		slug: "hospital-management-system",
		title: "Hospital Management System",
		summary:
			"A comprehensive medical record system focusing on functional software engineering and secure backend logic.",
		description:
			"Built a robust  record management web application from the ground up. Focused on translating stakeholder requirements into actionable object-oriented designs, modeling domain use cases, and implementing complex backend business logic to ensure reliable and concurrent transaction stability.",
		tags: ["Java", "OOP", "Software Engineering", "Database Design"],
		image: "/images/hospital-management.png",
	},
	{
		slug: "student-gpa-predictor",
		title: "Student GPA Predictor",
		summary:
			"A machine learning pipeline utilizing classical regression models and decision trees to predict academic performance.",
		description:
			"Built an end-to-end predictive analytics pipeline to estimate college student GPAs based on demographic and academic indicators. Conducted extensive Exploratory Data Analysis (EDA) and data preprocessing—including handling missing data, outlier detection, and feature scaling. Evaluated and optimized multiple classical machine learning architectures, ranging from Linear Regression to ensemble methods like Decision Trees and Random Forests, to maximize model accuracy.",
		tags: ["Python", "Scikit-Learn", "NumPy", "Machine Learning", "EDA"],
		image: "/images/gpa-predictor.jpg",
	},
];

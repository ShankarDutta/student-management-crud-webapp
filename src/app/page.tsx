import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Student Management CRUD App",
	description:
		"Student Management CRUD Web App built with Next.js. The home page shows student cards with options to edit or delete student details. Fast, clean, and responsive interface for managing student records.",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<div className="space-y-2 text-center">
				<h1 className="text-5xl font-semibold">Home page</h1>
				<h2 className="text-3xl">Student Management Crud Web app</h2>
			</div>
		</section>
	);
};

export default page;

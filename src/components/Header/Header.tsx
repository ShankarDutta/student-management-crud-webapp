import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SidebarTrigger } from "../shadcnui/sidebar";
import ThemeToggleButton from "../ThemeToggleButton";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header
			aria-label="app-header"
			className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				<SidebarTrigger className="mt-1.5 hidden cursor-pointer md:flex" />
				<Logo />
			</div>

			{/* desktop nav  */}
			<nav className="hidden md:flex md:items-center md:gap-3">
				<a
					className="flex items-center gap-2 hover:text-blue-400"
					href="https://www.linkedin.com/in/mrshankardutta/"
					target="_blank"
					aria-label="Linkdin-profile-Link">
					<IoLogoLinkedin size={20} />
					180+
				</a>

				<a
					className="flex items-center gap-2 border-r-2 border-l-2 border-black/65 px-4 hover:text-blue-400 dark:border-white/55"
					href="https://github.com/ShankarDutta/student-management-crud-webapp"
					target="_blank"
					aria-label="Github-Repo-Link">
					<FaGithub size={20} />
					12.5k
				</a>

				<ThemeToggleButton />
			</nav>

			{/* mobile nav  */}
			<nav className="flex items-center gap-2 md:hidden">
				<ThemeToggleButton />
				<MobileNav />
			</nav>
		</header>
	);
};

export default Header;

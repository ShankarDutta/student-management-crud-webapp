import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";
import Logo from "./Logo";

const Header = () => {
	return (
		<header
			className="fixed right-0 left-0 border-b shadow"
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<div className="flex items-center gap-1">
					<Logo />
					<ThemeToggleButton />
				</div>
				<nav className="flex items-center gap-4">
					<Link href={"/"}>Home</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;

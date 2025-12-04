import Image from "next/image";
import Link from "next/link";
import { AuroraText } from "../magicui/aurora-text";

const Logo = () => {
	return (
		<Link
			href={"/"}
			aria-label="App-Logo "
			className="flex items-center">
			<AuroraText className="mt-1.5 text-2xl font-semibold">CRUD</AuroraText>
			<Image
				src={"/i.png"}
				alt="logoX"
				height={350}
				width={350}
				className="h-[40] w-auto"
			/>
		</Link>
	);
};

export default Logo;

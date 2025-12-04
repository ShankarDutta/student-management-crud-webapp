import DesktopSideBar from "@/components/Header/DesktopSideBar";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { SidebarProvider } from "@/components/shadcnui/sidebar";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<SidebarProvider>
						<DesktopSideBar />
						<main className="mx-auto w-full px-3 py-3 md:px-6">
							<Header />

							{children}
						</main>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;

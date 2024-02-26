import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import HeaderImage from "@/components/HeaderImage";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/lib/next-auth/NextAuthProvider";
import QueryClientProvider from "@/lib/react-query/QueryClientProvider";

const prompt = Prompt({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	preload: true,
	style: ["normal", "italic"],
	subsets: ["latin-ext", "thai"],
})

export const metadata: Metadata = {
	title: "Portfoliio",
	description: "Portfoliio application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="th">
			<body className={prompt.className}>
				<NextAuthProvider>
					<QueryClientProvider>
						<HeaderImage />
						<div className="px-4">
							{children}
						</div>
						<Footer />
					</QueryClientProvider>
				</NextAuthProvider>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const interTight = Inter_Tight({
	variable: "--font-inter-tight",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Prgmaz Portfolio",
	description: "Driven by innovation, Drive by strategy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${interTight.variable} antialiased font-sans`}
			>
				{children}
			</body>
		</html>
	);
}

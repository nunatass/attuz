import { SFTSchriftedSans } from "@/fonts"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "ATTUZ Cognitive Booster",
	description: "Fuel Your Creativity with Mental Clarity & Focus.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${SFTSchriftedSans.className} antialiased`}>
				{/* <Hydration>{children}</Hydration> */}
				{children}
			</body>
		</html>
	)
}

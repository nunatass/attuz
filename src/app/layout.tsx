import { SFTSchriftedSans } from "@/fonts"
import type { Metadata } from "next"
import "./globals.css"
import { Footer } from "@/components/layouts/footer"

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
			<body className={`${SFTSchriftedSans.className} antialiased`} style={{}}>
				{/* <Hydration>{children}</Hydration> */}
				{children}
				<Footer />
			</body>
		</html>
	)
}

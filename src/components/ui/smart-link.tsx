"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Link as ScrollLink } from "react-scroll"
export function SmartLink({ to, children, ...props }: { to: string; children: React.ReactNode }) {
	const pathname = usePathname()
	const isHome = pathname === "/"

	if (to.startsWith("#")) {
		const target = to.replace("#", "")
		return isHome ? (
			<ScrollLink to={target} smooth={true} offset={-50} duration={1000} {...props}>
				{children}
			</ScrollLink>
		) : (
			<Link href={`/${to}`} {...props}>
				{children}
			</Link>
		)
	}

	return (
		<Link href={to} {...props}>
			{children}
		</Link>
	)
}

"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { Link as ScrollLink } from "react-scroll"

type SmartLinkProps = {
	to: string
	offset?: number
	children: React.ReactNode
	className?: string
}
export function SmartLink({ to, offset = -50, children, className, ...props }: SmartLinkProps) {
	const pathname = usePathname()
	const isHome = pathname === "/"

	if (to.startsWith("#")) {
		const target = to.replace("#", "")
		return isHome ? (
			<ScrollLink to={target} smooth={true} offset={offset} duration={1000} {...props}>
				{children}
			</ScrollLink>
		) : (
			<NextLink href={`/${to}`} className={className} {...props}>
				{children}
			</NextLink>
		)
	}

	return (
		<NextLink href={to} className={className} {...props}>
			{children}
		</NextLink>
	)
}

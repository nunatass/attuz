"use client"

import { useSticky } from "@/hooks/use-sticky"
import { useWindowSize } from "@/hooks/use-window-size"
import { cn } from "@/lib/utils"
import { MenuIcon, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import logo from "../../../public/logo.png"
import { SideMenu } from "../layouts/side-menu"
import { SidePanel } from "../side-panel"
import { Button } from "../ui/button"
import { DiscountBanner } from "./discounts-banner"

export function Header() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const { width } = useWindowSize()
	const { sticky } = useSticky(40)

	const handleMenuClick = useCallback(() => {
		if (width <= 640) {
			setIsSideMenuOpen(true)
		}
	}, [width, setIsSideMenuOpen])

	return (
		<div className="relative w-screen z-30 overflow-x-hidden">
			<div className="w-full h-10 bg-[#8DAA9D] justify-center flex items-center">
				<DiscountBanner />
			</div>
			<header
				className={cn(
					"flex h-14 justify-between items-center w-full px-4 lg:px-16 border-0 bg-white",
					sticky &&
						"fixed -top-[60px] left-0 translate-y-14 shadow-sm transition-all duration-700 ease-in-out border-b-1",
				)}
			>
				<ScrollLink to="home" smooth={true} offset={-50} duration={500}>
					<Image src={logo} height={80} width={80} alt="Attuz logo" className="cursor-pointer" />
				</ScrollLink>
				<nav>
					<ul className="gap-8 hidden sm:flex">
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<ScrollLink to="home" smooth={true} offset={-50} duration={500}>
								Home
							</ScrollLink>
						</li>
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<Link href="#">About us</Link>
						</li>
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<ScrollLink to="home-faqs" smooth={true} offset={-50} duration={500}>
								Faqs
							</ScrollLink>
						</li>
					</ul>
				</nav>

				<Button variant="ghost" className="flex gap-4 justify-center items-center -mr-3" onClick={handleMenuClick}>
					<ShoppingCart size={16} className="hidden sm:flex" />
					<MenuIcon size={24} className="sm:hidden flex" />
					<span className="hidden sm:flex">Cart</span>
				</Button>
			</header>
			<SidePanel isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen}>
				<SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
			</SidePanel>
		</div>
	)
}

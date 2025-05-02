"use client"

import logo from "@/../public/logo.png"
import { useSticky } from "@/hooks/use-sticky"
import { cn } from "@/lib/utils"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { SideCart } from "../layouts/side-cart"
import { SidePanel } from "../side-panel"
import { Button } from "../ui/button"
import { DiscountBanner } from "./discounts-banner"

export function Header() {
	const [isSideCartOpen, setIsSideCartOpen] = useState(false)
	const { sticky } = useSticky(40)

	const handleCartClick = useCallback(() => {
		setIsSideCartOpen(true)
	}, [setIsSideCartOpen])

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
							<Link href="/about-us">About Us</Link>
						</li>
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<ScrollLink to="home-faqs" smooth={true} offset={-50} duration={500}>
								FAQs
							</ScrollLink>
						</li>
					</ul>
				</nav>
				<div className="flex">
					<Button variant="ghost" className="flex justify-center items-center rounded-full" onClick={handleCartClick}>
						<ShoppingBag size={24} />
					</Button>
				</div>
			</header>
			<SidePanel isOpen={isSideCartOpen} setIsOpen={setIsSideCartOpen}>
				<SideCart isOpen={isSideCartOpen} setIsOpen={setIsSideCartOpen} />
			</SidePanel>
		</div>
	)
}

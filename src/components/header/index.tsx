"use client"

import { useWindowSize } from "@/hooks/use-window-size"
import { MenuIcon, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCallback, useState } from "react"
import { SideMenu } from "../layouts/side-menu"
import { SidePanel } from "../side-panel"
import { Button } from "../ui/button"

export function Header() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const { width } = useWindowSize()

	const handleMenuClick = useCallback(() => {
		if (width <= 640) {
			setIsSideMenuOpen(true)
		}
	}, [width, setIsSideMenuOpen])

	return (
		<div className="relative">
			<header className="flex h-14 justify-between items-center w-screen px-6 lg:px-16 shadow-sm">
				<div>Logo</div>
				<nav>
					<ul className="gap-8 hidden sm:flex">
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<Link href="#">Home</Link>
						</li>
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<Link href="#">About us</Link>
						</li>
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<Link href="#">Faqs</Link>
						</li>
					</ul>
				</nav>

				<Button variant="ghost" className="flex gap-4 justify-center items-center" onClick={handleMenuClick}>
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

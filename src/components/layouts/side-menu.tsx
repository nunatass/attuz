"use client"

import { XIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import logo from "../../../public/logo.png"
import { DiscountBanner } from "../header/discounts-banner"
import { Button } from "../ui/button"

import { useCallback } from "react"

type SideMenuProps = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export function SideMenu({ setIsOpen }: SideMenuProps) {
	const handleCloseMenu = useCallback(() => {
		setIsOpen(false)
	}, [setIsOpen])

	return (
		<div className="flex flex-col">
			<div className="w-full h-10 bg-[#8DAA9D] justify-center flex items-center">
				<DiscountBanner />
			</div>
			<div className="flex flex-col gap-4 p-4">
				<div className="flex justify-between items-center">
					<ScrollLink to="home" smooth={true} offset={-50} duration={1000} onClick={handleCloseMenu}>
						<Image src={logo} height={80} width={80} alt="Attuz logo" className="cursor-pointer" />
					</ScrollLink>
					<Button variant="ghost" onClick={handleCloseMenu} className="-mr-3">
						<XIcon size={16} aria-label="close icon" />
					</Button>
				</div>
				<nav>
					<ul className="gap-4 flex flex-col">
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<ScrollLink to="home" smooth={true} offset={-50} duration={1000} onClick={handleCloseMenu}>
								Home
							</ScrollLink>
						</li>
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<Link href="#" onClick={handleCloseMenu}>
								About us
							</Link>
						</li>
						<li className="hover:font-semibold transition-colors duration-300 cursor-pointer">
							<ScrollLink to="home-faqs" smooth={true} offset={-50} duration={1000} onClick={handleCloseMenu}>
								Faqs
							</ScrollLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

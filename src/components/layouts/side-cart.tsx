"use client"

import logo from "@/../public/logo.png"
import { XIcon } from "lucide-react"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { Button } from "../ui/button"

import { useCallback } from "react"

type SideCartProps = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export function SideCart({ setIsOpen }: SideCartProps) {
	const handleCloseCart = useCallback(() => {
		setIsOpen(false)
	}, [setIsOpen])

	return (
		<div className="flex flex-col overflow-hidden">
			<div className="flex flex-col gap-4 p-4">
				<div className="flex justify-between items-center">
					<ScrollLink to="home" smooth={true} offset={-50} duration={1000} onClick={handleCloseCart}>
						<Image src={logo} height={80} width={80} alt="Attuz logo" className="cursor-pointer" />
					</ScrollLink>
					<Button variant="ghost" onClick={handleCloseCart} className="-mr-3">
						<XIcon size={24} aria-label="close icon" />
					</Button>
				</div>
			</div>
		</div>
	)
}

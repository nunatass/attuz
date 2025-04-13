import { XIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

type SideMenuProps = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export function SideMenu({ setIsOpen }: SideMenuProps) {
	const handleCloseMenu = () => {
		setIsOpen(false)
	}

	return (
		<div className="flex flex-col p-4 gap-8">
			<div className="flex justify-between items-center">
				<div>logo</div>
				<Button variant="ghost" onClick={handleCloseMenu}>
					<XIcon size={16} aria-label="close icon" />
				</Button>
			</div>
			<nav>
				<ul className="gap-4 flex flex-col">
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
		</div>
	)
}

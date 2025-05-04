import Image from "next/image"

import logo from "@/../public/logo.png"
import { footerData } from "@/data/footer"
import { Mail } from "lucide-react"
import Link from "next/link"
import paymentOptionImg from "../../../public/payments-icons.svg"
import { SmartLink } from "../ui/smart-link"

export function Footer() {
	return (
		<footer className="z-[50] bg-[#8DAA9D] flex first-letter justify-center text-gray-900">
			<div className="container flex flex-col gap-8 px-6 py-10 md:py-20">
				<div className="grid grid-cols-1 justify-between gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:flex">
					<div className="flex flex-col gap-4">
						<SmartLink to="#home" aria-label="logo">
							<Image src={logo} alt="logo" className="w-28 lg:w-44 cursor-pointer" />
						</SmartLink>

						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-2">
									<Mail size={16} />
									<p className="text-sm transition-all duration-300 ease-in-out">
										We are available 24/7 at
										<Link href="/contact"> support@attuz.com</Link>
									</p>
								</div>
							</div>
						</div>
						<div className="flex max-w-md flex-col gap-6">
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-2">
									<p className="text-[13px] transition-all duration-300 ease-in-out md:text-sm">
										Food supplements are not a substitute for a balanced and varied diet and a healthy lifestyle. Do not
										exceed the indicated daily intake. Keep out of reach of children. Please inform and consult your
										doctor before consuming this product. Not suitable for children and adolescents under 18 years,
										pregnant or breastfeeding women.
									</p>
								</div>
							</div>
						</div>
					</div>

					{footerData.map(data => (
						<div key={data.title} className="flex flex-col gap-2">
							<h4 className="text-xl font-semibold">{data.title}</h4>
							<ul className="flex flex-col gap-4 text-sm">
								{data.menu.map(item => (
									<li
										key={item.label}
										className="transition-all duration-300 ease-in-out md:hover:text-gray-50 cursor-pointer"
									>
										<SmartLink
											to={item.link}
											aria-label={item.label}
											offset={item.link === "#write-review" ? -85 : -50}
										>
											{item.label}
										</SmartLink>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="border-t-[1px] border-primary/40 py-4 w-full">
					<div className="flex flex-col items-center gap-y-8 lg:flex-row lg:justify-between ">
						<div className="font-md text-center lg:text-left">
							<p>© {new Date().getFullYear()} ATTUZ Cognitive Booster™. All Rights Reserved.</p>
						</div>
						<Image src={paymentOptionImg} alt="pay" className="w-96" />
					</div>
				</div>
			</div>
		</footer>
	)
}

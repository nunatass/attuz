"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"
export function HelpBanner() {
	return (
		<section className="w-screen h-[30vh] md:h-[40vh] bg-primary flex justify-center items-center text-white flex-col gap-8">
			<p className="text-2xl lg:text-6xl px-4 text-center">Welcome! How can we help you?</p>
			<Link href="/#home-faqs">
				<Button className="h-10 md:h-11 w-44 md:w-80 rounded-full flex  justify-between px-6 bg-white hover:bg-[#8DAA9D] transition-colors duration-200 text-black hover:text-white group relative">
					<ChevronRight
						size={16}
						aria-hidden="true"
						className=" absolute right-4 group-hover:translate-x-1 transition-all duration-200"
					/>
					FAQs
				</Button>
			</Link>
		</section>
	)
}

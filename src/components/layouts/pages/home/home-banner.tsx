"use client"
import { Button } from "@/components/ui/button"
import { useSticky } from "@/hooks/use-sticky"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import React from "react"
import { Link as ScrollLink } from "react-scroll"

export function HomeBanner() {
	const { sticky } = useSticky()
	return (
		<section id="home" className={cn("w-screen h-screen overflow-hidden bg-[#f6f5f1] border-1", sticky && "mt-14")}>
			<div className="h-full w-full relative">
				<video
					className="w-full h-full object-cover z-0"
					autoPlay
					loop
					playsInline
					muted
					preload="auto"
					poster="/your-poster-image.jpg"
				>
					<source
						src="https://cdn.sanity.io/files/jf30o7wb/production/9087ac8a58e366fe595536400b9e2967a55184aa.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="flex flex-col p-2 md:p-4 absolute z-10 left-4 md:left-14 bottom-28 text-white md:max-w-2xl w-full gap-4">
					<h4 className="text-4xl md:lg:text-5xl lg:text-7xl">Your daily nutrient boost</h4>
					<p className="text-sm md:text-lg w-full pr-4">
						Attuz got everything you need to go all-inº – thanks to our science-backed formula packed with vitamins,
						minerals, and a blend of botanicals.
					</p>
					<ScrollLink to="product-details" smooth={true} offset={-50} duration={500}>
						<Button className="h-10 md:h-11 w-44 md:w-80 rounded-full flex  justify-between px-6 bg-white hover:bg-primary transition-colors duration-200 text-black hover:text-white group relative">
							<ChevronRight
								size={16}
								aria-hidden="true"
								className=" absolute right-4 group-hover:translate-y-1 transition-all duration-200 rotate-90"
							/>
							SHOP NOW
						</Button>
					</ScrollLink>
				</div>
			</div>
		</section>
	)
}

"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { reviews } from "@/data/home-reviews"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRef } from "react"
import { ReviewForm } from "./review-form"
import { ReviewItem } from "./review-item"
export function ReviewArea() {
	const carouselPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

	return (
		<div className="flex w-full flex-col items-center">
			<Image alt="trustpilot" width={400} height={40} src="/trustpilot-header.webp" />
			<p className="pb-4 text-sm">Verified 4.6-star reviews*</p>
			<Carousel
				className="w-full"
				opts={{ loop: true }}
				plugins={[carouselPlugin.current]}
				onMouseEnter={carouselPlugin.current.stop}
				onMouseLeave={carouselPlugin.current.reset}
			>
				<CarouselContent>
					{reviews.map(review => (
						<CarouselItem className="basis-1/1 md:w-md w-full md:basis-1/2 lg:w-full lg:basis-1/3" key={review.id}>
							<ReviewItem review={review} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="w-full mt-8" id="write-review">
				<ReviewForm />
			</div>
		</div>
	)
}

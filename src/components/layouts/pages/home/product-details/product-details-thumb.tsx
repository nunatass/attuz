"use client"

import { Button } from "@/components/ui/button"
import { useWindowSize } from "@/hooks/use-window-size"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { useCallback, useState } from "react"

type ProductDetailsThumbProps = {
	imageURLs: string[]
	imgWidth?: number
	imgHeight?: number
}

export function ProductDetailsThumb({ imageURLs, imgWidth = 416, imgHeight = 480 }: ProductDetailsThumbProps) {
	const [activeIndex, setActiveIndex] = useState(0)
	const [direction, setDirection] = useState(0) // 1 for right, -1 for left
	const { width } = useWindowSize()
	const handleImageActive = useCallback(
		(_item: string, index: number) => {
			setDirection(index > activeIndex ? 1 : -1)
			setActiveIndex(index)
		},
		[activeIndex, setActiveIndex, setDirection],
	)

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 500 : -500,
		}),
		center: {
			x: 0,
		},
		exit: (direction: number) => ({
			x: direction > 0 ? -500 : 500,
		}),
	}

	const transition = {
		duration: 0.4,
		ease: "easeInOut",
	}

	return (
		<>
			<div
				className={cn(
					"flex flex-col-reverse gap-4 w-full lg:max-w-[540px] ",
					width > 720 && width < 1020 && "flex-row-reverse w-full",
				)}
			>
				<nav className={cn("flex gap-4", width > 720 && width < 1020 && "flex-col")}>
					{imageURLs
						?.slice(0, width > 750 ? imageURLs?.length : imageURLs?.length > 4 ? 4 : imageURLs?.length)
						.map((item, index) => (
							<Button
								variant="ghost"
								key={item}
								className={cn(
									"h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] bg-gray-100 p-0 transition-all duration-300 ease-in-out rounded-lg overflow-hidden",
									width > 720 && width < 1020 && "h-[80px] w-[80px]",
									imageURLs[activeIndex] === item && "",
								)}
								onClick={() => handleImageActive(item, index)}
							>
								<Image
									src={`${item}`}
									alt="image"
									width={78}
									height={100}
									style={{ width: "100%", height: "100%" }}
									priority
								/>
							</Button>
						))}
				</nav>
				<div
					className={cn(
						"flex items-center justify-center lg:w-[50vw] max-w-[540px] w-full aspect-square overflow-hidden rounded-lg",
						width > 720 && width < 1020 && "w-full max-w-full",
					)}
				>
					<motion.div
						key={imageURLs[activeIndex]}
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={transition}
						className="relative h-full w-full overflow-hidden"
					>
						<Image
							src={imageURLs[activeIndex]}
							alt="product img"
							width={imgWidth}
							height={imgHeight}
							className="h-full w-full object-cover overflow-hidden"
							priority
						/>
					</motion.div>
				</div>
			</div>
		</>
	)
}

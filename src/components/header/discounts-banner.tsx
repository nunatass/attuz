// import { DeliveryIcon, DiscountIcon } from "@/components/icons"

// import { useCurrency } from "@/hooks/use-currency"
import { Car, TicketPercent, User } from "lucide-react"
import Slider from "react-infinite-logo-slider"

// const freeShippingThreshold = Number(process.env.NEXT_PUBLIC_SHIPPING_THRESHOLD) || 6000

export function DiscountBanner() {
	// const { symbol } = useCurrency()
	return (
		<Slider width="500px" duration={30} pauseOnHover blurBorders>
			<Slider.Slide>
				<div className="flex items-center justify-center text-sm w-full gap-2 ">
					<Car size={16} aria-hidden="true" className="size-6" />
					Free express delivery on orders £45+
				</div>
			</Slider.Slide>
			<Slider.Slide>
				<div className="flex items-center justify-center text-sm w-full gap-2">
					<TicketPercent size={16} aria-hidden="true" className="size-6" />
					Subscribe and save 10%
				</div>
			</Slider.Slide>
			<Slider.Slide>
				<div className="flex items-center justify-center text-sm w-full gap-2">
					<User size={16} aria-hidden="true" className="size-6" />
					Refer a friend and get £15 off
				</div>
			</Slider.Slide>
		</Slider>
	)
}

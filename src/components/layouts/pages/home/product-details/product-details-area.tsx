import { TextBanner } from "../text-banner"
import { ProductDetailsInfo } from "./product-details-info"
import { ProductDetailsThumb } from "./product-details-thumb"

export function ProductDetailsArea() {
	return (
		<section
			id="product-details"
			className="w-screen flex flex-col gap-20 justify-start items-center bg-[#f6f5f1] lg:pt-24 pt-6 px-4"
		>
			<div className="w-full h-max flex flex-col lg:flex-row items-start gap-6 lg:gap-12 sm:container lg:justify-center">
				<ProductDetailsThumb
					imgWidth={512}
					imgHeight={512}
					imageURLs={["https://attuz.vercel.app/ref2.png", "https://attuz.vercel.app/ref1.png"]}
				/>
				<ProductDetailsInfo />
			</div>
			<TextBanner text="Nature-Enhanced Hydration for Performance." />
		</section>
	)
}

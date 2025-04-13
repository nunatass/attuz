import { ProductDetailsInfo } from "./product-details-info"
import { ProductDetailsThumb } from "./product-details-thumb"

export function ProductDetails() {
	return (
		<section className="w-full h-full flex flex-col lg:flex-row items-start gap-6 lg:gap-12 sm:container  lg:justify-center">
			<ProductDetailsThumb
				imgWidth={512}
				imgHeight={512}
				imageURLs={["https://attuz.vercel.app/ref2.png", "https://attuz.vercel.app/ref1.png"]}
			/>
			<ProductDetailsInfo />
		</section>
	)
}

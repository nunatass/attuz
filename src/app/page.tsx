import { Header } from "@/components/header"
import { HomeBanner } from "@/components/layouts/pages/home/home-banner"
import { ProductDetails } from "@/components/layouts/pages/home/product-details/product-details"
import { ProductDiferencial } from "@/components/layouts/pages/home/product-diferencial"
import { ReviewArea } from "@/components/layouts/pages/home/reviews/reviews-area"
import { Wrapper } from "@/components/wrapper"

export default function HomePage() {
	return (
		<div className="container w-screen min-h-screen bg-gray-50">
			<Header />
			<HomeBanner />
			<Wrapper className="w-screen flex justify-center items-center flex-col gap-8 overflow-x-hidden pt-0 lg:pt-0">
				<ProductDetails />
				<ProductDiferencial />
				<ReviewArea />
			</Wrapper>
		</div>
	)
}

import { Header } from "@/components/header"
import FAQsArea from "@/components/layouts/pages/home/faqs-area"
import { HomeBanner } from "@/components/layouts/pages/home/home-banner"
import { ProductDetailsArea } from "@/components/layouts/pages/home/product-details/product-details-area"
import { ProductDiferencialArea } from "@/components/layouts/pages/home/product-diferencial-area"
import { ReviewArea } from "@/components/layouts/pages/home/reviews/reviews-area"
import { Wrapper } from "@/components/wrapper"

export default function HomePage() {
	return (
		<div className="container w-screen min-h-screen bg-gray-50">
			<Header />
			<HomeBanner />
			<Wrapper className="w-screen flex justify-center items-center flex-col gap-8 overflow-x-hidden pt-0 lg:pt-0">
				<ProductDetailsArea />
				<ProductDiferencialArea />
				<FAQsArea />
				<ReviewArea />
			</Wrapper>
		</div>
	)
}

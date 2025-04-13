import { Header } from "@/components/header"
import { TextBanner } from "@/components/layouts/pages/home/TextBanner"
import { ProductDetails } from "@/components/layouts/pages/home/product-details/product-details"
import { Wrapper } from "@/components/wrapper"

export default function HomePage() {
	return (
		<div className="container w-screen h-screen">
			<Header />
			<Wrapper className="w-screen flex justify-center items-center flex-col gap-8">
				<ProductDetails />
				<TextBanner text="Nature-Enhanced Hydration for Performance." />
			</Wrapper>
		</div>
	)
}

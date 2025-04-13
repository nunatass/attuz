import { Header } from "@/components/header"
import { ProductDetails } from "@/components/layouts/pages/home/product-details/product-details"
import { Wrapper } from "@/components/wrapper"

export default function HomePage() {
	return (
		<div className="container w-screen h-screen">
			<Header />
			<Wrapper className="w-screen flex justify-center items-center flex-col gap-8">
				<ProductDetails />
			</Wrapper>
		</div>
	)
}

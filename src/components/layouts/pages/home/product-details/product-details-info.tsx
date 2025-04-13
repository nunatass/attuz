import { ProductDetailsForm } from "@/components/layouts/forms/product-details-form"

export function ProductDetailsInfo() {
	return (
		<div className="h-full w-full lg:max-w-[540px]">
			<div className="flex flex-col w-full text-wrap gap-4">
				<h1 className="text-4xl lg:text-5xl font-semibold leading-snug text-wrap w-full">ATTUZ Cognitive Booster™</h1>
				<div className="flex flex-col gap-2">
					<h3 className="text-lg font-semibold">Fuel Your Creativity with Mental Clarity & Focus.</h3>
					<p>
						ATTUZ delivers a powerful mushroom complex designed specifically for creative professionals. Combining 10
						premium mushroom extracts, it ensures enhanced cognitive function and creative resilience for intense work
						sessions and creative marathons.
					</p>
					<ProductDetailsForm flavors={[{ id: "teste", value: "teste" }]} />
				</div>
			</div>
		</div>
	)
}

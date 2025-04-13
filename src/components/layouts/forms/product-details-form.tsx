"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { PlusMinusButton } from "@/components/ui/plus-minus-button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Flavor } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronRight } from "lucide-react"
import { useId } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

type ProductDetailsFormProps = {
	flavors: Flavor[]
}

const FormSchema = z.object({
	flavors: z.string({
		required_error: "Please select a flavor",
	}),
})

export function ProductDetailsForm({ flavors }: ProductDetailsFormProps) {
	const id = useId()

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		return data
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
				<FormField
					control={form.control}
					name="flavors"
					render={({ field }) => (
						<div className="flex flex-col gap-6">
							<FormItem>
								<FormLabel className="font-semibold">Flavors</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={flavors[0].id}>
									<FormControl>
										<SelectTrigger>
											<SelectValue />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{flavors.map(flavor => (
											<SelectItem value={flavor.id} key={flavor.id}>
												{flavor.value}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
							<FormItem>
								<RadioGroup className="gap-2 border rounded-md flex flex-col divide-y" defaultValue="1">
									{/* Radio card #1 */}
									<div className="relative flex w-full items-start gap-2 rounded-md p-4 outline-none">
										<RadioGroupItem
											value="1"
											id={`${id}-1`}
											aria-describedby={`${id}-1-description`}
											className="order-0 after:absolute after:inset-0"
										/>
										<Label htmlFor={`${id}-1`} className="flex justify-between w-full font-semibold">
											<span>One-Time Purchase </span>
											<span>$29.99 </span>
										</Label>
									</div>
									{/* Radio card #2 */}
									<div className="flex flex-col p-4 gap-4">
										<div className="relative flex items-center outline-none gap-2">
											<RadioGroupItem
												value="2"
												id={`${id}-2`}
												aria-describedby={`${id}-2-description`}
												className="order-0 after:absolute after:inset-0"
											/>
											<Label htmlFor={`${id}-2`} className="flex justify-between w-full font-semibold">
												<span>Subscribe & Save (35%)</span>
												<span>$19.49</span>
											</Label>
										</div>

										<div className="flex flex-col gap-4">
											<Select onValueChange={field.onChange} defaultValue={flavors[0].id}>
												<FormControl>
													<SelectTrigger>
														<SelectValue />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{flavors.map(flavor => (
														<SelectItem value={flavor.id} key={flavor.id}>
															{flavor.value}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<ul>
												<li>• Free to pause or cancel anytime</li>
												<li>• Save with every recurring delivery</li>
												<li>• Access to exclusive flavors</li>
											</ul>
										</div>
									</div>
								</RadioGroup>
							</FormItem>
						</div>
					)}
				/>
				<div className="flex w-full gap-4 md:gap-8 h-11">
					<PlusMinusButton
						className="rounded-full border "
						quantity={1}
						onValueChange={value => {
							return value
						}}
					/>
					<Button className="w-full h-full rounded-full flex justify-between px-6">
						ADD TO CART
						<ChevronRight size={16} aria-hidden="true" />
					</Button>
				</div>
			</form>
		</Form>
	)
}

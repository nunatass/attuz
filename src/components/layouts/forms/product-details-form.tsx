"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { PlusMinusButton } from "@/components/ui/plus-minus-button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { DeliveryPeriod, Flavor } from "@/lib/types"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronRight } from "lucide-react"
import { useId } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

type ProductDetailsFormProps = {
	flavors: Flavor[]
	deliveryPeriods: DeliveryPeriod[]
}

const FormSchema = z.object({
	flavors: z.string({
		required_error: "Please select a flavor",
	}),
})

export function ProductDetailsForm({ flavors, deliveryPeriods }: ProductDetailsFormProps) {
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
								<RadioGroup
									className="grid grid-cols-2 md:grid-cols-4 gap-3"
									defaultValue={flavors[0].id}
									onValueChange={value => {
										field.onChange(value)
									}}
									value={field.value || flavors[0].id}
								>
									{flavors.map(flavor => (
										<div
											key={flavor.id}
											className={cn(
												"relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-colors border-input",
												(field.value || flavors[0].id) === flavor.id && "border-primary/50 bg-[#2B4021]/10",
											)}
										>
											<RadioGroupItem id={flavor.id} value={flavor.id} className="sr-only" />
											<Label
												className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
												htmlFor={flavor.id}
											>
												{flavor.value}
											</Label>
										</div>
									))}
								</RadioGroup>
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
											<Select
												onValueChange={value => {
													field.onChange(value)
													document.getElementById(`${id}-2`)?.click()
												}}
												defaultValue={deliveryPeriods[0].id}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{deliveryPeriods.map(deliveryPeriod => (
														<SelectItem value={deliveryPeriod.id} key={deliveryPeriod.id}>
															{deliveryPeriod.value}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
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

import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { PlusIcon } from "lucide-react"

export default function FAQsArea() {
	return (
		<div
			id="home-faqs"
			className="flex flex-col justify-center items-center  md:my-10 gap-8 md:gap-10 w-full container"
		>
			<div className="h-[0.7px] w-full bg-gray-300" />
			<div className="w-full h-max flex flex-col md:flex-row justify-between items-start gap-4">
				<h2 className="text-xl lg:text-2xl font-semibold md:mt-4">FREQUENTLY ASKED QUESTIONS</h2>
				<Accordion type="single" collapsible className="w-full" defaultValue="3">
					{faqs.map(item => (
						<AccordionItem value={item.id} key={item.id} className="py-2">
							<AccordionPrimitive.Header className="flex">
								<AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
									{item.title}
									<PlusIcon
										size={16}
										className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
										aria-hidden="true"
									/>
								</AccordionPrimitive.Trigger>
							</AccordionPrimitive.Header>
							<AccordionContent className="text-muted-foreground pb-2">{item.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	)
}

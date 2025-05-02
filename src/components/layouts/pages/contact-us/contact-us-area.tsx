"use client"
import { ContactUsForm } from "./contact-us-form"

export const ContactUsArea = () => {
	return (
		<section className="container pb-20 pt-8">
			<div className="flex flex-row bg-white px-10 py-12 rounded-lg">
				<div className="w-full space-y-8">
					<div className="flex flex-col gap-2">
						<p>
							For any questions regarding our products or for assistance with your order, please email us and you will
							receive a response as soon as possible!
						</p>
						<p>
							If you are emailing about your order, please make sure to include the order number or the email address
							used at checkout in your message. Thank you!{" "}
						</p>
					</div>
					<div className="flex w-full flex-col items-center gap-10 md:flex-row lg:gap-20">
						<ContactUsForm />
					</div>
				</div>
			</div>
		</section>
	)
}

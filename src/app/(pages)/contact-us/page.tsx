import { Header } from "@/components/header"
import { HelpBanner } from "@/components/layouts/help-banner"
import { ContactUsArea } from "@/components/layouts/pages/contact-us/contact-us-area"
import { Wrapper } from "@/components/wrapper"

export default function ContactUsPage() {
	return (
		<div className=" w-screen min-h-screen bg-gray-50">
			<Header />
			<HelpBanner />
			<Wrapper className="w-screen flex justify-center items-center flex-col gap-8 overflow-x-hidden">
				<ContactUsArea />
			</Wrapper>
		</div>
	)
}

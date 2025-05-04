import { Header } from "@/components/header"
import { TermsOfServicesArea } from "@/components/layouts/pages/terms-and-conditions/terms-and-conditions-area"
import { Wrapper } from "@/components/wrapper"

export default function TermsAndConditionsPage() {
	return (
		<div className="w-screen min-h-screen">
			<Header />
			<Wrapper className="w-screen flex justify-center items-center flex-col gap-8 overflow-x-hidden">
				<TermsOfServicesArea />
			</Wrapper>
		</div>
	)
}

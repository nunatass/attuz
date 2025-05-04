import { Header } from "@/components/header"
import { PrivacyAndPolicyArea } from "@/components/layouts/pages/privacy-and-policy/privacy-and-policy-area"
import { Wrapper } from "@/components/wrapper"

export default function PrivacyAndPolicyPage() {
	return (
		<div className=" w-screen min-h-screen">
			<Header />
			<Wrapper className="w-screen flex justify-center items-center flex-col gap-8 overflow-x-hidden">
				<PrivacyAndPolicyArea />
			</Wrapper>
		</div>
	)
}

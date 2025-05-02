import { Header } from "@/components/header"
import { HelpBanner } from "@/components/layouts/help-banner"
import { TrackOrderArea } from "@/components/layouts/pages/track-order/track-order-area"
import { Wrapper } from "@/components/wrapper"

export default function TrackYourOrderPage() {
	return (
		<div className=" w-screen min-h-screen bg-gray-50">
			<Header />
			<HelpBanner />
			<Wrapper className="w-screen flex justify-center items-center flex-col gap-8 overflow-x-hidden">
				<TrackOrderArea />
			</Wrapper>
		</div>
	)
}

import { privacyAndPolicyData } from "@/data/privacy-and-policy"

export function PrivacyAndPolicyArea() {
	return (
		<section className="container">
			<div className="flex w-full flex-col gap-8 lg:w-[70%]">
				<h1 className="text-3xl font-medium sm:text-5xl text-left w-full">Privacy and Policy</h1>
				{privacyAndPolicyData.map((section, index) => (
					<div key={section.title ?? index} className="flex w-full flex-col gap-2">
						{section.title && <h2 className="text-lg font-semibold">{section.title}</h2>}

						{section.content.map(paragraph => (
							<p key={paragraph.slice(0, 10)} className="text-gray-700">
								{paragraph}
							</p>
						))}
					</div>
				))}
			</div>
		</section>
	)
}

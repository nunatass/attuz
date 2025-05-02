type TextBannerProps = {
	text: string
}

export function TextBanner({ text }: TextBannerProps) {
	return (
		<div className="h-28 bg-[#8DAA9D] w-screen text-white font-bold md:text-3xl flex justify-center items-center text-wrap text-xl sm:text-2xl text-center">
			{text}
		</div>
	)
}

import localFont from "next/font/local"

export const SFTSchriftedSans = localFont({
	src: [
		{
			path: "./SFTSchriftedSansRegular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./SFTSchriftedSansLight.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./SFTSchriftedSansMedium.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./SFTSchriftedSansBold.ttf",
			weight: "700",
			style: "normal",
		},
	],
})

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "attuz.vercel.app",
			},
		],
	},
}

export default nextConfig

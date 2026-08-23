import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
		SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
		SANITY_ACCESS_TOKEN: process.env.SANITY_ACCESS_TOKEN
	}
};

export default nextConfig;

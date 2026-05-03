// Next.config.js
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");

import { withPlugins } from "next-compose-plugins";
import { withImages } from "next-images";
import { withFonts } from "next-fonts";

/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
		SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
		SANITY_ACCESS_TOKEN: process.env.SANITY_ACCESS_TOKEN
	},
	webpack: (config, options) => {
		// Modify the `config` here

		return config;
	}
};

module.exports = withPlugins([withFonts, [withImages, { ignoreTypes: ["svg"] }]], nextConfig);

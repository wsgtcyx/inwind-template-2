import createMDX from '@next/mdx';
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'landingpage.huglemon.com',
			},
			{
				protocol: 'https',
				hostname: 'img.gamewith.net',
			},
			{
				protocol: 'https',
				hostname: 'game.pokemontcgpocket.app',
			},
			{
				protocol: 'https',
				hostname: '5250429.webp.li',
			},
			{
				protocol: 'https',
				hostname: 'assets.tcgdex.net',
			},
		],
	},
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
		providerImportSource: "@mdx-js/react",
	},
});

export default withMDX(config);

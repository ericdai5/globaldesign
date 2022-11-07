export const SITE = {
	title: 'Global Design',
	description: 'Global Design is a resource for guidelines that pertain to best practices for creating cross-cultural designs and building international web products.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'public/globaldesignlogo.png',
		alt:
		'Global Design is a resource for guidelines that pertain to best practices for creating cross-cultural designs and building international web products.'
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Chinese: 'zh',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Overview', link: 'en/introduction' },
			{ text: 'Main Principles', link: 'en/page-2' },
			{ text: 'Main Challenges', link: 'en/page-3' },
		],
		'User Research': [
			{ text: 'Overview', link: 'en/user-research-overview' },
			{ text: 'Interview', link: 'en/interview' },
		],

		'Translation': [
			{ text: 'Overview', link: 'en/translation-overview' },
			{ text: 'Text Direction', link: 'en/text-direction' },
			{ text: 'Text Expansion', link: 'en/text-expansion' },
		],

		'Resources': [
			{ text: 'Books', link: 'en/books' },
			{ text: 'Newsletters', link: 'en/newsletters' },
		],
	},
	zh: {
		'Introduction': [
			{ text: 'Overview', link: 'zh/introduction' },
			{ text: 'Main Principles', link: 'zh/page-2' },
			{ text: 'Main Challenges', link: 'zh/page-3' },
		],
		'User Research': [
			{ text: 'Overview', link: 'zh/user-research-overview' },
			{ text: 'Interview', link: 'zh/interview' },
		],

		'Translation': [
			{ text: 'Overview', link: 'zh/translation-overview' },
			{ text: 'Text Direction', link: 'zh/text-direction' },
			{ text: 'Text Expansion', link: 'zh/text-expansion' },
		],

		'Resources': [
			{ text: 'Books', link: 'zh/books' },
			{ text: 'Newsletters', link: 'zh/newsletters' },
		],
	},
};

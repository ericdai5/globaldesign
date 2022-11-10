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

export const COMMUNITY_INVITE_URL = `https://globaldesign.one`;

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
		],
		'User Research': [
			{ text: 'Goals and Focus', link: 'en/goalsandfocus' },
			{ text: 'People', link: 'en/people' },
			{ text: 'Methods', link: 'en/methods' },
		],

		'Language': [
			{ text: 'Typography', link: 'en/typography' },
			{ text: 'Text Direction', link: 'en/textdirection' },
			{ text: 'Text Expansion', link: 'en/textexpansion' },
		],
		'Culture': [
			{ text: 'Color', link: 'en/colors' },
			{ text: 'Images and Icons', link: 'en/imagesandicons' },
			{ text: 'Mental Models', link: 'en/mentalmodels' },
			{ text: 'Content Density', link: 'en/contentdensity' },
		],
		'Resources': [
			{ text: 'Inspirations', link: 'en/inspirations' },
		],
	},
	zh: {
		'介绍': [
			{ text: '概述', link: 'zh/introduction' },
		],
		'用户研究': [
			{ text: '目标和重点', link: 'zh/goalsandfocus' },
			{ text: '人才', link: 'zh/people' },
			{ text: '方法', link: 'zh/methods' },
		],

		'语言': [
			{ text: '字体', link: 'zh/typography' },
			{ text: '文本方向', link: 'zh/textdirection' },
			{ text: '文本扩展', link: 'zh/textexpansion' },
		],
		'文化': [
			{ text: '颜色', link: 'zh/colors' },
			{ text: '图像和图标', link: 'zh/imagesandicons' },
			{ text: '心智模型', link: 'zh/mentalmodels' },
			{ text: '内容密度', link: 'zh/contentdensity' },
		],
		'资源': [
			{ text: '灵感', link: 'zh/inspirations' },
		],
	},
};

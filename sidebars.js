// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	default: [
		{
			type: 'doc',
			id: 'index',
			label: 'Home',
		},
		{
			type: 'doc',
			id: 'read-me-seriously',
			label: 'READ ME (seriously)',
		},
		{
			type: 'doc',
			id: 'before-you-start',
			label: 'Before You Start',
		},
		{
			type: 'category',
			label: 'Introduction',
			items: ['introduction/index', 'introduction/acknowledgments', 'introduction/noteworthy-individuals'],
		},
		{
			type: 'category',
			label: 'Tools of the Trade',
			items: ['tools-of-the-trade/index', 'tools-of-the-trade/romdrop', 'tools-of-the-trade/ecuflash', 'tools-of-the-trade/virtual-dyno', 'tools-of-the-trade/mega-log-viewer-hd'],
		},
		{
			type: 'category',
			label: 'Data Logging',
			items: [
				'data-logging/index',
				'data-logging/microsd-card',
				'data-logging/logcfg-txt',
				'data-logging/calculated-fields',
				'data-logging/mode-23',
				'data-logging/triggers',
				'data-logging/external-sensors',
				'data-logging/troubleshooting',
			],
		},
		{
			type: 'category',
			label: 'Tuning',
			items: [
				'tuning/index',
				'tuning/getting-started',
				{
					type: 'category',
					label: 'Specific Tuning Guides',
					items: [
						'tuning/specific-tunes/index',
						'tuning/specific-tunes/load-scaling',
						'tuning/specific-tunes/afr-tuning',
						'tuning/specific-tunes/vct-tuning',
						'tuning/specific-tunes/spark-timing-tuning',
						'tuning/specific-tunes/imtuning',
						'tuning/specific-tunes/cams',
						'tuning/specific-tunes/25-swap',
						'tuning/specific-tunes/flex-fuel',
						'tuning/specific-tunes/forced-induction',
					],
				},
			],
		},
		{
			type: 'category',
			label: 'NC Platform Knowledge Base',
			items: ['nc-platform-knowledge-base/index', 'nc-platform-knowledge-base/stock-fuel-system', 'nc-platform-knowledge-base/engines', 'nc-platform-knowledge-base/transmission-drivetrain'],
		},
		{
			type: 'category',
			label: 'NC ECU Knowledge Base',
			items: [
				'nc-ecu-knowledge-base/index',
				'nc-ecu-knowledge-base/base-fuel-target',
				'nc-ecu-knowledge-base/spark-maps',
				'nc-ecu-knowledge-base/calculate-spark-timing',
				'nc-ecu-knowledge-base/knock-detection',
				'nc-ecu-knowledge-base/drive-status-modes',
				'nc-ecu-knowledge-base/math-and-formulas',
			],
		},
		{
			type: 'category',
			label: '2.5L L5-VE Knowledge Base',
			items: ['25l-l5-ve-knowledge-base/index', '25l-l5-ve-knowledge-base/fuel-system', '25l-l5-ve-knowledge-base/25l-ecu', '25l-l5-ve-knowledge-base/25l-swap'],
		},
		{
			type: 'category',
			label: 'DIY Projects',
			items: ['diy-projects/index', 'diy-projects/cruise-control', 'diy-projects/oil-pressure-sensor', 'diy-projects/fuel-pressure-sensor'],
		},
		{
			type: 'doc',
			id: 'glossary',
			label: 'Glossary',
		},
		{
			type: 'category',
			label: 'Communities',
			items: [
				{
					type: 'link',
					label: 'RomDrop facebook page',
					href: 'https://www.facebook.com/groups/romdrop',
				},
				{
					type: 'link',
					label: 'RomDrop tuning chat',
					href: 'https://www.facebook.com/messages/c/5874843909269827/t/5986216474790292',
				},
				{
					type: 'link',
					label: 'NC Miata forum',
					href: 'https://forum.miata.net/vb/forumdisplay.php?f=151',
				},
			],
		},
		{
			type: 'category',
			label: 'Resources',
			items: [
				{
					type: 'link',
					label: 'OEM ROMs',
					href: 'https://github.com/VIRUXE/ncmiatatuning-docs/tree/main/static/roms',
				},
				{
					type: 'link',
					label: 'MX5 Owner manual',
					href: 'https://github.com/VIRUXE/ncmiatatuning-docs/blob/main/static/2008-mx-5-owners-manual.pdf',
				},
			],
		},
		{
			type: 'category',
			label: 'External resources',
			items: [
				{
					type: 'link',
					label: 'RomDrop - GitHub',
					href: 'https://github.com/speepsio/romdrop',
				},
				{
					type: 'link',
					label: 'RomDrop - Rabbit hole thread',
					href: 'https://forum.miata.net/vb/showthread.php?t=630805&page=212',
				},
				{
					type: 'link',
					label: 'Roadster blog - NC Technical',
					href: 'https://www.roadster.blog/p/technical.html',
				},
			],
		},
	],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;

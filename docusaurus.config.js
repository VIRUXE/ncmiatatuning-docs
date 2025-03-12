// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NC Miata Tuning',
  tagline: 'NC Miata Tuning',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://romdroptuning.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RomDrop Tuning Guide',
        hideOnScroll: true,
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Communities',
            items: [
              {
                label: 'RomDrop facebook page',
                href: 'https://www.facebook.com/groups/romdrop',
              },
              {
                label: 'RomDrop tuning chat',
                href: 'https://www.facebook.com/messages/c/5874843909269827/t/5986216474790292',
              },
              {
                label: 'NC Miata forum',
                href: 'https://forum.miata.net/vb/forumdisplay.php?f=151',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'OEM ROMs',
                to: '/roms',
              },
              {
                label: 'MX5 Owner manual',
                href: 'https://ncmiatatuning.s3.us-east-2.amazonaws.com/2008-mx-5-owners-manual.pdf',
              },
            ],
          },
          {
            title: 'External resources',
            items: [
              {
                label: 'RomDrop - GitHub',
                href: 'https://github.com/speepsio/romdrop',
              },
              {
                label: 'RomDrop - Rabbit hole thread',
                href: 'https://forum.miata.net/vb/showthread.php?t=630805&page=212',
              },
              {
                label: 'Roadster blog - NC Technical',
                href: 'https://www.roadster.blog/p/technical.html',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RomDrop Tuning. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

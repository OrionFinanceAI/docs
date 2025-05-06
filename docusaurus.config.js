// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Orion Finance',
  tagline: 'Navigate Complexity.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://orionfinance.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'OrionFinanceAI', // Usually your GitHub org/user name.
  projectName: 'docs.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
          sidebarPath: './sidebars.js',
        },
        blog: false,
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Add static directory configuration
  staticDirectories: ['static', 'public'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Orion Finance',
        logo: {
          alt: 'Orion Finance Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Discover',
            items: [
              {
                label: 'Pitch Deck',
                href: '/pitch.html',
                target: '_blank',
              },
              {
                label: 'Tearsheets',
                href: '/tearsheet.html',
                target: '_blank',
              },
              {
                label: 'Tech Stack',
                href: '/tech.html',
                target: '_blank',
              },
              {
                label: 'CEO CV',
                href: '/cv.html',
                target: '_blank',
              }
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/8bAXxPSPdw',
              },
              // {
              //   label: 'X',
              //   href: 'https://x.com/docusaurus',
              // },
            ],
          },
        ],
      },
    }),
};

export default config;

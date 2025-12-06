import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Learning Physical AI and Robotics',
  favicon: 'img/favicon.ico',

  // For local development
  url: 'http://localhost:3001',
  baseUrl: '/',                 

  // GitHub/Vercel deployment config
  // Uncomment and update for production deployment
  // url: 'https://your-vercel-domain.vercel.app',
  // baseUrl: '/',

  organizationName: 'SyedaAnabia', // GitHub username
  projectName: 'Physical_AI_Humanoid_Robotics', // Repo name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'], 
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SyedaAnabia/Physical_AI_Humanoid_Robotics/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/SyedaAnabia/Physical_AI_Humanoid_Robotics/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'Physical AI & Humanoid Robotics Textbook',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/SyedaAnabia',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: '/docs/introduction/intro',
                label: 'Help',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        
       
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook, Built by Syeda Anabia.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
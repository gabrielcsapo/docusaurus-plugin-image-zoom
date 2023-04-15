const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'docusaurus-plugin-image-zoom',
  tagline:
    'Docusaurus plugin to utilize https://www.npmjs.com/package/medium-zoom in your projects easily!',
  url: 'https://gabrielcsapo.github.io',
  baseUrl: '/docusaurus-plugin-image-zoom/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gabrielcsapo',
  projectName: 'docusaurus-plugin-image-zoom',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    zoom: {},
    navbar: {
      title: 'docusaurus-plugin-image-zoom',
      logo: {
        alt: 'docusaurus-plugin-image-zoom logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/getting-started',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Configuration',
              to: '/docs/getting-started',
            },
          ],
        },
        {},
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gabriel J. Csapo. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    [require.resolve('../src/index.js'), { id: 'docusaurus-plugin-image-zoom' }],
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
};

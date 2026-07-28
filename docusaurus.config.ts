import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import footerconst from "./footer";
import navbarItems from "./navbar"; // Import your new navbar file

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kroki Docs',
  tagline: 'Creates diagrams from textual descriptions!',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
      siteStorageNamespacing: true,
      fasterByDefault: true,
      mdx1CompatDisabledByDefault: true,
    },
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
      mdxCrossCompilerCache: true,
    },
    // experimental_router: 'hash',
  },

  // Set the production url of your site here
  url: 'https://ruseleredu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kroki-docs/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ruseleredu', // Usually your GitHub org/user name.
  projectName: 'kroki-docs', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: ["@cmfcmf/docusaurus-search-local"],

  plugins: [
    // 1. General-Purpose & Multi-Paradigm Diagramming
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general',
        path: 'docs-general',
        routeBasePath: 'general',
        sidebarPath: require.resolve('./sidebarsGeneral.ts'),
      },
    ],

    // 2. Software Architecture & Modeling
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'architecture',
        path: 'docs-architecture',
        routeBasePath: 'architecture',
        sidebarPath: require.resolve('./sidebarsArchitecture.ts'),
      },
    ],

    // 3. Network, Infrastructure & Layouts (BlockDiag Family)
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'infrastructure',
        path: 'docs-infrastructure',
        routeBasePath: 'infrastructure',
        sidebarPath: require.resolve('./sidebarsInfrastructure.ts'),
      },
    ],

    // 4. Databases & Entity Relationships
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'database',
        path: 'docs-database',
        routeBasePath: 'database',
        sidebarPath: require.resolve('./sidebarsDatabase.ts'),
      },
    ],

    // 5. Hardware, Timing & Protocols
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hardware',
        path: 'docs-hardware',
        routeBasePath: 'hardware',
        sidebarPath: require.resolve('./sidebarsHardware.ts'),
      },
    ],

    // 6. Data Visualization
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dataviz',
        path: 'docs-dataviz',
        routeBasePath: 'dataviz',
        sidebarPath: require.resolve('./sidebarsDataviz.ts'),
      },
    ],

    // 7. ASCII Art, Text-to-SVG & Ecosystem Aggregators
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ascii',
        path: 'docs-ascii',
        routeBasePath: 'ascii',
        sidebarPath: require.resolve('./sidebarsAscii.ts'),
      },
    ],
    [
      "@cmfcmf/docusaurus-search-local",
      {
        // Options here
      },
    ],


  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/kroki-docs/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Kroki Docs Logo',
        src: 'img/logo.svg',
      },
      items: navbarItems, // Drop the imported array here
    },
    footer: footerconst,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "matlab",
        "powershell",
        "ini",
        "latex",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

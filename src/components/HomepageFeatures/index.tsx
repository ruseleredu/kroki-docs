import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// 1. Add optional `link` property to the interfaces
interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
  link?: string; // Optional link for the feature title
}

interface FeatureSection {
  sectionTitle: string;
  sectionDescription: string;
  sectionLink?: string; // Optional link for the section title
  features: FeatureItem[];
}

const FEATURE_SECTIONS: FeatureSection[] = [
  {
    sectionTitle: "General",
    sectionDescription: "General-Purpose & Multi-Paradigm.",
    sectionLink: "/general/intro",
    features: [
      {
        title: 'dot',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for dot feature (v14.1.3).',
        link: '/general/dot/intro',
      },
      {
        title: 'd2',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for d2 feature (v0.7.1).',
        link: '/general/d2/intro',
      },
      {
        title: 'tikz',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for tikz feature (v3.1.9a).',
        link: '/general/tikz/intro',
      },
      {
        title: 'mermaid',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for mermaid feature (v11.15.0).',
        link: '/general/mermaid/intro',
      },
      {
        title: 'graphviz',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for graphviz feature (v14.1.3).',
        link: '/general/graphviz/intro',
      },
      {
        title: 'umlet',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for umlet feature (v15.1).',
        link: '/general/umlet/intro',
      },
      {
        title: 'diagramsnet',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for diagramsnet feature (v16.2.4).',
        link: '/general/diagramsnet/intro',
      },
      {
        title: 'plantuml',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for plantuml feature (v1.2026.6).',
        link: '/general/plantuml/intro',
      },
      {
        title: 'excalidraw',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for excalidraw feature (v0.18.1).',
        link: '/general/excalidraw/intro',
      },
    ],
  },
  {
    sectionTitle: "Architecture",
    sectionDescription: "Software Architecture & Modeling.",
    sectionLink: "/architecture/intro",
    features: [
      {
        title: 'c4plantuml',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for c4plantuml feature (v1.2026.6).',
        link: '/architecture/c4plantuml/intro',
      },
      {
        title: 'nomnoml',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for nomnoml feature (v1.7.0).',
        link: '/architecture/nomnoml/intro',
      },
      {
        title: 'structurizr',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for structurizr feature (v6.2.1).',
        link: '/architecture/structurizr/intro',
      },
    ],
  },
  {
    sectionTitle: "Infrastructure",
    sectionDescription: "Network, Infrastructure & Layouts.",
    sectionLink: "/infrastructure/intro",
    features: [
      {
        title: 'actdiag',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for actdiag feature (v3.4.2).',
        link: '/infrastructure/actdiag/intro',
      },
      {
        title: 'nwdiag',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for nwdiag feature (v3.4.2).',
        link: '/infrastructure/nwdiag/intro',
      },
      {
        title: 'rackdiag',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for rackdiag feature (v3.4.2).',
        link: '/infrastructure/rackdiag/intro',
      },
      {
        title: 'seqdiag',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for seqdiag feature (v3.4.2).',
        link: '/infrastructure/seqdiag/intro',
      },
      {
        title: 'wireviz',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for wireviz feature (v0.3.3).',
        link: '/infrastructure/wireviz/intro',
      },
      {
        title: 'packetdiag',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for packetdiag feature (v3.4.2).',
        link: '/infrastructure/packetdiag/intro',
      },
      {
        title: 'blockdiag',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for blockdiag feature (v3.4.2).',
        link: '/infrastructure/blockdiag/intro',
      },
    ],
  },
  {
    sectionTitle: "Database",
    sectionDescription: "Databases & Entity Relationships.",
    sectionLink: "/database/intro",
    features: [
      {
        title: 'erd',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for erd feature (v0.2.3).',
        link: '/database/erd/intro',
      },
      {
        title: 'dbml',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for dbml feature (v1.0.31).',
        link: '/database/dbml/intro',
      },
    ],
  },
  {
    sectionTitle: "Hardware",
    sectionDescription: "Hardware, Timing & Protocols.",
    sectionLink: "/hardware/intro",
    features: [
      {
        title: 'symbolator',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for symbolator feature (v1.2.2).',
        link: '/hardware/symbolator/intro',
      },
      {
        title: 'wavedrom',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for wavedrom feature (v3.6.1).',
        link: '/hardware/wavedrom/intro',
      },
      {
        title: 'bytefield',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for bytefield feature (v1.11.0).',
        link: '/hardware/bytefield/intro',
      },
    ],
  },
  {
    sectionTitle: "Data Visualization",
    sectionDescription: "Data Visualization.",
    sectionLink: "/dataviz/intro",
    features: [
      {
        title: 'vegalite',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for vegalite feature (v6.4.3).',
        link: '/dataviz/vegalite/intro',
      },
      {
        title: 'vega',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for vega feature (v6.2.0).',
        link: '/dataviz/vega/intro',
      },
    ],
  },
  {
    sectionTitle: "ASCII & Tools",
    sectionDescription: "ASCII Art, Text-to-SVG & Ecosystem Aggregators.",
    sectionLink: "/ascii/intro",
    features: [
      {
        title: 'bpmn',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: 'Description for bpmn feature (v18.18.0).',
        link: '/ascii/bpmn/intro',
      },
      {
        title: 'pikchr',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for pikchr feature (v7269f78c4a).',
        link: '/ascii/pikchr/intro',
      },
      {
        title: 'ditaa',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for ditaa feature (v1.0.3).',
        link: '/ascii/ditaa/intro',
      },
      {
        title: 'goat',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: 'Description for goat feature (vundefined).',
        link: '/ascii/goat/intro',
      },
      {
        title: 'svgbob',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: 'Description for svgbob feature (v0.7.6).',
        link: '/ascii/svgbob/intro',
      },
    ],
  },
];

// 2. Conditionally wrap the feature title with a Link if provided
function Feature({ Svg, title, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          {link ? <Link to={link}>{title}</Link> : title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FEATURE_SECTIONS.map((section, sectionIdx) => (
        <div key={sectionIdx} className={styles.featureSection}>
          <div className="container text--center margin-bottom--lg">
            {/* 3. Conditionally wrap the section title with a Link if provided */}
            <Heading as="h2">
              {section.sectionLink ? (
                <Link to={section.sectionLink}>{section.sectionTitle}</Link>
              ) : (
                section.sectionTitle
              )}
            </Heading>
            <p>{section.sectionDescription}</p>
          </div>

          <div className="container">
            <div className="row row--center">
              {section.features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>

          {sectionIdx < FEATURE_SECTIONS.length - 1 && <hr className={styles.sectionDivider} />}
        </div>
      ))}
    </section>
  );
}

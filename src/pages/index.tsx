import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/general/intro">
            General
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/architecture/intro">
            Architecture
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/infrastructure/intro">
            Infrastructure
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/database/intro">
            Databases
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/hardware/intro">
            Hardware
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/dataviz/intro">
            Data Viz
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/ascii/intro">
            ASCII & Tools
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

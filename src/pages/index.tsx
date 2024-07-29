import React, { useState }  from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import 'virtual:uno.css'
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [suitableThings, setSuitableThings] = useState([
    '看书🤓',
    '看电影😇',
    '逛博客😎',
    '写博客👍',
    '做家务😇',
    '下厨😋',
    '写代码👏',
    '修 bug 🙏',
    '调养生息💤',
    '锻炼💪',
    '和家人视频🤗',
    '和好友小聚😋',
    '和对象分享，没有请 new 1 个😊',
    '学习🤓',
    '复盘工作😇',
    '开心😄',
    '提交代码🤗',
    'review 代码🤠',
    '刷题🤓',
    '享受美食😋',
    '听喜欢的音乐😋',
    '遵守本心😉'
  ]);
  const [suitableResult, setSuitableResult] = useState(' ? 🤔');

  const getSuitableResult = () => {
    setSuitableResult(suitableThings[Math.floor(Math.random() * suitableThings.length)])
  }
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={styles.suitable} onClick={getSuitableResult}>今日宜{suitableResult}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/html/attrs">
            🚪传送门 NPC🎅
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '前端学习记录',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        积累知识、记录过程、探索未知、巩固已知，保持对待技术的热爱和好奇心！😘
      </>
    ),
  },
  {
    title: '{ ...生活, 🎵, 🏋️‍♀️, 🍱 }',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        认真工作也要热爱生活，感受和享受生活点滴中的美丽风景！🌿
      </>
    ),
  },
  {
    title: '不知道该咋命名的分类',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        不在前两栏的就快到碗里来~👏
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

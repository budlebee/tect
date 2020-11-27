import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from 'beautiful-skill-tree';

export default function Home() {
  const data = [
    {
      id: 'hello-world',
      title: 'Hello World',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'hello-sun',
          title: 'Hello Sun',
          tooltip: {
            content:
              'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
          },
          children: [],
        },
        {
          id: 'hello-stars',
          title: 'Hello Stars',
          tooltip: {
            content:
              'This is the child of ‘Hello World and the sibling of ‘Hello Sun’. Notice how the app takes care of the layout automatically? That’s why this is called Beautiful Skill Tree and not just ‘Skill Tree’. (Also the npm namespace had already been taken for the latter so (flick hair emoji).',
          },
          children: [],
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>세상 모든 테크트리, tect.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*     <SkillProvider>
          <SkillTreeGroup>
    {({skillCount})=>{
      <SkillTree treeId="first-tree" title="skill tree" data={data} collapsible={true} description="my first tree" />
    }}

          </SkillTreeGroup>
          </SkillProvider> */}
        <div></div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

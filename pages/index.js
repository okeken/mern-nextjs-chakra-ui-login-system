import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core';

import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { Main } from '../components/Main';

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import useSWR from 'swr';
import axios from 'axios';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <DarkModeSwitch />
    <h1>Hello world</h1>
  </Layout>
);

export default Home;

// import Head from 'next/head';
// import Link from 'next/link';
// import Layout, { siteTitle } from '../components/layout';
// import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';
// import useSWR from 'swr';
// import axios from 'axios';

// import Date from '../components/date';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();

//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Hi there I'm oke kehinde</p>
//         <p>
//           This is a sample website - you’ll be building a site like this on{' '}
//           <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.
//         </p>
//       </section>

//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>

//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, title, date }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href='/posts/[id]' as={`/posts/${id}`}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <Link href='/posts/first-post'> Go to my Post</Link>
//     </Layout>
//   );
// }

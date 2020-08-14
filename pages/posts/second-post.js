import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function SecondPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Second Post Title</title>
        </Head>
        <h1>Second Post ok</h1>
        <h2>
          <Link href='/'>Back to Home</Link>
        </h2>
      </Layout>
    </>
  );
}

import Head from 'next/head';

import SplitScreenCTA from '../components/core/SplitScreen';

const Home = () => {
  return (
    <div>
      <Head>
        <title>FileNode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SplitScreenCTA />
    </div>
  );
};

export default Home;

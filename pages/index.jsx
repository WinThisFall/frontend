import Head from 'next/head';

import { Center, Heading } from '@chakra-ui/react';

import CtaComponent from '../components/core/CTA';

const Home = () => {
  return (
    <div>
      <Head>
        <title>NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CtaComponent />
    </div>
  );
};

export default Home;

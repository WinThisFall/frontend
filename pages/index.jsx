import Head from 'next/head';

import { Center, Heading } from '@chakra-ui/react';

import { CtaComponent } from '../components/core/CTA';

const Home = () => {
  return (
    <div>
      <Head>
        <title>NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center h="250px">
        <Heading fontFamily="Poppins">Hello, World!</Heading>
      </Center>

      <CtaComponent />
    </div>
  );
};

export default Home;

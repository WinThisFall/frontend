import Head from 'next/head';

import { Center, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
      <Head>
        <title>NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center h="100px">
        <Heading fontFamily="Poppins">Hello, World!</Heading>
      </Center>
    </div>
  );
};

export default Home;

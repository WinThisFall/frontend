import { Box, ChakraProvider, CSSReset, theme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextNProgress from 'nextjs-progressbar';

import Layout from '../components/Layout';

import '@fontsource/poppins';

import '../styles/globals.css';

// Variables
const MotionBox = motion(Box);

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <MotionBox
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <CSSReset />
        <NextNProgress
          color={theme.colors.purple[500]}
          options={{ showSpinner: false }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MotionBox>
    </ChakraProvider>
  );
};

export default MyApp;

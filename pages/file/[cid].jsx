import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Flex, useColorModeValue, Heading, Container } from '@chakra-ui/react';

function File() {
  const router = useRouter();
  const { cid } = router.query;
  let windowType;
  let file;

  useEffect(() => {
    windowType = window;

    let link = document.createElement('a');
    link.href = `https://ipfs.io/ipfs/${cid}`;
    link.download = 'filenode.png';
    link.click();
  }, []);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Container
        maxW={'lg'}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}
      >
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
          fontFamily="Poppins"
        >
          Your file should download soon! {':)'}
        </Heading>
      </Container>
    </Flex>
  );
}

export default File;

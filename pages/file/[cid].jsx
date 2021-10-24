import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Flex, useColorModeValue, Heading, Container } from '@chakra-ui/react';

function File() {
  const router = useRouter();
  const { cid } = router.query;
  let windowType;
  let file;

  useEffect(() => {
    // set window
    windowType = window;

    console.log(cid);

    let link = document.createElement('a');

    const Http = new XMLHttpRequest();
    const url = `https://ipfs.io/ipfs/${cid}`;
    Http.open('GET', url);
    Http.send();

    Http.onloadend = e => {
      fetch(Http.responseText)
        .then(res => res.blob())
        .then(blob => {
          file = new File([blob], 'File name');
          link.href = file;
          link.download = magic.png;

          link.click();
        });
    };
    // if (cid) {
    // 	fetch(`https://ipfs.io/ipfs/${cid}`)
    // 		.then(res => res.blob())
    // 		.then(blob => {
    // 			file = new File([blob], 'File name');
    // 			link.href = file;
    // 			link.download = magic.png;

    // 			link.click();
    // 		});
    // } else {
    // 	return false;
    // }
  });

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

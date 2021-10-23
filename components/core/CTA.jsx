import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon
} from '@chakra-ui/react';

const CtaComponent = () => {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          fontFamily="Poppins"
        >
          File
          <Text as={'span'} color={'purple.400'}>
            node.
          </Text>
        </Heading>
        <Text
          color={'purple.200'}
          fontFamily="Poppins"
          fontSize={{ base: '2xl', sm: 'xl', md: '3xl' }}
        >
          Your decentralized dropbox.
          <span>
            <Text fontWeight={700}>Safe. Free. Secure.</Text>
          </span>
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Button
            colorScheme={'purple'}
            bg={'purple.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'purple.500'
            }}
            fontFamily="Poppins"
          >
            Get Started
          </Button>
          <Button
            variant={'link'}
            colorScheme={'blue'}
            size={'sm'}
            fontFamily="Poppins"
          >
            Learn more!
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CtaComponent;

// import {
//   Box,
//   Heading,
//   Container,
//   Text,
//   Button,
//   Stack,
//   Icon,
//   useColorModeValue,
//   createIcon
// } from '@chakra-ui/react';

// const CtaComponent = () => {
//   return (
//     <Container maxW={'3xl'}>
//       <Stack
//         as={Box}
//         textAlign={'center'}
//         spacing={{ base: 8, md: 14 }}
//         py={{ base: 20, md: 36 }}
//       >
//         <Heading
//           fontWeight={600}
//           fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
//           lineHeight={'110%'}
//           fontFamily="Poppins"
//         >
//           File
//           <Text as={'span'} color={'#5E17EB'}>
//             node.
//           </Text>
//         </Heading>
//         <Text
//           color={'purple.200'}
//           fontFamily="Poppins"
//           fontSize={{ base: '2xl', sm: 'xl', md: '3xl' }}
//         >
//           Your decentralized dropbox.
//           <span>
//             <Text fontWeight={700}>Safe. Free. Secure.</Text>
//           </span>
//         </Text>
//         <Stack
//           direction={'column'}
//           spacing={3}
//           align={'center'}
//           alignSelf={'center'}
//           position={'relative'}
//         >
//           <Button
//             colorScheme={'purple'}
//             bg={'#5E17EB'}
//             color={'#ffff'}
//             rounded={'full'}
//             px={6}
//             _hover={{
//               bg: 'purple.500'
//             }}
//             fontFamily="Poppins"
//           >
//             Get Started
//           </Button>
//           <Button
//             variant={'link'}
//             colorScheme={'blue'}
//             size={'sm'}
//             fontFamily="Poppins"
//           >
//             Learn more!
//           </Button>
//         </Stack>
//       </Stack>
//     </Container>
//   );
// };

// export default CtaComponent;


import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>

            <Text color={'white'} as={'span'}  fontFamily="Poppins">
            The future of filesharing
            </Text>{' '}
            {/* <span><Text bgGradient="linear(135deg, #FFCC33 0%, #E233FF 100%)" bgClip="text">Filenode</Text></span> */}
          </Heading>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              fontFamily="Poppins"
              bgGradient="linear(135deg, #FFCC33 0%, #E233FF 100%)"
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '/static/networking.svg'
          }
        />
      </Flex>
    </Stack>
  );
}

import { useRouter } from 'next/router';

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';

const SplitScreenCTA = () => {
  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Router
  const router = useRouter();

  // Render
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <span>
              <Text
                bgGradient="linear(135deg, teal.300 0%, purple.600 100%)"
                bgClip="text"
                fontFamily="Poppins"
              >
                Filenode
              </Text>
            </span>
            <Text
              color={'white'}
              as={'span'}
              fontFamily="Poppins"
              fontSize="4xl"
            >
              The future of Filesharing.
              <span>
                <Text fontWeight={800} fontSize="2xl">
                  Safe. Free. Secure.
                </Text>{' '}
              </span>
            </Text>{' '}
          </Heading>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              fontFamily="Poppins"
              bgGradient="linear(135deg, #FFCC33 0%, #E233FF 100%)"
              _hover={{
                bg: 'blue.500'
              }}
              onClick={() => router.push('/add')}
            >
              Create Project
            </Button>

            <Button rounded={'full'} fontFamily="Poppins" onClick={onOpen}>
              How It Works
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent fontFamily="Poppins">
                <ModalHeader fontWeight={900}>How it works!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                    The Filenode is an IPFS peer that runs on your computer, so
                    you can share files or folders, instantly. Just drag and
                    drop the files you want to share! Whether you are looking to
                    collaborate with friends on computing homework, backup some
                    sensitive files on a decentralized network, or reduce your
                    carbon footprint by hosting everything locally - Filenode
                    is your solution.
                  </Text>
                </ModalBody>

                <ModalFooter />
              </ModalContent>
            </Modal>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'/static/networking.svg'}
          width={'90%'}
          height={'90%'}
        />
      </Flex>
    </Stack>
  );
};

export default SplitScreenCTA;

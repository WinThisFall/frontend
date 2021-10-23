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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Lorem
} from '@chakra-ui/react';

const SplitScreenCTA = () => {
  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              fontSize="3xl"
            >
              The future of filesharing.
              <span>
                <Text fontWeight={800} fontSize="xl">
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
            >
              Create Project
            </Button>

            <Button rounded={'full'} fontFamily="Poppins" onClick={onOpen}>
              How It Works
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
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

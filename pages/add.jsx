import Link from 'next/link';
import { useState } from 'react';

import {
  Flex,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Text
} from '@chakra-ui/react';
import { create, urlSource } from 'ipfs-http-client';

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

const Add = () => {
  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // State handling
  const [file, setFile] = useState(undefined);
  const [formError, setFormError] = useState(null);
  const [buffer, setBuffer] = useState(null);
  const [cid, setCid] = useState(null);

  const addFile = () => {
    if (file !== undefined) {
      setFormError(false);
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = async e => {
        const { cid } = await ipfs.add(Buffer(reader.result));

        // Set the CID
        console.log(cid);
        setCid(cid);
      };
    } else {
      setFormError(true);
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} fontFamily="Poppins">
            Upload your file! 📂
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="file">
              <FormLabel fontFamily="Poppins" textAlign="center" pt={3}>
                Upload your file here. Click on the Show info button to get info
                regarding upload.
              </FormLabel>
              <Input type="file" onChange={e => setFile(e.target.files[0])} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                onClick={addFile}
                fontFamily="Poppins"
                variant="outline"
              >
                Upload
              </Button>
            </Stack>
            {cid !== null ? (
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                  onClick={onOpen}
                  fontFamily="Poppins"
                  variant="outline"
                >
                  Show Info
                </Button>
                <Modal isOpen={isOpen} onClose={onClose} size="lg">
                  <ModalOverlay />
                  <ModalContent fontFamily="Poppins">
                    <ModalHeader fontWeight={900}>
                      IPFS File Upload Info
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        <strong>Codec → </strong> {cid.codec}
                      </Text>
                      <br />

                      <Text>
                        <strong>Multibase Name → </strong> {cid.multibaseName}{' '}
                      </Text>
                      <br />

                      <Text>
                        <strong>String → </strong> {cid.string}
                      </Text>
                      <br />

                      <Text>
                        <strong>URL to the file → </strong>
                        <Link href={`/file/${cid.string}`}>
                          <a>{`https://ipfs.io/ipfs/${cid.string}`}</a>
                        </Link>
                      </Text>
                    </ModalBody>
                    <ModalFooter />
                  </ModalContent>
                </Modal>
              </Stack>
            ) : null}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Add;

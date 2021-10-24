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
  useColorModeValue
} from '@chakra-ui/react';
import { create, urlSource } from 'ipfs-http-client';

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

const Add = () => {
  const [file, setFile] = useState(undefined);
  const [formError, setFormError] = useState(null);
  const [buffer, setBuffer] = useState(null);

  const addFile = () => {
    if (file !== undefined) {
      setFormError(false);
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = async e => {
        const { cid } = await ipfs.add(Buffer(reader.result));
        console.log(cid);
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
            Upload your file 📂
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
              <FormLabel fontFamily="Poppins" textAlign="center">
                Upload your file here!
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
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Add;

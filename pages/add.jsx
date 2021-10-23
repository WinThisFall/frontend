import { Flex, Box, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { create, urlSource } from 'ipfs-http-client';

const ipfs = create({
	host: 'ipfs.infura.io',
	port: 5001,
	protocol: 'https'
});

const Add = () => {
	const [file, setFile] = useState(undefined);
	const [formError, setFormError] = useState(null);

	const addFile = () => {
		if (file !== undefined) {
			setFormError(false);
			let reader = new FileReader();
			reader.onload = async e => {
				const { cid } = await ipfs.add(
					urlSource(`data:application/octet-stream,${e.target.result}`)
				);
				console.log(cid);
				console.log(e.target.result);
			};
			reader.readAsDataURL(file);
		} else {
			setFormError(true);
		}
	};

	return (
		<Box minHeight="10">
			<Flex justifyContent={'center'} alignItems={'center'} dir={'column'}>
				<Input
					marginTop="5"
					type="file"
					onChange={e => setFile(e.target.files[0])}
				/>
				<Button onClick={addFile}>Upload</Button>
			</Flex>
		</Box>
	);
};

export default Add;

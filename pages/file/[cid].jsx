import { useRouter } from 'next/router';
import { Flex, Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

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
    <Box>
      <Flex>Your file should download soon :)</Flex>
    </Box>
  );
}

export default File;

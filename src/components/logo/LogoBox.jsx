import React from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
//import { ExternalLinkIcon } from '@chakra-ui/icons';

const LogoBox = () => {
  return (
    <Box bg="gray.800" w="100%" h="100%" p={5} color="white">
      <Link href="https://chakra-ui.com">
        <Image
          objectFit="cover"
          boxSize="35px"
          src="http://localhost:3000/image/crayons.png"
          alt="logo"
        />
      </Link>
    </Box>
  );
};

export default LogoBox;

import React from 'react';
import { Box } from '@chakra-ui/react';

const Section = () => {
  return (
    <Box
      bgGradient="linear(to-r, green.200, pink.500)"
      w="100%"
      h="500px"
      p={5}
      color="white"
    >
      <h2>세션</h2>
    </Box>
  );
};

export default Section;

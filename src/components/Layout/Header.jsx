import React from 'react';
import { Box } from '@chakra-ui/react';
import Tab from './Tabs/Tab';

const Header = () => {
  return (
    <Box bg="gray.800" w="100%" p={5} color="white">
      <Tab></Tab>
    </Box>
  );
};

export default Header;

import React from 'react';
import { Box } from '@chakra-ui/react';
import Tab from './Tabs/Tab';
import LogoBox from '../logo/LogoBox';

const Header = () => {
  return (
    <Box bg="gray.800" w="100%" p={5} color="white">
      <LogoBox></LogoBox>
      <Tab></Tab>
    </Box>
  );
};

export default Header;

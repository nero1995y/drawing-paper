import React from 'react';
import Layout from './components/layout/Layout';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// 2. `extendTheme` 적용하기
const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout></Layout>
    </ChakraProvider>
  );
}

export default App;

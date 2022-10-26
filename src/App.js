import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="10vh" p={3}>
        <Logo h="8vh" pointerEvents="none" />
        <Spacer/>
        {/* <Link
              color="teal.500"
              href="http://localhost:3000/"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
              >
              Affordable Resumes
            </Link> */}
        <h1 fontSize="xxl">&nbsp;Affordable Resumes</h1>
        <Spacer/>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
          <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;

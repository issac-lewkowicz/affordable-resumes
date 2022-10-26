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
import { Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="services" element={<Services />} />
          <Route exact path="pricing" element={<Pricing />} />
          <Route exact path="reviews" element={<Reviews />} />
          <Route exact path="about-us" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
          {/* <Route exact path="login" element={<Login />} /> */}
          {/* <Route exact path="new-item" element={<NewItemForm />} /> */}
          {/* <Route path="edit-item/:itemId" element={<EditItemForm />} /> */}
        </Routes>
        {/* <Home /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;

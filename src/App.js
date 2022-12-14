import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
  Spacer,
  Text,
  Link,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './pages/Home';
import { Route, Routes, Link as ReactRouterLink } from 'react-router-dom';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Flex minH="10vh" p={3}>
        <Logo h="8vh" pointerEvents="none" />
        <Spacer/> 
        <Link  as={ReactRouterLink} to="/">
              <Text fontSize="2xl" color='teal.500'>Affordable Resumes</Text>
        </Link>
        {/* <h1 fontSize="xxl">&nbsp;Affordable Resumes</h1> */}
        <Spacer/>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <Navbar />
        <br/>
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

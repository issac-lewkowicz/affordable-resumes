import React from 'react'
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { Logo } from '../Logo';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
    <VStack spacing={8} fontSize="2xl">
              
            <Text>
              Welcome to Affordable Resumes!
            </Text>
          </VStack>
    </>
  )
}

export default Home
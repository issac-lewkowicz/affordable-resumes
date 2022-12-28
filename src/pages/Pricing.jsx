import {
  Box,
  VStack,
  Text,
  Center,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import React from 'react';

function Pricing() {
  return (
    <>
      <VStack fontSize={'lg'}>
        <Text>
          We offer discounts for military and family, first
          responders/front-line workers and family, and financial hardship
          discounts.
        </Text>
        <Text>Ask if you qualify today!</Text>
      </VStack>
      {/* (Ask if you qualify goes to our email if you click it) */}
      <br />
      <br />
      <br />
      {/* <Center>
        <Box fontSize={"lg"} textAlign="left">
          <Text>Initial Consultation: Free 1/2 hour Consultation </Text>
          <Text>Crafting Resume from Scratch: $120</Text>
          <Text>Editing Existing Resume: $90</Text>
          <Text>LinkedIn Creation or Optimization: $75/hr </Text>
          <Text>Job Search Support: $75/hr</Text>
          <Text>Interview Preparation and Practice Interview: $75/hr</Text>
          <Text>We accept PayPal, Venmo, ApplePay, Cash and Check</Text>
        </Box>
      </Center> */}
      <Center>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Service</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Initial 1/2 hour Consultation</Td>
              <Td>Free</Td>
            </Tr>
            <Tr>
              <Td>Crafting Resume from Scratch</Td>
              <Td>$120</Td>
            </Tr>
            <Tr>
              <Td>Editing Existing Resume</Td>
              <Td>$90</Td>
            </Tr>
            <Tr>
              <Td>LinkedIn Creation or Optimization</Td>
              <Td>$75/hr</Td>
            </Tr>
            <Tr>
              <Td>Job Search Support</Td>
              <Td>$75/hr</Td>
            </Tr>
            <Tr>
              <Td>Interview Preparation and Practice Interview</Td>
              <Td>$75/hr</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer></Center>
    </>
  );
}

export default Pricing;

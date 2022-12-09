import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  EditablePreview,
  Box,
  useColorModeValue,
  IconButton,
  Flex,
  Input,
  useDisclosure,
  useEditableControls,
  ButtonGroup,
  SlideFade,
  Editable,
  Tooltip,
  EditableInput,
  Heading,
} from '@chakra-ui/react';

function Service({item} ) {
  const {title, text} = item
  return (
    <AccordionItem>
    <Heading fontSize="xl" >
      <AccordionButton  _hover={{
              background: useColorModeValue('gray.100', 'gray.700'),
            }}>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4} fontSize="l" textAlign="left">
      {text}
    </AccordionPanel>
  </AccordionItem>
  )
}

export default Service
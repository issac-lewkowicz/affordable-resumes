import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Center,
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
import Service from './Service'

function Services() {
  const serviceItems = [
    {title: "Initial Consultation by Phone, Zoom or In Person", text: `15 min to 30 minute free consultation to discuss what we can do for you!  For best results, email your resume, LinkedIn URL and 2-3 examples of jobs you are interested in.  Don't have one or all of those?  Don't worry!  We can easily get you started on the right track.`},

    {title: "Crafting Top Notch Resumes from Scratch", text: `2 hour max--phone call, zoom or in person. \n Working together to talk through your work experience and skills to create an eye catching resume.  This is a great option for recent graduates or those early in their career.`},
    {title: "Editing and Optimizing Existing Resumes", text: `Available by email, phone call, zoom or in person
    Improve your resume so you stand out to hiring managers and recruiters:  Reformatting to improve visual appeal; correct spelling and grammatical errors; edit content to improve focus on accomplishments and skills; organize and streamline core resume sections for greatest impact.`},
    {title: "Review, Improve, or Create LinkedIn Profiles", text: `Available by phone, zoom, or in person
    Step by step, customized guidance to create or optimize your LinkedIn Profile.  Show your best self to Hiring Managers and Recruiters and stand out from the crowd.`},
    {title: "Job Search Advice and Support by the Hour", text: `Available by phone, zoom or in person
    Personalized coaching on productive job searching, common pitfalls, how to optimize your day and anything that might be holding you back.  Let's solve this together!`},
    {title: "Interview Preparation and Practice Interviews--Hourly Sessions", text: `Available by phone, zoom and in person
    Have you been getting interviews but no job offers?  Do your palms get sweaty thinking about showing up in front of 3 hiring managers for a panel interview?  Interview prep can make all the difference!  Changing how you answer even a few questions can get you hired!  We'll go over common interview questions, common traps, what questions to ask, best strategies, and how to play to your strengths.`}
  ]

  return (

    <Center>
    <Accordion w="100vw" allowMultiple>
      {serviceItems.map((item) => <Service item={item}/>)}
    </Accordion>
    </Center>

  )
}

export default Services 
import { Box, Center, Image } from '@chakra-ui/react';
import React from 'react';

function NoMatch() {
  return (
    // <>
    // <Box color="red">
    //   <h1>404!</h1>
    //   <br/>
    //   <h1>Page Not Found!</h1>
    //   <br/>
    //   {/* <Image src={logo404} h="30vh"/> */}
    //   </Box>
    //   <Center>
    // {/* <Image
    // src={pageNotFound}
    // boxSize='30vh'
    // objectFit='cover'
    // alt='404'/> */}
    // <Image src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'/>
    // </Center>
    // </>

      <Box textColor="red" fontWeight='bold' fontFamily='arvo' fontSize={28}
            backgroundImage={
              'https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'
            }
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="100vw"
            h="70vh"
            >
            <p>404</p>
            <p>Page not found!</p>
      </Box>
  );
}

export default NoMatch;

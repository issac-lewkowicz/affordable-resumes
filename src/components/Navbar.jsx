import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Spacer,
  Text,
  Link,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6} fontSize="xl">
      <GridItem><NavLink to="/" end style={({ isActive }) => isActive ? activeStyle : undefined }>Home</NavLink></GridItem>
      <GridItem><NavLink to="/services" style={({ isActive }) => isActive ? activeStyle : undefined }>Services</NavLink></GridItem>
      <GridItem><NavLink to="/pricing" style={({ isActive }) => isActive ? activeStyle : undefined }>Pricing</NavLink></GridItem>
      <GridItem><NavLink to="/reviews" style={({ isActive }) => isActive ? activeStyle : undefined }>Reviews</NavLink></GridItem>
      <GridItem><NavLink to="/about-us" style={({ isActive }) => isActive ? activeStyle : undefined }>About Us</NavLink></GridItem>
      <GridItem><NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined }>Contact</NavLink></GridItem>
    </Grid>
  );
}

export default Navbar;

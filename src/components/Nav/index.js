import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Link.css';
import { Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const NavBar = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };
  return (
    <Stack
      pos="sticky"
      top="0"
      left="0"
      direction="column"
      spacing="20px"
      p="20px"
      w="20%"
      height="100vh"
      bg={bgColor}
      mx="auto"
      align="center"
      textAlign="left"
      display={['none', null, 'flex']}
    >
      {/* <Image
        border="1px"
        boxSize="150px"
        src="https://miro.medium.com/max/3150/2*v6-FrHQO9uP7mCFvQ-we5Q.jpeg"
        objectFit="cover"
        objectPosition="50% 50%"
        borderRadius="sm"
      /> */}

      {/* <Text fontSize="1.25rem">Haroon Feisal</Text> */}
      {/* Add Logo Here */}
      <Text
        fontSize="1.25rem"
        mt="10"
        mb="10"
        fontWeight="black"
        onClick={scrollToTop}
        cursor="pointer"
      >
        HF
      </Text>
      {/* <Text mt="20"></Text> */}
      <Link
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        className="navbar"
      >
        HOME
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        className="navbar"
      >
        ABOUT
      </Link>
      <Link
        to="education"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        className="navbar"
      >
        EDUCATION
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        className="navbar"
      >
        EXPERIENCE
      </Link>
      <ColorModeSwitcher />
    </Stack>
  );
};

export default NavBar;

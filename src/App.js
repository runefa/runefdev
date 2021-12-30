import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Divider,
  Flex,
  theme,
} from '@chakra-ui/react';
import theme_ from './theme';
import NavBar from './components/Nav';
import SideBar from './components/Side';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <ChakraProvider theme={theme_}>
      <Flex
        as="section"
        id="hero"
        maxW="6xl"
        mx="auto"
        // px={4}
        direction="column"
      >
        <Flex direction={['column', , 'row']}>
          <SideBar isOpen={isOpen} toggle={toggle} />
          <NavBar />
          <Box textAlign="center" fontSize="xl" w={['100%', , '80%']}>
            <Flex id="home" height="100vh" px="8" align="center">
              <Flex height="80%">
                <Text textStyle="h1">Home</Text>
              </Flex>
            </Flex>
            <Flex id="about" height="100vh" px="8" align="center">
              <Flex height="80%">
                <Text textStyle="h1">About</Text>
              </Flex>
            </Flex>
            <Flex id="education" height="100vh" px="8" align="center">
              <Flex height="80%">
                <Text textStyle="h1">Education</Text>
              </Flex>
            </Flex>
            <Flex id="experience" height="100vh" px="8" align="center">
              <Flex height="80%">
                <Text textStyle="h1">Experience</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

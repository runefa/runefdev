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
  useColorModeValue,
} from '@chakra-ui/react';
import theme_ from './theme';
import NavBar from './components/Nav';
import SideBar from './components/Side';
import About from './components/Sections/About';
import Home from './components/Sections/Home';
import { PillPity } from 'pill-pity';
import Education from './components/Sections/Education';

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

  const pillPityBg = useColorModeValue('gray.500', 'white');

  return (
    <ChakraProvider theme={theme_}>
      <Flex as="section" id="hero" maxW="6xl" mx="auto" direction="column">
        <Flex
        // direction={['column', , 'row']}
        >
          <SideBar isOpen={isOpen} toggle={toggle} />
          <NavBar />
          <Box textAlign="center" fontSize="xl" w={['100%', , '80%']}>
            <PillPity
              as="main"
              patFill={pillPityBg}
              bgColor="transparent"
              pattern="wiggle"
              minH="100vh"
              patOpacity={0.2}
              pb={36}
            >
              <Home />

              <About />
              <Education />

              {/* <Flex id="education" height="100vh" px="8" align="center">
                <Flex height="80%">
                  <Text textStyle="h1">Education</Text>
                </Flex>
              </Flex> */}
              <Flex id="experience" height="100vh" px="8" align="center">
                <Flex height="80%">
                  <Text textStyle="h1">Experience</Text>
                </Flex>
              </Flex>
            </PillPity>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

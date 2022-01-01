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
import Experience from './components/Sections/Experience';

function App() {
  const carolinaBlue = '#4B9CD3';

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
        <Flex>
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
              pb={24}
            >
              <Home />
              <About />
              <Education />
              <Experience />
            </PillPity>
          </Box>
        </Flex>
      </Flex>
      <Flex
        as="footer"
        justify="center"
        align="center"
        p={4}
        mt={8}
        mb={8}
        direction="column"
      >
        <Text textStyle="footer">Designed and Developed by Haroon Feisal.</Text>
        <Text textStyle="footer" pt={2}>
          Built with{' '}
          <Link color={carolinaBlue} href="https://reactjs.org/" isExternal>
            React
          </Link>{' '}
          and hosted on&nbsp;
          <Link color={carolinaBlue} href="https://vercel.com/" isExternal>
            Vercel
          </Link>
          .
        </Text>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

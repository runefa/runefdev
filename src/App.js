import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import theme_ from './theme';
import NavBar from './components/Nav';
import SideBar from './components/Side';
import About from './components/Sections/About';
import Home from './components/Sections/Home';
import { PillPity } from 'pill-pity';
import Education from './components/Sections/Education';
import Experience from './components/Sections/Experience';
import Footer from './components/Sections/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
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
          <Box textAlign="center" fontSize="xl" w={['100%', null, '80%']}>
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
      <Footer />
    </ChakraProvider>
  );
}

export default App;

import {
  Stack,
  Text,
  Icon,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const SideBar = ({ isOpen, toggle }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  return (
    <>
      <Icon
        boxSize={'4rem'}
        as={FaBars}
        pos="fixed"
        right={0}
        display={[, , 'none']}
        onClick={toggle}
        cursor="pointer"
        p="3"
      />
      <Stack
        display={[isOpen ? 'inline' : '', isOpen ? 'inline' : '', 'none']}
        h="100vh"
        w="100vw"
        bg={bgColor}
        pos="fixed"
        align="center"
        justify="center"
        direction="row"
        textAlign="center"
        transition="all 0.3s ease-in-out"
        top={isOpen ? '0' : '-100vh'}
        opacity={isOpen ? '100%' : '0'}
        zIndex={999}
        cursor="pointer"
      >
        <Icon
          as={FaTimes}
          pos="fixed"
          right="0"
          boxSize="4rem"
          p="3"
          onClick={toggle}
        />

        <Text fontSize="3xl" pt="20%">
          <Link to="home" onClick={toggle}>
            HOME
          </Link>
        </Text>

        <Text fontSize="3xl" pt="2">
          <Link to="about" onClick={toggle}>
            ABOUT
          </Link>
        </Text>
        <Text fontSize="3xl" pt="2">
          <Link to="education" onClick={toggle}>
            EDUCATION
          </Link>
        </Text>

        <Text fontSize="3xl" pt="2" pb="2">
          <Link to="experience" onClick={toggle}>
            EXPERIENCE
          </Link>
        </Text>

        <ColorModeSwitcher />
      </Stack>
    </>
  );
};

export default SideBar;

// opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
// top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
// transition: 0.5s ease-in-out;
// position: fixed;
// width: 100vh;
// height: 100vh;
// background: #0d0d0d;

import { Stack, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { sections } from '../data/sections_data';

const SideBar = ({ isOpen, toggle }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  return (
    <>
      <Icon
        boxSize={'4rem'}
        as={FaBars}
        pos="fixed"
        right={0}
        display={['', '', 'none']}
        onClick={toggle}
        cursor="pointer"
        p="3"
      />
      <Stack
        display={[
          isOpen ? 'inline' : 'none',
          isOpen ? 'inline' : 'none',
          'none',
        ]}
        // This allows transitions to work, weird scrolling on mobile though
        // display={[
        //   isOpen ? 'inline' : '',
        //   isOpen ? 'inline' : '',
        //   'none',
        // ]}
        h="100vh"
        w="100vw"
        bg={bgColor}
        pos="fixed"
        align="center"
        justify="center"
        direction="row"
        textAlign="center"
        // transition="all 0.3s ease-in-out"
        // top={isOpen ? '0' : '-100vh'}
        // opacity={isOpen ? '100%' : '0'}
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
        {sections.map((name, index) => {
          return (
            <Text fontSize="3xl" pt={index === 0 ? '40%' : 2}>
              <Link to={name} onClick={toggle}>
                {name.toUpperCase()}
              </Link>
            </Text>
          );
        })}
        <ColorModeSwitcher pt={4} />
      </Stack>
    </>
  );
};

export default SideBar;

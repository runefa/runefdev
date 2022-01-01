import React from 'react';
import {
  Flex,
  Text,
  Box,
  Stack,
  useColorModeValue,
  Image,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { GoTriangleLeft, GoTriangleUp } from 'react-icons/go';

const About = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('black', 'white');
  const bubbleColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Flex id="about" minH="100vh" px="8" width="100%">
      <Flex
        pt="8"
        direction="column"
        justify="left"
        textAlign="left"
        width="100%"
      >
        <Box borderTop="2px" bg={bgColor} w="100%" p={6} borderRadius="sm">
          <Flex direction="column" justify="center" textAlign="left">
            <Text textStyle="h1">About</Text>
            <Divider borderColor={borderColor} mb="10" />

            <Flex
              justify="center"
              align="center"
              mb="10"
              direction={['column', 'column', 'row']}
            >
              <Image
                border="1px"
                boxSize={['150px', '175px', '200px']}
                src="https://miro.medium.com/max/3150/2*v6-FrHQO9uP7mCFvQ-we5Q.jpeg"
                objectFit="cover"
                objectPosition="50% 50%"
                borderRadius="full"
                mr={['2', '6', '10']}
              />
              <Stack direction={['column', 'column', 'row']} align="center">
                <Icon
                  color={bubbleColor}
                  as={GoTriangleLeft}
                  mr="-4"
                  display={['none', 'none', 'flex']}
                />
                <Icon
                  color={bubbleColor}
                  as={GoTriangleUp}
                  mb="-1rem !important"
                  display={['flex', 'flex', 'none']}
                />
                <Box bg={bubbleColor} p={4} borderRadius="sm">
                  <Text textStyle="h3">Hi, I'm Haroon.</Text>
                  <Text textStyle="body" mt="4">
                    I've always been interested in tech and engineering. When I
                    was younger, my focus was captured by Lego robotics. As I
                    grew older, I discovered the Raspberry Pi and began coding.
                    I found the challenge of programming to be exciting. In
                    middle school, I was invited to attend a Python bootcamp
                    where my passion for software was cemented.
                  </Text>
                </Box>
              </Stack>
            </Flex>

            <Text textStyle="body" mb="4">
              Outside of coding, I enjoy weightlifting, biking, gaming, and
              reading.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default About;

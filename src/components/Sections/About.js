import React from 'react';
import {
  Flex,
  Text,
  Box,
  Stack,
  useColorModeValue,
  Image,
  Spacer,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { GoTriangleLeft } from 'react-icons/go';

const About = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const hover = useColorModeValue('gray.400', 'gray.500');
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

            <Flex justify="center" align="center" mb="4">
              <Image
                border="1px"
                boxSize={['100px', '150px', '200px']}
                src="https://miro.medium.com/max/3150/2*v6-FrHQO9uP7mCFvQ-we5Q.jpeg"
                objectFit="cover"
                objectPosition="50% 50%"
                borderRadius="full"
                mr={['2', '6', '10']}
              />
              <Stack direction="row" align="center">
                <Icon color={bubbleColor} as={GoTriangleLeft} mr="-4" />
                <Box bg={bubbleColor} p={4} borderRadius="sm">
                  <Text textStyle="h3">Hi, I'm Haroon.</Text>
                </Box>
              </Stack>
            </Flex>

            <Text textStyle="body" mb="4">
              I’m a Senior at the University of North Carolina at Chapel Hill
              majoring in computer science and statistics, interested in a
              career related to software and tech.
            </Text>

            <Text textStyle="body" mb="4">
              I completed my 2021 Summer internship as a Software Engineer at
              Microsoft Azure with the AppServices Certificates and Domains
              Team. I gained valuable experience working on large pre-existing
              systems, and learned how to work in an agile team environment.
            </Text>

            <Text textStyle="body" mb="4">
              I am interested in both frontend and backend development, and try
              to expand my skillset as much as possible by traveling to
              hackathons.
            </Text>

            <Text textStyle="body" mb="4">
              Apart from coding, I enjoy weightlifting, biking, gaming, playing
              piano, and reading.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default About;

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Stack,
  Code,
  Grid,
  Flex,
  Spacer,
  List,
  ListItem,
  ListIcon,
  theme,
  Icon,
  useColorModeValue,
  UnorderedList,
  Image,
  Divider,
  HStack,
  Button,
} from '@chakra-ui/react';
import { FaGithub, FaEnvelope, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import resumepdf from '../../hfresume.pdf';

const Home = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const hover = useColorModeValue('gray.400', 'gray.500');
  return (
    <Flex id="home" minH="100vh" px="8" width="100%">
      <Flex
        pt="8"
        direction="column"
        justify="left"
        textAlign="left"
        width="100%"
      >
        <Box borderTop="2px" bg={bgColor} w="100%" p={6} borderRadius="sm">
          <Flex direction={['column', 'column', 'column']} justify="center">
            <Text opacity={0.4}>Name:</Text>
            <Stack direction={['column', 'row']} spacing="2">
              <Text textStyle="h0" mr={['0', '4', '6']}>
                Haroon
              </Text>

              <Text textStyle="h0">Feisal.</Text>
            </Stack>
            <Text mt={['4']} mb="2" opacity={0.4}>
              Occupation:
            </Text>
            <Text mb="2" textStyle="h2">
              Software Engineer.
            </Text>

            <Text mt={['2']} opacity={0.4}>
              Links:
            </Text>

            <Stack mt="4" direction={['column', 'row']} wrap="wrap" gridGap="2">
              <Link
                variant="button"
                bg={useColorModeValue('gray.300', 'gray.600')}
                _hover={{
                  bg: hover,
                }}
                href="https://github.com/haroonf"
                isExternal
              >
                <Icon as={FaGithub} boxSize="5" mt={['auto']} mb={['auto']} />
                <Text textStyle="button">Github</Text>
              </Link>
              <Link
                variant="button"
                bg={useColorModeValue('gray.300', 'gray.600')}
                _hover={{
                  bg: hover,
                }}
                href="https://www.linkedin.com/in/haroonfeisal/"
                isExternal
              >
                <Icon as={FaLinkedin} boxSize="5" mt={['auto']} mb={['auto']} />
                <Text textStyle="button">LinkedIn</Text>
              </Link>
              <Link
                variant="button"
                bg={useColorModeValue('gray.300', 'gray.600')}
                _hover={{
                  bg: hover,
                }}
                href="mailto:haroonf@live.unc.edu"
                isExternal
              >
                <Icon as={FaEnvelope} boxSize="5" mt={['auto']} mb={['auto']} />
                <Text textStyle="button">Email</Text>
              </Link>
              <Link
                variant="button"
                bg={useColorModeValue('gray.300', 'gray.600')}
                _hover={{
                  bg: hover,
                }}
                href={resumepdf}
                isExternal
              >
                <Icon as={FaFilePdf} boxSize="5" mt={['auto']} mb={['auto']} />
                <Text textStyle="button">Resume</Text>
              </Link>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;

import React from 'react';
import {
  Box,
  Text,
  Link,
  Stack,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import { buttons_data } from '../data/home_data';

const Home = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const hover = useColorModeValue('gray.400', 'gray.500');
  const buttonColor = useColorModeValue('gray.300', 'gray.600');
  return (
    <Flex
      id="home"
      minH={['auto', null, '100vh']}
      px="8"
      width="100%"
      pt={[8, 14, 0]}
    >
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

            <Stack
              mt="4"
              direction={['column', 'row']}
              wrap="wrap"
              gridGap="2"
              spacing={0}
            >
              {Object.keys(buttons_data).map((name, index) => {
                const { icon, href } = buttons_data[name];
                return (
                  <Link
                    variant="button"
                    bg={buttonColor}
                    _hover={{
                      bg: hover,
                    }}
                    href={href}
                    isExternal
                  >
                    <Icon as={icon} boxSize="5" mt={['auto']} mb={['auto']} />
                    <Text textStyle="button">{name}</Text>
                  </Link>
                );
              })}
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;

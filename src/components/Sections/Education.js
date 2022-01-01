import React from 'react';

import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Divider,
  ListItem,
  UnorderedList,
  Grid,
} from '@chakra-ui/react';

const Education = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('black', 'white');
  const courseworkColor = useColorModeValue('gray.300', 'gray.600');
  const carolinaBlue = '#4B9CD3';
  const csCourses = [
    'Practical Web Design/Dev',
    'Data Structures',
    'Modern Web Programming',
    'Internet Services and Protocols',
    'Algorithms and Analysis',
    'Languages and Computation',
    'Files and Databases',
    'Computer Organization',
  ];
  const statsCourses = [
    'Data Science',
    'Data Analysis Methods',
    'Linear Optimization',
    'Decision Analytics',
    'Probability',
    'Stochastic Modeling',
    'Mathematical Statistics',
    'Discrete Mathematics',
  ];
  return (
    <Flex
      id="education"
      minH={['auto', null, '100vh']}
      px="8"
      width="100%"
      mt={[10, 16, 0]}
    >
      <Flex
        pt="8"
        direction="column"
        justify="left"
        textAlign="left"
        width="100%"
      >
        <Box borderTop="2px" bg={bgColor} w="100%" p={6} borderRadius="sm">
          <Flex direction="column" justify="center" textAlign="left">
            <Text textStyle="h1">Education</Text>
            <Divider borderColor={borderColor} />

            <Text textStyle="h3" mt="6" color={carolinaBlue}>
              University Of North Carolina at Chapel Hill
            </Text>

            <Text textStyle="body" mt="1" opacity={0.8}>
              Computer Science B.S. &amp; Statistics and Analytics B.S.
            </Text>
            <Text
              // as="span"
              mt={1}
              opacity={0.6}
              display="inline-block"
              fontSize="sm"
            >
              3.8/4.0 (Highest Distinction)
            </Text>
            <Text textStyle="body" mt="4">
              Relevant Coursework:
            </Text>

            <Box bg={courseworkColor} p={4} borderRadius="sm" mt={2}>
              <Text textStyle="body">Computer Science: </Text>
              <Grid
                templateColumns={['1fr', null, 'repeat(2, 1fr)']}
                px={['0', null, '2']}
                gap={['0', null, '2']}
              >
                <UnorderedList styleType="square">
                  {csCourses
                    .slice(0, Math.round(csCourses.length / 2))
                    .map((item, index) => {
                      return (
                        <ListItem key={`parent${index}`}>
                          <Text textStyle="education">{item}</Text>
                        </ListItem>
                      );
                    })}
                </UnorderedList>
                <UnorderedList styleType="square">
                  {csCourses
                    .slice(Math.round(csCourses.length / 2))
                    .map((item, index) => {
                      return (
                        <ListItem key={`parent${index}`}>
                          <Text textStyle="education">{item}</Text>
                        </ListItem>
                      );
                    })}
                </UnorderedList>
              </Grid>
            </Box>

            <Box bg={courseworkColor} p={4} borderRadius="sm" mt="4">
              <Text textStyle="body">Statistics and Analytics: </Text>
              <Grid
                templateColumns={['1fr', null, 'repeat(2, 1fr)']}
                px={['0', null, '2']}
                gap={['0', null, '2']}
              >
                <UnorderedList styleType="square">
                  {statsCourses
                    .slice(
                      0,
                      Math.round(statsCourses.length - statsCourses.length / 2)
                    )
                    .map((item, index) => {
                      return (
                        <ListItem key={`parent${index}`}>
                          <Text fontSize="md">{item}</Text>
                        </ListItem>
                      );
                    })}
                </UnorderedList>
                <UnorderedList styleType="square">
                  {' '}
                  {statsCourses
                    .slice(
                      Math.round(statsCourses.length - statsCourses.length / 2)
                    )
                    .map((item, index) => {
                      return (
                        <ListItem key={`parent${index}`}>
                          <Text fontSize="md">{item}</Text>
                        </ListItem>
                      );
                    })}
                </UnorderedList>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Education;

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
  List,
  ListItem,
  UnorderedList,
  Grid,
  Badge,
  Link,
} from '@chakra-ui/react';
import { experience_data } from '../../data/experience_data';

const Company = props => {
  const courseworkColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Flex
      mt="6"
      p={[2, , 4]}
      bg={courseworkColor}
      width="100%"
      direction="column"
    >
      <Flex width="min-content" borderBottom="1px">
        <Text textStyle="h2">{props.company}</Text>
      </Flex>
      {props.titles.map((title, index) => {
        if (index === 0) {
          return <Title {...title} />;
        }
        return (
          <>
            <Divider />
            <Title {...title} />;
          </>
        );
      })}
      <Divider />
    </Flex>
  );
};

const Title = props => {
  return (
    <>
      <Box ml={0} mt={1} p={2}>
        <Text textStyle="h4" opacity=".6">
          {props.location} · {props.dates}
        </Text>
        <Text textStyle="h3">{props.title}</Text>
        <Flex direction="row" mt={-1.5} wrap="wrap" pl={[2, 0, 0]}>
          {props.badges.map(badge => {
            return <EBadge badge={props.badge} />;
          })}
        </Flex>

        <UnorderedList mt={1} px={2} styleType="square">
          {props.description.map(text => {
            return <EListItem text={text} />;
          })}
        </UnorderedList>
      </Box>
    </>
  );
};

const EBadge = props => {
  const badgeColor = useColorModeValue('#A0AEC080', '#71809680');
  return (
    <Badge
      mt="2"
      bg={badgeColor}
      as={Link}
      mr="2"
      href={props.badge[0]}
      isExternal
    >
      {props.badge[1]}
    </Badge>
  );
};

const EListItem = props => {
  return (
    <ListItem>
      <Text textStyle="list">{props.text}</Text>
    </ListItem>
  );
};

const Experience = () => {
  //console.log(Object.keys(experience_data));
  const companies = Object.keys(experience_data);
  //console.log(Object.keys(experience_data[companies[1]]));
  const testFunction = () => {
    companies.map(company => {
      const titles = [];
      console.log(company);

      Object.keys(experience_data[company]).map(entry => {
        //logoURL, then experiences
        console.log(entry);
        titles.push(entry);

        console.log(experience_data[company][entry]);
      });
      console.log(titles);
      titles.slice(1).map(title => {
        Object.keys();
      });
      return <Company company={company} />;
    });
  };
  testFunction();

  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const hover = useColorModeValue('gray.400', 'gray.500');
  const borderColor = useColorModeValue('black', 'white');
  const courseworkColor = useColorModeValue('gray.300', 'gray.600');
  const badgeColor = useColorModeValue('#A0AEC080', '#71809680');
  //gray.500 = #718096
  //gray.400 = #A0AEC0

  return (
    <Flex id="experience" minH="100vh" px="8" width="100%">
      <Flex
        pt="8"
        direction="column"
        justify="left"
        textAlign="left"
        width="100%"
      >
        <Box borderTop="2px" bg={bgColor} w="100%" p={6} borderRadius="sm">
          <Flex direction="column" justify="center" textAlign="left">
            <Text textStyle="h1">Experience</Text>
            <Divider borderColor={borderColor} />
            <Flex width="100%" direction="column">
              <Flex
                mt="6"
                p={[2, , 4]}
                bg={courseworkColor}
                width="100%"
                direction="column"
              >
                <Flex width="min-content" borderBottom="1px">
                  <Text textStyle="h2">Microsoft</Text>
                </Flex>

                <Box ml={0} mt={1} p={2}>
                  <Text textStyle="h4" opacity=".6">
                    Remote · May 2021 - Aug 2021
                  </Text>
                  <Text textStyle="h3">Software Engineer I</Text>
                  <Flex direction="row" mt={-1.5} wrap="wrap" pl={[2, 0, 0]}>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                  </Flex>

                  <UnorderedList mt={1} px={2} styleType="square">
                    <ListItem>
                      <Text textStyle="list">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="list">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Divider />
                <Box ml={0} mt={1} p={2}>
                  <Text textStyle="h4" opacity=".6">
                    Remote · May 2021 - Aug 2021
                  </Text>
                  <Text textStyle="h3">Software Engineer I</Text>
                  <Flex direction="row" mt={-1.5} wrap="wrap" pl={[2, 0, 0]}>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                  </Flex>

                  <UnorderedList mt={1} px={2} styleType="square">
                    <ListItem>
                      <Text textStyle="list">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="list">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Flex>
              <Flex
                mt={6}
                p={[2, , 4]}
                bg={courseworkColor}
                width="100%"
                direction="column"
              >
                <Flex width="min-content" borderBottom="1px">
                  <Text textStyle="h2">Fidelity</Text>
                </Flex>

                <Box ml={0} mt={1} p={2}>
                  <Text textStyle="h4" opacity=".6">
                    Remote · May 2021 - Aug 2021
                  </Text>
                  <Text textStyle="h3">Software Engineer I</Text>
                  <Flex direction="row" mt={-1.5} wrap="wrap">
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                    <Badge
                      mt="2"
                      bg={badgeColor}
                      as={Link}
                      mr="2"
                      href="https://google.com"
                      isExternal
                    >
                      Javascript
                    </Badge>
                  </Flex>

                  <UnorderedList mt={1} px={2} styleType="square">
                    <ListItem>
                      <Text textStyle="list">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text textStyle="list">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Experience;

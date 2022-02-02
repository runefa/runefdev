import React from 'react';

import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Image,
  Divider,
  ListItem,
  UnorderedList,
  Badge,
  Link,
} from '@chakra-ui/react';
import { experience_data } from '../data/experience_data';

const Company = props => {
  const courseworkColor = useColorModeValue('gray.300', 'gray.600');
  return (
    <Flex
      mt="6"
      p={[2, null, 4]}
      bg={courseworkColor}
      width="100%"
      direction="column"
    >
      <Flex
        width="max-content"
        borderBottom="1px"
        align="center"
        justify="center"
        p={1}
        wrap="wrap"
      >
        <Image
          src={props.logoURL}
          fallbackSrc="https://via.placeholder.com/40"
          boxSize="40px"
          p="5px"
          mr={1}
        />
        <Text textStyle="h2" mr={1} wordBreak="break-all">
          {props.company}
        </Text>
      </Flex>
      {Object.keys(props.experiences)
        .reverse()
        .map((title, index) => {
          return (
            <React.Fragment key={`fragment${index}`}>
              {index !== 0 && <Divider />}
              <Title title={title} data={props.experiences[title]} />
            </React.Fragment>
          );
        })}
    </Flex>
  );
};

const Title = props => {
  return (
    <Box ml={0} mt={1} p={2} minH="20">
      <Text textStyle="h4" opacity=".6">
        {props.data.location} · {props.data.dates}
      </Text>
      <Text textStyle="h3">{props.title}</Text>
      <Flex direction="row" mt={-1} wrap="wrap">
        {props.data.badges.map((badge, index) => {
          return <EBadge badge={badge} key={index} />;
        })}
      </Flex>

      <UnorderedList mt={1} px={2} styleType="square">
        {props.data.description.map((text, index) => {
          return <EListItem text={text} key={index} />;
        })}
      </UnorderedList>
    </Box>
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
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('black', 'white');

  return (
    <Flex
      id="experience"
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
            <Text textStyle="h1">Experience</Text>
            <Divider borderColor={borderColor} />
            <Flex width="100%" direction="column">
              {Object.keys(experience_data)
                .reverse()
                .map((company, index) => {
                  const { logoURL, ...experiences } = experience_data[company];
                  return (
                    <Company
                      key={`company${index}`}
                      company={company}
                      logoURL={logoURL}
                      experiences={experiences}
                    />
                  );
                })}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Experience;

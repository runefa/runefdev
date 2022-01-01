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
      >
        <Image
          src={props.logoURL}
          fallbackSrc="https://via.placeholder.com/40"
          boxSize="40px"
          p="5px"
          mr={1}
        />
        <Text textStyle="h2" mr={1}>
          {props.company}
        </Text>
      </Flex>
      {props.titles.map((title, index) => {
        if (index === 0) {
          return (
            <React.Fragment key={`fragment${index}`}>
              <Title title={title} />
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={`fragment${index}`}>
            <Divider />
            <Title title={title} />
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

const Title = props => {
  return (
    <>
      <Box ml={0} mt={1} p={2} minH="20">
        <Text textStyle="h4" opacity=".6">
          {props.title[1]} · {props.title[2]}
        </Text>
        <Text textStyle="h3">{props.title[0]}</Text>
        <Flex direction="row" mt={-1} wrap="wrap">
          {props.title[4].map((badge, index) => {
            return <EBadge badge={badge} key={index} />;
          })}
        </Flex>

        <UnorderedList mt={1} px={2} styleType="square">
          {props.title[3].map((text, index) => {
            return <EListItem text={text} key={index} />;
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
  const dataParser = () => {
    const output = {};
    const companies = [...Object.keys(experience_data)];
    companies.reverse();
    companies.map(company => {
      const titles = [];
      const titlesData = [];
      let titleData = [];
      output[company] = titlesData;

      titles.push(...Object.keys(experience_data[company]));

      titles.slice(1).map(title => {
        titleData.push(title);
        Object.keys(experience_data[company][title]).map(entry => {
          titleData.push(experience_data[company][title][entry]);
          return null;
        });

        titlesData.unshift(titleData);

        titleData = [];
        return null;
      });
      titlesData.unshift(experience_data[company].logoURL);
      return null;
    });
    return output;
  };
  const parsedData = dataParser();
  // console.log(parsedData);

  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('black', 'white');

  //gray.500 = #718096
  //gray.400 = #A0AEC0

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
              {Object.keys(parsedData).map((key, index) => {
                return (
                  <Company
                    company={key}
                    key={index}
                    titles={parsedData[key].slice(1)}
                    logoURL={parsedData[key][0]}
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

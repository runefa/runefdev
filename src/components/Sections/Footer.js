import React from 'react';
import { Flex, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const carolinaBlue = '#4B9CD3';
  return (
    <Flex
      as="footer"
      justify="center"
      align="center"
      p={4}
      mt={8}
      mb={8}
      direction="column"
    >
      <Text textStyle="footer">Designed and developed by Rune Feisal.</Text>
      <Text textStyle="footer" pt={2}>
        Built with{' '}
        <Link color={carolinaBlue} href="https://reactjs.org/" isExternal>
          React
        </Link>{' '}
        and hosted on&nbsp;
        <Link color={carolinaBlue} href="https://vercel.com/about" isExternal>
          Vercel
        </Link>
        .
      </Text>
      <Stack direction="row" align="center" pt={2}>
        <Icon as={FaGithub} size={2} />
        <Link
          textStyle="footer"
          color={carolinaBlue}
          href="https://github.com/runefa/haroonfio"
          isExternal
        >
          Source code.
        </Link>
      </Stack>
    </Flex>
  );
};

export default Footer;

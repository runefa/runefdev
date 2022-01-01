import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

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
      <Text textStyle="footer">Designed and developed by Haroon Feisal.</Text>
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
    </Flex>
  );
};

export default Footer;

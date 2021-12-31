import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
  },
  fonts: {
    heading: 'Roboto Mono',
    body: 'Roboto Mono',
  },
  textStyles: {
    h0: {
      fontSize: ['3rem', '3rem', '4rem'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: 'tight',
    },
    h1: {
      fontSize: ['3rem', '3rem', '3rem'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: 'tight',
    },
    h2: {
      fontSize: ['1.2rem', '1.4rem', '1.8rem'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h3: {
      fontSize: ['1rem', '1.4rem'],
      fontWeight: 'semibold',
      letterSpacing: '-1%',
    },
    h4: {
      fontSize: ['.75rem', '1rem'],
      fontWeight: 'semibold',
      letterSpacing: '-1%',
    },
    body: {
      fontSize: ['1rem', '1.1rem'],
    },
    divider: {
      fontSize: ['1.75rem', '2.25rem', '2.5rem'],
      fontWeight: 'semibold',
    },
    headline: {
      fontSize: ['1rem', '1.25rem', '1.5rem'],
      fontWeight: 'medium',
    },
    footer: {
      fontSize: ['0.75rem', '0.875rem'],
    },
    list: {
      fontSize: ['1rem', '1.25rem'],
    },
    button: {
      fontSize: ['1rem', '1rem'],
    },
  },
  components: {
    Link: {
      variants: {
        button: {
          borderBottom: '2px',
          borderRadius: 'md',
          backgroundColor: 'rgba(74, 85, 104, 0.8)',
          padding: '2',
          _hover: {
            background: 'gray.500',
            textDecoration: 'none',
          },
          align: 'center',

          display: 'flex',
          gridGap: 2,
          justify: 'center',
        },
      },
    },
  },
});

export default theme;

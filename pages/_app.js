import { ChakraProvider, extendTheme, theme as base } from '@chakra-ui/react';
import Script from 'next/script';

import '../styles/globals.css';
import Head from 'next/head';

const theme = extendTheme({
  fonts: {
    body: `Manrope, ${base.fonts.body}`,
    heading: `Manrope, ${base.fonts.body}`,
  },
  colors: {
    purple: {
      300: '#CCD6F6',
    },
    blue: {
      50: '#c2efff',
      100: '#a6e7ff',
      300: '#73D9FF',
      500: '#33CDD7',
      700: '#202752',
      800: '#11152B',
      900: '#0c0f1f',
    },
    green: {
      100: '#8fe3d1',
      300: '#57e6c8',
      500: '#04E8B9',
      700: '#04d1a7',
    },
    primary: '#11152B',
    secondary: '#04bfb3',
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'secondary',
      },
      variants: {
        base: {
          fontSize: ['36px', '38px', '48px'],
        },
      },
      defaultProps: {
        variant: 'base',
      },
    },
    Text: {
      variants: {
        base: {
          fontSize: ['16px', '18px', '20px'],
          color: 'blue.500',
        },
      },
      defaultProps: {
        variant: 'base',
      },
    },
    Link: {
      variants: {
        base: {
          color: 'white',
          borderRadius: '6px',
          fontSize: '18px',
          transition: 'all 0.2s ease-in-out',
          _hover: {
            textDecor: 'none',
            color: 'secondary',
          },
        },
      },
      defaultProps: {
        variant: 'base',
      },
    },
    Button: {
      baseStyle: {
        color: 'white',
      },
      variants: {
        base: {
          outline: 'none',
          border: '0',
          bgColor: 'secondary',
          color: 'white',
          fontSize: ['16px', '18px', '20px'],
        },
      },
      defaultProps: {
        variant: 'base',
      },
    },
  },
});

const PortfolioApp = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Head>
        <title>Michael Volakis</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3M45E1NNH5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

		  gtag('config', 'G-3M45E1NNH5');
        `}
      </Script>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
};

export default PortfolioApp;

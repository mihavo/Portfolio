import { ChakraProvider, extendTheme, theme as base } from '@chakra-ui/react';
import '../styles/globals.css';
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
		secondary: '#04E8B9',
	},
	components: {
		Text: {
			baseStyle: {
				color: 'secondary',
			},
		},
		Heading: {
			baseStyle: {
				color: 'secondary',
			},
			variants: {
				base: {
					fontSize: '60px',
				},
			},
			defaultProps: {
				variant: 'base',
			},
		},
		Text: {
			baseStyle: {
				fontSize: '22px',
				color: 'blue.500',
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
		<div className='app'>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</div>
	);
};

export default PortfolioApp;

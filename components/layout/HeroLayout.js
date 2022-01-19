import React from 'react';
import { Flex, Text, Heading, Button } from '@chakra-ui/react';
import Navbar from '../ui/Navbar';
import 'animate.css';

const HeroLayout = () => {
	const textAnimationProps = {
		className: 'animate__animated animate__fadeInDown animate__slow',
	};
	const buttonProps = {
		className: 'animate__animated animate__fadeInUp animate__slow',
		color: 'secondary',
		variant: 'outline',
		size: 'lg',
		borderColor: 'secondary',
		transition: 'all 0.3s ease-in-out',
		_hover: {
			bgColor: 'secondary',
			color: 'primary',
		},
	};
	return (
		<Flex
			bgImage={'/vectors/background.svg'}
			bgRepeat={'no-repeat'}
			flexDir={'column'}
			w={'100%'}
			h={'100vh'}
			id={'home'}
			textAlign={['center', 'center', 'center', 'start']}>
			<Navbar />

			<Flex justifyContent={['start', 'center', 'center', 'end']} my={'10vh'} mx={'5vh'} h={'100%'}>
				<Flex flexDir={'column'} h={'100%'} w={['100vw', '100vw', '45vw']}>
					<Flex flexDir={'column'} justifyContent={'space-between'}>
						<Flex flexDir={'column'}>
							<Text {...textAnimationProps} fontSize={['24px', '20px', '24px']}>
								Hi there! I'm
							</Text>
							<Heading my={'5px'} {...textAnimationProps}>
								Michael Volakis
							</Heading>
							<Heading
								fontSize={['20px', '22px', '30px']}
								{...textAnimationProps}
								mt={'15px'}
								color={'blue.300'}
								fontWeight={'300'}>
								Computer Science Student & Full Stack Web Developer
							</Heading>
							<Text mt={'6vh'} color={'green.300'} fontSize={['18px', '20px', '22px']}>
								I am a software developer with a passion for learning and problem solving. I'm
								currently interested in learning more about the world of web development.
							</Text>
						</Flex>
						<Flex mt={'10vh'} justifyContent={['center', 'center', 'center', 'start']}>
							<Button {...buttonProps} outline={'none'}>
								<a href='#projects'>Check out my Projects</a>
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HeroLayout;

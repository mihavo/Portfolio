import React from 'react';
import { Flex, Grid, GridItem, Text, Heading, Avatar, Image, ButtonGroup, Button } from '@chakra-ui/react';
import TestSVG from '../../public/vectors/background.svg';
import Typewriter from 'typewriter-effect';
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
		<Flex flexDir={'column'} w={'100%'} h={'92vh'} id={'home'}>
			<Image />
			<Grid templateColumns={'repeat(20, 1fr)'} gap={'20px'}>
				<GridItem colSpan={2}></GridItem>
				<GridItem colSpan={16} justifyContent={'center'} my={'10vh'} h={'100%'}>
					<Flex flexDir={'column'} h={'100%'} alignItems={'end'}>
						<Flex flexDir={'column'} justifyContent={'space-between'}>
							<Flex flexDir={'column'}>
								<Text fontSize={'48px'} {...textAnimationProps}>
									Hi there! I'm
								</Text>
								<Heading my={'5px'} {...textAnimationProps}>
									Michael Volakis
								</Heading>
								<Heading
									{...textAnimationProps}
									textAlign={'center'}
									mt={'15px'}
									fontSize={'28px'}
									color={'blue.300'}
									fontWeight={'300'}>
									Computer Science Student & Full Stack Web Developer
								</Heading>
								<Text
									{...textAnimationProps}
									mt={'6vh'}
									color={'green.300'}
									fontSize={'20px'}
									maxW={'30vw'}>
									I am a software developer with a passion for learning and problem solving.
									I'm currently interested in learning more about the world of web
									development.
								</Text>
							</Flex>
							<Flex mt={'10vh'}>
								<Button {...buttonProps} outline={'none'}>
									<a href='#projects'>Check out my Projects</a>
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</GridItem>
				<GridItem colSpan={2}></GridItem>
			</Grid>
		</Flex>
	);
};

export default HeroLayout;

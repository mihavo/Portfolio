import React from 'react';
import { Flex, Text, Heading, Link, Button, ButtonGroup } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { IoMdDocument } from 'react-icons/io';

const AboutLayout = () => {
	return (
		<Flex
			flexDir={'column'}
			h={'100vh'}
			id={'about'}
			textAlign={['center', 'start']}
			maxW={['100%', '100%', '100%', '60%']}
			mt={['20vh', '10vh', '0vh']}
			p={['25px', '50px', '75px', '100px']}>
			<Flex flexDir={'column'}>
				<Heading>About Me</Heading>
				<Text mt={'4vh'} color={'purple.300'}>
					Hello there! My name is Michael and I am a Computer Science Student at{' '}
					<Link color={'secondary'} href={'https://di.uoa.gr'} target={'_blank'}>
						DIT, University of Athens, Greece.
					</Link>{' '}
					I'm interested in exploring new ways to build web applications. My Journey in web
					development began in 2018 when I started experimenting with the interfaces of simple
					webpages using HTML and CSS and getting familiar with the way server-side code worked.
					That inspired me to learn more about the JavaScript ecosystem and the frameworks that
					surround it.
					<br />
					<br />
					Since then I have been working on projects using the MERN stack and building web apps that
					look both modern and functional. My current interests involve learning more about
					Databases as well as creating web applications that are user-friendly and accessible to
					all.
				</Text>
				<Flex
					mt={'10vh'}
					spacing={5}
					gap={3}
					flexDir={['column', 'column', 'row']}
					alignItems={'center'}>
					<Link href='https://github.com/Michael-Vol' target={'_blank'}>
						<Button size={'lg'} color={'primary'} leftIcon={<BsGithub />}>
							Check my Github Profile
						</Button>
					</Link>
					<Link href={'/resume.pdf'} target={'_blank'}>
						<Button size={'lg'} color={'primary'} leftIcon={<IoMdDocument />}>
							Download my Resume
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default AboutLayout;

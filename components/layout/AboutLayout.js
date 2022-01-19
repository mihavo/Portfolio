import React from 'react';
import { Flex, Text, Heading, Link, Button, ButtonGroup } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { IoMdDocument } from 'react-icons/io';

const AboutLayout = () => {
	return (
		<Flex flexDir={'column'} h={'100vh'} id={'about'}>
			<Flex flexDir={'column'} mx={'20vw'} my={'10vh'}>
				<Heading fontSize={'48px'}>About Me</Heading>
				<Text fontSize={'20px'} maxW={'45vw'} mt={'4vh'} color={'purple.300'}>
					Hello there! My name is Michael and I am a Computer Science Student at{' '}
					<Link color={'secondary'} href={'di.uoa.gr'}>
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
					Databases the ways data is stored as well as creating web applications that are
					user-friendly and accessible to all.
				</Text>
				<ButtonGroup mt={'10vh'} spacing={5}>
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
				</ButtonGroup>
			</Flex>
		</Flex>
	);
};

export default AboutLayout;

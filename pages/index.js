import React from 'react';
import Navbar from '../components/ui/Navbar';
import { Flex } from '@chakra-ui/react';
import HeroLayout from '../components/layout/HeroLayout';
import AboutLayout from '../components/layout/AboutLayout';
import ProjectsLayout from '../components/layout/ProjectsLayout';
import ContactLayout from '../components/layout/ContactLayout';

export default () => {
	return (
		<Flex
			bgColor={'primary'}
			bgImage={'/vectors/background.svg'}
			h={'100%'}
			bgRepeat={'no-repeat'}
			flexDir={'column'}>
			<Navbar />
			<HeroLayout />
			<AboutLayout />
			<ProjectsLayout />
			<ContactLayout />
		</Flex>
	);
};

import React from 'react';
import Navbar from '../components/ui/Navbar';
import { Flex } from '@chakra-ui/react';
import HeroLayout from '../components/layout/HeroLayout';
import AboutLayout from '../components/layout/AboutLayout';
import ProjectsLayout from '../components/layout/ProjectsLayout';
import ContactLayout from '../components/layout/ContactLayout';

export default function Portfolio() {
	return (
		<Flex bgColor={'primary'} h={'100%'} flexDir={'column'}>
			<HeroLayout />
			<AboutLayout />
			<ProjectsLayout />
			<ContactLayout />
		</Flex>
	);
}

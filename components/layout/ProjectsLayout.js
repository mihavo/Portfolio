import React from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';
import ProjectCard from '../sections/projects/ProjectCard';
import projects from '../../data/projects/projects.json';

const ProjectsLayout = () => {
	return (
		<Flex
			flexDir={'column'}
			id={'projects'}
			textAlign={['center', 'start']}
			mt={['20vh', '10vh', '0vh']}
			p={['0px 0px 0px 20px', '20px', '75px', '100px']}>
			<Flex flexDir={'column'} h={'100%'}>
				<Heading>Projects</Heading>
				<Flex gap={'5vh'} flexDir={'column'}>
					<Flex flexDir={'column'} gap={2}>
						<Text my={'15px'} fontSize={'28px'} fontWeight={'500'} color={'secondary'}>
							Personal Projects
						</Text>
						<Flex
							gap={6}
							overflow={'scroll'}
							css={{
								'&::-webkit-scrollbar': {
									width: '0px',
								},
							}}>
							{projects.personal.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</Flex>
					</Flex>
					<Flex flexDir={'column'} h={'100%'} gap={2}>
						<Text my={'15px'} fontSize={'28px'} fontWeight={'500'} color={'secondary'}>
							University Projects
						</Text>
						<Flex
							gap={6}
							overflow={'scroll'}
							css={{
								'&::-webkit-scrollbar': {
									width: '0px',
								},
							}}>
							{projects.uni.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProjectsLayout;

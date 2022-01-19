import React from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';
import ProjectCard from '../sections/projects/ProjectCard';
import projects from '../../data/projects/projects.json';

const ProjectsLayout = () => {
	return (
		<Flex flexDir={'column'} h={'100vh'} id={'projects'}>
			<Flex flexDir={'column'} mx={'15vw'} my={'5vh'} h={'100%'}>
				<Heading>Projects</Heading>
				<Flex flexDir={'column'} gap={'5vh'}>
					<Flex flexDir={'column'} h={'100%'} gap={2}>
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

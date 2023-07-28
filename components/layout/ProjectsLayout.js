import React, { useEffect, useState } from 'react';
import { Flex, Text, Heading, Box, Container } from '@chakra-ui/react';
import ProjectCard from '../sections/projects/ProjectCard';
import projects from '../../data/projects/projects.json';
import ScrollContainer from 'react-indiana-drag-scroll';
const cardWrapperProperties = {
  flexDir: 'column',
  h: '100%',
  gap: 2,
  bgColor: 'blue.900',
  p: '2vh',
  borderRadius: '10px',
};

const catergoryHeadingProperties = {
  mb: '15px',
  fontSize: '28px',
  fontWeight: '500',
  color: 'secondary',
};

const ProjectsLayout = () => {
  return (
    <Flex
      flexDir={'column'}
      id={'projects'}
      textAlign={['center', 'start']}
      mt={['20vh', '10vh', '0vh']}
      p={['0px 0px 0px 20px', '20px', '75px', '100px']}
    >
      <Flex flexDir={'column'} h={'100%'}>
        <Heading>Projects</Heading>
        <Flex gap={'4vh'} flexDir={'column'}>
          <Flex
            {...cardWrapperProperties}
            mt={'1.5vh'}
            className="card-wrapper"
          >
            <Text {...catergoryHeadingProperties}>Personal Projects</Text>
            <ScrollContainer className="scroll-container">
              <Flex
                id="cards"
                gap={6}
                overflow={'scroll'}
                css={{
                  '&::-webkit-scrollbar': {
                    width: '0px',
                  },
                }}
              >
                {projects.personal.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </Flex>
            </ScrollContainer>
          </Flex>

          <Flex {...cardWrapperProperties} className="card-wrapper">
            <Text
              {...catergoryHeadingProperties}
              fontSize={['24px', '28px', '28px', '28px']}
            >
              University Projects
            </Text>
            <Flex
              gap={6}
              overflow={'scroll'}
              css={{
                '&::-webkit-scrollbar': {
                  width: '0px',
                },
              }}
            >
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

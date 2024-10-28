import { Flex, Heading } from '@chakra-ui/react';
import experience from '../../data/experience/experience.json';
import ExperienceCard from '../sections/experience/ExperienceCard';
const ExperienceLayout = () => {
  return (
    <Flex
      flexDir={'column'}
      h={'100vh'}
      id="experience"
      textAlign={['center', 'start']}
      mb={'10vh'}
      ml={['25px', '50px', '75px', '100px']}
      p={['25px', '50px', '75px', '100px']}
    >
      <Heading>Experience</Heading>
      <Flex
        alignItems={'center'}
        mt={'5vh'}
        ml={'20vw'}
        flexDir={'column'}
        w={'60%'}
        gap={6}
        overflow={'scroll'}
        id="experience-wrapper"
      >
        {experience.reverse().map(({ description, time_range, title, link }) => {
          return (
            <ExperienceCard
              description={description}
              time_range={time_range.toUpperCase()}
              title={title}
              link={link}
              key={title}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ExperienceLayout;

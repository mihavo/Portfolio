import React from 'react';
import {
  Flex,
  Text,
  Heading,
  Link,
  Button,
  ButtonGroup,
  Image,
  Avatar,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { IoMdDocument } from 'react-icons/io';

const buttonProps = {
  size: 'lg',
  borderColor: 'green.700',
  border: '2px solid',
  bgColor: 'primary',
  color: 'secondary',
  transition: 'all 0.3s ease-in-out',
  _hover: {
    color: 'primary',
    bgColor: 'secondary',
  },
};
const AboutLayout = () => {
  return (
    <Flex flexDir={'row'} id="about-wrapper">
      <Flex
        flexDir={'column'}
        h={'100vh'}
        id={'about-text-wrapper'}
        textAlign={['center', 'start']}
        maxW={['100%', '100%', '100%', '60%']}
        mt={['20vh', '10vh', '0vh']}
        p={['25px', '50px', '75px', '100px']}
      >
        <Flex flexDir={'column'} id="about-text">
          <Heading>About Me</Heading>
          <Text mt={'4vh'} color={'purple.300'}>
            Hello there! My name is Michael and I am a Computer Science Student
            at{' '}
            <Link
              color={'secondary'}
              href={'https://di.uoa.gr'}
              target={'_blank'}
            >
              DIT, University of Athens, Greece.
            </Link>{' '}
            I'm interested in exploring new ways to build web applications. My
            Journey in web development began in 2018 when I started
            experimenting with the interfaces of simple webpages using HTML, CSS
            & JS and getting familiar with the way server-side code worked. That
            inspired me to learn more about the JavaScript ecosystem and the
            frameworks that surround it.
            <br />
            <br />
            Since then I have been working on various projects and building web
            apps that look and feel both modern and functional. My current
            interests involve learning more about Databases, Microservices as
            well as creating back-end applications that are helpful and
            accessible to all.
          </Text>
          <Flex
            mt={'15vh'}
            spacing={10}
            gap={10}
            flexDir={['column', 'column', 'row']}
            alignItems={'center'}
          >
            <Link href="https://github.com/Michael-Vol" target={'_blank'}>
              <Button {...buttonProps} leftIcon={<BsGithub />}>
                Check my Github Profile
              </Button>
            </Link>
            <Link href={'/resume.pdf'} target={'_blank'}>
              <Button {...buttonProps} leftIcon={<IoMdDocument />}>
                Download my Resume
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="about-image-wrapper"
        alignItems={'center'}
        mx={'15vh'}
        mb={'20vh'}
      >
        <Avatar
          src="/img/profile.jpeg"
          alt="profile-photo"
          borderRadius={'full'}
          boxSize={'20vw'}
        />
      </Flex>
    </Flex>
  );
};

export default AboutLayout;

import React from 'react';
import Navbar from '../components/ui/Navbar';
import { BreadcrumbSeparator, Flex, Grid, GridItem } from '@chakra-ui/react';
import HeroLayout from '../components/layout/HeroLayout';
import AboutLayout from '../components/layout/AboutLayout';
import ProjectsLayout from '../components/layout/ProjectsLayout';
import ContactLayout from '../components/layout/ContactLayout';
import Separator from '../components/ui/Separator';

export default function Portfolio() {
  return (
    <Flex bgColor={'primary'} h={'100%'} flexDir={'column'}>
      <HeroLayout />
      <Separator />
      <AboutLayout />
      <Separator />
      <ProjectsLayout />
      <Separator />
      <ContactLayout />
    </Flex>
  );
}

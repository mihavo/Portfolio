import React from 'react';
import { Flex, Button, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Navbar = () => {
	return (
		<Flex
			backdropFilter={'blur(5px)'}
			justifyContent={'flex-end'}
			alignItems={'center'}
			w={'100%'}
			h={'10vh'}
			borderBottom={'2px solid #262C4D'}
			pr={'30px'}>
			<Flex alignItems={'center'} gap={6}>
				<Link href='#about'>About</Link>
				<Link href={'#projects'}>Projects</Link>
				<Link href={'#contact'}>Contact</Link>
			</Flex>
		</Flex>
	);
};

export default Navbar;

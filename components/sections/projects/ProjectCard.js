import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { HiOutlineCode } from 'react-icons/hi';
import { FiLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, github, website }) => {
	const cardAnimationProps = {
		// className: 'animate__animated animate__fadeInLeft animate__slow',
	};
	return (
		<Flex
			flexDir={'column'}
			boxShadow={'lg'}
			minW={'16vw'}
			w={'17vw'}
			transition={'all 0.3s ease-in-out'}
			_hover={{
				boxShadow: '2xl',
			}}
			borderRadius={'6px'}
			bgColor={'blue.700'}
			color={'blue.500'}
			p={'20px'}
			{...cardAnimationProps}>
			<Flex justifyContent={'space-between'}>
				{github && (
					<Link target={'_blank'} href={github} color={'blue.500'} _hover={{ color: 'secondary' }}>
						<HiOutlineCode size={'1.6em'} />
					</Link>
				)}
				{website && (
					<Link target={'_blank'} href={website} color={'blue.500'} _hover={{ color: 'secondary' }}>
						<FiLink size={'1.6em'} />
					</Link>
				)}
			</Flex>
			<Flex flexDir={'column'} mt={'25px'}>
				<Text my={'10px'} fontSize={'24px'} fontWeight={'600'}>
					{title}
				</Text>
				<Text fontSize={'16px'}>{description}</Text>
			</Flex>
		</Flex>
	);
};

export default ProjectCard;

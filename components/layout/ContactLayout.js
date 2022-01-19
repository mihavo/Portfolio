import React from 'react';
import { Flex, Text, Heading, Link } from '@chakra-ui/react';
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

import ContactForm from '../sections/contact/ContactForm';

const ContactLayout = () => {
	const iconProps = {
		size: '1.8rem',
	};
	const linkProps = {
		color: 'green.500',
		target: '_blank',
		_hover: {
			color: 'blue.500',
		},
	};
	return (
		<Flex flexDir={'column'} h={'100vh'} id={'contact'}>
			<Flex flexDir={'column'} mx={'15vw'} my={'5vh'} h={'100%'}>
				<Heading>Get in Touch</Heading>
				<Flex mt={'30px'} ml={'20px'} gap={'30px'}>
					<Link {...linkProps} href={'https://www.facebook.com/michael.volakis'}>
						<BsFacebook {...iconProps} />
					</Link>
					<Link {...linkProps} href={'https://www.instagram.com/_michaelvol_/'}>
						<BsInstagram {...iconProps} />
					</Link>
					<Link {...linkProps} href={'https://twitter.com/michael_vks'}>
						<BsTwitter {...iconProps} />
					</Link>
					<Link {...linkProps} href={'https://www.linkedin.com/in/michaelvolakis'}>
						<BsLinkedin {...iconProps} />
					</Link>
					<Link {...linkProps} href={'https://github.com/Michael-Vol'}>
						<BsGithub {...iconProps} />
					</Link>
					<Link {...linkProps} href={'mailto:mivolakis@gmail.com'}>
						<MdAlternateEmail {...iconProps} />
					</Link>
				</Flex>
				<Text color={'purple.300'} my={'5vh'} maxW={'35vw'} fontSize={'20px'} fontWeight={'500'}>
					If you have any questions,proposals or comments, feel free to contact me bellow. I'd love
					to hear from you!
				</Text>
				<ContactForm />
			</Flex>
		</Flex>
	);
};

export default ContactLayout;

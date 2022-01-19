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
		<Flex
			flexDir={'column'}
			id={'contact'}
			textAlign={['center', 'center', 'start']}
			mt={['20vh', '10vh', '0vh']}
			p={['0px 0px 0px 10px', '20px', '75px', '100px']}>
			<Flex
				flexDir={'column'}
				my={'5vh'}
				h={'100%'}
				alignItems={['center', 'center', 'center', 'start']}>
				<Heading>Get in Touch</Heading>
				<Flex mt={'30px'} gap={'30px'}>
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
				<Text color={'purple.300'} my={'5vh'} maxW={['90vw', '90vw', '35vw']} fontWeight={'500'}>
					If you have any questions,proposals or comments, feel free to contact me bellow. I'd love
					to hear from you!
				</Text>
				<ContactForm />
			</Flex>
		</Flex>
	);
};

export default ContactLayout;

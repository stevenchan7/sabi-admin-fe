import { Box, Flex, Heading, HStack, Icon, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { Button } from '../ui/button';
import { FaBook, FaGamepad } from 'react-icons/fa6';

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Flex position='fixed' left={0} top={0} bottom={0} w={52} display={{ lg: 'block', lgDown: 'none' }} direction='column' bg='#09423E' color='bg'>
        {/* Logo */}
        <Link href='/'>
          <HStack p={4}>
            <Image src='/logo/sabi-logo.png' alt='Logo Sastra Bali' w={12} />
            <Heading as='h6' color='#FAA727'>
              Dashboard
            </Heading>
          </HStack>
        </Link>
        {/* Logo */}
        <Button unstyled={true} w='full' _hover={{ bg: 'white/10' }} p={4} asChild>
          <Link href='/groups' gap={4}>
            <Icon>
              <FaGamepad />
            </Icon>
            Quiz
          </Link>
        </Button>
        <Button unstyled={true} w='full' _hover={{ bg: 'white/10' }} p={4} asChild>
          <Link href='/readings' gap={4}>
            <Icon>
              <FaBook />
            </Icon>
            Readings
          </Link>
        </Button>
      </Flex>

      <Box marginLeft={{ lg: 48, lgDown: 0 }}>{children}</Box>
    </div>
  );
}

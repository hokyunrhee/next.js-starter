import React from 'react';

import NextLink from 'next/link';

import { Flex, HStack, Link, Button } from '@chakra-ui/react';

type Link = { text: string; href: string };

export interface HeaderProps {
  logo: React.ReactNode;
  links: Link[];
}

export const Header = ({ links, logo }: HeaderProps) => {
  return (
    <Flex as="header" width="100%" px="24px" justifyContent="center" backgroundColor="white" boxShadow="0 4px 2px -2px rgba(0, 0, 0, 0.05)">
      <HStack flexGrow={1} justifyContent="space-between" alignItems="center" py="24px">
        <Flex alignItems="center">{logo}</Flex>
        <HStack>
          {links.map((link) => (
            <NextLink key={link.text} href={link.href} passHref>
              <Link as="a" fontWeight="500" p="12px">
                {link.text}
              </Link>
            </NextLink>
          ))}
          <Button px="32px" borderRadius="99px" colorScheme="messenger">
            Sign Up
          </Button>
        </HStack>
      </HStack>
    </Flex>
  );
};

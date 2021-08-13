import React from 'react';
import NextLink from 'next/link';

import { Text, TextProps } from '@chakra-ui/react';

export const Logo = (props: TextProps) => {
  return (
    <NextLink href={'/'} passHref>
      <Text as="a" fontSize="32px" fontWeight="900" {...props}>
        Next.js Starter
      </Text>
    </NextLink>
  );
};

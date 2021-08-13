import React from 'react';

import { Header } from './Header';
import { Logo } from 'components/atoms/Logo';

const LINKS = [
  { text: 'Product', href: '/' },
  { text: 'Pricing', href: '/' },
];

export const HeaderContainer = () => {
  return <Header links={LINKS} logo={<Logo fontSize="24px" />} />;
};

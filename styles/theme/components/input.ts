import { theme as baseTheme } from '@chakra-ui/react';

const Input = {
  baseStyle: {
    ...baseTheme.components.Input.baseStyle,
    _focus: { outline: 'none' },
  },
};

export default Input;

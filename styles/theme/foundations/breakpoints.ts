import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  // base <480px
  sm: '480px', // ≥480px
  md: '992px', // ≥992px
  lg: '1280px', // ≥1280px
  xl: '1536px', // ≥1536px
  '2xl': '1920px', // ≥1920px
});

export default breakpoints;

// https://github.com/chakra-ui/chakra-ui/issues/3042

import { extendTheme } from '@chakra-ui/react';

// Define theme config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

// Create the theme
const theme = extendTheme({ config, fonts: { heading: 'Poppins' } });

export default theme;

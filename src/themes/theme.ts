import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

//? Include custom option in here... colors, fonts, etc!!
const customTheme = {
   components: {
      Link: {
         variants: {
            clickable: {
               textDecoration: "none",
               fontSize: "10rem"
            }
         }
      }
   }
};

const config: ThemeConfig = {
   initialColorMode: 'light',
   useSystemColorMode: false
}
const BackgroundTheme = {
   global: (props: any) => ({
      body: {
         bg: mode('bg_light', 'bg_dark')(props),
      },
   }),
};

const colors = {
   bg_light: 'var(--background-light)',
   bg_dark: 'var(--background-dark)',
   brown: {
      10: 'var(--brown)',
      20: 'var(--brown-20)',
      30: 'var(--brown-30)',
      40: 'var(--brown-40)',
      50: 'var(--brown-50)',
      60: 'var(--brown-60)',
      70: 'var(--brown-70)',
   },
   green: {
      10: 'var(--green-10)',
      30: 'var(--green-30)',
   },
   red: {
      20: 'var(--red-20)',
      30: 'var(--red-30)'
   },
   gray: {
      10: 'var(--gray-10)',
      20: 'var(--gray-20)',
      40: 'var(--gray-30)',
      50: 'var(--gray-50)',
   }
}

const theme = extendTheme({
   customTheme,
   config,
   BackgroundTheme,
   fonts: {
      heading: `'Dancing Script', cursive`,
      body: `'Dancing Script', cursive`,
   },
   colors
});

export default theme;
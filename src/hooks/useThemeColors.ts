import { useColorModeValue } from "@chakra-ui/react";

export function useThemeColors() {
   const THEME = {
      COLORS: {
         NAVBAR_BG: "brown.10",
         NAVBAR_BORDER_COLOR: "red.500",
         NAVBAR__TITLE_COLOR: "red.20",

         BG__HEADER_COLOR: "brown.10",
         BG__NAVIGATION: useColorModeValue("green.10", "whiteAlpha.500"),

         BANNER_TITLE_COLORS: useColorModeValue("brown.40", "brown.70"),
         BANNER_TEXT_COLORS: useColorModeValue("brown.40", "brown.70"),

         TEXT: "brown.70",
         TEXT_2: "green.30",
         TEXT_LIGHTEN: "brown.10",
         TEXT_ICON: "red.20",


         BG__SECTION_COLOR: "brown.10",
         BG__SECTION_COLOR_TWO: "green.30",


         CARD_CAROUSEL_BG: "red.200",
         PRODUCTS_CARD_BG: "brown.10",
         PRODUCTS_CARD_BG_SPAN: "brown.10",

         CAROUSEL_BG: "green.30",

         BG_STATC_HOME: "brown.60",

         FOOTER_COLOR: "brown.10",
         FOOTER_LINE_COLOR: "brown.70",
         FOOTER_LINK_COLOR: "red.30",
         FOOTER_TEXT_COLOR: "green.10",
      }
   }

   return {THEME}
}
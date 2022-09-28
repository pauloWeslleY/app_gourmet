import { useColorModeValue } from "@chakra-ui/react";

export function useThemeColors() {
   const THEME = {
      COLORS: {
         NAVBAR_BG: "brown.10",
         NAVBAR_BORDER_COLOR: "red.500",
         NAVBAR__TITLE_COLOR: "red.20",

         BG__NAVIGATION: useColorModeValue("brown.10", "whiteAlpha.500"),

         BACKGROUND_1: "red.100",
         BACKGROUND_2: "brown.10",
         BACKGROUND_3: "green.30",

         BANNER_TITLE_COLORS: useColorModeValue("brown.50", "brown.70"),
         BANNER_TEXT_COLORS: useColorModeValue("brown.50", "brown.70"),

         TITLE_COLOR: "brown.70",
         TEXT: "brown.60",
         TEXT_2: "green.30",
         TEXT_LIGHTEN: "brown.10",
         TEXT_ICON: "red.20",

         CARD__CAROUSEL_BG: "red.200",

         PRODUCTS__CARD_BG: "brown.10",

         CAROUSEL_BG: "green.30",
         CAROUSEL_TITLE_COLOR: "white",

         BG_STATC_HOME: "brown.60",

         FOOTER_COLOR: "brown.10",
         FOOTER_LINE_COLOR: "brown.70",
         FOOTER_LINK_COLOR: "red.30",
         FOOTER_TEXT_COLOR: "green.10",
      }
   }

   return {THEME}
}
import { memo } from "react";
import { Box, Center } from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { ContactList, HeadTitle } from "./index";
import { TitleProps } from "./../../types/TitleType";

export function Contact({ title, color }: TitleProps) {
   const { THEME } = useThemeColors();

   return (
      <Box py={"5rem"} bg={THEME.COLORS.BG__SECTION_COLOR_TWO}>
         <Center py={"1rem"}>
            <HeadTitle title={title} color={color} />
         </Center>

         <ContactList />
      </Box>
   );
}

export default memo(Contact);

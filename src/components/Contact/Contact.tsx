import { memo } from "react";
import { Box, Center, Container } from "@chakra-ui/react";
import { ContactList, HeadTitle, TitleProps, useThemeColors } from "./index";

export function Contact({ title, color }: TitleProps) {
   const { THEME } = useThemeColors();

   return (
      <Box py={"5rem"} bg={THEME.COLORS.BACKGROUND_3}>
         <Container maxW={"7xl"}>
            <Center py={"1rem"}>
               <HeadTitle title={title} color={color} />
            </Center>

            <ContactList />
         </Container>
      </Box>
   );
}

export default memo(Contact);

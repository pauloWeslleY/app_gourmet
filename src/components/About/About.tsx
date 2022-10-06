import { memo } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { AboutContent, AboutProps, useThemeColors } from "./index";

export function About({ title, subtitle, image }: AboutProps) {
   const { THEME } = useThemeColors();

   return (
      <Box bg={THEME.COLORS.BACKGROUND_2}>
         <Container maxW={"7xl"}>
            <Flex
               p={15}
               w={"full"}
               justifyContent={"center"}
               alignItems={"center"}
            >
               <Box shadow={"xl"} rounded={"xl"} px={8} py={20} mx={"auto"}>
                  <AboutContent
                     title={title}
                     subtitle={subtitle}
                     image={image}
                  />
               </Box>
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(About);

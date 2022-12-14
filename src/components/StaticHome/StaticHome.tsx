import { memo } from "react";
import { Flex, chakra, Box, SimpleGrid, Container } from "@chakra-ui/react";
import { StaticList, useThemeColors } from "./index";

interface StaticProps {
   title: string;
   text: string;
}

export function StaticHome({ title, text }: StaticProps) {
   const { THEME } = useThemeColors();

   return (
      <Box bg={THEME.COLORS.BACKGROUND_2}>
         <Container maxW={"7xl"}>
            <Flex
               p={15}
               w={"auto"}
               justifyContent={"center"}
               alignItems={"center"}
            >
               <Box
                  rounded={"xl"}
                  shadow={"dark-lg"}
                  bg={THEME.COLORS.BG_STATC_HOME}
                  px={8}
                  py={20}
                  mx={"auto"}
               >
                  <SimpleGrid
                     alignItems={"center"}
                     columns={{
                        base: 1,
                        lg: 2,
                     }}
                     spacingY={{
                        base: 10,
                        lg: 32,
                     }}
                     spacingX={{
                        base: 10,
                        lg: 24,
                     }}
                  >
                     <Box>
                        <chakra.h2
                           mb={3}
                           fontSize={{
                              base: "3xl",
                              md: "4xl",
                           }}
                           fontWeight={"extrabold"}
                           textAlign={{
                              base: "center",
                              sm: "left",
                           }}
                           lineHeight={"shorter"}
                           letterSpacing={"tight"}
                           color={THEME.COLORS.TEXT_2}
                        >
                           {title}
                        </chakra.h2>
                        <chakra.p
                           mb={6}
                           fontSize={{
                              base: "lg",
                              md: "xl",
                           }}
                           textAlign={{
                              base: "center",
                              sm: "left",
                           }}
                           color={THEME.COLORS.TEXT_LIGHTEN}
                        >
                           {text}
                        </chakra.p>
                     </Box>
                     <StaticList />
                  </SimpleGrid>
               </Box>
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(StaticHome);

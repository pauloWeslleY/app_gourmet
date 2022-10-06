import { memo } from "react";
import {
   Container,
   Grid,
   GridItem,
   Flex,
   Heading,
   Image,
   Divider,
   Box,
} from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";

import { TitleProps, card1, card2, card3 } from "./index";

export function Detach({ title, color }: TitleProps) {
   const CARDS = [card1, card2, card3];
   const { THEME } = useThemeColors();

   return (
      <Box bg={THEME.COLORS.BACKGROUND_2} py={"2rem"}>
         <Container maxW={"7xl"}>
            <Grid
               templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(5, 1fr)",
               }}
               gap={6}
            >
               <GridItem
                  w="100%"
                  colSpan={{ base: 1, sm: 2, md: 2 }}
                  pt={"4rem"}
               >
                  <Heading
                     fontFamily={"body"}
                     fontWeight={700}
                     as={"h2"}
                     color={color}
                  >
                     {title}
                  </Heading>
                  <Divider
                     pt={"0.5rem"}
                     w={"10rem"}
                     bg={"red.20"}
                     orientation="horizontal"
                  />
               </GridItem>
               {CARDS.map((item) => (
                  <GridItem key={item} w="100%">
                     <Flex flexDirection={"column"}>
                        <Image
                           borderRadius={"5rem"}
                           objectFit={"cover"}
                           h={"17rem"}
                           alt={""}
                           src={item}
                           cursor={"pointer"}
                           transition={"all 0.5s ease-in"}
                           _hover={{
                              transform: "translateY(-3px) rotate(8deg)",
                              boxShadow: "10px 5px 5px var(--brown-40)",
                           }}
                        />
                     </Flex>
                  </GridItem>
               ))}
            </Grid>
         </Container>
      </Box>
   );
}

export default memo(Detach);

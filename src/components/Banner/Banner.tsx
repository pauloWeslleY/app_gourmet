import { memo } from "react";
import { Box, chakra, Container, Text } from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { NavBar } from "../Navigation";

interface Banner {
   title: string;
   title2: string;
   title3: string;
   text: string;
   image?: any;
}

export function Banner({ title, title2, title3, text, image }: Banner) {
   const { THEME } = useThemeColors();

   return (
      <section>
         <Box
            w={"full"}
            h={"container.sm"}
            backgroundImage={`url(${image})`}
            bgPos={"center"}
            bgSize={"cover"}
         >
            <NavBar />

            <Container maxW={"1345px"}>
               <Box
                  pt={"10rem"}
                  w={{
                     base: "full",
                     md: 11 / 12,
                     xl: 9 / 12,
                  }}
                  mx={"auto"}
                  textAlign={{
                     base: "left",
                     md: "center",
                  }}
               >
                  <chakra.h1
                     mb={6}
                     fontSize={{
                        base: "4xl",
                        md: "6xl",
                     }}
                     fontWeight={"bold"}
                     lineHeight={"none"}
                     letterSpacing={{
                        base: "normal",
                        md: "tight",
                     }}
                     color={THEME.COLORS.BANNER_TITLE_COLORS}
                  >
                     {title}{" "}
                     <Text
                        display={{
                           base: "block",
                           lg: "inline",
                        }}
                        w={"full"}
                        bgClip={"text"}
                        bgGradient={"linear(to-r, red.20,pink.500)"}
                        fontWeight={"extrabold"}
                     >
                        {title2}
                     </Text>{" "}
                     {title3}
                  </chakra.h1>
                  <chakra.p
                     px={{
                        base: 0,
                        lg: 24,
                     }}
                     mb={6}
                     fontSize={{
                        base: "lg",
                        md: "xl",
                     }}
                     color={THEME.COLORS.BANNER_TEXT_COLORS}
                  >
                     {text}
                  </chakra.p>
               </Box>
            </Container>
         </Box>
      </section>
   );
}

export default memo(Banner);

import { memo } from "react";
import { Container, Flex, Text, chakra } from "@chakra-ui/react";
import { useThemeColors } from "./index";

interface Banner {
   title: string;
   title2: string;
   title3: string;
   text: string;
   image?: any;
}

export function BannerContent({ title, title2, title3, text, image }: Banner) {
   const { THEME } = useThemeColors();

   return (
      <Container maxW={"7xl"}>
         <Flex
            direction={"column"}
            pt={"10rem"}
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
         </Flex>
      </Container>
   );
}

export default memo(BannerContent);

import { memo } from "react";
import { Box, SimpleGrid, chakra, Button, Image } from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { AboutProps } from "./index";
import { Btn } from "../Btn";

export function AboutContent({ title, subtitle, image }: AboutProps) {
   const { THEME } = useThemeColors();

   return (
      <SimpleGrid
         alignItems={"center"}
         columns={{
            base: 1,
            md: 2,
         }}
         mb={24}
         spacingY={{
            base: 10,
            md: 32,
         }}
         spacingX={{
            base: 10,
            md: 24,
         }}
      >
         <Box>
            <chakra.h2
               mb={4}
               fontSize={{
                  base: "2xl",
                  md: "4xl",
               }}
               fontWeight={"extrabold"}
               letterSpacing={"tight"}
               textAlign={{
                  base: "center",
                  md: "left",
               }}
               color={THEME.COLORS.TEXT}
               lineHeight={{
                  md: "shorter",
               }}
            >
               {title}
            </chakra.h2>
            <chakra.p
               mb={5}
               textAlign={{
                  base: "center",
                  sm: "left",
               }}
               color={THEME.COLORS.TEXT_2}
               fontSize={{
                  md: "1.4rem",
               }}
            >
               {subtitle}
            </chakra.p>
            <Btn title={"Know More"} />
         </Box>
         <Image
            alt={""}
            src={image}
            rounded={"xl"}
            w={"45rem"}
            objectFit={"cover"}
            boxShadow={"xl"}
            transform={"rotate(-3deg)"}
            transition={"all .2s ease-out"}
            _hover={{
               transform: "rotate(3deg) scale(105%)",
            }}
         />
      </SimpleGrid>
   );
}

export default memo(AboutContent);

import { memo } from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { useThemeColors, DataProductsProps } from "./index";

export function ProductsCard({ title, image }: DataProductsProps) {
   const { THEME } = useThemeColors();

   return (
      <Flex
         flexBasis={"20rem"}
         flexGrow={1}
         flexShrink={1}
         m={"1rem"}
         direction={"column"}
         justifyContent={"center"}
         alignItems={"center"}
      >
         <Box
            h={64}
            w={"100%"}
            maxW={"lg"}
            rounded={"lg"}
            shadow={"md"}
            bgSize={"cover"}
            bgPos={"center"}
            style={{
               backgroundImage: `url(${image})`,
            }}
         ></Box>

         <Box
            w={{
               base: 56,
               md: 64,
            }}
            bg={THEME.COLORS.PRODUCTS__CARD_BG}
            mt={-10}
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            cursor={"pointer"}
            transition={"all 0.8s ease-in-out"}
            _hover={{
               bg: "green.10",
               transform: "rotate(4deg)",
            }}
         >
            <chakra.h3
               py={2}
               textAlign={"center"}
               fontWeight={"bold"}
               textTransform={"uppercase"}
               color={THEME.COLORS.TEXT}
               letterSpacing={1}
            >
               {title}
            </chakra.h3>
         </Box>
      </Flex>
   );
}

export default memo(ProductsCard);

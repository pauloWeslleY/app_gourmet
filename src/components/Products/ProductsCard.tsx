import { memo } from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { DataProductsProps } from "./../../data/DataProduct";

export function ProductsCard({ title, image }: DataProductsProps) {
   const { THEME } = useThemeColors();

   return (
      <Flex flexBasis={"100px"} flexGrow={1} flexShrink={1} m={"1rem"}>
         <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            mx={"auto"}
            w={"100%"}
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
      </Flex>
   );
}

export default memo(ProductsCard);

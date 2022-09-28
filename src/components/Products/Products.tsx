import { memo } from "react";
import { Box, Center } from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { ProductsCard, TitleProps, HeadTitle, data_products } from "./index";

export function Products({ title, color }: TitleProps) {
   const { THEME } = useThemeColors();

   return (
      <Box bg={THEME.COLORS.BACKGROUND_2} py={"2rem"}>
         <Center pb={"2rem"}>
            <HeadTitle title={title} color={color} />
         </Center>

         <Box maxW={"1345px"} mx={"auto"} display={"flex"} flexWrap={"wrap"}>
            {data_products.map((item) => (
               <ProductsCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
               />
            ))}
         </Box>
      </Box>
   );
}

export default memo(Products);

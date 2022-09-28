import { memo } from "react";
import { Box, Center } from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { ProductsCard, TitleProps, HeadTitle } from "./index";

import { Cake, Cake2, Cake3, Cake4 } from "./../../data/DataPhotos";

export function Products({ title, color }: TitleProps) {
   const { THEME } = useThemeColors();
   const products = [Cake, Cake2, Cake3, Cake4, Cake, Cake2];

   return (
      <Box bg={THEME.COLORS.BG__HEADER_COLOR} py={"2rem"}>
         <Center pb={"2rem"}>
            <HeadTitle title={title} color={color} />
         </Center>

         <Box maxW={"1345px"} mx={"auto"} display={"flex"} flexWrap={"wrap"}>
            {products.map((item, index) => (
               <ProductsCard key={index} image={item} />
            ))}
         </Box>
      </Box>
   );
}

export default memo(Products);

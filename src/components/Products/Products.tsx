import { memo } from "react";
import { Box, Center, Container, Flex } from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { ProductsCard, TitleProps, HeadTitle, data_products } from "./index";

export function Products({ title, color }: TitleProps) {
   const { THEME } = useThemeColors();

   return (
      <Box bg={THEME.COLORS.BACKGROUND_2} py={"2rem"}>
         <Container maxW={"7xl"}>
            <Center pb={"2rem"}>
               <HeadTitle title={title} color={color} />
            </Center>

            <Flex wrap={"wrap"}>
               {data_products.map((item) => (
                  <ProductsCard
                     key={item.id}
                     image={item.image}
                     title={item.title}
                  />
               ))}
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(Products);

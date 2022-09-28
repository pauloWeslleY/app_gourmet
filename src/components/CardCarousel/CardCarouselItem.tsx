import { memo } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import { CardType } from "../../types/CardType";
import { useThemeColors } from "../../hooks/useThemeColors";

interface CardCarousel {
   card_props: CardType;
}

export function CardCarouselItem({ card_props }: CardCarousel) {
   const { name, image } = card_props;
   const { THEME } = useThemeColors();

   return (
      <Flex
         px={"1rem"}
         py={"1rem"}
         w={"full"}
         alignItems={"center"}
         justifyContent={"center"}
      >
         <Box
            bg={THEME.COLORS.CARD__CAROUSEL_BG}
            maxW={"sm"}
            rounded={"lg"}
            shadow={"lg"}
            cursor={"pointer"}
            h={"20rem"}
            transition={"all 0.6s ease-in-out"}
            _hover={{
               transform: "translateY(-10px)",
            }}
         >
            <Image src={image} alt={`Picture of ${name}`} roundedTop={"lg"} />

            <Box p={"6"}>
               <Flex mt={"1"} justifyContent={"center"} alignContent={"center"}>
                  <Box
                     fontSize={"2xl"}
                     fontWeight={"semibold"}
                     as={"h4"}
                     lineHeight={"tight"}
                     color={THEME.COLORS.TEXT}
                  >
                     {name}
                  </Box>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
}

export default memo(CardCarouselItem);

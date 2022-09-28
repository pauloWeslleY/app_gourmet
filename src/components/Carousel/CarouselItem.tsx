import {
   Stack,
   Flex,
   Text,
   VStack,
   useBreakpointValue,
} from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { CardType } from "../../types/CardType";

import styles from "./styles.module.scss";
interface CarouselProps {
   carousel: CardType;
}

export function CarouselItem({ carousel }: CarouselProps) {
   const { title, image } = carousel;
   const { THEME } = useThemeColors();

   const font = useBreakpointValue({ base: "3xl", md: "4xl" });
   const padding = useBreakpointValue({ base: 4, md: 8 });

   return (
      <Flex
         w={"full"}
         h={"75vh"}
         backgroundImage={`url(${image})`}
         backgroundSize={"cover"}
         backgroundPosition={"center center"}
      >
         <VStack
            w={"full"}
            justify={"center"}
            px={padding}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
         >
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
               <Text
                  color={THEME.COLORS.CAROUSEL_TITLE_COLOR}
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={font}
                  className={styles.carousel__item}
               >
                  {title}
               </Text>
            </Stack>
         </VStack>
      </Flex>
   );
}

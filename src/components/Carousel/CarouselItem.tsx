import {
   Stack,
   Flex,
   Text,
   VStack,
   useBreakpointValue,
} from "@chakra-ui/react";
import { CardType } from "../../types/CardType";

interface CarouselProps {
   carousel: CardType;
}

export function CarouselItem({ carousel }: CarouselProps) {
   const { title, image } = carousel;
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
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
         >
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
               <Text
                  color={"white"}
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
               >
                  {title}
               </Text>
            </Stack>
         </VStack>
      </Flex>
   );
}
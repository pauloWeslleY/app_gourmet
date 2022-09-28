import { memo } from "react";
import {
   Box,
   chakra,
   Flex,
   SimpleGrid,
   useColorModeValue,
} from "@chakra-ui/react";
import { TestimonialCard, testimonials } from "./index";
import { useThemeColors } from "../../hooks/useThemeColors";

export function TestimonialCreated() {
   const { THEME } = useThemeColors();
   return (
      <Flex
         py={10}
         textAlign={"center"}
         justifyContent={"center"}
         direction={"column"}
         width={"full"}
         bg={THEME.COLORS.BACKGROUND_2}
      >
         <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
            <chakra.h1
               py={5}
               fontSize={48}
               fontWeight={"bold"}
               color={THEME.COLORS.TITLE_COLOR}
            >
               You're in good company
            </chakra.h1>
            <chakra.h2
               margin={"auto"}
               width={"70%"}
               fontWeight={"medium"}
               color={THEME.COLORS.TEXT}
            >
               See why over{" "}
               <chakra.strong color={THEME.COLORS.TEXT_2}>
                  150,000+
               </chakra.strong>{" "}
               influencers use EEZY to manage their social media content!
            </chakra.h2>
         </Box>
         <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            spacing={"20"}
            mt={16}
            mx={"auto"}
         >
            {testimonials.map((cardInfo, index) => (
               <TestimonialCard key={index} {...cardInfo} index={index} />
            ))}
         </SimpleGrid>
      </Flex>
   );
}

export default memo(TestimonialCreated);

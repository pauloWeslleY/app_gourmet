import { memo } from "react";
import { Box, chakra, Flex, Icon } from "@chakra-ui/react";
import { ContactProps } from "./index";
import { useThemeColors } from "../../hooks/useThemeColors";

export function ContactItem({ name, text, icons }: ContactProps) {
   const { THEME } = useThemeColors();
   return (
      <Flex
         flexDir={"column"}
         justifyContent={"center"}
         alignItems={"center"}
         flexBasis={"20rem"}
         flexGrow={1}
         flexShrink={1}
         shadow={"xl"}
         rounded={"lg"}
         py={"2rem"}
         m={2}
         transition={"all 0.6s ease-in"}
         _hover={{
            transform: "rotate(-2deg)",
         }}
      >
         <Icon as={icons} w={70} h={70} color={THEME.COLORS.TEXT} />
         <Box py={5} textAlign={"center"} color={THEME.COLORS.TEXT}>
            <chakra.h2 fontSize={"2xl"} fontWeight={"bold"}>
               {name}
            </chakra.h2>
            <chakra.span fontSize={"1.5rem"}>{text}</chakra.span>
         </Box>
      </Flex>
   );
}

export default memo(ContactItem);

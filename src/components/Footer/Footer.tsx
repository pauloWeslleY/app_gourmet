import { memo } from "react";
import {
   Box,
   Container,
   Divider,
   Flex,
   HStack,
   Link,
   Stack,
   Text,
   VStack,
   chakra,
} from "@chakra-ui/react";

import { Icons, HeadTitle } from "./index";
import { useThemeColors } from "../../hooks/useThemeColors";

interface FooterProps {
   subtitle: any;
   head_title: string;
   color?: any;
   link_name: string;
   link_text: string;
   link: string;
}

export function Footer({
   subtitle,
   head_title,
   color,
   link_name,
   link_text,
   link,
}: FooterProps) {
   const { THEME } = useThemeColors();
   const link_for_page = () => window.open(link);

   return (
      <Box bg={THEME.COLORS.TEXT}>
         <Container maxW={"1545px"}>
            <Stack
               direction={{
                  base: "column",
                  lg: "row",
               }}
               w={"full"}
               justify={"space-between"}
               p={10}
            >
               <Flex justify={"center"}>
                  <HeadTitle title={head_title} color={color} />
               </Flex>
               <Flex justify={"start"} direction={"column"}>
                  <Icons />
               </Flex>
            </Stack>
            <Divider
               w={"95%"}
               h={"2px"}
               mx={"auto"}
               color={THEME.COLORS.FOOTER_LINE_COLOR}
            />
            <VStack py={3}>
               {/* <HStack
                  justify={"center"}
                  color={THEME.COLORS.FOOTER_TEXT_COLOR}
               >
                  <Text fontSize={"1.2rem"}>
                     {link_text}{" "}
                     <chakra.a
                        cursor={"pointer"}
                        color={THEME.COLORS.FOOTER_LINK_COLOR}
                        onClick={link_for_page}
                        textDecoration={"none"}
                        transition={"all 0.2s ease-in-out"}
                        _hover={{
                           color: THEME.COLORS.TEXT_2,
                        }}
                     >
                        {link_name}
                     </chakra.a>
                  </Text>
               </HStack> */}

               <Text
                  textAlign={"center"}
                  fontSize={"1rem"}
                  color={THEME.COLORS.FOOTER_COLOR}
               >
                  {subtitle} {"  |  "}
                  {link_text}{" "}
                  <chakra.a
                     cursor={"pointer"}
                     color={THEME.COLORS.FOOTER_LINK_COLOR}
                     onClick={link_for_page}
                     textDecoration={"none"}
                     transition={"all 0.2s ease-in-out"}
                     _hover={{
                        color: THEME.COLORS.TEXT_2,
                     }}
                  >
                     {link_name}
                  </chakra.a>
               </Text>
            </VStack>
         </Container>
      </Box>
   );
}

export default memo(Footer);

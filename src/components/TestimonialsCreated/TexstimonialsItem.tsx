import { Avatar, Flex, chakra } from "@chakra-ui/react";
import { useThemeColors } from "../../hooks/useThemeColors";
import { ImQuotesLeft } from "react-icons/im";
interface TestimonialCardProps {
   name: string;
   role: string;
   content: string;
   avatar: string;
   index: number;
}

export function TestimonialCard(props: TestimonialCardProps) {
   const { name, role, content, avatar, index } = props;
   const { THEME } = useThemeColors();

   return (
      <Flex
         boxShadow={"lg"}
         w={"100%"}
         maxW={"540px"}
         direction={{ base: "column-reverse", md: "row" }}
         width={"full"}
         rounded={"xl"}
         p={10}
         justifyContent={"space-between"}
         position={"relative"}
         bg={THEME.COLORS.TEXT}
      >
         <Flex
            direction={"column"}
            textAlign={"left"}
            justifyContent={"space-between"}
            color={THEME.COLORS.TEXT_2}
         >
            <chakra.p fontWeight={"medium"} fontSize={"15px"} pb={4}>
               {content}
            </chakra.p>
            <chakra.p fontWeight={"bold"} fontSize={14}>
               {name}
               <chakra.span
                  fontWeight={"medium"}
                  color={THEME.COLORS.TEXT_LIGHTEN}
               >
                  {" "}
                  - {role}
               </chakra.span>
            </chakra.p>
         </Flex>
         <Avatar
            src={avatar}
            height={"80px"}
            width={"80px"}
            alignSelf={"center"}
            m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
         />
      </Flex>
   );
}

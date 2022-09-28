import { memo } from "react";
import { HStack, Flex, Avatar, chakra } from "@chakra-ui/react";
import { FaCandyCane } from "react-icons/fa";
import { useThemeColors } from "../../hooks/useThemeColors";

interface Nav {
   title: string;
   span: string;
}

export function Navigation({ title, span }: Nav) {
   const { THEME } = useThemeColors();

   return (
      <chakra.header
         bg={THEME.COLORS.NAVBAR_BG}
         borderColor={THEME.COLORS.NAVBAR_BORDER_COLOR}
         borderBottomWidth={"0.3rem"}
         w={"full"}
         px={{
            base: 2,
            sm: 4,
         }}
         py={4}
      >
         <Flex
            alignItems={"center"}
            justifyContent={"center"}
            mx={"auto"}
            h={"3rem"}
         >
            <HStack
               spacing={4}
               display={"flex"}
               alignItems={"center"}
               justify={"center"}
            >
               <Avatar size={"md"} icon={<FaCandyCane fontSize={"2rem"} />} />
               <chakra.h1
                  color={THEME.COLORS.NAVBAR__TITLE_COLOR}
                  fontSize={"1.8rem"}
                  fontWeight={"extrabold"}
               >
                  {title}
                  <chakra.span color={THEME.COLORS.TEXT}>{span}</chakra.span>
               </chakra.h1>
            </HStack>
         </Flex>
      </chakra.header>
   );
}

export default memo(Navigation);

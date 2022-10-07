import { memo } from "react";
import { HStack, Flex, Avatar, chakra, Image } from "@chakra-ui/react";
import { FaCandyCane } from "react-icons/fa";
import { useThemeColors } from "./index";

interface Nav {
   title: string;
   span: string;
}

export function Navigation({ title, span }: Nav) {
   const { THEME } = useThemeColors();
   const candys = "/candysicon.png";

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
         <Flex alignItems={"center"} justifyContent={"center"} h={"3rem"}>
            <HStack
               spacing={4}
               display={"flex"}
               alignItems={"center"}
               justify={"center"}
            >
               <Image
                  boxSize={"3rem"}
                  alt={"Logo Candy's&Cakes"}
                  src={"/004-candy-cane.png"}
               />
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

import { memo } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { AboutContent, AboutProps } from "./index";
import { useThemeColors } from "../../hooks/useThemeColors";

export function About({ title, subtitle, image }: AboutProps) {
   const { THEME } = useThemeColors();

   return (
      <Flex
         bg={THEME.COLORS.BG__SECTION_COLOR}
         p={15}
         w={"full"}
         justifyContent={"center"}
         alignItems={"center"}
      >
         <Box shadow={"xl"} rounded={"xl"} px={8} py={20} mx={"auto"}>
            <AboutContent title={title} subtitle={subtitle} image={image} />
         </Box>
      </Flex>
   );
}

export default memo(About);

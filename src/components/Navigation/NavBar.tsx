import { memo, ReactNode } from "react";
import {
   Box,
   Flex,
   HStack,
   IconButton,
   useDisclosure,
   Stack,
   Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavItem, useThemeColors } from "./index";

const Links = ["Home", "Candy's", "Cakes", "About", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
   <NavItem title={children} />
);

export function NavBar() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { THEME } = useThemeColors();

   return (
      <Box p={4}>
         <Container maxW={"xl"}>
            <Flex
               align={"center"}
               justify={"center"}
               rounded={"lg"}
               shadow={"dark-lg"}
               bg={"transparent"}
            >
               <Flex h={"auto"} alignItems={"center"} p={2}>
                  <IconButton
                     size={"md"}
                     icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                     aria-label={"Open Menu"}
                     display={{ md: "none" }}
                     onClick={isOpen ? onClose : onOpen}
                     color={THEME.COLORS.TITLE_COLOR}
                     bg={"transparent"}
                     _hover={{
                        bg: "transparent",
                     }}
                     _active={{
                        bg: "transparent",
                     }}
                  />
                  <HStack spacing={8} alignItems={"center"}>
                     <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                     >
                        {Links.map((link) => (
                           <NavLink key={link}>{link}</NavLink>
                        ))}
                     </HStack>
                  </HStack>
               </Flex>

               {isOpen ? (
                  <Box pb={4} display={{ md: "none" }}>
                     <Stack as={"nav"} spacing={4} alignItems={"center"}>
                        {Links.map((link) => (
                           <NavLink key={link}>{link}</NavLink>
                        ))}
                     </Stack>
                  </Box>
               ) : null}
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(NavBar);

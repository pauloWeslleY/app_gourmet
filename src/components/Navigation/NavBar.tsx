import { memo, ReactNode } from "react";
import {
   Box,
   Flex,
   HStack,
   IconButton,
   useDisclosure,
   Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { ToggleButtonMode } from "./../ToggleButtonMode/index";
import { useThemeColors } from "../../hooks/useThemeColors";
import { NavItem } from "./index";

const Links = ["Home", "Candys", "Cakes", "About", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
   <NavItem title={children} />
);

export function NavBar() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { THEME } = useThemeColors();

   return (
      <nav>
         <Box py={"1rem"} display={"flex"} justifyContent={"center"}>
            <Box
               rounded={"lg"}
               w={{ base: "100%", xs: "75rem" }}
               maxW={{
                  base: "1415px",
                  xs: "75px",
               }}
               bg={THEME.COLORS.BG__NAVIGATION}
               px={4}
               shadow={"dark-lg"}
            >
               <Flex
                  h={16}
                  alignItems={"center"}
                  justifyContent={"space-between"}
               >
                  <HStack spacing={8} alignItems={"center"}>
                     <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                        color={THEME.COLORS.TEXT}
                        bg={"transparent"}
                        _hover={{
                           bg: "transparent",
                        }}
                        _active={{
                           bg: "transparent",
                        }}
                     />
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
                  <Flex alignItems={"center"}>
                     <ToggleButtonMode />
                  </Flex>
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
            </Box>
         </Box>
      </nav>
   );
}

export default memo(NavBar);

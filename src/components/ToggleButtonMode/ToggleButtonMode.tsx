import { memo } from "react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export function BtnToggleMode() {
   const text = useColorModeValue("dark", "light");
   const SwitchIcon = useColorModeValue(FaMoon, FaSun);
   const { toggleColorMode: toggleMode } = useColorMode();

   return (
      <section>
         <IconButton
            size={"md"}
            fontSize={"lg"}
            aria-label={`Switch to ${text} mode`}
            ml={{
               base: "0",
               md: "3",
            }}
            color={"brown.70"}
            bg={"transparent"}
            _hover={{
               bg: "transparent",
            }}
            _active={{
               bg: "transparent",
            }}
            icon={<SwitchIcon />}
            onClick={toggleMode}
         />
      </section>
   );
}

export default memo(BtnToggleMode);

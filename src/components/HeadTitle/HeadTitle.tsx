import { memo } from "react";
import { Divider, Heading, Text } from "@chakra-ui/react";
import { TitleProps } from "./index";

export function HeadTitle({ title, color }: TitleProps) {
   return (
      <Heading
         lineHeight={1.1}
         fontWeight={600}
         fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
         fontFamily={"body"}
         as={"h3"}
      >
         <Text color={color}>{title}</Text>
         <Divider
            style={{ border: "none" }}
            w={"50%"}
            bg={"red.30"}
            mt={"0.5rem"}
            pt={"0.5rem"}
         />
      </Heading>
   );
}

export default memo(HeadTitle);

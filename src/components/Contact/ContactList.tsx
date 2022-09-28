import { memo } from "react";
import { Box, Container } from "@chakra-ui/react";
import { ContactItem, contact_props } from "./index";

export function ContactList() {
   return (
      <Container maxW={"1345px"}>
         <Box display={"flex"} flexWrap={"wrap"}>
            {contact_props.map((item) => (
               <ContactItem
                  key={item.icons}
                  name={item.name}
                  text={item.text}
                  icons={item.icons}
               />
            ))}
         </Box>
      </Container>
   );
}

export default memo(ContactList);

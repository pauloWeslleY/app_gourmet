import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { NavBar, BannerContent } from "./index";

interface Banner {
   title: string;
   title2: string;
   title3: string;
   text: string;
   image?: any;
}

export function Banner({ title, title2, title3, text, image }: Banner) {
   return (
      <Box>
         <NavBar />

         <BannerContent
            title={title}
            title2={title2}
            title3={title3}
            text={text}
         />
      </Box>
   );
}

export default memo(Banner);

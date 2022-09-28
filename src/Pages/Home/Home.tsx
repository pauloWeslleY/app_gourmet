import { memo } from "react";
import { Box, Center } from "@chakra-ui/react";
import {
   CardCarousel,
   HeadTitle,
   Destach,
   Line,
   Contact,
   Parallax,
   ParallaxTwo,
   ParallaxThree,
   Products,
   Carousel,
   StaticHome,
   Banner,
   TestimonialCreated,
   About,
   Footer,
   card_props,
   banner3,
} from "./index";
import { useThemeColors } from "../../hooks/useThemeColors";

export function Home() {
   const { THEME } = useThemeColors();
   return (
      <section>
         <Banner
            title={"Welcome to Our"}
            title2={"Gourmet Sweets and Cakes"}
            title3={"Confectionery."}
            text={`
               Hellonext is a feature voting software where you can allow your users to vote on features,
               publish roadmap, and complete your customer feedback loop.
            `}
            image={"/images/banner/banner4.jpg"}
         />
         <Line />

         <Box h={"70vh"} bg={THEME.COLORS.BACKGROUND_1}>
            <Center pt={"3rem"}>
               <HeadTitle
                  title={"Cakes and Candys"}
                  color={THEME.COLORS.TITLE_COLOR}
               />
            </Center>
            <Box mx={"auto"} w={"100%"} maxW={"1245px"} py={"5rem"}>
               {card_props && <CardCarousel cards={card_props} />}
            </Box>
         </Box>

         <Box pt={"5rem"} bg={THEME.COLORS.BACKGROUND_1}>
            <Parallax title={"The best cakes you find here"} />
         </Box>
         <Line />

         <Destach title={"Cakes Destach"} color={THEME.COLORS.TITLE_COLOR} />
         <Products title={"Products"} color={THEME.COLORS.TITLE_COLOR} />
         <Line />

         <Carousel />
         <StaticHome
            title={"Become a Partner"}
            text={`
               Let's put our heads together to build a successful
               partnership to benefit both your customers and your
               business.
            `}
         />
         <Line />

         <ParallaxTwo />
         <Line />

         <About
            title={"Clear overview for efficient tracking"}
            subtitle={`Handle your subscriptions and transactions efficiently with the
            clear overview in Dashboard. Features like the smart search
            option allow you to quickly find any data you’re looking for.`}
            image={banner3}
         />
         <TestimonialCreated />

         <Line />

         <ParallaxThree />
         <Contact title={"Contact us"} color={THEME.COLORS.TITLE_COLOR} />
         <Line />
         <Footer
            head_title={"Candys&Cakes"}
            color={"brown.10"}
            subtitle={`© Copyright. Rosangela Maria - All rights reserved. `}
            link_name={"Weslley Lima"}
            link_text={"Created by"}
            link={"https://weslleylima.vercel.app"}
         />
      </section>
   );
}

export default memo(Home);

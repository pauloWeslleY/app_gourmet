import { memo } from "react";
import { Box, Center } from "@chakra-ui/react";
import {
   CardCarousel,
   HeadTitle,
   HeroHome,
   Line,
   Contact,
   Parallax,
   ParallaxTwo,
   ParallaxThree,
   Products,
   Carousel,
   StaticHome,
   Section,
   Banner,
   About,
   Footer,
   card_props,
   banner4,
   banner3,
} from "./index";

export function Home() {
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
            image={banner4}
         />
         <Line />

         <Box h={"70vh"} bg={"red.100"}>
            <Center pt={"3rem"}>
               <HeadTitle title={"Cakes and Candys"} color={"brown.50"} />
            </Center>
            <Box mx={"auto"} w={"100%"} maxW={"1245px"} py={"5rem"}>
               {card_props && <CardCarousel cards={card_props} />}
            </Box>
         </Box>
         <Line />

         <Parallax title={"The best cakes you find here"} />
         <Line />

         <HeroHome title={"Cakes Destach"} />
         <Products title={"Products"} color={"brown.50"} />
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
         <Line />

         <ParallaxThree />
         <Contact title={"Contact us"} color={"brown.50"} />
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

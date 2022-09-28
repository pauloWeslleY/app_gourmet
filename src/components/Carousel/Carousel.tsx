import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { SliderCarousel, Slide, SliderProps } from "../Slider";
import { CarouselItem, carousel_props } from "./index";
import { useThemeColors } from "../../hooks/useThemeColors";

export function Carousel() {
   const { THEME } = useThemeColors();

   const settings: SliderProps = {
      autoplay: true,
      spaceBetween: 50,
      slidesPerView: 1,
      draggable: true,
      loop: true,
      pagination: {
         clickable: true,
      },
   };

   return (
      <Box bg={THEME.COLORS.CAROUSEL_BG}>
         <SliderCarousel settings={settings}>
            {carousel_props.map((item) => (
               <Slide key={item.id}>
                  <CarouselItem carousel={item} />
               </Slide>
            ))}
         </SliderCarousel>
      </Box>
   );
}

export default memo(Carousel);

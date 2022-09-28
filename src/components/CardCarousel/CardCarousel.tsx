import { memo } from "react";
import { SliderCarousel, Slide, SliderProps } from "../Slider";
import { CardType } from "../../types/CardType";
import { CardCarouselItem } from "./index";
import { Center } from "@chakra-ui/react";

interface CardSliderProps {
   cards: CardType[];
}

export function CardCarousel({ cards }: CardSliderProps) {
   if (cards.length === 1) {
      return (
         <Center>
            <CardCarouselItem card_props={cards[0]} />
         </Center>
      );
   }

   const settings: SliderProps = {
      spaceBetween: 50,
      slidesPerView: cards.length < 3 ? cards.length : 3,
      draggable: cards.length >= 3,
      loop: cards.length >= 3,
      pagination: cards.length >= 3 && {
         clickable: true,
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
         },
         800: {
            slidesPerView: cards.length < 2 ? cards.length : 2,
            slidesPerGroup: cards.length < 2 ? cards.length : 2,
         },
         1200: {
            slidesPerView: cards.length < 3 ? cards.length : 3,
            slidesPerGroup: cards.length < 3 ? cards.length : 3,
         },
      },
   };
   return (
      <SliderCarousel settings={settings}>
         {cards.map((card) => (
            <Slide key={card.id}>
               <CardCarouselItem card_props={card} />
            </Slide>
         ))}
      </SliderCarousel>
   );
}

export default memo(CardCarousel);

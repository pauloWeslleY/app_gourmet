import { Cake, Cake2, Cake3, Cake4 } from "./DataPhotos";


export interface DataProductsProps {
   id?: number;
   title: string;
   image: any
}

export const data_products: DataProductsProps[] = [
   {
      id: 1,
      title: "Cakes",
      image: Cake,
   },
   {
      id: 2,
      title: "Cakes",
      image: Cake2
   },
   {
      id: 3,
      title: "Cakes",
      image: Cake3
   },
   {
      id: 4,
      title: "Cakes",
      image: Cake4
   },
   {
      id: 5,
      title: "Cakes",
      image: Cake2
   },
   {
      id: 6,
      title: "Cakes",
      image: Cake
   },
]
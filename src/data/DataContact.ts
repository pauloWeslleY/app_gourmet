import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall  } from "react-icons/fi";

export interface ContactProps {
   name: string;
   text: string;
   icons: any;
}

export const contact_props: ContactProps[] = [
   {
      name: "Email",
      text: "candyscakes@gmail.com",
      icons: HiOutlineMail
   },
   {
      name: "Address",
      text: "R. Amauri Souza, 346",
      icons: HiOutlineLocationMarker
   },
   {
      name: "Telephone",
      text: "(11) 99845-6754",
      icons: FiPhoneCall
   },
]
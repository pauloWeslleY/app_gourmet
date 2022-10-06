import Contact from "./Contact";
import ContactItem from "./ContactItem";
import ContactList from "./ContactList";

import { ContactProps, contact_props } from "./../../data/DataContact";
import { TitleProps } from "./../../types/TitleType";

import { HeadTitle } from "../HeadTitle";

import { useThemeColors } from "../../hooks/useThemeColors";

export { HeadTitle, Contact, ContactItem, ContactList, contact_props, useThemeColors };
export type { ContactProps, TitleProps };
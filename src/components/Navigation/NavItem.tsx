import { memo } from "react";

import styles from "./styles.module.scss";

interface NavItemProps {
   title: any;
}

export function NavItem({ title }: NavItemProps) {
   return <button className={styles.nav__item}>{title}</button>;
}

export default memo(NavItem);

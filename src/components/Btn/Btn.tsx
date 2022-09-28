import { memo } from "react";

import styles from "./styles.module.scss";

interface BtnProps {
   title: any;
}

export function Btn({ title }: BtnProps) {
   return <button className={styles.btn}>{title}</button>;
}

export default memo(Btn);

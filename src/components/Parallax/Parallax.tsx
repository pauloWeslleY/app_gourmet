import { memo } from "react";
import { TitleProps } from "../Products";

import styles from "./style.module.scss";

export function Parallax({ title }: TitleProps) {
   return (
      <section
         className={`${styles.parallax__container} ${styles.parallax_one}`}
      >
         <h1>{title}</h1>
      </section>
   );
}

export default memo(Parallax);

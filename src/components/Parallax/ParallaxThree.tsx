import { memo } from "react";

import styles from "./style.module.scss";

export function ParallaxThree() {
   return (
      <section
         className={`${styles.parallax__container} ${styles.parallax_three}`}
      ></section>
   );
}

export default memo(ParallaxThree);

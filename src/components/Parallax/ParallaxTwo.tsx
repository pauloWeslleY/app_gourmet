import { memo } from "react";

import styles from "./style.module.scss";

export function ParallaxTwo() {
   return (
      <section
         className={`${styles.parallax__container} ${styles.parallax_two}`}
      ></section>
   );
}

export default memo(ParallaxTwo);

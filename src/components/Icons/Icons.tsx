import { memo } from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

import styles from "./styles.module.scss";

export function Icons() {
   return (
      <section className={styles.icons__wrapper}>
         <BsInstagram className={styles.icons} />
         <BsFacebook className={`${styles.icons} ${styles.icons__face}`} />
         <BsWhatsapp className={`${styles.icons} ${styles.icons__whats}`} />
      </section>
   );
}

export default memo(Icons);

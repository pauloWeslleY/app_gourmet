import { memo } from "react";

import styles from "./style.module.scss";

export function Line() {
   return <div className={styles.line}></div>;
}

export default memo(Line);

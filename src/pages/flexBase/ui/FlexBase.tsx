import { CoreLayout } from "@/features/CoreLayout";
import styles from './FlexBase.module.css'

export const FlexBase = () => (
  <CoreLayout containerStyles={styles.flexBaseContainer} itemStyles={styles.flexBaseItem} />
);
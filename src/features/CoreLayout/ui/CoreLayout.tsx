import javascriptLogo from "@/javascript.svg";
import styles from "./CoreLayout.module.css";

const iterationBase = new Array(30).fill(null)

export const CoreLayout = ({ containerStyles, itemStyles }: CSSModuleClasses)  => (
  <div className={containerStyles}>
    {iterationBase.map(() => (
      <div className={itemStyles}>
        <img src={javascriptLogo} className={styles.javascriptLogoClass} />
      </div>
    ))}
  </div>
);

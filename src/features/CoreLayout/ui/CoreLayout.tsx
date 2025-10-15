import styles from "./CoreLayout.module.css";

const iterationBase = new Array(30).fill(null)

export const CoreLayout = ({ containerStyles, itemStyles }: CSSModuleClasses)  => (
  <div className={containerStyles}>
    {iterationBase.map(() => (
      <div className={itemStyles}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" className={styles.javascriptLogoClass} />
      </div>
    ))}
  </div>
);

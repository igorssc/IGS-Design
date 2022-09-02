import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface SkyBackgroundProps {
  children: ReactNode;
}

export const SkyBackground = ({ children }: SkyBackgroundProps) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

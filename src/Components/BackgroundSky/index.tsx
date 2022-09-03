import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface BackgroundSkyProps {
  children: ReactNode;
}

export const BackgroundSky = ({ children }: BackgroundSkyProps) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface BackgroundSkyProps {
  type?: "primary" | "secondary";
  children: ReactNode;
}

export const BackgroundSky = ({
  children,
  type = "primary",
}: BackgroundSkyProps) => {
  return (
    <>
      <div className={`${styles.container} ${styles[type]}`}>{children}</div>
    </>
  );
};

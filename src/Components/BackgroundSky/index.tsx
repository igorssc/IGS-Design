import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface BackgroundSkyProps {
  type?: "primary" | "secondary";
  fixed?: boolean;
  children: ReactNode;
}

export const BackgroundSky = ({
  children,
  type = "primary",
  fixed = false,
}: BackgroundSkyProps) => {
  return (
    <>
      <div
        className={`${styles.container} ${styles[type]} ${
          fixed && styles.fixed
        }`}
      >
        {children}
      </div>
    </>
  );
};

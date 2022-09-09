import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface TitleProps {
  children: ReactNode;
  _as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  position?: "left" | "right" | "center" | "justify";
  scheme?: "primary" | "secondary";
}

export const Title = ({
  children,
  _as = "h1",
  position = "center",
  scheme = "primary",
}: TitleProps) => {
  return (
    <>
      <_as className={`${styles.title} ${styles[position]} ${styles[scheme]}`}>
        {children}
      </_as>
    </>
  );
};

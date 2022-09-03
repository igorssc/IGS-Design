import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  ButtonTypeProps & {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    scheme?: "primary" | "secondary";
  };

type ButtonTypeProps =
  | { _as?: "button"; href?: never }
  | { _as: "a"; href?: string };

export const Button = ({
  children,
  type = "button",
  _as = "button",
  href,
  scheme = "primary",
}: ButtonProps) => {
  return (
    <>
      <div className={styles.container}>
        <_as
          className={`${styles.button} ${styles[scheme]}`}
          type={type}
          href={href}
        >
          {children}
        </_as>
      </div>
    </>
  );
};

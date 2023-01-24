import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonProps = HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> &
  ButtonTypeProps & {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    scheme?: "primary" | "secondary" | "tertiary";
  };

type ButtonTypeProps =
  | { _as?: "button"; href?: never; target?: never }
  | {
      _as: "a";
      href?: string;
      target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
    };

export const Button = ({
  children,
  type = "button",
  _as = "button",
  href,
  target,
  scheme = "primary",
  ...props
}: ButtonProps) => {
  return (
    <>
      <div className={styles.container}>
        {_as === "a" ? (
          <Link
            className={`${styles.button} ${styles[scheme]}`}
            href={href || "#"}
            {...props}
            {...(target && { target })}
          >
            {children}
          </Link>
        ) : (
          <_as
            className={`${styles.button} ${styles[scheme]}`}
            type={type}
            {...props}
            {...(target && { target })}
          >
            {children}
          </_as>
        )}
      </div>
    </>
  );
};

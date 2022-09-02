import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, type = "button" }: ButtonProps) => {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} type={type}>
          {children}
        </button>
      </div>
    </>
  );
};

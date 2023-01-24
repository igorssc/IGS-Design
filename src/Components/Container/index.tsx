import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};

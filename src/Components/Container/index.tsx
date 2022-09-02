import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

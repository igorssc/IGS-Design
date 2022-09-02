import styles from "./styles.module.scss";

interface TitleProps {
  children: string;
  _as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  position?: "left" | "right" | "center" | "justify";
}

export const Title = ({
  children,
  _as = "h1",
  position = "center",
}: TitleProps) => {
  return (
    <>
      <_as className={`${styles.title} ${styles[position]}`}>{children}</_as>
    </>
  );
};

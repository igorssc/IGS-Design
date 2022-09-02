import styles from "./styles.module.scss";

interface CloudsProps {
  position: "top" | "bottom";
}

export const Clouds = ({ position }: CloudsProps) => {
  return (
    <>
      <div
        className={`${styles.container} ${
          position === "top" ? styles.top : styles.bottom
        }`}
      />
    </>
  );
};

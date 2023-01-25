import styles from "./styles.module.scss";

interface CloudsProps {
  position?: "top" | "bottom";
}

export const Clouds = ({ position = "top" }: CloudsProps) => {
  return (
    <>
      <div
        className={`${styles.container} ${
          position === "top" ? styles.top : styles.bottom
        }`}
      >
        <div className={styles.primary}></div>
        <div className={styles.secondary}></div>
      </div>
    </>
  );
};

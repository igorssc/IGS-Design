import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface InputProps {
  title: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: string;
}

export const Input = ({
  title,
  value,
  setValue,
  type = "text",
}: InputProps) => {
  return (
    <>
      <label className={styles.label}>
        {title}:
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </>
  );
};

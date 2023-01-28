import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
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
  ...props
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
          {...props}
        />
      </label>
    </>
  );
};

import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface TextAreaProps {
  title: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const TextArea = ({ title, value, setValue }: TextAreaProps) => {
  return (
    <>
      <label className={styles.label}>
        {title}:
        <textarea
          className={styles.textArea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </>
  );
};

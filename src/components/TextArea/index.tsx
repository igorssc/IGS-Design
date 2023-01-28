import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  title: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const TextArea = ({
  title,
  value,
  setValue,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <label className={styles.label}>
        {title}:
        <textarea
          className={styles.textArea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      </label>
    </>
  );
};

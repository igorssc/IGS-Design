import { CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const ButtonScrollTop = () => {
  const base = 20;
  const [visible, setVisible] = useState(false);
  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > base);
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`${styles.content} ${visible && styles.visible}`}
    >
      <CaretUp size={30} />
    </div>
  );
};

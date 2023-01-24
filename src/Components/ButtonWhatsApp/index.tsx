import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const ButtonWhatsApp = () => {
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
    <>
      <Link
        href="https://api.whatsapp.com/send?phone=5531993185969&text=Ol%C3%A1,%20estava%20visitando%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20me%20ajudar%20a%20expandir%20meu%20neg%C3%B3cio."
        target="_blank"
        className={`${styles.content} ${visible && styles.visible}`}
      >
        <WhatsappLogo size={30} />
      </Link>
    </>
  );
};

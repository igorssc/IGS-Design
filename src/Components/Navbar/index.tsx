import Link from "next/link";
import { useRouter } from "next/router";
import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import LogoImg from "../../../public/logo-igs-design.svg";
import { Container } from "../Container";
import styles from "./styles.module.scss";

const Navbar = () => {
  const pages = [
    ["Página inicial", "/"],
    ["Desenvolvimento de sites", "/sites"],
    ["Design gráfico", "/design-grafico"],
    ["Fale conosco", "/fale-conosco"],
    ["Sobre nós", "/sobre-nos"],
  ];

  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.container}>
        <Container>
          <div className={styles.navbar}>
            <LogoImg className={styles.logo} />
            <div className={`${styles.navbarItems} ${isOpen && styles.isOpen}`}>
              <X
                size={32}
                color="#ffffff"
                className={styles.iconCloseNavbar}
                onClick={() => setIsOpen(false)}
              />
              <ul>
                {pages.map(([page, link]) => (
                  <li
                    key={link}
                    className={pathname === link ? styles.active : ""}
                  >
                    <Link href={link}>{page}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <List
              size={32}
              color="#ffffff"
              className={styles.navbarIconMobile}
              onClick={() => setIsOpen(true)}
            />
            <div
              className={`${styles.backdrop} ${isOpen && styles.isOpen}`}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;

import LogoImg from "@/assets/logo-igs-design.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
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

  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router?.pathname]);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowY = !isOpen
      ? "visible"
      : "hidden";
  }, [isOpen]);

  const base = 500;

  const [visibleBorder, setVisibleBorder] = useState(false);

  const onScroll = () => {
    setVisibleBorder(document.documentElement.scrollTop > base);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.content} ${
            visibleBorder && styles.borderVisible
          }`}
        >
          <Container style={{ height: "100%" }}>
            <div className={styles.navbar}>
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <LogoImg className={styles.logo} />
              </Link>
              <div
                className={`${styles.navbarItems} ${isOpen && styles.isOpen}`}
              >
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
                      className={router?.pathname === link ? styles.active : ""}
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
      </div>
    </>
  );
};

export default Navbar;

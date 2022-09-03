import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import styles from "./styles.module.scss";

interface BannerProps {
  children: ReactNode;
}

export const Banner = ({ children }: BannerProps) => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <div className={styles.content}>
            {children}
            <Link href="/fale-conosco">
              <Button _as="a" scheme="secondary" href="/fale-conosco">
                FALE CONOSCO
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

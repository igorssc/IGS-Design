import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import styles from "./styles.module.scss";

type ButtonProps = {
  href: string;
  text: string;
};
interface BannerProps {
  button?: [ButtonProps] | [ButtonProps, ButtonProps];
  children: ReactNode;
  scheme?: "primary" | "secondary";
}

export const Banner = ({
  children,
  button,
  scheme = "primary",
}: BannerProps) => {
  return (
    <>
      <div className={`${styles.container} ${styles[scheme]}`}>
        <Container>
          <div className={styles.content}>
            {children}
            <div className={styles.buttons}>
              {button?.map(({ href, text }) => (
                <Link href={href} key={href} passHref>
                  <Button
                    _as="a"
                    scheme={scheme === "primary" ? "secondary" : "primary"}
                  >
                    {text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import styles from "./styles.module.scss";

type ButtonProps = {
  href: string;
  text: string;
};
interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  button?: [ButtonProps] | [ButtonProps, ButtonProps];
  children: ReactNode;
  scheme?: "primary" | "secondary";
}

export const Banner = ({
  children,
  button,
  scheme = "primary",
  ...props
}: BannerProps) => {
  return (
    <>
      <div className={`${styles.container} ${styles[scheme]}`}>
        <Container>
          <div className={styles.content} {...props}>
            {children}
            <div className={styles.buttons}>
              {button?.map(({ href, text }) => (
                <Link href={href} key={href}>
                  <Button
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

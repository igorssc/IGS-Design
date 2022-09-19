import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

interface BoxInformationProps {
  title: string;
  children: ReactNode;
  _image?: StaticImageData | any;
  invert?: boolean;
  scheme?: "primary" | "secondary";
}

export const BoxInformation = ({
  title,
  children,
  _image,
  invert,
  scheme = "primary",
}: BoxInformationProps) => {
  return (
    <>
      <div className={`${styles.container} ${styles[scheme]}`}>
        <Container>
          <Title _as="h2" scheme={scheme}>
            {title}
          </Title>
          <div
            className={`${styles.content} ${_image && styles.containsImage}`}
          >
            {_image && (
              <>
                {_image.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={_image.src} alt="Website image" />
                ) : (
                  <>
                    {console.log("aqui")}
                    <_image />
                  </>
                )}
              </>
            )}
            <div className={`${invert && styles.invert}`}>{children}</div>
          </div>
        </Container>
      </div>
    </>
  );
};

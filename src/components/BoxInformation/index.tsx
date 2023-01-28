import Image, { StaticImageData } from "next/image";
import { HTMLAttributes, ReactNode } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

interface BoxInformationProps extends HTMLAttributes<HTMLDivElement> {
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
  ...props
}: BoxInformationProps) => {
  return (
    <>
      <div className={`${styles.container} ${styles[scheme]}`} {...props}>
        <Container>
          <Fade appear>
            <Title _as="h2" scheme={scheme}>
              {title}
            </Title>
          </Fade>

          <div
            className={`${styles.content} ${_image && styles.containsImage}`}
          >
            {_image && (
              <>
                {_image.src ? (
                  <Fade left={!invert} right={invert}>
                    <Image
                      width={800}
                      height={800}
                      loading="lazy"
                      src={_image.src}
                      alt="Website image"
                      className={styles.image}
                    />
                  </Fade>
                ) : (
                  <Fade left={!invert} right={invert}>
                    <_image className={styles.image} />
                  </Fade>
                )}
              </>
            )}
            <Fade
              appear={!_image}
              left={_image && invert}
              right={_image && !invert}
            >
              <div className={`${invert && styles.invert}`}>{children}</div>
            </Fade>
          </div>
        </Container>
      </div>
    </>
  );
};

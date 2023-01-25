import Image, { StaticImageData } from "next/image";
import Fade from "react-reveal/Fade";
import { Button } from "../Button";
import { Title } from "../Title";
import styles from "./styles.module.scss";

interface OurSitesProps {
  items: {
    name: string;
    image: StaticImageData;
    href: string;
  }[];
}

export const OurSites = ({ items }: OurSitesProps) => {
  return (
    <>
      <div className={styles.content}>
        {items.map((item, index) => (
          <Fade appear cascade key={index}>
            <div className={styles.site}>
              <Image
                loading="lazy"
                width={800}
                height={800}
                src={item.image.src}
                alt={item.name}
                className={styles.image}
              />
              <Title _as="h3" scheme="secondary">
                {item.name}
              </Title>
              <Button
                _as="a"
                scheme="tertiary"
                href={item.href}
                target="_blank"
              >
                ACESSAR
              </Button>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};

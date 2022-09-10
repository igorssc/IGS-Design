import { StaticImageData } from "next/image";
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
      <Title scheme="secondary" _as="h2">
        Sites desenvolvidos
      </Title>
      <div className={styles.content}>
        {items.map((item, index) => (
          <div className={styles.site} key={index}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image.src} alt={item.name} />
            <Title _as="h3" scheme="secondary">
              {item.name}
            </Title>
            <Button _as="a" scheme="tertiary" href={item.href} target="_blank">
              ACESSAR
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

import Link from "next/link";
import { Globe, PaintBrush } from "phosphor-react";
import { Button } from "../Button";
import { Clouds } from "../Clouds";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const OurServices = () => {
  const services = [
    {
      title: "Criação de sites",
      _icon: Globe,
      description:
        "Criação de sites exclusivos, dinâmicos, modernos. Aumente as possibilidades de negócio com um site bonito, bem apresentável que convença seus clientes que a sua empresa é a melhor opção para eles.",
      link: "/sites",
    },
    {
      title: "Criação gráfica",
      _icon: PaintBrush,
      description:
        "Construção de marcas, identidade visual, redesign e modernização de logotipos, logomarcas e símbolos. Design de folders, folhetos e flyers, criação de cartões de visita, convites, timbrados, envelopes, banners, etc.",
      link: "/design-grafico",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <Clouds position="top" />
        <div className={styles.background}>
          <Container>
            <div className={styles.content}>
              <Title scheme="secondary">Nossos serviços</Title>
              <div>
                {services.map(({ title, _icon, description, link }, index) => (
                  <div key={index}>
                    <div className={styles.icon}>
                      <_icon size={40} />
                    </div>
                    <Title _as="h2" scheme="secondary">
                      {title}
                    </Title>
                    <p>{description}</p>
                    <Link href={link}>
                      <Button _as="a" href={link}>
                        Saiba mais
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <Clouds position="bottom" />
      </div>
    </>
  );
};

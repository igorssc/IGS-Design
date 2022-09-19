import "photoswipe/dist/photoswipe.css";

import portfolio2Img from "../../../public/portfolio/banner-daiana-despachante.jpeg";
import portfolioSite2Img from "../../../public/portfolio/capture-nasdacash.png";
import portfolioSite1Img from "../../../public/portfolio/capture-slfretamento.png";
import portfolio4Img from "../../../public/portfolio/cardapio-lanche-legal.jpeg";
import portfolio1Img from "../../../public/portfolio/cartao-de-visita-crislaine-costa-advogada.jpeg";
import portfolio5Img from "../../../public/portfolio/cartao-de-visita-oficina-3-irmaos.jpeg";
import portfolio7Img from "../../../public/portfolio/cartao-de-visita-somatorio-nucleo-de-ensino.jpeg";
import portfolio6Img from "../../../public/portfolio/panfleto-deposito-via-colegio.jpeg";
import portfolio3Img from "../../../public/portfolio/panfleto-master-vans.jpeg";
import portfolio8Img from "../../../public/portfolio/panfleto-promocao-de-natal-opticas-imperador.jpeg";
import { Container } from "../Container";
import { Gallery } from "../Gallery";
import { OurSites } from "../OurSites";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const Portfolio = () => {
  const items = [
    {
      original: portfolio1Img,
      thumbnail: portfolio1Img,
    },
    {
      original: portfolio2Img,
      thumbnail: portfolio2Img,
    },
    {
      original: portfolio3Img,
      thumbnail: portfolio3Img,
    },
    {
      original: portfolio4Img,
      thumbnail: portfolio4Img,
    },
    {
      original: portfolio5Img,
      thumbnail: portfolio5Img,
    },
    {
      original: portfolio6Img,
      thumbnail: portfolio6Img,
    },
    {
      original: portfolio7Img,
      thumbnail: portfolio7Img,
    },
    {
      original: portfolio8Img,
      thumbnail: portfolio8Img,
    },
  ];

  const sites = [
    {
      name: "Santa Luzia Fretamento e Turismo",
      image: portfolioSite1Img,
      href: "https://www.slfretamento.com.br",
    },
    {
      name: "Nasdacash cryptocurrency",
      image: portfolioSite2Img,
      href: "https://www.nasdacash.org",
    },
  ];

  return (
    <>
      <Container>
        <div className={styles.content}>
          <Title scheme="secondary">Nosso portfólio</Title>
          <div className={styles.gallery}>
            <Gallery items={items} />
          </div>

          <OurSites items={sites} />
        </div>
      </Container>
    </>
  );
};

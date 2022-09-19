import "photoswipe/dist/photoswipe.css";

import portfolio2Img from "../../../public/portfolio/banner-daiana-despachante.jpeg";
import portfolio2ImgThumb from "../../../public/portfolio/banner-daiana-despachante.jpg";
import portfolioSite2Img from "../../../public/portfolio/capture-nasdacash.png";
import portfolioSite1Img from "../../../public/portfolio/capture-slfretamento.png";
import portfolio4Img from "../../../public/portfolio/cardapio-lanche-legal.jpeg";
import portfolio4ImgThumb from "../../../public/portfolio/cardapio-lanche-legal.jpg";
import portfolio1Img from "../../../public/portfolio/cartao-de-visita-crislaine-costa-advogada.jpeg";
import portfolio1ImgThumb from "../../../public/portfolio/cartao-de-visita-crislaine-costa-advogada.jpg";
import portfolio5Img from "../../../public/portfolio/cartao-de-visita-oficina-3-irmaos.jpeg";
import portfolio5ImgThumb from "../../../public/portfolio/cartao-de-visita-oficina-3-irmaos.jpg";
import portfolio7Img from "../../../public/portfolio/cartao-de-visita-somatorio-nucleo-de-ensino.jpeg";
import portfolio7ImgThumb from "../../../public/portfolio/cartao-de-visita-somatorio-nucleo-de-ensino.jpg";
import portfolio6Img from "../../../public/portfolio/panfleto-deposito-via-colegio.jpeg";
import portfolio6ImgThumb from "../../../public/portfolio/panfleto-deposito-via-colegio.jpg";
import portfolio3Img from "../../../public/portfolio/panfleto-master-vans.jpeg";
import portfolio3ImgThumb from "../../../public/portfolio/panfleto-master-vans.jpg";
import portfolio8Img from "../../../public/portfolio/panfleto-promocao-de-natal-opticas-imperador.jpeg";
import portfolio8ImgThumb from "../../../public/portfolio/panfleto-promocao-de-natal-opticas-imperador.jpg";
import { Container } from "../Container";
import { Gallery } from "../Gallery";
import { OurSites } from "../OurSites";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const Portfolio = () => {
  const items = [
    {
      original: portfolio1Img,
      thumbnail: portfolio1ImgThumb,
    },
    {
      original: portfolio2Img,
      thumbnail: portfolio2ImgThumb,
    },
    {
      original: portfolio3Img,
      thumbnail: portfolio3ImgThumb,
    },
    {
      original: portfolio4Img,
      thumbnail: portfolio4ImgThumb,
    },
    {
      original: portfolio5Img,
      thumbnail: portfolio5ImgThumb,
    },
    {
      original: portfolio6Img,
      thumbnail: portfolio6ImgThumb,
    },
    {
      original: portfolio7Img,
      thumbnail: portfolio7ImgThumb,
    },
    {
      original: portfolio8Img,
      thumbnail: portfolio8ImgThumb,
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

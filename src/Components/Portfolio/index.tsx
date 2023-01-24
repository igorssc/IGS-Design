import "photoswipe/dist/photoswipe.css";

import portfolio2ImgThumb from "@/assets/portfolio/banner-daiana-despachante-thumb.webp";
import portfolio2Img from "@/assets/portfolio/banner-daiana-despachante.webp";
import portfolioSite2Img from "@/assets/portfolio/capture-nasdacash.webp";
import portfolioSite1Img from "@/assets/portfolio/capture-slfretamento.webp";
import portfolio4ImgThumb from "@/assets/portfolio/cardapio-lanche-legal-thumb.webp";
import portfolio4Img from "@/assets/portfolio/cardapio-lanche-legal.webp";
import portfolio1ImgThumb from "@/assets/portfolio/cartao-de-visita-crislaine-costa-advogada-thumb.webp";
import portfolio1Img from "@/assets/portfolio/cartao-de-visita-crislaine-costa-advogada.webp";
import portfolio5ImgThumb from "@/assets/portfolio/cartao-de-visita-oficina-3-irmaos-thumb.webp";
import portfolio5Img from "@/assets/portfolio/cartao-de-visita-oficina-3-irmaos.webp";
import portfolio7ImgThumb from "@/assets/portfolio/cartao-de-visita-somatorio-nucleo-de-ensino-thumb.webp";
import portfolio7Img from "@/assets/portfolio/cartao-de-visita-somatorio-nucleo-de-ensino.webp";
import portfolio6ImgThumb from "@/assets/portfolio/panfleto-deposito-via-colegio-thumb.webp";
import portfolio6Img from "@/assets/portfolio/panfleto-deposito-via-colegio.webp";
import portfolio3ImgThumb from "@/assets/portfolio/panfleto-master-vans-thumb.webp";
import portfolio3Img from "@/assets/portfolio/panfleto-master-vans.webp";
import portfolio8ImgThumb from "@/assets/portfolio/panfleto-promocao-de-natal-opticas-imperador-thumb.webp";
import portfolio8Img from "@/assets/portfolio/panfleto-promocao-de-natal-opticas-imperador.webp";
import Fade from "react-reveal/Fade";
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

          <Gallery items={items} />

          <Fade appear>
            <OurSites items={sites} />
          </Fade>
        </div>
      </Container>
    </>
  );
};

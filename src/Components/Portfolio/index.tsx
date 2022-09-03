import "photoswipe/dist/photoswipe.css";

import { Container } from "../Container";
import { Gallery } from "../Gallery";
// import { Gallery } from '../Galery'
import portfolio6Img from "../../../public/portfolio/camisa-de-formatura-2017-colegio-cramer.jpeg";
import portfolio1Img from "../../../public/portfolio/cartao-de-visita-igs-design.jpeg";
import portfolio5Img from "../../../public/portfolio/cartao-de-visita-josi-dias-moda-e-acessorios.jpeg";
import portfolio2Img from "../../../public/portfolio/cartao-de-visita-salao-lion.jpeg";
import portfolio7Img from "../../../public/portfolio/cartao-de-visita-somatorio-nucleo-de-ensino.jpeg";
import portfolio4Img from "../../../public/portfolio/cartao-de-visita-studio-brunna-dutra.jpeg";
import portfolio3Img from "../../../public/portfolio/convite-musical-sesi.jpeg";
import portfolio8Img from "../../../public/portfolio/panfleto-promocao-de-natal-opticas-imperador.jpeg";
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
  return (
    <>
      <Container>
        <div className={styles.content}>
          <Title>Nosso portfólio</Title>
          <div className={styles.gallery}>
            <Gallery items={items} />
          </div>
        </div>
      </Container>
    </>
  );
};

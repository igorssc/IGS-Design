import evaluationPhoto1Img from "@/assets/clients/elenice-domingos.webp";
import evaluationPhoto3Img from "@/assets/clients/josimeire-dias.webp";
import evaluationPhoto4Img from "@/assets/clients/stephany-duarte.webp";
import evaluationPhoto2Img from "@/assets/clients/tm-ensaios.webp";
import Image from "next/image";
import { CaretLeft, CaretRight, Quotes } from "phosphor-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const OurClients = () => {
  const clients = [
    {
      name: "Elenice Domingos",
      evaluation:
        "Agradeço pela atenção no atendimento, agilidade na hora da entrega sem falar da excelente qualidade! Estou muito satisfeita e recomendo!!!!",
      image: evaluationPhoto1Img,
    },
    {
      name: "Projeto Inovação Senai",
      evaluation:
        "A IGS Design  é uma empresa sensacional e de qualidade, sempre que preciso de qualquer serviço sou bem atendida, além de apresentar serviços de ótima qualidade e rapidez nas entregas, o que mais me conquistou foi a criatividade dos produtos apresentados pela equipe. Com certeza a IGS Design é sem dúvidas a melhor.",
      image: evaluationPhoto2Img,
    },
    {
      name: "Josimeire Dias",
      evaluation:
        "Agradeço a IGS Design pelo excelente trabalho, estou muito satisfeita com o site e com os cartões de visita, obrigada por tudo. Recomendo!",
      image: evaluationPhoto3Img,
    },
    {
      name: "Stephany Duarte",
      evaluation:
        "A IGS Design se mostrou uma parceira valiosa! Atendimento sempre muito prático e atencioso, oportunidade de acompanhar o processo a medida que é executado e sempre com agilidade! Muito grata pelos serviços, indico para todos!",
      image: evaluationPhoto4Img,
    },
  ];

  const CustomLeftArrow = ({ onClick }: any) => {
    return (
      <CaretLeft
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => onClick()}
      />
    );
  };

  const CustomRightArrow = ({ onClick }: any) => {
    return (
      <CaretRight
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => onClick()}
      />
    );
  };

  const responsive = {
    all: {
      breakpoint: { max: 10000, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container>
        <div className={styles.content}>
          <Title scheme="secondary">Opiniões dos nossos clientes</Title>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite={true}
            keyBoardControl={true}
            pauseOnHover={true}
            partialVisible={true}
            // @ts-ignore:next-line
            customLeftArrow={<CustomLeftArrow />}
            // @ts-ignore:next-line
            customRightArrow={<CustomRightArrow />}
          >
            {clients.map((client) => (
              <div className={styles.item} key={client.name}>
                <Quotes className={styles.icon} />
                <div className={styles.evaluation}>
                  <Image
                    width={100}
                    height={100}
                    loading="lazy"
                    src={client.image.src}
                    alt="photo from client"
                    className={styles.image}
                  />
                  <Title _as="h3" scheme="secondary">
                    {client.name}
                  </Title>
                  <p>{client.evaluation}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

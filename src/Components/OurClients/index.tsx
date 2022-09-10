import { CaretLeft, CaretRight, Quotes } from "phosphor-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import evaluationPhoto4Img from "../../../public/clients/cervejeiras-futebol-clube.jpg";
import evaluationPhoto1Img from "../../../public/clients/elenice-domingos.jpg";
import evaluationPhoto3Img from "../../../public/clients/josimeire-dias.jpg";
import evaluationPhoto2Img from "../../../public/clients/tm-ensaios.jpg";
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
      name: "Cervejeiras Futebol Clube",
      evaluation:
        "IGS design, fez a diferença em nosso time, nos proporcionou um lindo brasão, super sofisticado e elogiado por todos onde passamos. Trabalho de qualidade e com muita eficiência. Obrigada.",
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={client.image.src} alt="photo from client" />
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

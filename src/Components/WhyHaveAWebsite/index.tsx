import websiteImg from "../../../public/website.png";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const WhyHaveAWebsite = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Title _as="h2">Por que ter um site?</Title>
          <div className={styles.content}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={websiteImg.src} alt="Website image" />
            <div>
              <p>
                A internet é o meio de comunicação mais utilizado no mundo e o
                segmento que mais cresce. No Brasil, a pesquisa TIC realizada
                entre novembro de 2015 e junho de 2016, mostra que 58% da
                população usa a internet, o que representa 102 milhões de
                internautas, sendo que 89% acessa pelo celular, enquanto 40%
                pelo computador de mesa e 39% pelo notebook. Sendo assim, ter um
                site se tornou a forma mais fácil de chegar aos seus clientes.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

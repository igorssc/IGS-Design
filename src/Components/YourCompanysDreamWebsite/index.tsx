import DevelopersCreatingWebsiteImg from "../../../public/developers-creating-website.svg";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const YourCompanysDreamWebsite = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Title _as="h2" scheme="secondary">
            A IGS cria o site dos sonhos de sua empresa
          </Title>
          <div className={styles.content}>
            <div>
              <p>
                Contamos com a criação de sites exclusivos, dinâmicos e
                modernos. Aumente as possibilidades de negócio com um site
                bonito, bem apresentável que convença seus clientes que a sua
                empresa é a melhor opção para eles
              </p>
            </div>
            <DevelopersCreatingWebsiteImg />
          </div>
        </Container>
      </div>
    </>
  );
};

import BrainstormingImg from "../../../public/brainstorming_2.svg";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const TheDesignYouNeed = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Title _as="h2" scheme="secondary">
            O Design que você precisa
          </Title>
          <div className={styles.content}>
            <div>
              <p>
                Investir na criação da sua identidade visual não dará somente um
                símbolo para a sua empresa e sim definirá uma marca própria;
                proporcionando respeito e uma personalidade única.
              </p>
            </div>
            <BrainstormingImg />
          </div>
        </Container>
      </div>
    </>
  );
};

import BrainstormingImg from "../../../public/brainstorming.svg";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const CreationOfGraphicPieces = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Title _as="h2">
            Criação de peças gráficas para identidade visual
          </Title>
          <div className={styles.content}>
            <BrainstormingImg />
            <div>
              <p>
                A área de Design Gráfico da IGS é responsável pela criação de
                toda a imagem vinculada á cartões de visita, folders, papel
                timbrado, crachás, banners, convites e identidade visual em si,
                completando e dando ainda mais personalidade para você, sua
                empresa ou instituição.
              </p>
              <p>
                Nos dias atuais é preciso mostrar ao público alvo que por trás
                da qualidade de sua empresa existe também uma família que atende
                por determinado nome e se apresenta de determinada forma.
              </p>
              <p>
                Um projeto bem feito para criação da sua identidade visual
                atrairá ainda mais seus clientes em potencial, pois a sua marca
                se comunicará com o seu público.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

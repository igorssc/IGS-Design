import { TypeAnimation } from "react-type-animation";
import AstronautImg from "../../../public/creative-astronaut-kid-character2.svg";
import LogoImg from "../../../public/logo-igs-design.svg";
import { BackgroundSky } from "../BackgroundSky";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <>
      <BackgroundSky type="quinary">
        <div className={styles.container}>
          <Container>
            <div className={styles.content}>
              <div>
                <LogoImg className={styles.logo} />

                <Title position="left" scheme="secondary">
                  <TypeAnimation
                    sequence={[
                      "Criatividade que faz a diferença",
                      2000,
                      () => {}, // Place optional callbacks,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className={styles.slogan}
                  />
                </Title>
                <p>
                  A IGS Design é uma empresa de Marketing Digital e Impresso.
                  Atendemos tanto a pessoas físicas quanto jurídicas, e inovamos
                  com o conceito de “revisões ilimitadas”. Ou seja, o
                  desenvolvimento da arte só é finalizado mediante aprovação do
                  cliente
                </p>
              </div>
              <AstronautImg className={styles.image} />
            </div>
          </Container>
        </div>
      </BackgroundSky>
    </>
  );
};

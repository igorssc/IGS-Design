import FancyText from "@carefully-coded/react-text-gradient";
import DevelopersCreatingImg from "../../../public/creative-astronaut-kid-character.svg";
import LogoImg from "../../../public/logo-igs-design.svg";
import { BackgroundSky } from "../BackgroundSky";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <>
      <BackgroundSky>
        <div className={styles.container}>
          <Container>
            <div className={styles.content}>
              <div>
                <LogoImg className={styles.logo} />
                <Title position="left">
                  <FancyText
                    gradient={{
                      from: "#ab93ef",
                      to: "#fff",
                      type: "linear",
                    }}
                    animateTo={{ from: "#fff", to: "#889ac1" }}
                    animateDuration={2000}
                  >
                    <span className={styles.text}>
                      {"Criatividade que faz a diferença"
                        .split("")
                        .map((char, index) => (
                          <span key={index}>{char}</span>
                        ))}
                    </span>
                  </FancyText>
                </Title>
                <p>
                  A IGS Design é uma empresa de Marketing Digital e Impresso.
                  Atendemos tanto a pessoas físicas quanto jurídicas, e inovamos
                  com o conceito de “revisões ilimitadas”. Ou seja, o
                  desenvolvimento da arte só é finalizado mediante aprovação do
                  cliente
                </p>
              </div>
              <DevelopersCreatingImg className={styles.image} />
            </div>
          </Container>
        </div>
      </BackgroundSky>
    </>
  );
};

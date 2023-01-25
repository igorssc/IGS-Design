import AstronautImg from "@/assets/creative-astronaut-kid-character.svg";
import LogoImg from "@/assets/logo-igs-design.svg";
import Fade from "react-reveal/Fade";
import { TypeAnimation } from "react-type-animation";
import { BackgroundSky } from "../BackgroundSky";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <>
      <BackgroundSky type="secondary">
        <div className={styles.container}>
          <Container>
            <Fade appear cascade ssrReveal>
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
                    Bem-vindo à IGS Design, onde criatividade e inovação são
                    nossa paixão. Oferecemos soluções personalizadas em
                    desenvolvimento gráfico e de software. Entre em contato
                    conosco hoje para discutir como podemos ajudá-lo a alcançar
                    seus objetivos e dar vida à sua visão. Estamos ansiosos para
                    trabalhar com você!
                  </p>
                </div>
                <AstronautImg className={styles.image} />
              </div>
            </Fade>
          </Container>
        </div>
      </BackgroundSky>
    </>
  );
};

import DevelopersCreatingImg from "../../../public/developers-creating-website.svg";
import LogoImg from "../../../public/logo-igs-design.svg";
import { BackgroundSky } from "../BackgroundSky";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <>
      <BackgroundSky>
        <Container>
          <div className={styles.content}>
            <div>
              <LogoImg className={styles.logo} />
              <Title position="left">Criatividade que faz a diferença</Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sit amet sollicitudin sem. Donec posuere pretium nulla, ut
                vestibulum nisl volutpat ut. Donec ornare lorem eget ullamcorper
                fermentum. Proin auctor lobortis dapibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. In dapibus urna id congue
                interdum.
              </p>
            </div>
            <DevelopersCreatingImg className={styles.image} />
          </div>
        </Container>
      </BackgroundSky>
    </>
  );
};

import DevelopersCreatingImg from "../../../public/developers-creating-website.svg";
import { Container } from "../Container";
import { SkyBackground } from "../SkyBackground";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <>
      <SkyBackground>
        <Container>
          <div className={styles.content}>
            <div>
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
      </SkyBackground>
    </>
  );
};

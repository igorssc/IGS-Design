import { Container } from "../Container";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <strong>
            &copy; 2016 - {new Date().getFullYear().toString()} - IGS DESIGN
          </strong>
        </Container>
      </div>
    </>
  );
};

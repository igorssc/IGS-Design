import "photoswipe/dist/photoswipe.css";

import { Container } from "../Container";
import { Gallery } from "../Galery";
// import { Gallery } from '../Galery'
import { SkyBackground } from "../SkyBackground";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const Portfolio = () => {
  const items = [
    {
      original: "https://placekitten.com/1024/768?image=1",
      thumbnail: "https://placekitten.com/200/150?image=1",
    },
    {
      original: "https://placekitten.com/1024/768?image=2",
      thumbnail: "https://placekitten.com/200/150?image=2",
    },
    {
      original: "https://placekitten.com/1024/768?image=3",
      thumbnail: "https://placekitten.com/200/150?image=3",
    },
    {
      original: "https://placekitten.com/1024/768?image=4",
      thumbnail: "https://placekitten.com/200/150?image=4",
    },
    {
      original: "https://placekitten.com/1024/768?image=5",
      thumbnail: "https://placekitten.com/200/150?image=5",
    },
    {
      original: "https://placekitten.com/1024/768?image=6",
      thumbnail: "https://placekitten.com/200/150?image=6",
    },
    {
      original: "https://placekitten.com/1024/768?image=7",
      thumbnail: "https://placekitten.com/200/150?image=7",
    },
    {
      original: "https://placekitten.com/1024/768?image=8",
      thumbnail: "https://placekitten.com/200/150?image=8",
    },
    {
      original: "https://placekitten.com/1024/768?image=9",
      thumbnail: "https://placekitten.com/200/150?image=9",
    },
    {
      original: "https://placekitten.com/1024/768?image=10",
      thumbnail: "https://placekitten.com/200/150?image=10",
    },
    {
      original: "https://placekitten.com/1024/768?image=11",
      thumbnail: "https://placekitten.com/200/150?image=11",
    },
    {
      original: "https://placekitten.com/1024/768?image=12",
      thumbnail: "https://placekitten.com/200/150?image=12",
    },
    {
      original: "https://placekitten.com/1024/768?image=13",
      thumbnail: "https://placekitten.com/200/150?image=13",
    },
    {
      original: "https://placekitten.com/1024/768?image=14",
      thumbnail: "https://placekitten.com/200/150?image=14",
    },
    {
      original: "https://placekitten.com/1024/768?image=15",
      thumbnail: "https://placekitten.com/200/150?image=15",
    },
  ];
  return (
    <>
      <SkyBackground>
        <Container>
          <div className={styles.content}>
            <Title>Nosso portfólio</Title>
            <div className={styles.galery}>
              <Gallery items={items} />
            </div>
          </div>
        </Container>
      </SkyBackground>
    </>
  );
};

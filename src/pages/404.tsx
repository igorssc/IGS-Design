import notFoundImg from "@/assets/404.webp";
import AstronautImg from "@/assets/astronaut.svg";
import EarthImg from "@/assets/earth.svg";
import MoonImg from "@/assets/moon.svg";
import RocketImg from "@/assets/rocket.svg";
import { Button } from "@/Components/Button";
import { Container } from "@/Components/Container";
import styles from "@/styles/404.module.scss";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - 404</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.backdrop}></div>
        <div className={styles.stars}>
          <Container
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={styles.centralBody}>
              <Image
                src={notFoundImg}
                alt="Not found image"
                className={styles.image404}
                width={300}
                height={135}
              />
              <h3 className={styles.title}>
                Ops, parece que você se perdeu! A página que você está
                procurando não foi encontrada. Mas não se preocupe, temos muito
                mais para mostrar.
              </h3>
              <h3 className={styles.title}>
                Clique abaixo para explorar o nosso site e descobrir como
                podemos ajudar a alcançar o sucesso e destacar seu negócio!
              </h3>
              <Link href="/" style={{ width: "100%" }}>
                <Button scheme="secondary">VOLTAR PARA O SITE</Button>
              </Link>
            </div>
          </Container>
          <div className={styles.objects}>
            <RocketImg className={styles.objectRocket} width={40} />
            <div>
              <EarthImg className={styles.objectEarth} width={100} />
              <MoonImg className={styles.objectMoon} width={80} />
            </div>
            <div className={styles.boxAstronaut}>
              <AstronautImg className={styles.objectAstronaut} width={140} />
            </div>
          </div>
          <div className={styles.glowingStars}>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

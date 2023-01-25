import { BackgroundSky } from "@/components/BackgroundSky";
import { Banner } from "@/components/Banner";
import { Clouds } from "@/components/Clouds";
import { Header } from "@/components/Header";
import { OurClients } from "@/components/OurClients";
import { OurServices } from "@/components/OurServices";
import { Portfolio } from "@/components/Portfolio";
import { Title } from "@/components/Title";
import styles from "@/styles/Home.module.scss";
import type { NextPage } from "next";
import Head from "next/head";
import Fade from "react-reveal/Fade";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design</title>
      </Head>
      <Header />
      <OurServices />
      <BackgroundSky>
        <div className={styles.fillSky}>
          <Portfolio />
          <Fade appear>
            <OurClients />
          </Fade>
        </div>
      </BackgroundSky>
      <Clouds />
      <Banner
        button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}
        style={{ paddingTop: 40 }}
      >
        <Fade bottom>
          <Title _as="h3" scheme="secondary">
            Não perca mais tempo! Entre em contato conosco agora e vamos juntos
            alcançar seus objetivos e destacar seu negócio. Clique no botão
            abaixo para acessar nossa página de contato e dê o primeiro passo
            para o sucesso!
          </Title>
        </Fade>
      </Banner>
    </>
  );
};

export default Home;

import { BackgroundSky } from "@/Components/BackgroundSky";
import { Banner } from "@/Components/Banner";
import { Clouds } from "@/Components/Clouds";
import { Header } from "@/Components/Header";
import { OurClients } from "@/Components/OurClients";
import { OurServices } from "@/Components/OurServices";
import { Portfolio } from "@/Components/Portfolio";
import { Title } from "@/Components/Title";
import styles from "@/styles/Home.module.scss";
import type { NextPage } from "next";
import Head from "next/head";

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
          <OurClients />
        </div>
      </BackgroundSky>
      <Clouds />
      <Banner button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}>
        <Title _as="h3" scheme="secondary">
          Não perca mais tempo! Entre em contato conosco agora e vamos juntos
          alcançar seus objetivos e destacar seu negócio. Clique aqui para
          acessar nossa página de contato e dê o primeiro passo para o sucesso!
        </Title>
      </Banner>
    </>
  );
};

export default Home;

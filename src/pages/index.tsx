import type { NextPage } from "next";
import Head from "next/head";
import { BackgroundSky } from "../Components/BackgroundSky";
import { Banner } from "../Components/Banner";
import { Clouds } from "../Components/Clouds";
import { Header } from "../Components/Header";
import { OurClients } from "../Components/OurClients";
import { OurServices } from "../Components/OurServices";
import { Portfolio } from "../Components/Portfolio";
import { Title } from "../Components/Title";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design</title>
      </Head>
      <Header />
      <OurServices />
      <BackgroundSky type="tertiary">
        <div className={styles.fillSky}>
          <Portfolio />
          <OurClients />
        </div>
      </BackgroundSky>
      <Clouds />
      <Banner button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}>
        <Title _as="h2" scheme="secondary">
          Não perca tempo e entre em contato hoje mesmo!
        </Title>
      </Banner>
    </>
  );
};

export default Home;

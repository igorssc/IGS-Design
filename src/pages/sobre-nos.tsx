import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Clouds } from "@/components/Clouds";
import { Title } from "@/components/Title";
import { NextPage } from "next";
import Head from "next/head";
import Fade from "react-reveal/Fade";

const SobreNos: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Sobre nós</title>
      </Head>
      <Fade appear>
        <About />
      </Fade>
      <Clouds position="top" />
      <Banner
        button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}
        style={{ paddingTop: 40 }}
      >
        <Fade bottom>
          <Title _as="h3" scheme="secondary">
            Não perca mais tempo! Entre em contato conosco agora e vamos juntos
            alcançar seus objetivos e destacar seu negócio. Nós temos o design
            certo para o seu negócio. Clique no botão abaixo para nos contatar e
            dê o primeiro passo para o sucesso!
          </Title>
        </Fade>
      </Banner>
    </>
  );
};

export default SobreNos;

import { About } from "@/Components/About";
import { Banner } from "@/Components/Banner";
import { Clouds } from "@/Components/Clouds";
import { Title } from "@/Components/Title";
import { NextPage } from "next";
import Head from "next/head";

const SobreNos: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Sobre nós</title>
      </Head>
      <About />
      <Clouds position="top" />
      <Banner
        button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}
        style={{ paddingTop: 40 }}
      >
        <Title _as="h3" scheme="secondary">
          Não perca mais tempo! Entre em contato conosco agora e vamos juntos
          alcançar seus objetivos e destacar seu negócio. Nós temos o design
          certo para o seu negócio. Clique no botão abaixo para nos contatar e
          dê o primeiro passo para o sucesso!
        </Title>
      </Banner>
    </>
  );
};

export default SobreNos;

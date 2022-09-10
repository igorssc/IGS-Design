import { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../Components/Banner";
import { CreationOfGraphicPieces } from "../Components/CreationOfGraphicPieces";
import { TheDesignYouNeed } from "../Components/TheDesignYouNeed";
import { Title } from "../Components/Title";

const DesignGrafico: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Design gráfico</title>
      </Head>
      <CreationOfGraphicPieces />
      <TheDesignYouNeed />
      <Banner
        button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}
        scheme="secondary"
      >
        <Title _as="h2">
          Tem alguma dúvida do que fazer e como criar a melhor identidade visual
          para sua empresa?
        </Title>
      </Banner>
    </>
  );
};

export default DesignGrafico;

import { NextPage } from "next";
import Head from "next/head";
import { BackgroundParticles } from "../Components/BackgroundParticles";
import { Banner } from "../Components/Banner";
import { Clouds } from "../Components/Clouds";
import { FormContact } from "../Components/FormContact";
import { Title } from "../Components/Title";

const FaleConosco: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Fale conosco</title>
      </Head>
      <BackgroundParticles>
        <FormContact />
      </BackgroundParticles>
      <Clouds />
      <Banner
        button={[
          { href: "/sites", text: "DESENVOLVIMENTO DE SITES" },
          { href: "/design-grafico", text: "DESIGN GRÁFICO" },
        ]}
      >
        <Title _as="h2" scheme="secondary">
          Já conhece os serviços da IGS?
        </Title>
      </Banner>
    </>
  );
};

export default FaleConosco;

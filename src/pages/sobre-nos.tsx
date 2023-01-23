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
      <Banner button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}>
        <Title _as="h2" scheme="secondary">
          Não perca tempo e entre em contato hoje mesmo!
        </Title>
      </Banner>
    </>
  );
};

export default SobreNos;

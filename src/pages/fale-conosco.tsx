import { Banner } from "@/Components/Banner";
import { Clouds } from "@/Components/Clouds";
import { FormContact } from "@/Components/FormContact";
import { Title } from "@/Components/Title";
import { NextPage } from "next";
import Head from "next/head";

const FaleConosco: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Fale conosco</title>
      </Head>
      <FormContact />
      <Clouds />
      <Banner
        button={[
          { href: "/sites", text: "DESENVOLVIMENTO DE SITES" },
          { href: "/design-grafico", text: "DESIGN GRÁFICO" },
        ]}
      >
        <Title _as="h3" scheme="secondary" style={{ paddingTop: 40 }}>
          Não perca mais tempo! Descubra como podemos ajudar sua empresa a
          alcançar o sucesso e destacar-se no mercado. Clique abaixo para
          conhecer nossos serviços e dê o primeiro passo para o sucesso de sua
          empresa.
        </Title>
      </Banner>
    </>
  );
};

export default FaleConosco;

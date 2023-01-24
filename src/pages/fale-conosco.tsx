import { Banner } from "@/Components/Banner";
import { Clouds } from "@/Components/Clouds";
import { FormContact } from "@/Components/FormContact";
import { Title } from "@/Components/Title";
import { NextPage } from "next";
import Head from "next/head";
import Fade from "react-reveal/Fade";

const FaleConosco: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Fale conosco</title>
      </Head>
      <Fade appear>
        <FormContact />
      </Fade>
      <Clouds />
      <Banner
        button={[
          { href: "/sites", text: "DESENVOLVIMENTO DE SITES" },
          { href: "/design-grafico", text: "DESIGN GRÁFICO" },
        ]}
      >
        <Fade bottom>
          <Title _as="h3" scheme="secondary" style={{ paddingTop: 40 }}>
            Não perca mais tempo! Descubra como podemos ajudar sua empresa a
            alcançar o sucesso e destacar-se no mercado. Clique abaixo para
            conhecer nossos serviços e dê o primeiro passo para o sucesso de sua
            empresa.
          </Title>
        </Fade>
      </Banner>
    </>
  );
};

export default FaleConosco;

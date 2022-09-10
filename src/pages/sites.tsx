import { NextPage } from "next";
import Head from "next/head";
import { AdvantagesWebsite } from "../AdvantagesWebsite";
import { Banner } from "../Components/Banner";
import { Clouds } from "../Components/Clouds";
import { Title } from "../Components/Title";
import { WhyHaveAWebsite } from "../Components/WhyHaveAWebsite";
import { YourCompanysDreamWebsite } from "../Components/YourCompanysDreamWebsite";

const Sites: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Sites</title>
      </Head>
      <WhyHaveAWebsite />
      <YourCompanysDreamWebsite />
      <AdvantagesWebsite />
      <Clouds position="top" />
      <Banner button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}>
        <Title _as="h3" scheme="secondary">
          Se você ou sua empresa deseja ingressar na internet ou reformular um
          site já existente, a IGS Design está pronta para lhe atender. Entre em
          contato conosco, teremos o maior prazer em atende-lo da melhor maneira
          possivel e ajudá-lo a encontrar a solução ideal para sua necessidade
        </Title>
      </Banner>
    </>
  );
};

export default Sites;

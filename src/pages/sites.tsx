import { NextPage } from "next";
import Head from "next/head";
import DevelopersCreatingWebsiteImg from "../../public/developers-creating-website.svg";
import websiteImg from "../../public/website.png";
import { AdvantagesWebsite } from "../Components/AdvantagesWebsite";
import { Banner } from "../Components/Banner";
import { BoxInformation } from "../Components/BoxInformation";
import { Clouds } from "../Components/Clouds";
import { Title } from "../Components/Title";

const Sites: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Sites</title>
      </Head>
      <BoxInformation title="Por que ter um site?" _image={websiteImg}>
        <p>
          A internet é o meio de comunicação mais utilizado no mundo e o
          segmento que mais cresce. No Brasil, a pesquisa TIC realizada entre
          novembro de 2015 e junho de 2016, mostra que 58% da população usa a
          internet, o que representa 102 milhões de internautas, sendo que 89%
          acessa pelo celular, enquanto 40% pelo computador de mesa e 39% pelo
          notebook. Sendo assim, ter um site se tornou a forma mais fácil de
          chegar aos seus clientes.
        </p>
      </BoxInformation>
      <BoxInformation
        title="A IGS cria o site dos sonhos de sua empresa"
        _image={DevelopersCreatingWebsiteImg}
        invert
        scheme="secondary"
      >
        <p>
          Contamos com a criação de sites exclusivos, dinâmicos e modernos.
          Aumente as possibilidades de negócio com um site bonito, bem
          apresentável que convença seus clientes que a sua empresa é a melhor
          opção para eles
        </p>
      </BoxInformation>
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

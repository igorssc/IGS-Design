import { NextPage } from "next";
import Head from "next/head";
import BrainstormingImg from "../../public/brainstorming.svg";
import Brainstorming2Img from "../../public/brainstorming_2.svg";
import { Banner } from "../Components/Banner";
import { BoxInformation } from "../Components/BoxInformation";
import { Title } from "../Components/Title";

const DesignGrafico: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Design gráfico</title>
      </Head>
      <BoxInformation
        title="Criação de peças gráficas para identidade visual"
        _image={BrainstormingImg}
      >
        <>
          <p>
            A área de Design Gráfico da IGS é responsável pela criação de toda a
            imagem vinculada á cartões de visita, folders, papel timbrado,
            crachás, banners, convites e identidade visual em si, completando e
            dando ainda mais personalidade para você, sua empresa ou
            instituição.
          </p>
          <p>
            Nos dias atuais é preciso mostrar ao público alvo que por trás da
            qualidade de sua empresa existe também uma família que atende por
            determinado nome e se apresenta de determinada forma.
          </p>
          <p>
            Um projeto bem feito para criação da sua identidade visual atrairá
            ainda mais seus clientes em potencial, pois a sua marca se
            comunicará com o seu público.
          </p>
        </>
      </BoxInformation>
      <BoxInformation
        title="O Design que você precisa"
        _image={Brainstorming2Img}
        invert
        scheme="secondary"
      >
        <p>
          Investir na criação da sua identidade visual não dará somente um
          símbolo para a sua empresa e sim definirá uma marca própria;
          proporcionando respeito e uma personalidade única.
        </p>
      </BoxInformation>
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

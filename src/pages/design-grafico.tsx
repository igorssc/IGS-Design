import BrainstormingImg from "@/assets/brainstorming.svg";
import Brainstorming2Img from "@/assets/brainstorming_2.svg";
import { Banner } from "@/Components/Banner";
import { BoxInformation } from "@/Components/BoxInformation";
import { Title } from "@/Components/Title";
import { NextPage } from "next";
import Head from "next/head";

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
            A IGS Design oferece serviços de desenvolvimento gráfico de alto
            impacto para ajudar a impulsionar a imagem da sua empresa. Nós
            criamos materiais gráficos como cartões de visita, folders, papel
            timbrado, crachás, banners, convites e muito mais, com design
            exclusivo e personalizado para cada cliente.
          </p>
          <p>
            Todos os nossos materiais gráficos são desenvolvidos com alta
            qualidade e atenção aos detalhes, para garantir que sua empresa
            tenha uma imagem profissional e coerente.
          </p>
          <p>
            Além disso, a IGS Design oferece a personalização de todos os
            materiais gráficos, desde a escolha de cores, fonte e imagens até o
            posicionamento dos elementos, para que possamos criar um material
            gráfico que reflita exatamente a sua empresa e sua marca.
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
          O design é a chave para o sucesso de qualquer empresa. É ele que vai
          atrair e manter os clientes, transmitir a sua mensagem e ajudar a
          construir uma imagem forte e coerente.
        </p>
        <p>
          A IGS Design oferece todos os tipos de design, desde desenvolvimento
          de sites até materiais gráficos, para garantir que sua empresa tenha
          tudo o que precisa para se destacar. Nós trabalhamos de perto com
          nossos clientes para entender suas necessidades e objetivos e criar
          soluções personalizadas que atendam a eles.
        </p>
        <p>
          Com a IGS Design, você tem acesso a equipe altamente qualificada,
          atendimento exclusivo e recursos avançados para garantir que seu
          negócio tenha o design que precisa para alcançar o sucesso. Entre em
          contato conosco hoje para discutir como podemos ajudá-lo a alcançar
          seus objetivos.
        </p>
      </BoxInformation>
      <Banner
        button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}
        scheme="secondary"
      >
        <Title _as="h3">
          Não deixe a sua empresa passar despercebida! Temos o design certo para
          o seu negócio. Nossa equipe altamente qualificada e experiente irá
          criar soluções personalizadas e impactantes para garantir que sua
          empresa se destaque. Entre em contato conosco agora e vamos juntos
          impulsionar a imagem da sua empresa!
        </Title>
      </Banner>
    </>
  );
};

export default DesignGrafico;

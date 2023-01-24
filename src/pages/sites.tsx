import developersCreatingExtraFeaturesImg from "@/assets/developers-creating-extra-features.svg";
import DevelopersCreatingWebsiteImg from "@/assets/developers-creating-website.svg";
import websiteCreationProcessImg from "@/assets/website-creation-process.svg";
import { AdvantagesWebsite } from "@/Components/AdvantagesWebsite";
import { Banner } from "@/Components/Banner";
import { BoxInformation } from "@/Components/BoxInformation";
import { Clouds } from "@/Components/Clouds";
import { Title } from "@/Components/Title";
import { NextPage } from "next";
import Head from "next/head";

const Sites: NextPage = () => {
  return (
    <>
      <Head>
        <title>IGS Design - Sites</title>
      </Head>
      <BoxInformation
        title="Por que ter um site?"
        _image={websiteCreationProcessImg}
      >
        <p>
          A IGS Design entende a importância de ter um site para o seu negócio.
          Ele é a porta de entrada para sua empresa na internet e pode ser usado
          como uma ferramenta poderosa para alcançar novos clientes, construir
          sua marca e aumentar as vendas.
        </p>
        <p>
          Um site bem projetado e desenvolvido pode ser usado para mostrar sua
          expertise e autoridade no seu setor, além de fornecer informações
          valiosas e contato fácil para seus clientes.
        </p>
        <p>
          Além disso, ter um site otimizado para mecanismos de busca pode ajudar
          a aumentar o ranking do seu site nos resultados de busca, o que pode
          aumentar a visibilidade e o tráfego do site.
        </p>
        <p>
          A IGS Design pode ajudá-lo a criar um site atrativo e funcional que
          irá impulsionar seu negócio para o próximo nível.
        </p>
      </BoxInformation>
      <BoxInformation
        title="A IGS cria o site dos sonhos de sua empresa"
        _image={DevelopersCreatingWebsiteImg}
        invert
        scheme="secondary"
      >
        <p>
          A IGS Design oferece soluções completas de desenvolvimento de site,
          desde a concepção até a implantação. Nós nos esforçamos para entender
          as necessidades e objetivos de nossos clientes para criar um site que
          atenda perfeitamente às suas necessidades.
        </p>
        <p>
          Com nossa equipe altamente qualificada, nós podemos criar um site
          personalizado, desde um simples site institucional até um e-commerce
          completo, com recursos avançados como integração com redes sociais,
          SEO otimizado, e muito mais.
        </p>
        <p>
          Nós acreditamos que um site deve ser tão único quanto a empresa que
          representa, e trabalhamos de perto com nossos clientes para garantir
          que eles tenham o site dos sonhos. Não importa se você é uma pequena
          empresa ou uma grande corporação, nós temos a experiência e
          habilidades para ajudá-lo a alcançar seus objetivos. Entre em contato
          conosco hoje para discutir como podemos ajudá-lo a criar o site
          perfeito para o seu negócio.
        </p>
      </BoxInformation>
      <AdvantagesWebsite />
      <BoxInformation title="" invert scheme="secondary">
        <p>
          A responsividade é essencial para garantir que seu site seja acessível
          e funcione perfeitamente em qualquer dispositivo, se adaptando a
          diferentes tamanhos de tela. Isso aumenta a satisfação do usuário e
          aumenta a taxa de conversão. A IGS Design oferece desenvolvimento de
          sites responsivos para garantir que seu site seja acessível e funcione
          perfeitamente em qualquer dispositivo.
        </p>

        <p>
          Outra característica importante é a utilização de dashboards, também
          conhecido como gerenciadores de conteúdo, é uma ferramenta que permite
          que os usuários gerenciem e atualizem o conteúdo de seu site sem a
          necessidade de conhecimento técnico. A IGS Design oferece
          desenvolvimento de sites com gerenciadores de conteúdo personalizados
          e intuitivos para garantir que os clientes possam atualizar e
          gerenciar seus sites de forma fácil e eficiente.
        </p>

        <p>
          Além disso, a IGS Design oferece integração com Google Maps,
          integração com redes sociais, SEO otimizado, gerenciamento de estoque
          e outros recursos avançados para garantir que seu site seja o mais
          eficaz possível. Todos esses recursos juntos garantem que seu site
          seja atrativo, fácil de usar e eficaz para alcançar seus objetivos.
          Entre em contato com a IGS Design para saber mais sobre como podemos
          ajudá-lo a construir o site dos seus sonhos.
        </p>
      </BoxInformation>
      <BoxInformation
        title="Recursos extras"
        _image={developersCreatingExtraFeaturesImg}
      >
        <p>
          A IGS Design oferece uma ampla variedade de recursos extras para
          nossos clientes, para garantir que suas necessidades sejam atendidas e
          seus objetivos sejam alcançados. Alguns dos recursos extras que
          oferecemos incluem:
        </p>

        <ul>
          <li>
            <p>
              Email personalizado: nós oferecemos a configuração de contas de
              email personalizadas com seu domínio, o que dá uma aparência mais
              profissional e confiável para sua empresa.
            </p>
          </li>
          <li>
            <p>
              Integração com Google Maps: isso permite que os usuários vejam a
              localização da sua empresa e obtenham rotas de navegação para
              chegar lá.
            </p>
          </li>
          <li>
            <p>
              Integração com redes sociais: Isso permite que os usuários acessem
              suas contas de redes sociais diretamente do seu site, aumentando a
              interação e engajamento.
            </p>
          </li>
          <li>
            <p>
              Gerenciamento de estoque: Isso permite que você acompanhe o
              estoque de seus produtos, gerencie seus pedidos e mantenha o
              controle do seu inventário.
            </p>
          </li>
          <li>
            <p>
              SEO otimizado: Isso ajuda a garantir que seu site seja facilmente
              encontrado nos mecanismos de busca, o que pode aumentar o tráfego
              e as conversões.
            </p>
          </li>
        </ul>
        <p>
          Esses são apenas alguns exemplos dos recursos extras que oferecemos
          para nossos clientes. A IGS Design trabalha de perto com nossos
          clientes para entender suas necessidades e objetivos e garantir que
          eles tenham um site personalizado e eficaz. Entre em contato conosco
          hoje para discutir como podemos ajudá-lo a criar um site completo e
          personalizado para o seu negócio, incluindo recursos extras que
          atendam às suas necessidades.
        </p>
      </BoxInformation>
      <Clouds position="top" />
      <Banner button={[{ href: "/fale-conosco", text: "FALE CONOSCO" }]}>
        <Title _as="h3" scheme="secondary">
          Transforme sua presença online em um negócio de sucesso com a IGS
          Design! Nós oferecemos soluções personalizadas, equipe altamente
          qualificada, atendimento exclusivo e recursos avançados para criar o
          site dos seus sonhos. Não perca mais tempo, entre em contato conosco
          agora e dê o primeiro passo para o sucesso do seu negócio na internet!
        </Title>
      </Banner>
    </>
  );
};

export default Sites;

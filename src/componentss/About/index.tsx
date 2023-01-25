import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const About = () => {
  return (
    <>
      <Container>
        <div className={styles.content}>
          <Title _as="h2">Sobre Nós</Title>
          <div>
            <p>
              A IGS Design foi fundada em 2016 com o objetivo de oferecer
              soluções de design de alta qualidade e personalizadas para
              empresas de todos os tamanhos. Nós entendemos que cada negócio é
              único e tem suas próprias necessidades, e é por isso que
              oferecemos uma ampla variedade de produtos, incluindo
              desenvolvimento de sites, desenvolvimento gráfico e muito mais.
              Atendemos tanto pessoas físicas quanto jurídicas, e nosso time
              altamente qualificado e experiente trabalha de perto com nossos
              clientes para garantir que suas necessidades sejam atendidas e
              seus objetivos sejam alcançados.
            </p>

            <p>
              No ramo de desenvolvimento gráfico, desenvolvemos logotipos,
              cartões de visitas, panfletos, banners, flyers, convites e muito
              mais. Todos esses materiais são criados com a mais alta qualidade
              e são personalizados para atender às necessidades de cada cliente.
            </p>

            <p>
              Uma das nossas principais inovações é o conceito de
              &ldquo;revisões ilimitadas&rdquo;, o que significa que o
              desenvolvimento da arte só é finalizado mediante aprovação do
              cliente, garantindo assim que todos os nossos clientes estejam
              completamente satisfeitos com o resultado final. Nós acreditamos
              que a comunicação é a chave para o sucesso e trabalhamos de perto
              com nossos clientes para garantir que suas necessidades sejam
              atendidas.
            </p>

            <p>
              Acreditamos que o sucesso de nossos clientes é o nosso sucesso, e
              trabalhamos incansavelmente para garantir que eles alcancem seus
              objetivos. Entre em contato conosco hoje para discutir como
              podemos ajudá-lo a alcançar o sucesso e destacar seu negócio. Nós
              temos o design certo para o seu negócio.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

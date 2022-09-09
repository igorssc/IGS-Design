import { BackgroundParticles } from "../BackgroundParticles";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const About = () => {
  return (
    <>
      <BackgroundParticles>
        <Container>
          <div className={styles.content}>
            <Title>Sobre Nós</Title>
            <div>
              <p>
                A IGS Design é uma empresa de Marketing Digital e Impresso.
                Atendemos tanto a pessoas físicas quanto jurídicas, e inovamos
                com o conceito de “revisões ilimitadas”. Ou seja, o
                desenvolvimento da arte só é finalizado mediante aprovação do
                cliente.
              </p>
              <p>
                A IGS Design oferece vários serviços como: Criação de Logotipos,
                Cartões de visita, Panfletos, Banners, Flyers, Convites e muito
                mais.
              </p>
              <p>
                Oferecemos também serviços para plataformas online, como:
                Criação de Sites, Blogs, Desenvolvimento de Lojas Virtuais
                (E-commerce), Portais, Imobiliárias e muito mais. Sites
                exclusivos, planejados individualmente para atender o que você
                ou sua empresa deseja.
              </p>
              <p>
                Para obter o sucesso que sua empresa almeja, acima de tudo
                focamos no bom atendimento. Com um atendimento diferenciado,
                conversamos e discutimos com nossos clientes para entender seus
                objetivos e traçar um perfil ideal do que é necessário para
                garantir a criação de uma solução adequada e específica caso a
                caso.
              </p>
            </div>
          </div>
        </Container>
      </BackgroundParticles>
    </>
  );
};

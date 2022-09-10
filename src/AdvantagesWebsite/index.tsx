import {
  DeviceMobile,
  ShoppingCartSimple,
  ThumbsUp,
  Wrench,
} from "phosphor-react";
import { Container } from "../Components/Container";
import { Title } from "../Components/Title";
import styles from "./styles.module.scss";

const advantages = [
  [
    DeviceMobile,
    "Sites Responsivos",
    "Cada dia mais as pessoas estão conectadas através de diferentes dispositivos. Ter um Site Responsivo é possuir um layout que se adapte a qualquer tamanho de tela (smartphone, tablet, notebook e desktop), garantindo a melhor visualização e acessibilidade ao conteúdo.",
  ],
  [
    Wrench,
    "Gerenciador de Conteúdo",
    "Gerencie você mesmo o conteúdo do seu site de forma rápida através de um painel administrativo prático, de fácil navegabilidade. Tenha um site sempre atualizado e ainda diminua os custos com a manutenção de conteúdo",
  ],
  [
    ShoppingCartSimple,
    "Lojas Virtuais",
    "Tenha sua loja virtual aberta 24 horas por dia 7 dias da semana. Crie a sua loja virtual e faça negócios pela internet com facilidade e praticidade para seus clientes e menor custo para sua empresa",
  ],
  [
    ThumbsUp,
    "Recursos extras",
    "A IGS deixa a disposição do cliente a escolha de alguns recursos, como a implementação de atalhos de Redes Socias e Localização da Sede pelo Google Maps. Fica a disposição do cliente também o email marketing",
  ],
];

export const AdvantagesWebsite = () => {
  return (
    <>
      <Container>
        <div className={styles.content}>
          {advantages.map(([_icon, title, description], index) => (
            <div key={index}>
              <_icon size={40} />
              <Title _as="h3">{title as string}</Title>
              <p>{description as string}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

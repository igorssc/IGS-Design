import {
  DeviceMobile,
  ShoppingCartSimple,
  ThumbsUp,
  Wrench,
} from "phosphor-react";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

const advantages = [
  [
    DeviceMobile,
    "Soluções personalizadas",
    "A IGS Design oferece soluções de desenvolvimento de site personalizadas para atender às necessidades e objetivos de cada cliente. Nós nos esforçamos para entender as necessidades de nossos clientes para criar um site que atenda perfeitamente às suas necessidades.",
  ],
  [
    Wrench,
    "Equipe altamente qualificada",
    "A equipe da IGS Design é altamente qualificada e experiente, garantindo que seu site seja desenvolvido com precisão e profissionalismo. Nós temos a experiência e habilidades para ajudá-lo a alcançar seus objetivos.",
  ],
  [
    ShoppingCartSimple,
    "Atendimento exclusivo",
    "A IGS Design oferece um atendimento exclusivo para garantir que seus clientes tenham a melhor experiência possível. Nós trabalhamos de perto com nossos clientes para garantir que eles tenham o site dos sonhos.",
  ],
  [
    ThumbsUp,
    "Recursos avançados",
    "A IGS Design oferece recursos avançados, como integração com redes sociais, SEO otimizado, gerenciamento de estoque e outros para garantir que seu site seja o mais eficaz possível. Nós oferecemos uma ampla variedade de recursos extras para nossos clientes para garantir que suas necessidades sejam atendidas e seus objetivos sejam alcançados.",
  ],
];

export const AdvantagesWebsite = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <Title _as="h2">Vantagens em construir seu site com a IGS</Title>
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
      </div>
    </>
  );
};

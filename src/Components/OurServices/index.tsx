import Link from "next/link";
import { Globe, PaintBrush } from "phosphor-react";
import Fade from "react-reveal/Fade";
import { Button } from "../Button";
import { Clouds } from "../Clouds";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const OurServices = () => {
  const services = [
    {
      title: "Criação de sites",
      _icon: Globe,
      description:
        "A IGS Design cria sites personalizados e inovadores para expandir o alcance e sucesso dos negócios. Oferecemos soluções de última geração, incluindo lojas virtuais e integrações sociais. Nós acreditamos no sucesso de nossos clientes como sendo o nosso sucesso. Deixe a IGS Design ajudá-lo a destacar seu negócio.",
      link: "/sites",
    },
    {
      title: "Criação gráfica",
      _icon: PaintBrush,
      description:
        "A IGS Design oferece soluções completas de design gráfico, desde logotipos até cartões de visita, panfletos, banners, flyers e convites, entre outros. Nós entendemos a importância de se destacar no mercado e por isso criamos designs personalizados e de alta qualidade para atender às necessidades de cada cliente.",
      link: "/design-grafico",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <Clouds />
        <div className={styles.background}>
          <Container>
            <div className={styles.content}>
              <Title scheme="secondary">Nossos serviços</Title>
              <div>
                {services.map(({ title, _icon, description, link }, index) => (
                  <Fade left={index === 0} right={index > 0} key={index}>
                    <div>
                      <div className={styles.icon}>
                        <_icon size={40} />
                      </div>
                      <Title _as="h2" scheme="secondary">
                        {title}
                      </Title>
                      <p>{description}</p>
                      <Link href={link} style={{ width: "100%" }}>
                        <Button>Saiba mais</Button>
                      </Link>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <Clouds position="bottom" />
      </div>
    </>
  );
};

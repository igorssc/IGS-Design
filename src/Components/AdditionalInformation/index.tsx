import Link from "next/link";
import { At, FacebookLogo, InstagramLogo } from "phosphor-react";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const AdditionalInformation = () => {
  return (
    <>
      <Container>
        <div className={styles.content}>
          <div>
            <div
              className={`${styles.facebookPage} fb-page`}
              data-href="https://www.facebook.com/design.igs"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/design.igs"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/design.igs">IGS Design</a>
              </blockquote>
            </div>
          </div>
          <div className={styles.ourServices}>
            <Title _as="h3">Nossos serviços</Title>
            <ul>
              <li>Aúncios</li>
              <li>Banners</li>
              <li>Cartões de visita</li>
              <li>Convites</li>
              <li>Desenvolvimento de sites</li>
              <li>Flyers</li>
              <li>Panfletos</li>
              <li>Tags</li>
              <li>Timbrados</li>
              <li>E muito mais</li>
            </ul>
          </div>
          <div className={styles.contact}>
            <Title _as="h3">Contato</Title>
            <ul>
              <li>contato@igsdesign.com.br</li>
              <li>(31) 99318-5969</li>
              <li className={styles.icons}>
                <span>
                  <Link href="mailto:contato@igsdesign.com" passHref>
                    <a target="_blank">
                      <At size={32} />
                    </a>
                  </Link>
                </span>
                <span>
                  <Link href="https://www.facebook.com/design.igs" passHref>
                    <a target="_blank">
                      <FacebookLogo size={32} />
                    </a>
                  </Link>
                </span>
                <span>
                  <Link href="https://www.instagram.com/igs_design" passHref>
                    <a target="_blank">
                      <InstagramLogo size={32} />
                    </a>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

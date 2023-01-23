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
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.igs&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=909705613246103"
              width="340"
              height="331"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
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
                  <Link href="mailto:contato@igsdesign.com" target="_blank">
                    <At size={32} />
                  </Link>
                </span>
                <span>
                  <Link
                    href="https://www.facebook.com/design.igs"
                    target="_blank"
                  >
                    <FacebookLogo size={32} />
                  </Link>
                </span>
                <span>
                  <Link
                    href="https://www.instagram.com/igs_design"
                    target="_blank"
                  >
                    <InstagramLogo size={32} />
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

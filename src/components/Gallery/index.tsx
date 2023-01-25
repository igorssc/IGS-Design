import Image, { StaticImageData } from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { createRef, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";

interface GalleryProps {
  items: {
    original: StaticImageData;
    thumbnail: StaticImageData;
  }[];
}

export const Gallery = ({ items }: GalleryProps) => {
  const ref = createRef<HTMLDivElement>();
  const [dimensionItem, setDimensionItem] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // @ts-ignore:next-line
      lightbox = null;
    };
  }, []);

  const handleWindowResize = () => {
    const itemWidth =
      document.querySelector("#gallery")?.children[0]?.clientWidth;

    setDimensionItem({ width: itemWidth || 0, height: (itemWidth || 0) * 0.8 });
  };

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div id="gallery" className={styles.gallery} ref={ref}>
        {items.map((item, index) => (
          <Fade appear cascade key={"gallery" + "-" + index}>
            <a
              href={item.original.src}
              data-pswp-width={1080}
              data-pswp-height={864}
              target="_blank"
              rel="noreferrer"
              className={styles.item}
              style={{ height: dimensionItem.height }}
            >
              <Image
                src={item.thumbnail.src}
                alt="gallery item"
                loading="lazy"
                fill
              />
            </a>
          </Fade>
        ))}
      </div>
    </>
  );
};

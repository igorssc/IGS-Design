import { StaticImageData } from "next/image";
import "photoswipe/style.css";
import { LegacyRef } from "react";
import { Gallery as GaleryPhotoswipe, Item } from "react-photoswipe-gallery";
import styles from "./styles.module.scss";

interface GalleryProps {
  items: {
    original: StaticImageData;
    thumbnail: StaticImageData;
  }[];
}

export const Gallery = ({ items }: GalleryProps) => {
  return (
    <>
      <GaleryPhotoswipe>
        {items.map((item, key) => (
          <Item
            original={item.original.src}
            thumbnail={item.thumbnail.src}
            width="1024"
            height="768"
            key={key}
          >
            {({ ref, open }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="portfolio"
                ref={ref as LegacyRef<HTMLImageElement> | undefined}
                onClick={open}
                src={item.thumbnail.src}
                className={styles.item}
              />
            )}
          </Item>
        ))}
      </GaleryPhotoswipe>
    </>
  );
};

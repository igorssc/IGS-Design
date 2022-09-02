import "photoswipe/style.css";
import { LegacyRef } from "react";
import { Gallery as GaleryPhotoswipe, Item } from "react-photoswipe-gallery";
import styles from "./styles.module.scss";

interface GaleryProps {
  items: {
    original: string;
    thumbnail: string;
  }[];
}

export const Gallery = ({ items }: GaleryProps) => {
  return (
    <>
      <GaleryPhotoswipe>
        {items.map((item, key) => (
          <Item
            original={item.original}
            thumbnail={item.thumbnail}
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
                src={item.thumbnail}
                className={styles.item}
              />
            )}
          </Item>
        ))}
      </GaleryPhotoswipe>
    </>
  );
};

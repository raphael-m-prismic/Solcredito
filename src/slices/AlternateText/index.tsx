import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import styles from "./index.module.css";

/**
 * Props for `AlternateText`.
 */
export type AlternateTextProps =
  SliceComponentProps<Content.AlternateTextSlice>;

/**
 * Component for "AlternateText" Slices.
 */
const AlternateText: FC<AlternateTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.alternateText}>
        <div className={slice.variation == "imageRight" ? styles.container_reverse : styles.container}>

          {isFilled.image(slice.primary.image) ? (
            <PrismicImage field={slice.primary.image} className={styles.image} />
          ) : (
            <img src="/default-background.png" alt="background image" className={styles.image}/>
          )}

          <div className={styles.text_container}>
            <h2>
              <PrismicText field={slice.primary.heading} />
            </h2>
            <PrismicRichText field={slice.primary.content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternateText;

import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicText, SliceComponentProps } from "@prismicio/react";

import styles from "./index.module.css";

/**
 * Props for `Facts`.
 */
export type FactsProps = SliceComponentProps<Content.FactsSlice>;

/**
 * Component for "Facts" Slices.
 */
const Facts: FC<FactsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className={styles.facts}>
      <div className={styles.container}>
        {/* Heading */}
        {isFilled.richText(slice.primary.heading) && (
          <h2 className={styles.heading2}>
            <PrismicText field={slice.primary.heading} />
          </h2>
        )}

        {/* Facts */}
        <div className={styles.facts_container}>
          {slice.primary.facts.map((item, index) => (
            <div key={index} className={styles.fact}>
              <PrismicImage field={item.image} className={styles.image} />
              <h3 className={styles.heading3}>
                <PrismicText field={item.heading} />
              </h3>
              <p>
                <PrismicText field={item.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Facts;

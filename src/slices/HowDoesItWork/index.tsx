import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicText, SliceComponentProps } from "@prismicio/react";

import styles from "./index.module.css";

/**
 * Props for `Steps`.
 */
export type StepsProps = SliceComponentProps<Content.StepsSlice>;

/**
 * Component for "Steps" Slices.
 */
const Steps: FC<StepsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className={styles.how_it_works}>
      <div className={styles.container}>
        {/* Heading */}
        {isFilled.richText(slice.primary.heading) && (
          <h2 className={styles.heading2}>
            <PrismicText field={slice.primary.heading} />
          </h2>
        )}

        {/* Steps */}
        <div className={styles.steps}>
          {slice.primary.steps.map((item, index) => (
            <div key={index} className={styles.step}>
              <PrismicImage field={item.image} className={styles.image} />
              <p>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Steps;

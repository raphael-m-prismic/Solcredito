import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicLink, PrismicText, SliceComponentProps } from "@prismicio/react";


import styles from "./index.module.css";
import ForwardChevronIcon from "@/components/Icons/ForwardChevronIcon";

/**
 * Props for `Advantages`.
 */
export type AdvantagesProps = SliceComponentProps<Content.AdvantagesSlice>;


/**
 * Component for "Advantages" Slices.
 */
const Advantages: FC<AdvantagesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.advantages}>
        <div className={styles.container}>

          {/* Heading */}
          {isFilled.richText(slice.primary.heading) && (
            <h2 className={styles.heading2}>
              <PrismicText field={slice.primary.heading} />
            </h2>
          )}

          {/* Advantages */}
          <div className={styles.advantages_container}>
            {slice.primary.advantages.map((item, index) => {
              if (isFilled.link(item.link)) {
                return (
                    <div key={index} className={styles.advantage}>
                      <div className={styles.advantage_header}>
                        <PrismicImage field={item.image} className={styles.image} loading="lazy" width={40} height={40}/>
  
                        <h3 className={styles.heading3}>
                          <PrismicLink field={item.link} className={styles.link}>
                            <PrismicText field={item.heading} />
                            <ForwardChevronIcon />
                          </PrismicLink>
                        </h3>
                      </div>
                      <p className={styles.description}>
                        <PrismicText field={item.description} />
                      </p>
                    </div>
                  )
                } else {
                  return (
                    <div key={index} className={styles.advantage}>
                      <div className={styles.advantage_header}>
                        <PrismicImage field={item.image} className={styles.image} loading="lazy" width={40} height={40}/>
  
                        <h3 className={styles.heading3}>
                          <PrismicText field={item.heading} />
                        </h3>
                      </div>
                      <p className={styles.description}>
                        <PrismicText field={item.description} />
                      </p>
                    </div>
                  )
                }
              }
              
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;

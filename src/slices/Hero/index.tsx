import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import styles from "./index.module.css";

import { PrismicNextLink } from "@prismicio/next";
import InfoIcon from "@/components/Icons/InfoIcon";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.hero_section}>
          {/* Background Image */}
          {isFilled.image(slice.primary.background_image) ? (
            <PrismicImage field={slice.primary.background_image} className={styles.background_image} />
          ) : (
            <img src="/default-background.png" alt="background image" className={styles.background_default_image}/>
          )}


          {/* ADD A CLASS DEPENDING IF THERE IS AN IMAGE => CHANGE THE STYLE */}
          {/* className={isFilled.image(slice.primary.background_image) ? classYes : classNo} */}


        {/* Hero Section */}
        <div className={`${styles.hero} ${isFilled.image(slice.primary.background_image) ? styles.hero_image : styles.hero_no_image}`} >
          <div className={styles.container}>
            {/* Heading */}
            {isFilled.richText(slice.primary.heading) && (
              <div className={styles.heading_container}>
                <PrismicRichText field={slice.primary.heading} components={{
                  heading1: ({ children }) => (
                    <h1 className={`${isFilled.image(slice.primary.background_image) ? styles.heading1 : styles.heading1_no_image}`}>
                      {children}
                    </h1>
                  )
                }}/>
            </div>
            )}

            {/* CTAs */}
            <div className={styles.ctas}>
              {slice.primary.links.map((item) => {
                if(item.style) {
                  return (
                    isFilled.link(item.link) && (
                      <PrismicNextLink field={item.link} key={item.label} className={styles.cta}>
                        {item.label}
                      </PrismicNextLink>
                    )
                  )
                } else {

                  
                  return (
                    isFilled.link(item.link) && (
                      <PrismicNextLink field={item.link} key={item.label} className={`${styles.cta_style} ${isFilled.image(slice.primary.background_image) ? styles.cta_style_image : styles.cta_style_no_image}`}>
                        {item.label}
                      </PrismicNextLink>
                    )
                  )
                }

              })}
            </div>
          </div>
          
            {/* Note */}
            <div className={styles.note_container}>
              <div className={styles.note}>
                <InfoIcon/>
                {isFilled.richText(slice.primary.note) && (
                  <p className={styles.note_text}>
                    <PrismicText field={slice.primary.note}></PrismicText>
                  </p>
                )}
              </div>
            </div>
        </div>
        
        

      </div>
    </section>
  );
};

export default Hero;

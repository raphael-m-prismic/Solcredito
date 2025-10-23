"use client";

import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import React from 'react'

import styles from "./index.module.css";

type NavBarProps = {
  settings: Content.SettingsDocument // Get the type with Prismic
}

export default function NavBar({settings}:NavBarProps) {

  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_left}>
          <PrismicNextImage field={settings.data.logo} height={40}/>
          <div className={styles.nav_links}>
              {settings.data.navigation.map((item) => (
                  <PrismicNextLink key={item.label} field={item.link} className={styles.nav_link}>
                      {item.label}
                  </PrismicNextLink>
              ))}
          </div>
        </div>
        <PrismicNextLink field={settings.data.cta_button} className={styles.cta_button}>
            {settings.data.cta_label}
        </PrismicNextLink>
    </div>
  )
}

import NavBar from '@/components/NavBar'
import { createClient } from '@/prismicio';

import styles from "./index.module.css";

export default async function Header() {
    // Fetch data from Prismic
    const client = createClient(); // Create a client from local file function to get our data
    const settings = await client.getSingle('settings'); // Fetch a single type document from Prismic
  return (
    <header className={styles.header}>
      <NavBar settings={settings}></NavBar> {/* Pass the settings data as props to the NavBar component */}
    </header>
  )
}
